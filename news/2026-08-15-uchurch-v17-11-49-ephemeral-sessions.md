---
type: feature
project: uChurch
series: uchurch
title: "Изолированы временные Demo-сессии"
version: 17.11.49
queued_at: 2026-08-15T09:20:00Z
repo_url: https://github.com/sunpole/uChurch-public
web_url: https://github.com/sunpole/uChurch-public/blob/main/docs/release-v17.11.49.md
image: 2026-08-15-uchurch-v17-11-49-ephemeral-sessions.png
---

Обновление uChurch v17.11.49: синтетическая Demo получила изолированные
временные веб-сессии. Изменение в одном браузере сохраняется после перезагрузки,
но не появляется во втором. Сервер ограничивает бездействие и общую длительность
сессии, а рабочие копии хранятся только во временной памяти контейнера. Реальные
базы церквей, пароли и файлы восстановления в этот контур не загружаются.
