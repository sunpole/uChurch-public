# Complete Public Patch Index

This index lists every documented stage known in the local project history
when the public storefront was created. The earliest confirmed work stream is
the `v0.1-v11.0` roadmap, followed by `v15.0` documents, a working `v15.1`
prerelease and archived `v16.7-v16.14` builds. Numbering gaps are not filled
with invented events. The index does not include source code, working
databases, keys, data paths or personal data.

## v0.1-v11.0: early foundation

The preserved roadmap records an early phase from 25 to 28 May 2026: tabular
data import, search and filters, bilingual dictionaries, basic contacts and
the person Card. Its individual internal-step numbering was not preserved, so
this index does not manufacture patch notes for it.

## v15.0-v16.14: move toward a modular CRM

| Version or range | Public description |
| --- | --- |
| v15.0 | Recorded a local CRM with a working Table and editable person Card. |
| v15.1 | Working prerelease with multiselects, data-source switching and RU/EN UI; preparation for modular architecture began. |
| v15.2, v15.5, v15.9 | Technical requirements and plans remain for these stages; they describe evolving requirements, not separate published builds. |
| v16.7-v16.14 | Stable-build archives are confirmed. Publicly this records the move toward modular architecture and server-backed storage without disclosing source or data. |

## v17.6-v17.8: early stabilization

| Version | Public description |
| --- | --- |
| v17.6.1 | Fixed a critical widget-catalog loading error. |
| v17.8.1 | Normalized the visible project name to `uChurch`. |
| v17.8.2 | Made Card checkbox lists follow a predictable reading order. |

## v17.9: quality, structure and QA

| Version | Public description |
| --- | --- |
| v17.9.0 | Added dictionary validation for required fields and duplicate keys. |
| v17.9.1 | Added home-group participation analytics. |
| v17.9.2 | Added widget favorites and the `Other widgets` area. |
| v17.9.3 | Made spiritual-growth stages visible in Table and Admin. |
| v17.9.4 | Moved widget rendering into a dedicated module. |
| v17.9.5 | Fixed visible text-encoding issues and verified browser text. |
| v17.9.6 | Added a non-destructive running-CRM smoke test. |
| v17.9.7 | Separated Help behavior from application startup. |
| v17.9.8 | Split Card behavior into model, rendering and save flow. |
| v17.9.9 | Isolated dictionary-safety checks from Admin rendering. |

## v17.10: maintainability and Widget Store

| Version | Public description |
| --- | --- |
| v17.10.0 | Moved Admin rendering into its own module. |
| v17.10.1 | Made the widget catalog an independent data source. |
| v17.10.2 | Extended smoke QA to widget-catalog integrity and RU/EN completeness. |
| v17.10.3 | Removed a duplicate widget-identifier list. |
| v17.10.4 | Fixed a Help/Admin visual regression. |
| v17.10.5 | Restored compact Admin dictionary editing. |
| v17.10.6 | Gave Dashboard mini widgets a chart-left/data-right layout. |
| v17.10.7 | Added safe mini-card previews to Widget Store. |
| v17.10.8 | Added the `Came from` field. |
| v17.10.9 | Added validated storage for mini-widget presets. |

## v17.11.0-v17.11.9: data and Ministry Registry

| Version | Public description |
| --- | --- |
| v17.11.0 | Added data-quality widgets. |
| v17.11.1 | Fixed a full-size widget collapse after choosing an item from `Other widgets`. |
| v17.11.2 | Completed visual QA for the Widget Store fix. |
| v17.11.3 | Added the Registry navigation section. |
| v17.11.4 | Prepared a stable Ministry Registry structure. |
| v17.11.5 | Built the first working Ministry Registry editor. |
| v17.11.6 | Added a user-facing Table column chooser. |
| v17.11.7 | Prevented Registry refresh from overwriting manual changes. |
| v17.11.8 | Added Card, Table and Grid Registry views. |
| v17.11.9 | Fixed leader, assistant, team and role selection in Registry. |

## v17.11.10-v17.11.18: Card, Admin and localization

