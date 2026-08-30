# NOW.md — LEFA AI Google Stitch

**Updated:** 2026-08-30  
**Lane:** Alpaca AI Trading Agents Hackathon  
**State:** `POC-0 / TRUTH_BOUNDARY_IN_PROGRESS`  
**Authority rule:** `REALITY_STATE > INDEX_STATE`  
**Execution rule:** `RECEIPT OR HOLD`

## Why this repository exists

`Lefa-ai-google-stitch` is the human-facing LEFA design and interaction surface. It is **not** the canonical trading engine, account ledger, risk engine, secret store, or brokerage execution runtime.

Canonical downstream execution/governance currently lives in:

- `RobynAwesome/kopano-sovereign-hub/experiments/alpaca-sovereign-arbitrage/`
- policy: `strategy.policy.json`
- deterministic decisions: `src/risk-engine.mjs`
- canonical receipt construction: `src/evidence-journal.mjs`
- execution transport: MCP preferred; verified Alpaca paper REST fallback when required

## PRE-SEED — truth before this change

The initial Stitch prototype correctly established the LEFA design language and the core loop:

`Observe → Ledger → Time → Reveal`

However, the initial Alpaca connection modal was a visual prototype, not external proof. It contained browser-side fake credential values, exposed a live-trading selector, and promoted the interface to connected after a timer. Those behaviours are inadmissible for the governed runtime.

## Current implementation target — Issue #1

POC-0 establishes the frontend truth boundary:

1. LEFA browser accepts **no Alpaca credentials**.
2. LEFA is **paper-only** for this competition lane.
3. No timeout, mock, or UI gesture may create a verified provider state.
4. LEFA consumes a read-only backend bridge-status contract.
5. The bridge status must be `kopano.lefa.sovereign-bridge-status.v1` and may reference canonical `kopano.alpaca.decision-receipt.v1` receipts.
6. Risk decisions remain `APPROVE | HOLD | REJECT` from the sovereign backend; LEFA does not re-evaluate them.
7. Browser execution authority is always `BACKEND_ONLY`.

## Bridge contract

A provider may be rendered as verified only when the configured read-only endpoint returns:

```json
{
  "schema": "kopano.lefa.sovereign-bridge-status.v1",
  "provider": "alpaca",
  "environment": "paper",
  "bridge_state": "VERIFIED",
  "execution_authority": "BACKEND_ONLY",
  "observed_at": "<ISO-8601>",
  "latest_receipt": null
}
```

`latest_receipt` may be `null` or a valid canonical sovereign decision receipt. Invalid, missing, unreachable, live, or unconfigured state => LEFA stays disconnected.

## Known market baseline from Sovereign Hub

The 2026-08-30 Sunday receipt lane recorded:

- SPY → `REJECT`
- QQQ → `REJECT`
- NVDA → `REJECT`
- AAPL → `WATCH_REFRESH_ONLY`

This is continuity evidence only. Friday-close market observations are not Monday execution permission.

## External gates still unresolved

LEFA must not imply these are known until receipts exist:

- competition account current equity;
- immutable starting-equity proof;
- Level 3 options entitlement;
- current positions / portfolio defined risk;
- provider order/fill receipts;
- fresh post-open options quotes/Greeks for the next eligible proposal.

## Next safe action after POC-0

Implement the backend read-only bridge endpoint in the sovereign runtime (or a narrow adapter beside it), then render the actual latest decision receipt in LEFA's Living Ledger direction. Only after that should the design simulator and runtime view be separated into explicit `DESIGN_PREVIEW` and `RUNTIME` modes.

## POST-SEED expectation

A merged POC-0 is complete only when CI proves TypeScript validation and Vite production build at the exact PR head.

`Frontend tells the story.`  
`Backend preserves the truth.`  
`Time decides what survives.`
