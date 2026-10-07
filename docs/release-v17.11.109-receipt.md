# v17.11.109: release outcome

Date: 2026-10-08 (Europe/Minsk).

- Private runtime source: immutable v17.11.109, commit bb990d0.
- Both technical hosts report v17.11.109, ready=true and healthy containers;
  staging remains synthetic Demo, Pilot remains open MVP without invitations.
- Live synthetic browser smoke passed: Demo and .pro exit, Pilot New/Open,
  changed Card/export/password and recovery reopen, all-part equality,
  no absolute cap, no remaining session/recovery and no JavaScript errors.
- Technical-host `noindex, nofollow` remains. DNS, Nginx and access flags were
  not changed. Previously deployed v17.11.108 images/configuration were retained.
- Separate source restoration passed version check, client build, RECOVER1,
  fixed v1 BACKUP1 and CORE-QA checks. Source/history bundles and immutable
  archives are kept outside the repositories; they contain no owner database.
- Post-deployment runtime image/configuration backup was created on the server;
  its compressed image archive passed integrity verification.
- Public catalog now contains 107 preserved/documented entries. Local RU/EN,
  links and four-viewport checks passed. The news image shows the actual expiry
  dialog from an isolated synthetic browser test, not a real church database.

Public push, Pages and Telegram confirmation are pending at this receipt's
initial commit. Their verified outcomes will be appended without moving the
immutable release tag.

Owner acceptance remains open. Snapshots are memory-only: server restart/crash,
expired browser credentials and unsent edits are not covered. SEC1, SR1 and
full independent DR1 rehearsal remain open.
