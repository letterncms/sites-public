---
id: 01m9a0p165r1rsbqva3hzvtks1
title: Nieuwskaart
status: published
position: 0
category: Kaarten
description: 'Een nieuwsbericht: foto, soort, datum, titel en korte inhoud.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Nieuwe fietsstraat langs de Voorde'
  -
    handle: summary
    type: textarea
    label: 'Korte inhoud'
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

::: box {"id":"nc","bind":{"link":"props.url"},"class":"group flex flex-col gap-5 text-foreground no-underline"}
:::: box {"id":"nc-photo","bind":{"visible":"props.image"},"class":"photo"}
::::: image {"id":"nc-img","props":{"aspect":"4/3"},"bind":{"image":"props.image"},"class":"aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"}
:::::
::::

:::: box {"id":"nc-body","class":"flex flex-col gap-3"}
::::: box {"id":"nc-meta","class":"flex flex-wrap items-center gap-3"}
:::::: paragraph {"id":"nc-kind","props":{"tag":"span"},"bind":{"text":"props.kind","visible":"props.kind"},"class":"tag"}
::::::

:::::: paragraph {"id":"nc-date","props":{"tag":"time"},"bind":{"text":"props.date"},"class":"meta"}
::::::
:::::

::::: heading {"id":"nc-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-2xl group-hover:text-primary"}
:::::

::::: paragraph {"id":"nc-summary","props":{"tag":"p"},"bind":{"text":"props.summary","visible":"props.summary"},"class":"line-clamp-3 text-base text-muted"}
:::::
::::
:::
