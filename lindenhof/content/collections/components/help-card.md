---
id: 01m7p3g24e9v8cd0ywn1f9k539
title: Hulpkaart
status: published
published_at: '2026-11-18T02:14:18+01:00'
position: 5
synced: true
category: Site
description: 'Wie je kunt bellen met een vraag, uit de gegevens van het ziekenhuis.'
---

::: box {"id":"hc","class":"scheme-tint leaf-sm flex flex-col items-start gap-2 p-6"}
:::: icon {"id":"hc-i","props":{"icon":"phone-call"},"attrs":{"aria-hidden":"true"},"class":"size-7 text-primary"}
::::

:::: heading {"id":"hc-t","props":{"text":"Vragen?","level":"2"},"class":"text-xl"}
::::

:::: paragraph {"id":"hc-p","props":{"tag":"p"},"bind":{"text":"De afsprakenlijn is bereikbaar {globals.hospital.switchboard_hours}."},"class":"text-[0.9375rem] leading-snug text-muted"}
::::

:::: link {"id":"hc-phone","bind":{"label":"globals.hospital.appointments_phone","url":"tel:{globals.hospital.appointments_phone}"},"class":"text-xl font-bold"}
::::
:::
