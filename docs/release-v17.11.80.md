# uChurch v17.11.80

## Русский

Подготовлен контролируемый путь для будущего закрытого пилота. Локальный
инструмент работает только с внешней copy-only папкой из пяти JSON и создаёт
новый зашифрованный пакет вместе с отдельным recovery-файлом. Исходная копия
не изменяется, а выходные файлы нельзя записать в репозиторий проекта.

Для отдельного pilot-контура добавлен явный режим развёртывания. Он требует
трёх server-only флагов одновременно. По умолчанию все они выключены, а
`staging.uchurch.ru` остаётся только синтетической Demo.

Этот этап не использует и не открывает церковные данные.

## English

A controlled path for a future closed pilot was prepared. A local copy-only
tool creates an encrypted package and separate recovery file from an external
five-JSON copy without changing it. The explicit pilot mode remains disabled
by default, and staging stays synthetic Demo only.
