---
id: 01m9a02g2k58q8dh7773rm69ec
title: Dienstkaart
status: published
position: 0
category: Kaarten
description: 'Een dienst of pagina als grijze kaart: titel, korte uitleg en of het online kan, met een pijl. Als één link. Met een stap erbij staat het nummer erboven, voor diensten in volgorde.'
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
  -
    handle: online
    type: toggle
    label: 'Online te regelen'
  -
    handle: number
    type: text
    label: Stap
---

::: box {"id":"pc","bind":{"link":"props.url"},"class":"group card h-full items-start gap-2 p-6"}
:::: paragraph {"id":"pc-number","props":{"tag":"span"},"bind":{"text":"props.number","visible":"props.number"},"attrs":{"aria-hidden":"true"},"class":"stone mb-2 size-8 bg-foreground font-display text-sm font-medium text-background tabular-nums"}
::::

:::: heading {"id":"pc-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"w-full min-w-0 pr-14 text-xl group-hover:underline"}
::::

:::: paragraph {"id":"pc-summary","props":{"tag":"p"},"bind":{"text":"props.summary","visible":"props.summary"},"class":"line-clamp-2 text-base text-muted"}
::::

:::: paragraph {"id":"pc-online","props":{"tag":"span","text":"Online te regelen"},"bind":{"visible":"props.online"},"class":"tag mt-2"}
::::

:::: icon {"id":"pc-arrow","props":{"icon":"arrow-right"},"class":"go absolute top-5 right-5 size-10 p-2.5"}
::::
:::
