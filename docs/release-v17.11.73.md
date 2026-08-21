# uChurch v17.11.73

## Русский

Усилена граница между публичной синтетической Demo и будущим закрытым
пилотом. Test пакеты получают проверяемое подтверждение синтетического
источника, а приглашение будущего пилота проверяется до обработки пакета.

Для отдельного pilot контура подготовлены более безопасная очистка временных
рабочих пространств и конфигурация, не оставляющая содержимое запросов во
временных файлах Nginx. `staging.uchurch.ru` по-прежнему принимает только
синтетические данные. Базы церквей, recovery файлы и персональные данные не
используются.

## English

The boundary between the public synthetic Demo and a future closed pilot has
been strengthened. Test packages carry verifiable synthetic-source proof, and
future pilot invitations are checked before package processing.

The separate pilot contract now includes safer temporary-workspace cleanup and
Nginx configuration that avoids leaving request content in temporary files.
`staging.uchurch.ru` remains synthetic-only. Church databases, recovery files,
and personal data are not used.
