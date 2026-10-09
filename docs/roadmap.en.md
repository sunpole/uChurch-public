# uChurch Public Roadmap

## Now

1. Separate the private developer core and the public storefront.
2. Synthetic staging remains the permanent Demo, while a separate Pilot guides
   the user through creating a database or opening a protected owner copy.
3. Publish Russian development updates through uNews from the public storefront.
4. `uchurch.pro` is the public entry: Demo points only to synthetic staging and
   the work entry points to a separate Pilot.
5. Demo enters with its sole synthetic operator. Explicit session ending
   removes the temporary workspace and returns to `uchurch.pro`.
6. An encrypted working copy is checked by reopening before download; the owner
   keeps it and its matching recovery file manually and separately.

## Next Open-MVP Debts

TABLE-COLUMNS v17.11.110 corrects column visibility/order; engineering checks
and installation are tracked in the [release note](release-v17.11.110.md).
Operator acceptance, adjacent save-error feedback and required CI remain distinct.

1. SESSION-SAVE / RECOVER1: active work has no 30-minute cap; warnings do not
   block export and an encrypted snapshot remains downloadable for 30 minutes
   after idle expiry. Await operator acceptance before closing the issue.
2. SHOWCASE: complete the public history and reconcile it with accepted patches.
3. SR1: measure load and implement monitoring, alerts and proven resource limits.
4. DR1: demonstrate recovery of source, site and owner-held database copies.
5. UX3/UX2: consistent navigation, breadcrumbs and visual design after save verification.

Detailed statuses: [development debt](development-debt.ru.md).

Permanent cloud storage, accounts, collaboration and payments are not part of
the first web beta. Google Drive remains external owner-held manual backup,
not an integration with uChurch.

The `.pro` Pilot supports creating a new temporary database and opening an
encrypted `.uchurchdb` without invitations in the current open-MVP mode. The
complete New/Open cycle, operator choice and session cleanup were checked only
with synthetic data.
