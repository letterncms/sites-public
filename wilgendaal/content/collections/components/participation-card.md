---
id: 01m9a0ypp0whv7gj5gwt47cm00
title: Inspraakkaart
status: published
position: 0
category: Kaarten
description: 'Een inspraaktraject als kaart: of het open is, tot wanneer, waarover, en een oproep.'
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
  -
    handle: action
    type: text
    label: Oproep
    default: 'Geef je mening'
---

::: box {"id":"ic","bind":{"link":"props.url"},"class":"group card h-full gap-3"}
:::: box {"id":"ic-meta","class":"flex flex-wrap items-center gap-3"}
::::: paragraph {"id":"ic-state","props":{"tag":"span"},"bind":{"text":"props.state"},"class":"tag"}
:::::

::::: paragraph {"id":"ic-closes","props":{"tag":"span"},"bind":{"text":"props.closes","visible":"props.closes"},"class":"meta"}
:::::
::::

:::: heading {"id":"ic-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl group-hover:underline"}
::::

:::: paragraph {"id":"ic-summary","props":{"tag":"p"},"bind":{"text":"props.summary","visible":"props.summary"},"class":"text-base text-muted"}
::::

:::: paragraph {"id":"ic-cta","props":{"tag":"span"},"bind":{"text":"props.action"},"class":"arrow-link mt-auto pt-2"}
::::
:::
