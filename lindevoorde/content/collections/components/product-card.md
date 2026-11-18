---
id: 01m9a02g2k58q8dh7773rm69ec
title: Productkaart
status: published
position: 0
category: Kaarten
description: 'Een product of pagina: titel en korte uitleg, met een link.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Identiteitskaart aanvragen'
  -
    handle: summary
    type: textarea
    label: 'Korte uitleg'
  -
    handle: url
    type: url
    label: Link
---

::: box {"id":"pc","bind":{"link":"props.url"},"class":"card group gap-2"}
:::: box {"id":"pc-head","class":"flex items-start justify-between gap-4"}
::::: heading {"id":"pc-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl text-foreground group-hover:text-primary"}
:::::

::::: icon {"id":"pc-arrow","props":{"icon":"arrow-up-right"},"class":"size-5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"}
:::::
::::

:::: paragraph {"id":"pc-summary","props":{"tag":"p"},"bind":{"text":"props.summary","visible":"props.summary"},"class":"text-base text-muted"}
::::
:::
