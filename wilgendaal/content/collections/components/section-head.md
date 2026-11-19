---
title: Sectiekop
status: published
position: 0
category: Site
description: 'De kop van een sectie: een titel, eventueel een zin uitleg, en rechts een link naar alles.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Nieuws uit de stad'
  -
    handle: intro
    type: textarea
    label: Uitleg
  -
    handle: label
    type: text
    label: Linktekst
  -
    handle: url
    type: url
    label: Link
---

::: box {"id":"sh","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4"}
:::: box {"id":"sh-text","class":"flex max-w-2xl flex-col gap-4"}
::::: heading {"id":"sh-title","props":{"level":"2"},"bind":{"text":"props.title"}}
:::::

::::: paragraph {"id":"sh-intro","props":{"tag":"p"},"bind":{"text":"props.intro","visible":"props.intro"},"class":"lead"}
:::::
::::

:::: link {"id":"sh-link","bind":{"label":"props.label","url":"props.url","visible":"props.label"},"class":"arrow-link"}
::::
:::
