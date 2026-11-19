---
id: 01m9a0p165r1rsbqva3hzvtks1
title: Nieuwskaart
status: published
position: 0
category: Kaarten
description: 'Een nieuwsbericht: foto met de soort en de datum in een tab, de titel en de korte inhoud. Uitgelicht met een grotere titel, voor het eerste bericht.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Nieuwe fietsstraat langs de Mere'
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
  -
    handle: featured
    type: toggle
    label: Uitgelicht
---

::: box {"id":"nc","bind":{"link":"props.url","state:featured":"props.featured"},"class":"group flex flex-col gap-5 text-foreground no-underline"}
:::: box {"id":"nc-media","class":"relative"}
::::: box {"id":"nc-photo","bind":{"visible":"props.image"},"class":"zoom photo"}
:::::: image {"id":"nc-img","props":{"aspect":"3/2","sizes":"(min-width: 64rem) 30vw, (min-width: 48rem) 45vw, 100vw"},"bind":{"image":"props.image","hidden":"props.featured"},"class":"w-full object-cover"}
::::::

:::::: image {"id":"nc-img-featured","props":{"aspect":"3/2","sizes":"(min-width: 64rem) 55vw, 100vw"},"bind":{"image":"props.image","visible":"props.featured"},"class":"w-full object-cover"}
::::::
:::::

::::: box {"id":"nc-meta","bind":{"state:photo":"props.image"},"class":"notch flex flex-wrap items-center gap-3 pt-3 pr-4 pb-0 pl-0 not-data-photo:static not-data-photo:pt-0"}
:::::: paragraph {"id":"nc-kind","props":{"tag":"span"},"bind":{"text":"props.kind","visible":"props.kind"},"class":"tag"}
::::::

:::::: paragraph {"id":"nc-date","props":{"tag":"time"},"bind":{"text":"props.date"},"class":"meta"}
::::::
:::::
::::

:::: box {"id":"nc-body","class":"flex flex-col gap-3 pt-1"}
::::: heading {"id":"nc-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-2xl group-hover:underline in-data-featured:text-3xl in-data-featured:group-hover:decoration-2"}
:::::

::::: paragraph {"id":"nc-summary","props":{"tag":"p"},"bind":{"text":"props.summary","visible":"props.summary"},"class":"line-clamp-3 text-base text-muted"}
:::::
::::
:::
