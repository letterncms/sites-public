---
id: 01m9a0ypp0whv7gj5gwt47cm00
title: Inspraakkaart
status: published
position: 0
category: Kaarten
description: 'Een inspraaktraject: of het open is, tot wanneer, en waarover.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Een groenere Grote Markt'
  -
    handle: summary
    type: textarea
    label: 'Korte inhoud'
  -
    handle: url
    type: url
    label: Link
  -
    handle: state
    type: text
    label: Status
    default: Open
  -
    handle: closes
    type: text
    label: Sluit
---

::: box {"id":"ic","bind":{"link":"props.url"},"class":"card group gap-3"}
:::: box {"id":"ic-meta","class":"flex flex-wrap items-center gap-3"}
::::: paragraph {"id":"ic-state","props":{"tag":"span"},"bind":{"text":"props.state"},"class":"state text-primary"}
:::::

::::: paragraph {"id":"ic-closes","props":{"tag":"span"},"bind":{"text":"props.closes","visible":"props.closes"},"class":"meta"}
:::::
::::

:::: heading {"id":"ic-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-2xl group-hover:text-primary"}
::::

:::: paragraph {"id":"ic-summary","props":{"tag":"p"},"bind":{"text":"props.summary","visible":"props.summary"},"class":"text-base text-muted"}
::::

:::: paragraph {"id":"ic-cta","props":{"tag":"span","text":"Geef je mening"},"class":"arrow-link mt-auto pt-2"}
::::
:::
