# uChurch v17.11.46

## Русский

SAFE1 добавляет заметное состояние сохранения в шапку CRM. Карточка человека,
Реестр служений, поля Таблицы и Группы цветов теперь показывают, сохранены ли
изменения, ожидают записи, сохраняются или требуют внимания после ошибки.

Безопасные изменения записываются после короткой паузы и не позднее выбранного
интервала. По умолчанию это три минуты. Опасные действия не становятся
автоматическими: словари, миграции ключей, удаление и архивирование, а также
экспорт базы по-прежнему требуют явного действия пользователя.

Проверка прошла на отдельной синтетической тестовой базе. Рабочие данные
церкви, персональные записи, резервные копии и исходный код CRM в этот
публичный релиз не включены.

## English

SAFE1 adds a visible save state to the CRM header. The person Card, Ministry
Registry, Table fields, and Color Groups now show whether safe changes are
saved, pending, saving, or need attention after an error.

Safe changes write after a short pause and no later than the selected interval.
The default is three minutes. Dangerous actions do not become automatic:
dictionaries, key migrations, delete/archive operations, and database export
remain explicit user actions.

Verification ran on an isolated synthetic Test database. Church data,
personal records, backups, and CRM source code are not included in this public
release.
