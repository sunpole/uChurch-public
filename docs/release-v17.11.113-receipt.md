# TABLE-PROFILE v17.11.113: release receipt

Дата: 13 октября 2026. Staging и Pilot установлены, live Pilot proof пройден.
Предыдущие private/public source-only releases v17.11.112 сохранены.
История дополнена новым этапом без переписывания прежних записей.

Ширина и сортировка сохраняются локально без значений людей, порядка и
видимости. Настройки Админки по-прежнему входят в файл базы и приоритетны.
Расширенный тест воспроизвёл старую ошибку: 200px вместо 270px после hide/reload.
Unit профиля и промежуточный browser 1366x768 прошли.
Окончательная матрица 1366x768, 1920x1080, 412x915, 321x568: PASS.
Проверены hidden reload, resize/sort, новый явный sort, приоритет порядка
Админки, ошибка записи/повтор, verified export/reopen и равенство всех частей.
BACKUP1 package/save barrier, GROWTH1 unit, Docker contract, version, build,
data boundary/privacy прошли. Public showcase: RU/EN, 111 записей, ссылки,
настоящие снимки и четыре viewport без JS errors/overflow: PASS.
В тестах исправлены подготовка gender после сброса и прокрутка границы
resize на 321 px; неудачные попытки не записаны как PASS.

Private immutable source: 24adb980fbc2f3aeabe8c890d492875c0ba35a93.
Public immutable source: 5ab85160b77c5d2a8549745d279700706fddd9d7.
Exact private tar SHA256: 6EB0269DFBE1C62DA0431B6948BA8718D1E322DDB18DE2B4BF894D435AC66DA6.
Оба health: v17.11.113, ready=true, ephemeral-demo. Pilot open-MVP, Staging
synthetic-only; защищённые флаги не менялись. Старые/новые images и bundles
сохранены вне Git, source-only private release без assets опубликован.

Live HTTPS Pilot: width/sort → hide/reload/show → перемещение gender перед
fullName через Админку при загруженном личном профиле → PUT200 → reload →
verified export → завершение → reopen. Заголовки сохранили порядок
edit,gender,fullName,isMember, ширину и сортировку. Все части/metadata сверены;
прочие пять частей не изменились, собственная сессия закрыта, JS errors нет.
Тестовые правки выполнялись только на синтетической базе.

V1, шифрование, серверные флаги и реальные базы не изменялись.
Новая публикация uNews пока не отправлена. Пользовательская приёмка открыта.
Нагрузочный тест VPS, безопасность зависимостей SEC1 и чистый DR1 не входят
в доказательства узкого исправления столбцов.
