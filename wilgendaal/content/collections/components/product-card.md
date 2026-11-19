---
id: 01m9a02g2k58q8dh7773rm69ec
title: Dienstkaart
status: published
position: 0
category: Kaarten
description: 'Een dienst of pagina onder een lijn: titel, korte uitleg en of het online kan, met een pijl. Als één link.'
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
---

::: box {"id":"pc","bind":{"link":"props.url"},"class":"group relative flex h-full flex-col items-start gap-2 border-t border-rule pt-5 pb-7 pr-12 text-foreground no-underline"}
:::: heading {"id":"pc-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl group-hover:underline"}
::::

:::: paragraph {"id":"pc-summary","props":{"tag":"p"},"bind":{"text":"props.summary","visible":"props.summary"},"class":"line-clamp-2 text-base text-muted"}
::::

:::: paragraph {"id":"pc-online","props":{"tag":"span","text":"Online te regelen"},"bind":{"visible":"props.online"},"class":"tag mt-2"}
::::

:::: icon {"id":"pc-arrow","props":{"icon":"arrow-right"},"class":"absolute top-6 right-0 size-6 text-foreground"}
::::
:::
