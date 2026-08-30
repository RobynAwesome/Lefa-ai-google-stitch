import type {
  SovereignBridgeStatus,
  SovereignDecision,
  SovereignDecisionReceipt,
  SovereignProofState
} from './types';

export type SovereignBridgeVerification =
  | {
      ok: true;
      status: SovereignBridgeStatus;
    }
  | {
      ok: false;
      code:
        | 'BRIDGE_UNCONFIGURED'
        | 'BRIDGE_UNREACHABLE'
        | 'BRIDGE_HTTP_ERROR'
        | 'BRIDGE_INVALID_RECEIPT'
        | 'BRIDGE_NOT_VERIFIED';
      message: string;
    };

const RECEIPT_SCHEMA = 'kopano.alpaca.decision-receipt.v1';
const BRIDGE_SCHEMA = 'kopano.lefa.sovereign-bridge-status.v1';
const VALID_DECISIONS = new Set<SovereignDecision>(['APPROVE', 'HOLD', 'REJECT']);
const VALID_PROOF_STATES = new Set<SovereignProofState>(['LOCAL_RECEIPT', 'EXTERNAL_RECEIPT']);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isDecisionReceipt(value: unknown): value is SovereignDecisionReceipt {
  if (!isRecord(value)) return false;
  if (value.schema !== RECEIPT_SCHEMA) return false;
  if (typeof value.timestamp !== 'string' || typeof value.cycle_id !== 'string') return false;
  if (typeof value.kc_receipt_id !== 'string' || !value.kc_receipt_id.startsWith('kc:alpaca:')) return false;
  if (typeof value.evidence_sha256 !== 'string' || value.evidence_sha256.length !== 64) return false;
  if (!VALID_PROOF_STATES.has(value.proof_state as SovereignProofState)) return false;

  const evaluation = value.evaluation;
  if (!isRecord(evaluation) || !VALID_DECISIONS.has(evaluation.decision as SovereignDecision)) return false;
  if (!Array.isArray(evaluation.reasons)) return false;

  return true;
}

export function isSovereignBridgeStatus(value: unknown): value is SovereignBridgeStatus {
  if (!isRecord(value)) return false;
  if (value.schema !== BRIDGE_SCHEMA) return false;
  if (value.provider !== 'alpaca') return false;
  if (value.environment !== 'paper') return false;
  if (value.execution_authority !== 'BACKEND_ONLY') return false;
  if (value.bridge_state !== 'VERIFIED' && value.bridge_state !== 'HOLD') return false;
  if (typeof value.observed_at !== 'string') return false;
  if (value.latest_receipt !== null && !isDecisionReceipt(value.latest_receipt)) return false;
  return true;
}

function configuredStatusUrl(): string | null {
  const meta = import.meta as ImportMeta & {
    env?: Record<string, string | undefined>;
  };
  const raw = meta.env?.VITE_LEFA_SOVEREIGN_STATUS_URL?.trim();
  return raw || null;
}

export async function verifySovereignBridge(): Promise<SovereignBridgeVerification> {
  const url = configuredStatusUrl();

  if (!url) {
    return {
      ok: false,
      code: 'BRIDGE_UNCONFIGURED',
      message: 'No sovereign status endpoint is configured. LEFA remains disconnected by design.'
    };
  }

  let response: Response;
  try {
    response = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
      credentials: 'omit'
    });
  } catch {
    return {
      ok: false,
      code: 'BRIDGE_UNREACHABLE',
      message: 'The sovereign status endpoint is unreachable. Receipt or HOLD.'
    };
  }

  if (!response.ok) {
    return {
      ok: false,
      code: 'BRIDGE_HTTP_ERROR',
      message: `The sovereign status endpoint returned HTTP ${response.status}. LEFA remains disconnected.`
    };
  }

  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    return {
      ok: false,
      code: 'BRIDGE_INVALID_RECEIPT',
      message: 'The sovereign status endpoint did not return valid JSON.'
    };
  }

  if (!isSovereignBridgeStatus(payload)) {
    return {
      ok: false,
      code: 'BRIDGE_INVALID_RECEIPT',
      message: 'The response failed the LEFA sovereign bridge contract. No connected state was granted.'
    };
  }

  if (payload.bridge_state !== 'VERIFIED') {
    return {
      ok: false,
      code: 'BRIDGE_NOT_VERIFIED',
      message: 'The sovereign bridge reported HOLD. LEFA will not promote the provider to connected.'
    };
  }

  return { ok: true, status: payload };
}
