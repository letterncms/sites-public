---
title: Sectiekop
status: published
position: 0
category: Site
description: 'De kop van een sectie: een titel, en rechts een link naar alles.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Nieuws uit de stad'
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
:::: heading {"id":"sh-title","props":{"level":"2"},"bind":{"text":"props.title"},"class":"max-w-2xl"}
::::

:::: link {"id":"sh-link","bind":{"label":"props.label","url":"props.url","visible":"props.label"},"class":"arrow-link"}
::::
:::
