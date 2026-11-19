---
title: 'Kaart met icoon'
status: published
position: 0
category: Kaarten
description: 'Een icoon, een titel en eventueel een zin uitleg, als grijze kaart en als één link.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Afval en milieu'
  -
    handle: summary
    type: text
    label: Samenvatting
  -
    handle: url
    type: url
    label: Link
  -
    handle: icon
    type: text
    label: Icoon
    default: recycle
---

::: box {"id":"tc","bind":{"link":"props.url"},"class":"group card h-full gap-2 p-6"}
:::: icon {"id":"tc-icon","bind":{"icon":"props.icon"},"class":"mb-5 size-8 text-accent-text"}
::::

:::: paragraph {"id":"tc-title","props":{"tag":"span"},"bind":{"text":"props.title"},"class":"font-display text-xl font-medium leading-snug group-hover:underline"}
::::

:::: paragraph {"id":"tc-summary","props":{"tag":"span"},"bind":{"text":"props.summary","visible":"props.summary"},"class":"text-base text-muted"}
::::
:::
