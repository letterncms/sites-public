---
id: 01m9a034ypy8w4hs3pfw151m8a
title: 'Activiteit in een lijst'
status: published
position: 0
category: Kaarten
description: 'Een activiteit in een smalle lijst: datum, titel, wanneer en waar.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: Repaircafé
  -
    handle: url
    type: url
    label: Link
  -
    handle: day
    type: text
    label: Dag
    default: '16'
  -
    handle: month
    type: text
    label: Maand
    default: jan
  -
    handle: when
    type: text
    label: Wanneer
  -
    handle: venue
    type: text
    label: Waar
---

::: box {"id":"er","bind":{"link":"props.url"},"class":"group flex items-start gap-5 text-foreground no-underline"}
:::: box {"id":"er-date","attrs":{"aria-hidden":"true"},"class":"date-badge"}
::::: paragraph {"id":"er-day","props":{"tag":"span"},"bind":{"text":"props.day"},"class":"text-2xl font-semibold"}
:::::

::::: paragraph {"id":"er-month","props":{"tag":"span"},"bind":{"text":"props.month"},"class":"mt-1 text-xs font-semibold"}
:::::
::::

:::: box {"id":"er-body","class":"flex flex-col gap-1"}
::::: heading {"id":"er-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl group-hover:text-primary"}
:::::

::::: paragraph {"id":"er-when","props":{"tag":"p"},"bind":{"text":"props.when"},"class":"text-base font-medium"}
:::::

::::: paragraph {"id":"er-venue","props":{"tag":"p"},"bind":{"text":"props.venue","visible":"props.venue"},"class":"text-base text-muted"}
:::::
::::
:::
