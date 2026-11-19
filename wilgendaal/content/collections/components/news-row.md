---
title: 'Nieuws in een rij'
status: published
position: 0
category: Kaarten
description: 'Een nieuwsbericht als smalle kaart: een vierkante foto, de soort en de datum, en de titel.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Nieuwe fietsstraat langs de Mere'
  -
    handle: url
    type: url
    label: Link
  -
    handle: image
    type: media
    label: Foto
    max: 1
  -
    handle: kind
    type: text
    label: Soort
  -
    handle: date
    type: text
    label: Datum
    default: '12 november 2026'
---

::: box {"id":"nr","bind":{"link":"props.url"},"class":"group card flex-row items-center gap-5 p-3 pr-5"}
:::: box {"id":"nr-photo","class":"zoom size-24 shrink-0 overflow-hidden rounded-lg bg-surface sm:size-28"}
::::: image {"id":"nr-img","props":{"aspect":"1/1","sizes":"7rem"},"bind":{"image":"props.image"},"class":"size-full object-cover"}
:::::
::::

:::: box {"id":"nr-text","class":"flex min-w-0 flex-col gap-1.5"}
::::: box {"id":"nr-meta","class":"flex gap-3 text-sm text-muted"}
:::::: paragraph {"id":"nr-kind","props":{"tag":"span"},"bind":{"text":"props.kind","visible":"props.kind"},"class":"font-semibold text-foreground"}
::::::

:::::: paragraph {"id":"nr-date","props":{"tag":"time"},"bind":{"text":"props.date"}}
::::::
:::::

::::: heading {"id":"nr-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl leading-snug group-hover:underline"}
:::::
::::
:::
