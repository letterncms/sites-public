---
title: 'Kruimelpad naar een overzicht'
status: published
position: 0
category: Site
description: 'Home en het overzicht waar deze pagina bij hoort, zoals Nieuws of een thema.'
props:
  -
    handle: label
    type: text
    label: Overzicht
  -
    handle: url
    type: url
    label: Link
---

::: box {"id":"cr","props":{"tag":"nav"},"label":"Kruimelpad","attrs":{"aria-label":"Kruimelpad"}}
:::: box {"id":"cr-list","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::: box {"id":"cr-home-item","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['/'] last:after:hidden"}
:::::: link {"id":"cr-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::
:::::

::::: box {"id":"cr-item","props":{"tag":"li"},"bind":{"visible":"props.label"},"class":"flex items-center gap-2 after:text-muted after:content-['/'] last:after:hidden"}
:::::: link {"id":"cr-link","bind":{"label":"props.label","url":"props.url"},"class":"text-link text-foreground"}
::::::
:::::
::::
:::
