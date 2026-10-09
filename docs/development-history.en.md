# uChurch Development History

This document describes product progress without source code, working
databases, or personal data. The technical core is kept in a separate private
developer repository.

## CRM Foundation

- **v17.8-v17.10**: Table/Card stabilization, RU/EN interface, dictionaries,
  roles, statuses, widgets and initial quality checks.
- **v17.11.3-v17.11.9**: Ministry Registry added with leader, assistants,
  serving team and roles inside a specific ministry.
- **v17.11.10-v17.11.18**: Card and Admin were aligned around clear sections:
  general information, serving and spiritual growth.

## Reliability and Data Boundaries

- **v17.11.19-v17.11.21**: compact backups, Change Journal, operator context
  and safe read-only reports were introduced.
- **v17.11.22-v17.11.27**: working databases were separated from the source
  project; external workspaces, version saving and encrypted recovery were
  prepared without publishing data.
- **v17.11.28-v17.11.35**: an unconnected mode, isolated workspaces, a
  synthetic Demo database and safe People Trash were added.
- **v17.11.100**: pending saves complete before an encrypted working copy is
  downloaded, and the new package is rechecked without publishing database or
  recovery material.
- **v17.11.101-v17.11.103**: synthetic checks confirmed the daily CRM cycle,
  and the move to `.pro` restored the Pilot flow for creating a new temporary
  database or opening an encrypted user package; its temporary limits and
  new-database Back step are clearer.
- **v17.11.104-v17.11.107**: after the infrastructure move, technical
  environments were aligned around `.pro`. Ending a temporary Demo session
  now uses only the active public entry, and a safe address map was added to
  the recovery documentation.

## Interface and Start Flow

- **v17.11.36-v17.11.41**: local-network launch, mobile layout, Demo status
  and a Start Center were improved without hidden access to user folders.

## Current Transition

- **2026-10-09, v17.11.112**: a reported ordering failure exposed separate
  dictionary and spiritual-group orders. Both editors and Card now share the
  same order. Four-view checks cover manual/alphabetical order, failed-save
  retry, reload and export/reopen. [Patch](release-v17.11.112.md),
  [real synthetic-QA screenshots](chronicle-2026-10-09.md).
  This follow-up does not retroactively claim v17.11.111 fixed ordering.
  Operator acceptance remains separate.

- **v17.11.111**: GROWTH1 separates the growth-stage editor, adds new stages
  to Card automatically and preserves checked values/dates.
  [Checks and release](release-v17.11.111.md).

- **v17.11.110**: TABLE-COLUMNS corrects stale visibility and order after
  chooser/Admin changes from other views, with dedicated synthetic regression
  and unchanged encrypted file format. [Release status](release-v17.11.110.md).

- **v17.11.109**: RECOVER1 adds independent owner-only access to a verified
  encrypted snapshot for 30 more minutes after idle expiry, without prior
  manual export. All database parts and metadata are compared; creation
  requires a password. Server memory is not independent backup; operator
  acceptance remains open.

- **v17.11.108**: SESSION-SAVE removes the default active-work 30-minute cap;
  adds nonblocking idle warnings, export before exit, hourly reminders and
  opt-in verified automatic copies. Synthetic checks passed; operator
  acceptance remains open.

An open MVP runs on `pilot.uchurch.pro` alongside a separate synthetic Demo.
Next steps cover session work preservation, measured infrastructure checks,
recovery and consistent navigation. See the [current task queue](development-debt.ru.md).
