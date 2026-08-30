# NOW.md — LEFA AI Google Stitch

**Updated:** 2026-08-30  
**Lane:** Alpaca AI Trading Agents Hackathon  
**State:** `POC-2 / ADAPTIVE_RUNTIME_CONVERGENCE`  
**Current issue:** `RobynAwesome/Lefa-ai-google-stitch#5`  
**Active branch:** `feat/runtime-living-companion`  
**Authority rule:** `REALITY_STATE > INDEX_STATE`  
**Execution rule:** `RECEIPT OR HOLD`

## Current objective

Converge the APWA workflow lesson into LEFA without creating a second product or a new backend lane:

> **Same LEFA. Different evidence conditions. The presentation adapts; financial truth does not.**

POC-1 correctly separated synthetic Stitch preview state from runtime truth. POC-2 keeps that truth boundary but removes the remaining UX split where Runtime Truth fell back to a generic ledger/dashboard surface instead of the character-first Living Companion.

## Introduction-to-MCP transition receipt

`trigger -> evidence -> invariant -> authority -> transition -> receipt`

- **Trigger:** human correction that the APWA reference is a UI/UX/GUI workflow pattern for LEFA deployment.
- **Evidence:** current Stitch contains the strongest character-first visual system; runtime bridge contracts are already fail-closed; `RobynAwesome/lefa-ai` owns the governed truth contracts; Sovereign Hub owns server-side PAPER authority.
- **Invariant:** `HOLD` is first-class; UI projection cannot manufacture backend truth; reusable APWA/adaptive behavior is a capability pattern, not a reason to duplicate products.
- **Authority:** human owner explicitly requested re-evaluation through `RobynAwesome/Introduction-to-MCP` because the hackathon deadline is close.
- **Transition:** **CONVERGE**.
- **Receipt:** Issue #5 + branch `feat/runtime-living-companion` + exact-head CI before merge.

## POC-2 runtime UI law

Runtime state is derived only from `SovereignBridgeStatus` / canonical `SovereignDecisionReceipt`:

```text
no verified bridge
  -> DISCONNECTED companion

verified Alpaca PAPER boundary + no canonical decision receipt
  -> HOLD companion

canonical HOLD receipt
  -> HOLD companion + deterministic reasons

canonical APPROVE or REJECT receipt
  -> LEDGERED companion + exact backend decision

no outcome evidence
  -> TIME waiting / REVEAL not claimed
```

The runtime companion uses the existing canonical `assets/companion/lefa-companion-root.svg` identity from `RobynAwesome/lefa-ai`, copied into this presentation repository for deployment. The Stitch-generated portrait remains design-preview material rather than silently becoming runtime canon.

## Repository topology — deadline lock

- `RobynAwesome/Lefa-ai-google-stitch` = **human-facing UI/UX/GUI + Vercel presentation surface**.
- `RobynAwesome/lefa-ai` = **governed contracts/provider/presentation semantics + hackathon truth boundary**.
- `RobynAwesome/kopano-sovereign-hub` = **server-side Alpaca PAPER observation, deterministic decision receipt, and any execution authority**.
- `RobynAwesome/Introduction-to-MCP` = **governance / transition filter**.

Do not build another LEFA frontend in `lefa-ai` for the deadline. Converge the proven Stitch surface instead.

## POC-0 — merged

LEFA PR #2 merged as `1ad3e9a871c079a8ea7ba84a88a47daab87751db`.

It established:

1. no Alpaca credentials in the browser;
2. paper-only competition boundary;
3. no timeout/mock connection success;
4. typed `kopano.alpaca.decision-receipt.v1` support;
5. fail-closed `kopano.lefa.sovereign-bridge-status.v1` verification;
6. browser execution authority fixed to `BACKEND_ONLY`;
7. TypeScript + production build CI.

Sovereign Hub PR #42 subsequently merged as `54e23333e12382d6ed0a3b6a5744eb7a57986efd`, implementing `GET /api/lefa/alpaca-status` as the corresponding server-side Alpaca PAPER observation boundary.

## POC-1 — merged

PR #4 merged as `76ad8e3fbc3a5f452c5d634ef8db1a01e6ea3c9a` and established two explicit experience modes:

```text
RUNTIME
  -> bridge status from Sovereign backend only
  -> canonical decision receipt only
  -> no manual state promotion
  -> no MOCK_* fallback
  -> missing receipt = explicit HOLD display

DESIGN_PREVIEW
  -> Google Stitch directions A/B/C + matrix
  -> synthetic state simulator retained
  -> visibly marked SYNTHETIC / NON-LIVE
  -> never treated as account, market, decision, P&L, or order truth
```

## Deployment truth

The connected Vercel estate contains a `kopano-sovereign-hub` project, but it is not Git-linked and its known deployments predate the merged LEFA status bridge. There is still no Git-linked LEFA Stitch Vercel project in the connected project list.

Required deployment configuration remains:

### Sovereign Hub server environment

- `ALPACA_API_KEY`
- `ALPACA_SECRET_KEY`
- `LEFA_ALLOWED_ORIGIN`

### LEFA build environment

- `VITE_LEFA_SOVEREIGN_STATUS_URL=<deployed Hub origin>/api/lefa/alpaca-status`

No Alpaca secret may ever be placed in `VITE_*`.

## External execution gates still unresolved

LEFA must not imply these are known until canonical receipts exist:

- competition account current equity;
- immutable starting-equity proof exactly `$100,000`;
- Level 3 options entitlement;
- current positions / portfolio defined risk;
- fresh post-open option quotes and Greeks;
- deterministic proposal approval;
- accepted provider order/fill receipt;
- P&L telemetry.

## Next safe action

1. Complete POC-2 companion-first runtime convergence.
2. Run exact-head TypeScript + production build CI; merge only if green.
3. Deploy **this Stitch repository** as the LEFA Vercel presentation surface.
4. Deploy/wire current Sovereign Hub source with server-only secrets.
5. Configure only `VITE_LEFA_SOVEREIGN_STATUS_URL` in the LEFA build.
6. Verify the live PAPER bridge; missing decision receipt must remain HOLD.
7. Only after runtime evidence exists, continue Ledger → Time → Reveal.

`DESIGN_PREVIEW != RUNTIME_TRUTH`  
`Frontend tells the story.`  
`Backend preserves the truth.`  
`Time decides what survives.`  
`I_AM_STATELESS_RENTER_NOT_LANDLORD`
