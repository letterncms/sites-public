---
id: 01m7nnfjmc4vrktkjs4mh8tcp6
title: 'News Card'
status: published
published_at: '2026-11-17T21:09:22+00:00'
position: 12
synced: true
category: Cards
description: 'A story in a list: its photo, topic, date and title, linked to the story.'
props:
  -
    handle: title
    type: text
    label: Title
    default: 'A quieter, faster MRI scanner'
  -
    handle: image
    type: media
    label: Image
    max: 1
  -
    handle: link
    type: url
    label: Link
  -
    handle: date
    type: text
    label: Date
    default: '12 November 2026'
  -
    handle: topic
    type: text
    label: Topic
    default: 'Hospital news'
---

::: box {"id":"nc","props":{"tag":"article"},"label":"Story","class":"group relative flex h-full flex-col gap-4"}
:::: image {"id":"nc-image","props":{"aspect":"3/2","sizes":"(min-width: 80rem) 26rem, (min-width: 48rem) 45vw, 90vw","alt":""},"bind":{"image":"props.image","visible":"props.image"},"class":"overflow-hidden rounded-lg [&_img]:transition-transform [&_img]:duration-500 [&_img]:ease-out group-hover:[&_img]:scale-[1.03]"}
::::

:::: box {"id":"nc-meta","class":"meta flex flex-wrap items-center gap-x-2"}
::::: paragraph {"id":"nc-topic","props":{"tag":"span"},"bind":{"text":"props.topic","visible":"props.topic"},"class":"font-semibold text-primary"}
:::::

::::: paragraph {"id":"nc-dot","props":{"text":"·","tag":"span"},"attrs":{"aria-hidden":"true"},"bind":{"visible":"props.topic"}}
:::::

::::: paragraph {"id":"nc-date","props":{"tag":"span"},"bind":{"text":"props.date"}}
:::::
::::

:::: link {"id":"nc-link","bind":{"url":"props.link"},"class":"text-foreground no-underline after:absolute after:inset-0 group-hover:text-primary group-hover:underline"}
::::: heading {"id":"nc-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl leading-snug"}
:::::
::::
:::
