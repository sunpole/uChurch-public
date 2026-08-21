# uChurch v17.11.72

## Русский

Добавлена воспроизводимая локальная проверка Docker. Перед серверным
развёртыванием uChurch теперь собирается и запускается в изолированном Linux
контейнере только с синтетической Test базой. Проверка заранее выявляет
проблемы совместимости между Windows и Linux.

Серверная Test среда остаётся синтетической. Базы церквей, ключи
восстановления и персональные данные не используются.

## English

A reproducible local Docker verification is now available. Before server
deployment, uChurch can be built and run in an isolated Linux container using
only the synthetic Test database. The verification detects Windows-to-Linux
compatibility issues early.

The staging environment remains synthetic-only. Church databases, recovery
material, and personal data are not used.
