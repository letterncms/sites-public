---
title: 'Kaart met icoon'
status: published
position: 0
category: Kaarten
description: 'Een icoon, een titel en eventueel een zin uitleg, onder een lijn, als één link.'
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

::: box {"id":"tc","bind":{"link":"props.url"},"class":"group flex h-full flex-col gap-2 border-t border-rule pt-5 pb-8 text-foreground no-underline"}
:::: icon {"id":"tc-icon","bind":{"icon":"props.icon"},"class":"mb-3 size-7 text-foreground"}
::::

:::: paragraph {"id":"tc-title","props":{"tag":"span"},"bind":{"text":"props.title"},"class":"font-display text-xl font-medium leading-snug group-hover:underline"}
::::

:::: paragraph {"id":"tc-summary","props":{"tag":"span"},"bind":{"text":"props.summary","visible":"props.summary"},"class":"text-base text-muted"}
::::
:::
