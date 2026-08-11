---
type: feature
project: uChurch
series: uchurch
title: "Подготовка синтетического тестового сервера"
version: 17.11.47
queued_at: 2026-08-11T21:30:00Z
repo_url: https://github.com/sunpole/uChurch-public
web_url: https://sunpole.github.io/uChurch-public/
image: 2026-08-11-uchurch-v17-11-47-synthetic-staging.png
---

Обновление uChurch v17.11.47: подготовлена техническая основа отдельного
тестового сервера. Он будет запускаться только на синтетической Demo-базе в
изолированном контейнере; данные церквей, резервные копии и ключи восстановления
в него не попадают. Публичный адрес ещё не открыт: впереди DNS, HTTPS и
контрольная проверка нагрузки на VPS.
