---
id: 01m7p3g24e9v8cd0ywn1f9k53c
title: 'Kaart activiteit'
status: published
published_at: '2026-11-18T02:14:18+01:00'
position: 12
synced: true
category: Kaarten
description: 'Een activiteit in een lijst: de datum als kalenderblad, titel, uur, plaats en voor wie, gelinkt aan de activiteit.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Infosessie bevallen'
  -
    handle: day
    type: text
    label: Dag
    default: '12'
  -
    handle: month
    type: text
    label: Maand
    default: dec
  -
    handle: when
    type: text
    label: Wanneer
    default: 'donderdag 19.30 uur'
  -
    handle: venue
    type: text
    label: Plaats
  -
    handle: audience
    type: text
    label: 'Voor wie'
  -
    handle: link
    type: url
    label: Link
---

::: box {"id":"ec","props":{"tag":"article"},"label":"Activiteit","class":"card group relative flex h-full gap-5 p-5 transition-[border-color,box-shadow] hover:border-primary/60 hover:shadow-md"}
:::: box {"id":"ec-date","class":"flex w-16 shrink-0 flex-col items-center justify-center gap-1 self-start rounded-md bg-tint py-3 text-tint-foreground"}
::::: paragraph {"id":"ec-day","props":{"tag":"span"},"bind":{"text":"props.day"},"class":"text-3xl leading-none font-bold tracking-tight"}
:::::

::::: paragraph {"id":"ec-month","props":{"tag":"span"},"bind":{"text":"props.month"},"class":"text-sm font-semibold"}
:::::
::::

:::: box {"id":"ec-text","class":"flex flex-col gap-1"}
::::: link {"id":"ec-link","bind":{"url":"props.link"},"class":"text-foreground no-underline after:absolute after:inset-0 group-hover:text-primary group-hover:underline"}
:::::: heading {"id":"ec-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-lg leading-snug"}
::::::
:::::

::::: paragraph {"id":"ec-when","props":{"tag":"p"},"bind":{"text":"props.when"},"class":"meta"}
:::::

::::: paragraph {"id":"ec-venue","props":{"tag":"p"},"bind":{"text":"props.venue","visible":"props.venue"},"class":"meta"}
:::::

::::: paragraph {"id":"ec-audience","props":{"tag":"p"},"bind":{"text":"props.audience","visible":"props.audience"},"class":"badge mt-1.5 self-start"}
:::::
::::
:::
