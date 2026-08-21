---
type: release
project: uChurch
series: uchurch
title: "Локальная Docker проверка uChurch"
version: 17.11.72
queued_at: 2026-08-21T12:35:00Z
repo_url: https://github.com/sunpole/uChurch-public
web_url: https://github.com/sunpole/uChurch-public/blob/main/docs/release-v17.11.72.md
image: 2026-08-21-uchurch-v17-11-72-docker-local-verification.png
---

Обновление uChurch v17.11.72: добавлена воспроизводимая локальная проверка
Docker. Теперь перед серверным развёртыванием проект собирается и запускается
в изолированном Linux контейнере только с синтетической Test базой. Это
помогает находить ошибки совместимости заранее. Реальные базы церквей и ключи
восстановления не используются.
