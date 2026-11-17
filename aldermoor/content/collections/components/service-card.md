---
id: 01m9a0e0x7njzcf4fcsepa68f1
title: 'Service Card'
status: published
position: 0
category: Cards
description: 'A service or a page: its title and summary, linking to it.'
props:
  -
    handle: title
    type: text
    label: Title
    default: 'Apply for a parking permit'
  -
    handle: summary
    type: textarea
    label: Summary
  -
    handle: url
    type: url
    label: Link
---

::: box {"id":"sc","bind":{"link":"props.url"},"class":"card group gap-2"}
:::: heading {"id":"sc-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl text-primary group-hover:underline"}
::::

:::: paragraph {"id":"sc-summary","props":{"tag":"p"},"bind":{"text":"props.summary","visible":"props.summary"},"class":"text-base text-muted"}
::::
:::
