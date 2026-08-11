# uChurch v17.11.45

## Русский

Стартовый центр получил форму для создания пустой внешней базы. Пользователь
указывает название базы и от одного до восьми локальных операторов. Сервер
создаёт уникальную папку во внешнем защищённом каталоге, проверяет пять
необходимых JSON-файлов и подключает только что созданную базу к текущему
запуску CRM.

Тестовая база, Demo-шаблон и существующие пользовательские данные не
перезаписываются. После перезапуска используется существующий защищённый путь
открытия внешней базы. Публичный релиз не содержит CRM-кода, баз данных,
контактов, ключей или резервных копий.

## English

Start Center now provides a form for creating an empty external database. The
user enters a database name and one to eight local operators. The server creates
a unique directory in the controlled external location, validates the five
required JSON files, then attaches only that fresh database to the current CRM
session.

Test data, the Demo fixture and existing User Data are never overwritten.
After restart, the existing safe external-database opening flow is still used.
This public release contains no CRM code, databases, contacts, keys or backups.
