# Public showcase navigation

Date: 2026-10-09. This is a public-site/publication correction, not a new CRM
release. The product version remains v17.11.111; no Pilot restart is required.

- The catalog is displayed newest first using numeric version comparison.
  The preserved source catalog and historical records are not rewritten.
  Search, category filters and RU/EN retain that order.
- Future uChurch news keeps its release link and adds the public showcase URL
  when different. The footer is preserved within Telegram's caption limit.
- Historical uChurch posts are updated in place with a URL button through
  uNews Actions. Text, media, post IDs and publication keys stay unchanged.
  No duplicate news is sent, and other projects are outside this operation.
- The operation has a dry-run and records each successful button update;
  rerunning skips recorded successes. Final counts belong in the outcome below.

Verification: public showcase browser check (order, filters, RU/EN, links,
desktop/mobile); uNews policy/scope/idempotence tests and its existing suite.

## Outcome

- Local browser QA passed at 1366x768, 1920x1080, 412x915 and 321x568:
  descending numeric versions, filters, RU/EN, search, local links, no overflow
  or JavaScript errors. Public data-boundary and repository-safety checks passed.
- Public change: `37ae2da`; Pages build/deploy
  [37946200282](https://github.com/sunpole/uChurch-public/actions/runs/37946200282)
  succeeded. Live browser confirmed the first versions as 111, 110, 109, 108.
- uNews policy/repair implementation: `ad85b18`. All existing tests and the new
  link/scope/limits/idempotence/failure tests passed locally and in Actions.
- Dry-run [37946207318](https://github.com/sunpole/uNews/actions/runs/37946207318)
  selected 64 existing uChurch posts. Apply
  [37946310088](https://github.com/sunpole/uNews/actions/runs/37946310088)
  confirmed all 64 buttons; state checkpoint `6b3e259` is saved on GitHub and PC.
- Post-update comparison: no new publication keys, unchanged message ID arrays
  and previous metadata; 64 confirmed link records and zero pending targets.
  Telegram returned the expected button text/URL for each message. Its public
  embed does not display the inline keyboard, so button verification uses the
  Telegram API response, not a claim of inspecting all posts in the mobile app.
- Previous public source is available at `fc33319`, previous uNews source at
  `4085d41`. Revert source for a source rollback; removing already-installed
  Telegram buttons needs a separate repair. No CRM tag or VPS update was made.
