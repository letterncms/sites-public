---
title: Pil
status: published
position: 0
category: Site
description: 'Een link als afgeronde pil, eventueel met een icoon ervoor. Blauw als je hem aanwijst.'
props:
  -
    handle: label
    type: text
    label: Tekst
    default: 'Iets melden'
  -
    handle: url
    type: url
    label: Link
  -
    handle: icon
    type: text
    label: Icoon
---

::: box {"id":"pl","bind":{"link":"props.url"},"class":"pill"}
:::: icon {"id":"pl-icon","bind":{"icon":"props.icon","visible":"props.icon"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0"}
::::

:::: paragraph {"id":"pl-label","props":{"tag":"span"},"bind":{"text":"props.label"}}
::::
:::
