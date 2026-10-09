# v17.11.110: release outcome

Date: 2026-10-09. Installed and live-verified; public publication pending.

Scope: two column refresh/order corrections, RU/EN Help, synthetic regression.
No real database, package format, encryption or protected runtime flag changed.
The news image is a crop of the actual column chooser from isolated synthetic QA,
without database rows, secrets or participant names.

## Verified outcome

- Private source commit: `c3ae47952605bc269b9b338585186ab9ce96e5e4`.
- Immutable private release: https://github.com/sunpole/uChurch/releases/tag/v17.11.110.
- Demo/Pilot HTTPS health: v17.11.110, ready=true, ephemeral-demo; healthy
  containers, noindex retained. Pilot stays open MVP; Demo stays synthetic.
- TABLE-COLUMNS full regression passed at 1366x768, 1920x1080, 412x915 and
  321x568, including failed-save retry, Admin order, export/reopen and cleanup.
- CORE-QA, BACKUP1, RECOVER1, deployment contracts, build, version and
  data/public-boundary checks passed. Bounded local load: 100 requests,
  concurrency 10, five 200 and 95 rate-limited 429. Not a VPS stress test.
- Live browser smoke passed Demo/.pro exit, Pilot New/Open, column settings,
  changed Card, actual encrypted database/recovery download, equality of all
  five parts and metadata, end/reopen and no remaining session/recovery or
  JavaScript errors. A stale test expectation and local tunnel timeouts were
  corrected before this successful final run; no runtime workaround was used.
- Separate source restoration from Git bundle passed build, version,
  fixed-v1 BACKUP1, RECOVER1 unit and CORE-QA API.
- Previous v17.11.109 source/configuration/images preserved. Current/previous
  images copied to owner-controlled PC; server and local SHA256 match.
- Real FOG, credentials, user exports and recovery materials were not used.

## Limits and publication

Known SEC1 dependency advisories remain; no complete security or DR1 acceptance
is claimed. Live rollback was not exercised. Restarts erase temporary work and
recovery: save and end work first. Application backup is not user database backup.
User acceptance remains open. Public source/tag/release, Pages and exactly one
Russian uNews item will be recorded here after confirmation. Tags never move.
