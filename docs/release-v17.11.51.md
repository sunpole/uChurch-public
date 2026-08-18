# uChurch v17.11.51

## Русский

DEP1 завершает приёмку отдельного staging-окружения для uChurch. На
`staging.uchurch.ru` проверены HTTPS, контейнерный health-check, отсутствие
доступа к данным из других браузерных сессий и автоматическая очистка временной
рабочей копии.

Сервер обслуживает только синтетическую Demo-базу с вымышленными записями.
Реальные базы церквей, пользовательские файлы, парольные фразы и recovery-файлы
не загружаются и не остаются на VPS. Следующий этап улучшит мобильную навигацию
и управление Таблицей, не расширяя границу данных.

## English

DEP1 completes acceptance of uChurch's separate staging environment. The
`staging.uchurch.ru` deployment was checked for HTTPS, container health,
browser-session isolation, and automatic cleanup of temporary workspaces.

The server runs only a synthetic Demo database with fictional records. Real
church databases, user files, passphrases, and recovery files are neither
uploaded nor retained on the VPS. The next step improves mobile navigation and
table controls without expanding the data boundary.
