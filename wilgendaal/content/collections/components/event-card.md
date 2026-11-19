---
id: 01m9a0j2py3qw8q2w456m5e2kg
title: Activiteitkaart
status: published
position: 0
category: Kaarten
description: 'Een activiteit: een staande foto, wanneer, de titel en waar.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Kerstmarkt op de Grote Markt'
  -
    handle: url
    type: url
    label: Link
  -
    handle: image
    type: media
    label: Foto
    max: 1
  -
    handle: when
    type: text
    label: Wanneer
    default: 'zaterdag 12 december, 10 uur'
  -
    handle: venue
    type: text
    label: Waar
---

::: box {"id":"ec","bind":{"link":"props.url"},"class":"group flex flex-col gap-4 text-foreground no-underline"}
:::: box {"id":"ec-photo","class":"zoom bg-surface"}
::::: image {"id":"ec-img","props":{"aspect":"4/5"},"bind":{"image":"props.image"},"class":"aspect-[4/5] w-full object-cover"}
:::::

::::

:::: box {"id":"ec-body","class":"flex flex-col gap-1"}
::::: heading {"id":"ec-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl leading-snug group-hover:underline"}
:::::

::::: paragraph {"id":"ec-when","props":{"tag":"p"},"bind":{"text":"props.when"},"class":"order-first text-sm font-semibold"}
:::::

::::: paragraph {"id":"ec-venue","props":{"tag":"p"},"bind":{"text":"props.venue","visible":"props.venue"},"class":"text-sm text-muted"}
:::::
::::
:::
