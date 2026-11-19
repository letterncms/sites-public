---
id: 01m9a0b2ya11sv6hkm3qs0ebwp
title: 'Bekendmaking in een lijst'
status: published
position: 0
category: Kaarten
description: 'Een bekendmaking in een lijst: titel, soort en datum.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Besluitenlijst gemeenteraad'
  -
    handle: meta
    type: text
    label: 'Soort en datum'
    default: 'Besluitenlijst · 12 november 2026'
  -
    handle: url
    type: url
    label: Link
---

::: box {"id":"nr","bind":{"link":"props.url"},"class":"group flex items-start gap-4 py-5 text-foreground no-underline"}
:::: icon {"id":"nr-icon","props":{"icon":"scroll"},"class":"size-6 shrink-0 text-primary"}
::::

:::: box {"id":"nr-body","class":"flex flex-col gap-1"}
::::: heading {"id":"nr-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-lg group-hover:text-primary group-hover:underline"}
:::::

::::: paragraph {"id":"nr-meta","props":{"tag":"p"},"bind":{"text":"props.meta"},"class":"meta"}
:::::
::::
:::
