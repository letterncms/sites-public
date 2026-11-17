---
id: 01m7npd9x8g8e4hhhdejz1f4kr
title: 'Contact Tiles'
status: published
published_at: '2026-11-17T21:25:36+00:00'
position: 29
synced: false
category: Features
description: 'Four coloured tiles with a phone number or address each, read from the Hospital global so they stay up to date.'
keywords:
  - phone
  - email
  - contact
  - numbers
---

::: box {"id":"ctl","props":{"tag":"section"},"class":"mx-auto max-w-wide px-gutter pt-section"}
:::: box {"id":"ctl-list","props":{"tag":"ul"},"class":"grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1"}
::::: box {"id":"ctl-0","props":{"tag":"li"},"class":"tile scheme-emergency flex flex-col gap-2"}
:::::: icon {"id":"ctl-0-i","props":{"icon":"siren"},"attrs":{"aria-hidden":"true"},"class":"size-8"}
::::::

:::::: heading {"id":"ctl-0-h","props":{"text":"Emergencies","level":"2"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"ctl-0-p","props":{"text":"Day and night","tag":"p"},"class":"text-[0.9375rem] text-muted"}
::::::

:::::: link {"id":"ctl-0-a","bind":{"label":"globals.hospital.emergency_number","url":"tel:{globals.hospital.emergency_number}"},"class":"mt-auto pt-2 text-xl font-semibold break-words"}
::::::
:::::

::::: box {"id":"ctl-1","props":{"tag":"li"},"class":"tile scheme-mint flex flex-col gap-2"}
:::::: icon {"id":"ctl-1-i","props":{"icon":"calendar-check"},"attrs":{"aria-hidden":"true"},"class":"size-8"}
::::::

:::::: heading {"id":"ctl-1-h","props":{"text":"Appointments","level":"2"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"ctl-1-p","props":{"text":"Monday to Friday, 8:00 to 18:00","tag":"p"},"class":"text-[0.9375rem] text-muted"}
::::::

:::::: link {"id":"ctl-1-a","bind":{"label":"globals.hospital.appointments_phone","url":"tel:{globals.hospital.appointments_phone}"},"class":"mt-auto pt-2 text-xl font-semibold break-words"}
::::::
:::::

::::: box {"id":"ctl-2","props":{"tag":"li"},"class":"tile scheme-sky flex flex-col gap-2"}
:::::: icon {"id":"ctl-2-i","props":{"icon":"phone"},"attrs":{"aria-hidden":"true"},"class":"size-8"}
::::::

:::::: heading {"id":"ctl-2-h","props":{"text":"Switchboard","level":"2"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"ctl-2-p","props":{"text":"Day and night","tag":"p"},"class":"text-[0.9375rem] text-muted"}
::::::

:::::: link {"id":"ctl-2-a","bind":{"label":"globals.hospital.phone","url":"tel:{globals.hospital.phone}"},"class":"mt-auto pt-2 text-xl font-semibold break-words"}
::::::
:::::

::::: box {"id":"ctl-3","props":{"tag":"li"},"class":"tile scheme-lilac flex flex-col gap-2"}
:::::: icon {"id":"ctl-3-i","props":{"icon":"envelope-simple"},"attrs":{"aria-hidden":"true"},"class":"size-8"}
::::::

:::::: heading {"id":"ctl-3-h","props":{"text":"Email","level":"2"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"ctl-3-p","props":{"text":"We reply within three working days","tag":"p"},"class":"text-[0.9375rem] text-muted"}
::::::

:::::: link {"id":"ctl-3-a","bind":{"label":"globals.hospital.email","url":"mailto:{globals.hospital.email}"},"class":"mt-auto pt-2 text-xl font-semibold break-words"}
::::::
:::::
::::
:::
