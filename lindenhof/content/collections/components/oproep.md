---
id: 01m7p2kfy69agdcgggq2vfq8q1
title: Oproep
status: published
published_at: '2026-11-18T01:58:42+01:00'
position: 25
synced: false
category: Secties
description: 'Een band in lichtgroen met een titel, een zin en een knop. Om af te sluiten met wat iemand kan doen.'
keywords:
  - oproep
  - 'call to action'
  - band
---

::: box {"id":"op","props":{"tag":"section"},"attrs":{"aria-labelledby":"#op-title"},"class":"mx-auto max-w-content px-gutter pt-section"}
:::: box {"id":"op-in","class":"scheme-tint leaf flex flex-wrap items-center justify-between gap-8 p-[clamp(1.75rem,4vw,3.5rem)]"}
::::: box {"id":"op-text","class":"flex flex-col gap-3"}
:::::: heading {"id":"op-title","props":{"text":"Liever iemand aan de lijn?","level":"2"},"class":"text-3xl"}
::::::

:::::: paragraph {"id":"op-p","props":{"text":"De afsprakenlijn helpt je een afspraak te maken, te verzetten of te annuleren.","tag":"p"},"class":"max-w-[36em] text-lg text-muted"}
::::::
:::::

::::: buttons {"id":"op-buttons"}
:::::: button {"id":"op-call","props":{"variant":"primary","size":"lg","icon":"phone"},"bind":{"label":"Bel {globals.hospital.appointments_phone}","url":"tel:{globals.hospital.appointments_phone}"}}
::::::
:::::
::::
:::
