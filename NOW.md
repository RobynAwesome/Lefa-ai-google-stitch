# NOW.md — LEFA AI Google Stitch

**Updated:** 2026-08-30  
**Lane:** Alpaca AI Trading Agents Hackathon  
**State:** `POC-1 / RUNTIME_TRUTH_SPLIT`  
**Current issue:** `RobynAwesome/Lefa-ai-google-stitch#3`  
**Authority rule:** `REALITY_STATE > INDEX_STATE`  
**Execution rule:** `RECEIPT OR HOLD`

## Repository role

`Lefa-ai-google-stitch` is LEFA's human-facing design and runtime presentation surface. It is **not** the canonical trading engine, risk engine, secret store, account ledger, or brokerage execution runtime.

Canonical downstream execution/governance lives in:

- `RobynAwesome/kopano-sovereign-hub/experiments/alpaca-sovereign-arbitrage/`
- deterministic policy: `strategy.policy.json`
- deterministic decisions: `src/risk-engine.mjs`
- canonical receipt construction: `src/evidence-journal.mjs`
- execution transport: MCP preferred; verified Alpaca paper REST fallback when required

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

## POC-1 — current

The Google Stitch directions intentionally contain synthetic design artifacts:

- `MOCK_OBSERVATION`;
- `MOCK_LEDGER_RECEIPT`;
- `MOCK_HOLD_RATIONALE`;
- `MOCK_REVEAL_DATA`;
- manual Observe/Ledger/HOLD/Reveal state controls;
- narrative examples such as preserved-capital percentages and retrospective outcomes.

These are valuable design explorations. They are not runtime evidence.

POC-1 therefore establishes two explicit experience modes:

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

The app defaults to `RUNTIME` so synthetic data requires an intentional switch into Design Preview.

## Runtime truth behaviour

A successful bridge verification returns the actual `SovereignBridgeStatus` object to App and switches the experience to Runtime Truth.

Runtime may show:

- verified provider: Alpaca;
- environment: PAPER;
- request-time observation timestamp;
- server-safe provider observation code;
- execution authority: BACKEND ONLY;
- canonical decision receipt fields if `latest_receipt` exists.

Runtime must **not** infer or display values that are absent from the bridge/receipt, including balances, equity, P&L, profitability, position risk, trade outcomes, or execution claims.

Current Hub status adapter intentionally returns `latest_receipt: null`. Therefore the current lawful runtime state after a successful provider verification is:

`PROVIDER_BOUNDARY_VERIFIED / DECISION_RECEIPT_MISSING / HOLD_DISPLAY`

## Deployment truth

The connected Vercel estate currently contains a `kopano-sovereign-hub` project, but it is not Git-linked. Its newest preview deployment predates the merged LEFA status bridge. The existing production deployment is stale and failed on a historical missing `src/styles.css` build error; current GitHub main contains that file and current Hub CI is green.

There is no LEFA Vercel project in the connected project list yet.

Therefore the cross-repo contract is **merged but not deployed/wired**.

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

## Next safe action after POC-1

1. Merge POC-1 only on exact-head TypeScript/build CI.
2. Deploy current Sovereign Hub source and configure server-only secrets/origin.
3. Deploy LEFA and configure only the public status URL.
4. Verify the live paper bridge from LEFA.
5. Implement a canonical persisted decision-receipt read path in Sovereign Hub before Runtime Ledger history is populated.

`DESIGN_PREVIEW != RUNTIME_TRUTH`  
`Frontend tells the story.`  
`Backend preserves the truth.`  
`Time decides what survives.`
