---
id: 01m9a0fgqnh5se976gz2ny9sn4
title: 'Consultation Card'
status: published
position: 0
category: Cards
description: 'A consultation: whether it is open, when it closes, and what it is about.'
props:
  -
    handle: title
    type: text
    label: Title
    default: 'A greener Market Square'
  -
    handle: summary
    type: textarea
    label: Summary
  -
    handle: url
    type: url
    label: Link
  -
    handle: state
    type: text
    label: State
    default: Open
  -
    handle: closes
    type: text
    label: Closes
---

::: box {"id":"cc","bind":{"link":"props.url"},"class":"card group"}
:::: box {"id":"cc-meta","class":"flex flex-wrap items-center gap-3"}
::::: paragraph {"id":"cc-state","props":{"tag":"span"},"bind":{"text":"props.state"},"class":"state text-primary"}
:::::

::::: paragraph {"id":"cc-closes","props":{"tag":"span"},"bind":{"text":"props.closes","visible":"props.closes"},"class":"meta"}
:::::
::::

:::: heading {"id":"cc-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl text-primary group-hover:underline"}
::::

:::: paragraph {"id":"cc-summary","props":{"tag":"p"},"bind":{"text":"props.summary","visible":"props.summary"},"class":"text-base text-muted"}
::::
:::
