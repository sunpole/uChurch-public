# v17.11.110: release outcome

Date: 2026-10-09. Installed, live-verified and published.

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
User acceptance remains open. Tags never move.

## Publication confirmation

- Immutable public source: `36b8bdfe46f558d2eb4abde09b7c78c0345eaced`.
- Public explanatory release: https://github.com/sunpole/uChurch-public/releases/tag/v17.11.110.
- Both GitHub Releases have zero uploaded assets. Follow-up receipts and the
  corrected live-test expectation are later commits; application tags are unchanged.
- Published Pages browser check passed: 108 stages, v17.11.110, RU/EN,
  release note, four viewport sizes and no JavaScript errors.
- uNews dry run `37899300961` selected exactly one ready item. Real run
  `37899618040` succeeded; one published key/checkpoint, message 147:
  https://t.me/uNewsLog/147, published 2026-10-09T07:32:56.091Z.
- Caption: 801 characters, not truncated, one project link, one tag set,
  no personal tester references. Other projects' existing policy blocks
  were not bypassed or published as part of this release.
- Telegram delivery is confirmed by API/checkpoint. Public web preview was
  unavailable from the QA route; no manual visual preview check is claimed.
- External owner-controlled backup contains exact source, Git bundles,
  current/previous images, text QA evidence, SHA256 verifier and rollback
  instructions. Protected server configuration is not in public Git.
- Real user work was not inspected. A later Pilot workspace was left intact;
  test cleanup does not imply that the whole production host stays empty.
