---
id: 01m7npd9x8g8e4hhhdejz1f4kf
title: 'Event Card'
status: published
published_at: '2026-11-17T21:25:36+00:00'
position: 13
synced: true
category: Cards
description: 'An event in a list: its date as a calendar leaf, its title, time and place, linked to the event.'
props:
  -
    handle: title
    type: text
    label: Title
    default: 'Preparing for birth'
  -
    handle: day
    type: text
    label: Day
    default: '14'
  -
    handle: month
    type: text
    label: Month
    default: Jan
  -
    handle: when
    type: text
    label: When
    default: 'Thursday 19:00'
  -
    handle: venue
    type: text
    label: Where
    default: 'Auditorium, main building'
  -
    handle: audience
    type: text
    label: For
  -
    handle: link
    type: url
    label: Link
---

::: box {"id":"ec","props":{"tag":"article"},"label":"Event","class":"card-link group relative flex items-start gap-5 p-5"}
:::: box {"id":"ec-date","class":"flex w-16 shrink-0 flex-col items-center rounded-md bg-surface py-2.5 text-center"}
::::: paragraph {"id":"ec-day","props":{"tag":"span"},"bind":{"text":"props.day"},"class":"text-2xl leading-none font-semibold tracking-tight"}
:::::

::::: paragraph {"id":"ec-month","props":{"tag":"span"},"bind":{"text":"props.month"},"class":"mt-1 text-xs font-semibold uppercase tracking-wide text-primary"}
:::::
::::

:::: box {"id":"ec-text","class":"flex min-w-0 flex-col gap-1.5"}
::::: paragraph {"id":"ec-audience","props":{"tag":"p"},"bind":{"text":"props.audience","visible":"props.audience"},"class":"text-sm font-semibold text-primary"}
:::::

::::: link {"id":"ec-link","bind":{"url":"props.link"},"class":"text-foreground no-underline after:absolute after:inset-0 after:rounded-lg group-hover:text-primary"}
:::::: heading {"id":"ec-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-lg leading-snug"}
::::::
:::::

::::: paragraph {"id":"ec-when","props":{"tag":"p"},"bind":{"text":"{props.when} · {props.venue}"},"class":"meta"}
:::::
::::
:::
