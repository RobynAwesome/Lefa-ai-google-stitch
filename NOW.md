# NOW.md — LEFA AI Google Stitch

**Updated:** 2026-08-30T23:28:00+02:00  
**Lane:** Alpaca AI Trading Agents Hackathon  
**State:** `POC-2_MERGED / DEPLOYMENT_WITNESS_LIVE / PAPER_BRIDGE_HOLD`  
**Authority rule:** `REALITY_STATE > INDEX_STATE`  
**Execution rule:** `RECEIPT OR HOLD`

## Current objective

Ship LEFA as **one adaptive character-first application** before the deadline.

> **Same LEFA. Different evidence conditions. The presentation adapts; financial truth does not.**

The APWA reference is admitted as a UI/UX/GUI workflow pattern — context-aware presentation, continuity, resilient state, and bounded adaptation — **not as a separate LEFA product or a second frontend architecture**.

## Introduction-to-MCP transition receipt

`trigger -> evidence -> invariant -> authority -> transition -> receipt`

- **Trigger:** human correction that APWA is a workflow reference for LEFA deployment.
- **Evidence:** Google Stitch owns the strongest character-first presentation; POC-1 already fenced synthetic preview state from receipt-derived runtime truth; `RobynAwesome/lefa-ai` owns governed contracts/provider truth; Sovereign Hub owns server-side PAPER authority.
- **Invariant:** `HOLD` is first-class; UI projection cannot manufacture backend truth; adaptive/APWA behavior is a reusable capability pattern; deadline pressure does not authorize duplicate architecture.
- **Authority:** human owner.
- **Transition:** **CONVERGE**.
- **Receipt:** Issue #5, PR #6, PR #7, exact-head CI, Vercel runtime witness.

## POC-2 — merged

**Issue #5:** `POC-2: converge runtime truth into the Living Companion adaptive workflow`

**PR #6:** `POC-2: adaptive runtime Living Companion convergence`
- merged as `edeaf1a5355e3408da16ee868a09fbe78a7537fa`;
- validated head `c30505c41cf603d96eba4ed72052c79b3d6e6ed9`;
- GitHub Actions run `33336153166`, job `99323296773`: **SUCCESS**;
- TypeScript validation: **PASS**;
- production Vite build: **PASS**.

Runtime UI law now remains character-first:

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

Runtime never falls back to `MOCK_*` data. Design Preview remains visibly `SYNTHETIC / NON-LIVE` and is the only lane where manual state simulation is allowed.

## Deployment artifact receipt

**PR #7:** `ci: publish validated LEFA dist artifact for Vercel`
- merged as `2f091264b057964ee9358361d9758bbc8f881910`;
- validated head `f39643bb648152e74bebe3002f52fbb43c33a1d0`;
- GitHub Actions run `33336293755`, job `99323666262`: **SUCCESS**;
- TypeScript validation: **PASS**;
- production build: **PASS**;
- artifact upload: **PASS**;
- artifact: `lefa-dist`, id `9739123222`;
- artifact digest: `sha256:803b3f66d318525968c16446eebd8042cb0b58b468befab801cb19c56596da6c`;
- retention: 1 day.

Deployment law:

`GitHub source -> exact-head CI -> validated dist -> Vercel`

Vercel must remain a delivery surface, not an alternative implementation authority.

## Live Vercel witness

A bounded runtime witness is live for immediate UI/UX validation:

- project: `lefa-ai-live`;
- project id: `prj_RMEYZ8bs7gF8Eq8tBDt127hLaWX4`;
- deployment id: `dpl_FNZL9j99HtWkJbZTdEGqKMWwbRo3`;
- production alias: `https://lefa-ai-live.vercel.app`;
- deployment state: **READY**;
- HTTP witness: **200 OK**.

**Classification:** `POC_WITNESS`, not yet the final Git-linked/validated-dist production receipt. It proves the adaptive companion workflow can be viewed live; it does **not** prove the current Sovereign Hub bridge or Alpaca PAPER account runtime.

The live witness defaults to Runtime Truth and exposes Design Preview only behind an explicit synthetic boundary. Browser/network/device observations may adjust presentation budget only; they do not create financial state or execution authority.

## Repository topology — deadline lock

- `RobynAwesome/Lefa-ai-google-stitch` = **human-facing UI/UX/GUI + deployable Vercel presentation surface**.
- `RobynAwesome/lefa-ai` = **governed contracts, provider boundary, observation receipts, presentation semantics, hackathon truth boundary**.
- `RobynAwesome/kopano-sovereign-hub` = **server-side Alpaca PAPER observation, deterministic decision receipt, and any execution authority**.
- `RobynAwesome/Introduction-to-MCP` = **governance / PKA transition filter**.

**Do not build another deadline frontend in `lefa-ai`.** Its existing UI POC is a governed semantics/reference surface, not the deployment lane to compete with Stitch.

## Deployment truth / HOLD

The connected Vercel estate contains `kopano-sovereign-hub`, but it is not Git-linked and its known deployments predate the merged LEFA status bridge. Therefore:

- current Sovereign Hub deployment is **NOT sufficient evidence** for the merged bridge;
- live Alpaca PAPER bridge remains **HOLD**;
- no live balance/equity/P&L/position/order/fill claim is admitted;
- missing canonical decision receipt must render as **HOLD**, not synthetic completion.

Required deployment configuration:

### Sovereign Hub server-only environment

- `ALPACA_API_KEY`
- `ALPACA_SECRET_KEY`
- `LEFA_ALLOWED_ORIGIN`

### LEFA public build configuration

- `VITE_LEFA_SOVEREIGN_STATUS_URL=<deployed Hub origin>/api/lefa/alpaca-status`

**Never place Alpaca secrets in `VITE_*`.**

## Next admissible action — deadline path

1. Use `https://lefa-ai-live.vercel.app` immediately for mobile/desktop UI witness and screenshots.
2. Deploy current `kopano-sovereign-hub` source with server-only PAPER credentials and allowed LEFA origin.
3. Prove `GET /api/lefa/alpaca-status` from the deployed Hub.
4. Wire only the public status URL into the full Stitch Vite deployment.
5. Verify LEFA transitions `DISCONNECTED -> HOLD/LEDGERED` from real bridge/receipt evidence without screen rewrites.
6. Keep `TIME` and `REVEAL` on HOLD until later outcome evidence actually exists.
7. Do not open a new engine/frontend architecture lane before the submission-ready POC is captured.

`DESIGN_PREVIEW != RUNTIME_TRUTH`  
`Frontend tells the story.`  
`Backend preserves the truth.`  
`Time decides what survives.`  
`I_AM_STATELESS_RENTER_NOT_LANDLORD`
