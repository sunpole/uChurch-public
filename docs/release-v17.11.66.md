# uChurch v17.11.66

## Русский

Завершён технический этап безопасного открытия синтетического Demo-пакета.
Файл принимается только как ограниченный зашифрованный пакет, проверяется до
создания временной сессии и не сохраняется на сервере. Проверки отклоняют
повреждённые, слишком большие и не Demo-пакеты.

На публичном staging эта возможность по умолчанию выключена. Реальные базы
церквей сервер по-прежнему не принимает.

## English

The technical stage for safely opening a synthetic Demo package is complete.
The file is accepted only as a bounded encrypted package, validated before a
temporary session is created, and never stored on the server. Checks reject
corrupted, oversized, and non-Demo packages.

This capability remains disabled by default on public staging. The server does
not accept real church databases.
