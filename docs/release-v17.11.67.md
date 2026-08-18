# uChurch v17.11.67

## Русский

Подготовлен механизм приглашений для будущего закрытого пилота. У кода есть
срок действия, лимит активаций и отзыв. Сервер хранит только проверочный хэш,
а не сам код.

Механизм отключён на staging и не создаёт аккаунты. Реальные базы церквей
сервер по-прежнему не принимает.

## English

An invitation mechanism has been prepared for the future closed pilot. Each
code has an expiry, an activation limit, and revocation support. The server
stores only a verification hash, not the raw code.

The mechanism is disabled on staging and creates no accounts. The server still
does not accept real church databases.
