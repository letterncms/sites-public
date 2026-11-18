---
id: 01m9a0j2py3qw8q2w456m5e2kg
title: Activiteitkaart
status: published
position: 0
category: Kaarten
description: 'Een activiteit: foto met de datum, titel, wanneer en waar.'
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
    default: 'zaterdag 12 december, 10 uur'
  -
    handle: venue
    type: text
    label: Waar
---

::: box {"id":"ec","bind":{"link":"props.url"},"class":"group flex flex-col gap-4 text-foreground no-underline"}
:::: box {"id":"ec-photo","class":"photo relative"}
::::: image {"id":"ec-img","props":{"aspect":"3/2"},"bind":{"image":"props.image"},"class":"aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"}
:::::

::::: box {"id":"ec-date","attrs":{"aria-hidden":"true"},"class":"date-badge absolute top-4 left-4"}
:::::: paragraph {"id":"ec-day","props":{"tag":"span"},"bind":{"text":"props.day"},"class":"text-2xl font-semibold"}
::::::

:::::: paragraph {"id":"ec-month","props":{"tag":"span"},"bind":{"text":"props.month"},"class":"mt-1 text-xs font-semibold"}
::::::
:::::
::::

:::: box {"id":"ec-body","class":"flex flex-col gap-1"}
::::: heading {"id":"ec-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl group-hover:text-primary"}
:::::

::::: paragraph {"id":"ec-when","props":{"tag":"p"},"bind":{"text":"props.when"},"class":"text-base font-medium"}
:::::

::::: paragraph {"id":"ec-venue","props":{"tag":"p"},"bind":{"text":"props.venue","visible":"props.venue"},"class":"text-base text-muted"}
:::::
::::
:::
