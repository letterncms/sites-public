---
id: 01m9a0e1sjq6j9c1dhs7ys2t9x
title: 'Event Card'
status: published
position: 0
category: Cards
description: 'An event: a date badge, its title, when and where.'
props:
  -
    handle: title
    type: text
    label: Title
    default: 'Winter market on Market Square'
  -
    handle: url
    type: url
    label: Link
  -
    handle: day
    type: text
    label: Day
    default: '12'
  -
    handle: month
    type: text
    label: Month
    default: Dec
  -
    handle: when
    type: text
    label: When
    default: 'Saturday 12 December, 10:00'
  -
    handle: venue
    type: text
    label: Venue
---

::: box {"id":"ec","bind":{"link":"props.url"},"class":"group flex items-start gap-5 rounded-xl py-1 text-foreground no-underline"}
:::: box {"id":"ec-date","attrs":{"aria-hidden":"true"},"class":"date-badge"}
::::: paragraph {"id":"ec-day","props":{"tag":"span"},"bind":{"text":"props.day"},"class":"text-2xl font-bold"}
:::::

::::: paragraph {"id":"ec-month","props":{"tag":"span"},"bind":{"text":"props.month"},"class":"mt-1 text-xs font-bold uppercase"}
:::::
::::

:::: box {"id":"ec-body","class":"flex flex-col gap-1"}
::::: heading {"id":"ec-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl group-hover:text-primary group-hover:underline"}
:::::

::::: paragraph {"id":"ec-when","props":{"tag":"p"},"bind":{"text":"props.when"},"class":"text-base font-bold"}
:::::

::::: paragraph {"id":"ec-venue","props":{"tag":"p"},"bind":{"text":"props.venue","visible":"props.venue"},"class":"flex items-center gap-1.5 text-base text-muted"}
:::::
::::
:::
