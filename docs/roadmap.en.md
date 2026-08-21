# uChurch Public Roadmap

## Now

1. Separate the private developer core and the public storefront.
2. Synthetic staging supports an explicit Test or blank temporary session;
   the server does not accept real church databases.
3. Publish Russian development updates through uNews from the public storefront.
4. `uchurch.ru` is the public entry: Demo points only to synthetic staging and
   pre-alpha points to a separate protected environment.

## Before the Private Web Beta

1. Complete an independent security review and a private-pilot rehearsal using
   synthetic data only.
2. Configure a separate private pilot host without replacing synthetic staging.
3. Only after acceptance, conduct controlled compatibility work on a copy of
   the existing church database. The original remains untouched.
4. Until these steps are complete, a real church database cannot be opened over
   the internet.

Permanent cloud storage, accounts, collaboration and payments are not part of
the first web beta.

The verifiable pre-alpha gate is complete. The immediate next stage is an
independent security review and synthetic private-pilot rehearsal. Real
databases remain prohibited until a separate accepted security gate.