| Version | Public description |
| --- | --- |
| v17.11.10 | Reorganized the person Card into General Information, Serving and Spiritual Growth. |
| v17.11.11 | Added the compatible Clergy field and dictionary. |
| v17.11.12 | Added Admin sections and managed dictionary ordering. |
| v17.11.13 | Aligned Admin navigation order with the Card. |
| v17.11.14 | Added shared colors and optional framing for status groups. |
| v17.11.15 | Preserved Table state on live RU/EN switching. |
| v17.11.16 | Added the Admin Card Groups centre. |
| v17.11.17 | Added a read-only legacy/Registry compatibility report. |
| v17.11.18 | Aligned Card and Admin compact visual blocks. |

## v17.11.19-v17.11.27: backups, journal and data separation

| Version | Public description |
| --- | --- |
| v17.11.19 | Added verified compact backups and a unified interface-version source. |
| v17.11.20 | Added an append-only Change Journal outside the source project. |
| v17.11.21 | Added operator selection and an Admin read-only Journal viewer. |
| v17.11.22 | Prepared a resolver for an explicitly selected local data directory. |
| v17.11.23 | Added controlled one-session attachment of an external database. |
| v17.11.24 | Documented the boundary between application, synthetic Demo and User Data. |
| v17.11.25 | Prepared encrypted User DB recovery. |
| v17.11.26 | Completed a supervised handoff to an external private data directory. |
| v17.11.27 | Made backups require an explicit data source. |

## v17.11.28-v17.11.35: isolation, Demo and Trash

| Version | Public description |
| --- | --- |
| v17.11.28 | Added a safe current-session descriptor. |
| v17.11.29 | Added a deliberate no-database launch mode. |
| v17.11.30 | Added isolated workspaces before editing. |
| v17.11.31 | Added save-as-new-version from a validated workspace. |
| v17.11.32 | Created a deterministic Demo database with 50 fictional people. |
| v17.11.33 | Made Demo run only through an external working copy. |
| v17.11.34 | Added safe People Trash with restore. |
| v17.11.35 | Corrected unconnected-shell guidance in RU and EN. |

## v17.11.36-v17.11.41: network, mobile and Start Center

| Version | Public description |
| --- | --- |
| v17.11.36 | Made local-network launch prefer normal Wi-Fi/Ethernet addresses. |
| v17.11.37 | Made Demo/workspace status visible on phones. |
| v17.11.38 | Improved the mobile header and compact default Table columns. |
| v17.11.39 | Preserved mobile layout during Android Chrome virtual desktop mode. |
| v17.11.40 | Added read-only coverage checks for synthetic Demo scenarios. |
| v17.11.41 | Added an unconnected-shell Start Center without hidden folder access. |

## v17.11.42-v17.11.44: public boundary and private Demo QA

| Version | Public description |
| --- | --- |
| v17.11.42 | Separated the private developer core from a code-free public storefront with safe development history. |
| v17.11.43 | Added one persistent synthetic Test database for internal engineering QA. It starts from the immutable Demo template and requires explicit confirmation plus a backup before reset. |
| v17.11.44 | Repaired synthetic Demo data validation and the localized Trash confirmation after a browser QA pass. No church data was involved. |

## v17.11.45-v17.11.47: safer local work and synthetic staging preparation

| Version | Public description |
| --- | --- |
| v17.11.45 | Added visual creation of a separate empty external database with local operator profiles. |
| v17.11.46 | Added a visible save state, bounded autosave for safe changes, retry guidance, and atomic local JSON replacement. Dangerous actions remain manual. |
| v17.11.47 | Prepared a synthetic-only staging contract. The public address is not open yet, and no church data is involved. |
| v17.11.48 | Validated the foundation for a portable encrypted package with integrity checks on synthetic data. Web upload and work with real databases are not open yet. |
| v17.11.49 | Synthetic Demo gained isolated temporary web sessions. Browser workspaces are separated and the server enforces 10/15/30-minute limits. Real databases are not accepted. |

## Next

After this history is available in the public storefront, new development news
will come only from this repository, in Russian, and only for actually
completed stages. The product direction is a web application with a synthetic
Demo followed by protected temporary work with an encrypted user database.
