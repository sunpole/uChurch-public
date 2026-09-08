# uChurch v17.11.100

This release makes the owner-held backup path more dependable without changing
the `.uchurchdb` version-1 format. Before an encrypted package is offered for
download, the CRM finishes pending supported saves, reopens the new package by
password and matching recovery material, and compares the active database
snapshot.

Database and recovery downloads remain separate repeatable user actions. There
is no cloud integration or automatic deletion: the owner stores the verified
database manually and keeps its matching recovery file separately. The public
release contains no database files, recovery material, logs, screenshots of CRM
records, credentials or personal data.
