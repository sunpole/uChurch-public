# GROWTH-ORDER v17.11.112: release receipt

Дата: 2026-10-09. Локальная проверка и установка Staging пройдены.
Pilot пока v17.11.111: сначала обнаружена сессия, затем начался защитный
период после её исчезновения. Работу/recovery принудительно не уничтожают.
uNews пока не отправляется; установка Pilot ещё не подтверждена.

Private exact source: e70751134540bdc3cf416163949b6b2593c38df2.
Private source-only GitHub Release опубликован, пользовательских assets нет.
Exact-source tar SHA256:
A679976A93CC0F92F852B55788C4197C2C0B7E77CA7F2F670EAC0CFA516AE186.
Staging loopback health v17.11.112, ready=true, sourceKind=ephemeral-demo.
HTTPS обоих контуров: noindex; стартовая страница no-store. Health API
не имеет Cache-Control — не следует приписывать ему заголовок страницы.
Protected flags, DNS и Nginx не менялись; только маркер версии Staging.
Предыдущий и новый образы Staging сохранены с SHA256 вне Git.

Предыдущие private/public v17.11.111 и rollback-ветки сохранены.
Активные локальные маркеры согласованы на v17.11.112.

Полный synthetic browser QA: 1366×768, 1920×1080, 412×915, 321×568 — PASS.
Проверены порядок обоих редакторов, новая/существующая Карточка, reload,
отказ записи группы/повтор, сохранение отметок/дат, экспорт/reopen.
GROWTH1 unit, Admin presentation (20), BACKUP1 package/save barrier,
data boundary, version check и client build — PASS.
Это не стресс-тест VPS и не полный security-аудит.

Private bundle восстановлен в отдельную папку с core.autocrlf=false:
npm ci server/client, build, version, GROWTH1 unit, BACKUP1 fixed-v1,
RECOVER1 unit и CORE-QA API прошли. Первые попытки двух дополнительных
проверок использовали несуществующие имена файлов; фактические существующие
проверки после исправления запуска прошли. Это ошибки запуска, не дефекты CRM.
SEC1 не закрыт: npm ci сообщает server 4 high/1 critical, client 1 high;
Docker production install сообщает 1 critical. Обновления зависимостей
не включены в узкий патч порядка этапов.

[Хроника](chronicle-2026-10-09.md) содержит два настоящих cropped screenshot
из изолированного браузера на локальной synthetic базе. Реальных людей,
баз, паролей и recovery-материала в публичных файлах нет.

Пользовательская приёмка задачи остаётся открытой.
