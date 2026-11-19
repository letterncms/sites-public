---
id: 01m9a0j2py3qw8q2w456m5e2kg
title: Activiteitkaart
status: published
position: 0
category: Kaarten
description: 'Een activiteit: een staande foto met de datum in een tab, de titel, wanneer en waar.'
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
  -
    handle: day
    type: text
    label: Dag
    default: '12'
  -
    handle: month
    type: text
    label: Maand
    default: dec.
---

::: box {"id":"ec","bind":{"link":"props.url"},"class":"group flex flex-col gap-4 text-foreground no-underline"}
:::: box {"id":"ec-media","class":"relative"}
::::: box {"id":"ec-photo","class":"zoom photo"}
:::::: image {"id":"ec-img","props":{"aspect":"4/5","sizes":"(min-width: 64rem) 22vw, (min-width: 40rem) 45vw, 90vw"},"bind":{"image":"props.image"},"class":"aspect-[4/5] w-full object-cover max-sm:aspect-[4/3]"}
::::::
:::::

::::: box {"id":"ec-date","bind":{"visible":"props.day"},"class":"notch date-badge items-start! pt-3 pr-4 pb-0 pl-0 [--notch-r:var(--radius-lg)]"}
:::::: paragraph {"id":"ec-day","props":{"tag":"span"},"bind":{"text":"props.day"},"class":"text-4xl font-medium"}
::::::

:::::: paragraph {"id":"ec-month","props":{"tag":"span"},"bind":{"text":"props.month"},"class":"mt-1 font-sans text-sm font-semibold"}
::::::
:::::
::::

:::: box {"id":"ec-body","class":"flex flex-col gap-1"}
::::: heading {"id":"ec-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl leading-snug group-hover:underline"}
:::::

::::: paragraph {"id":"ec-when","props":{"tag":"p"},"bind":{"text":"props.when"},"class":"order-first text-sm font-semibold text-accent-text first-letter:uppercase"}
:::::

::::: paragraph {"id":"ec-venue","props":{"tag":"p"},"bind":{"text":"props.venue","visible":"props.venue"},"class":"text-sm text-muted"}
:::::
::::
:::
