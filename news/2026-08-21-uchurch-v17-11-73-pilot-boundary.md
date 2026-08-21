---
type: release
project: uChurch
series: uchurch
title: "Усилена граница будущего закрытого пилота"
version: 17.11.73
queued_at: 2026-08-21T13:45:00Z
repo_url: https://github.com/sunpole/uChurch-public
web_url: https://github.com/sunpole/uChurch-public/blob/main/docs/release-v17.11.73.md
image: 2026-08-21-uchurch-v17-11-73-pilot-boundary.png
---

Обновление uChurch v17.11.73: усилена граница между синтетической Test средой
и будущим закрытым пилотом. Проверяемый Test пакет не может быть подменён
обычной пользовательской базой, а доступ будущего пилота проверяется до
обработки пакета. Отдельный технический контур подготовлен для временной
работы и очистки, но `staging.uchurch.ru` остаётся только для синтетической
Demo. Базы церквей, recovery файлы и персональные данные не используются.
