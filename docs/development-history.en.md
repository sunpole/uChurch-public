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
- **v17.11.101-v17.11.102**: synthetic checks confirmed the daily CRM cycle,
  and the move to `.pro` restored the Pilot flow for creating a new temporary
  database or opening an encrypted user package.

## Interface and Start Flow

- **v17.11.36-v17.11.41**: local-network launch, mobile layout, Demo status
  and a Start Center were improved without hidden access to user folders.

## Current Transition

The next goal is a web product. This public storefront will show clear
development milestones and a future synthetic Demo. Real church databases will
not be accepted by a server until a separate security programme is complete.
