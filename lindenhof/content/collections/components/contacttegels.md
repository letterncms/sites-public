---
id: 01m7p2kfy69agdcgggq2vfq8q4
title: Contacttegels
status: published
published_at: '2026-11-18T01:58:42+01:00'
position: 28
synced: false
category: Secties
description: 'Drie tegels om te bellen, te mailen of langs te komen, uit de gegevens van het ziekenhuis.'
keywords:
  - contact
  - bellen
  - mailen
---

::: box {"id":"ct","props":{"tag":"section"},"attrs":{"aria-labelledby":"#ct-title"},"class":"mx-auto max-w-content px-gutter pt-section"}
:::: heading {"id":"ct-title","props":{"text":"Contact","level":"2"},"class":"rule mb-8"}
::::

:::: box {"id":"ct-list","props":{"tag":"ul"},"class":"grid grid-cols-3 gap-4 max-md:grid-cols-1"}
::::: box {"id":"ct-1","props":{"tag":"li"},"class":"card flex flex-col gap-3"}
:::::: icon {"id":"ct-1-i","props":{"icon":"phone"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-primary"}
::::::

:::::: heading {"id":"ct-1-h","props":{"text":"Bel ons","level":"3"},"class":"text-xl"}
::::::

:::::: link {"id":"ct-1-a","bind":{"label":"globals.hospital.phone","url":"tel:{globals.hospital.phone}"},"class":"text-lg font-bold"}
::::::
:::::

::::: box {"id":"ct-2","props":{"tag":"li"},"class":"card flex flex-col gap-3"}
:::::: icon {"id":"ct-2-i","props":{"icon":"envelope-simple"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-primary"}
::::::

:::::: heading {"id":"ct-2-h","props":{"text":"Mail ons","level":"3"},"class":"text-xl"}
::::::

:::::: link {"id":"ct-2-a","bind":{"label":"globals.hospital.email","url":"mailto:{globals.hospital.email}"},"class":"text-lg font-bold"}
::::::
:::::

::::: box {"id":"ct-3","props":{"tag":"li"},"class":"card flex flex-col gap-3"}
:::::: icon {"id":"ct-3-i","props":{"icon":"map-pin"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-primary"}
::::::

:::::: heading {"id":"ct-3-h","props":{"text":"Kom langs","level":"3"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"ct-3-p","props":{"tag":"p"},"bind":{"text":"globals.hospital.address"},"class":"whitespace-pre-line"}
::::::
:::::
::::
:::
