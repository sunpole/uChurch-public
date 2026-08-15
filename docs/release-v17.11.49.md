# uChurch v17.11.49

## Русский

WEB2 добавляет временные изолированные веб-сессии только для синтетической
Demo-базы. Разные браузеры получают независимые рабочие копии; изменения одной
сессии не видны другой. Сервер предупреждает после 10 минут бездействия,
удаляет сессию после 15 минут и всегда завершает её не позднее 30 минут.

Рабочие копии хранятся только во временной памяти контейнера. Эта версия не
принимает реальные базы церквей, зашифрованные пакеты, пароли или recovery-файлы
и ещё не развёрнута на VPS. Следующий этап проверит тот же синтетический контур
на `staging.uchurch.ru`.

## English

WEB2 adds isolated temporary web sessions for the synthetic Demo database only.
Different browsers receive independent workspaces; one session cannot see
another session's edits. The server warns after 10 idle minutes, removes the
session after 15 idle minutes, and always ends it within 30 minutes.

Workspaces exist only in temporary container memory. This release does not
accept real church databases, encrypted packages, passwords, or recovery files,
and it has not yet been deployed to the VPS. The next stage will validate the
same synthetic runtime at `staging.uchurch.ru`.
