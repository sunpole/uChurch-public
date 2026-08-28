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
| v17.11.51 | A separate synthetic staging environment passed acceptance: HTTPS, health checks, session isolation, and temporary-workspace cleanup were confirmed without real database uploads. |
| v17.11.52 | Database and Table controls were consolidated into compact menus; the project name remains plain text. |
| v17.11.53 | Staging health now reports the exact immutable deployed tag. |
| v17.11.54 | The database-actions menu stays within a narrow viewport. |
| v17.11.55 | Compact screens use separate clear rows for database information and view navigation. |
| v17.11.57-v17.11.61 | Synthetic staging gained an explicit Start Center: a Test database or a blank temporary database with specified operators. The server does not accept real databases. |
| v17.11.62-v17.11.66 | Synthetic sessions can download an encrypted copy and recovery file, end explicitly, and complete a tested bounded Demo-package opening flow. Public staging keeps package opening disabled and does not accept real church databases. |
| v17.11.67 | Expiring, limited-use invitations are prepared for a future closed pilot. The mechanism is disabled on staging and creates no accounts. |
| v17.11.69 | Phone navigation was restored with a persistent primary bottom bar and one right-side panel for project actions. Staging remains synthetic-only. |
| v17.11.70 | Technical boundaries for temporary web sessions and internal checks before a future closed pilot were strengthened. Staging remains synthetic-only, and an independent security review is still required. |
| v17.11.71-v17.11.75 | A separate synthetic closed-pilot environment and HTTPS verification were prepared. Real databases are still not accepted. |
| v17.11.76 | Prepared a controlled copy-only compatibility check: a separate copy is checked for structure and links while the original database remains untouched. |
| v17.11.77 | Strengthened synthetic-environment startup verification before deployment. Database rules did not change. |
| v17.11.78 | Aligned active version markers and protected-pilot instructions. Staging remains synthetic Demo only. |
| v17.11.79 | Rechecked protected-pilot boundaries on synthetic fixtures. Real databases remain unavailable. |
| v17.11.80 | Added a copy-only packager and explicit closed-pilot mode, both disabled by default. No church data was used. |
| v17.11.81 | Synthetic Demo gained a clear first entry and a dedicated Demo operator. No real databases were used. |
| v17.11.82 | The author-designed `uchurch.ru` page moved into the public storefront. It now offers clear routes to synthetic Demo and the closed pre-alpha environment. The page does not store or process CRM data. |
| v17.11.83 | The separate pre-alpha environment gained a neutral invitation entry. A code is never displayed or stored in the browser, and encrypted user packages remain unavailable. |
| v17.11.84 | Corrected the pilot response to rapid-request limits so an expected limit does not look like a service outage. |
| v17.11.85-v17.11.86 | Established the practical MVP path: Demo remains fully synthetic, while the separate pilot can create a blank database or open an encrypted package and a verified copy of five JSON files. The server does not become permanent storage. |
| v17.11.87 | The public Demo action opens one dedicated synthetic session directly. Repeated clicks cannot create parallel sessions. |
| v17.11.88-v17.11.90 | Simplified the working entry to two actions: create a new database or open one from the computer. Forms appear only after a choice, and the CRM stays hidden until a session opens successfully. |
| v17.11.91 | Split new-database setup into clear steps: church name, first operator, then the working interface. A stored operator is selected after an opened package passes validation. |
| v17.11.92 | Stabilized Pilot loading so records and the Table cannot appear before the current step is known. Removed false limits during rapid refreshes and verified database creation plus operator selection on desktop and phone widths. |
| v17.11.93 | Established encrypted `.uchurchdb` as the owner-held working format. Migration, edit, add, download and reopen were proved using a synthetic copy only. |

## Next

After this history is available in the public storefront, new development news
will come only from this repository, in Russian, and only for actually
completed stages. The next product step is a verified owner-copy cycle: open,
edit, save, download and reopen without touching the original database.
