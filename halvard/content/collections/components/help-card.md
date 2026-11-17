---
id: 01m7nqftagk53yj8axk5yx8ggb
title: 'Help Card'
status: published
published_at: '2026-11-17T21:44:27+00:00'
position: 5
synced: true
category: Site
description: 'Who to call with a question, from the hospital’s numbers.'
---

::: box {"id":"hc","label":"Help","class":"tile scheme-mint flex flex-col items-start gap-3"}
:::: icon {"id":"hc-icon","props":{"icon":"phone-call"},"attrs":{"aria-hidden":"true"},"class":"size-7"}
::::

:::: heading {"id":"hc-title","props":{"text":"Questions?","level":"2"},"class":"text-xl"}
::::

:::: paragraph {"id":"hc-text","props":{"tag":"p"},"bind":{"text":"Our appointments line is open {globals.hospital.switchboard_hours}."},"class":"text-[0.9375rem] leading-snug"}
::::

:::: link {"id":"hc-phone","bind":{"label":"globals.hospital.appointments_phone","url":"tel:{globals.hospital.appointments_phone}"},"class":"text-xl font-semibold"}
::::
:::
