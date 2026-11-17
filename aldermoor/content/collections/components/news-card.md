---
id: 01m9a0zw9wjktbf17158j50vt8
title: 'News Card'
status: published
position: 0
category: Cards
description: 'A news article: its photo, kind, date, title and summary.'
props:
  -
    handle: title
    type: text
    label: Title
    default: 'New cycle route opens along the river'
  -
    handle: summary
    type: textarea
    label: Summary
  -
    handle: url
    type: url
    label: Link
  -
    handle: image
    type: media
    label: Photo
    max: 1
  -
    handle: kind
    type: text
    label: Kind
  -
    handle: date
    type: text
    label: Date
    default: '12 November 2026'
---

::: box {"id":"nc","bind":{"link":"props.url"},"class":"group flex flex-col gap-4 text-foreground no-underline hover:[&_h3]:text-primary hover:[&_h3]:underline"}
:::: box {"id":"nc-photo","bind":{"visible":"props.image"},"class":"photo"}
::::: image {"id":"nc-img","props":{"aspect":"3/2"},"bind":{"image":"props.image"},"class":"aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"}
:::::
::::

:::: box {"id":"nc-body","class":"flex flex-col gap-3"}
::::: box {"id":"nc-meta","class":"flex flex-wrap items-center gap-3"}
:::::: paragraph {"id":"nc-kind","props":{"tag":"span"},"bind":{"text":"props.kind","visible":"props.kind"},"class":"tag"}
::::::

:::::: paragraph {"id":"nc-date","props":{"tag":"time"},"bind":{"text":"props.date"},"class":"meta"}
::::::
:::::

::::: heading {"id":"nc-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl"}
:::::

::::: paragraph {"id":"nc-summary","props":{"tag":"p"},"bind":{"text":"props.summary","visible":"props.summary"},"class":"text-base text-muted line-clamp-3"}
:::::
::::
:::
