---
title: Locatiekaart
status: published
position: 0
category: Kaarten
description: 'Een gebouw van de stad: een foto, de naam, het adres en of het nu open is.'
props:
  -
    handle: title
    type: text
    label: Naam
    default: Stadhuis
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
    handle: address
    type: textarea
    label: Adres
  -
    handle: hours
    type: table
    label: Openingsuren
    header: false
---

::: box {"id":"lc","bind":{"link":"props.url"},"class":"group flex flex-col gap-4 text-foreground no-underline"}
:::: box {"id":"lc-photo","class":"zoom photo"}
::::: image {"id":"lc-img","props":{"aspect":"3/2","sizes":"(min-width: 64rem) 30vw, (min-width: 40rem) 45vw, 100vw"},"bind":{"image":"props.image"},"class":"w-full object-cover"}
:::::
::::

:::: box {"id":"lc-body","class":"flex flex-col gap-1"}
::::: heading {"id":"lc-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl group-hover:underline"}
:::::

::::: paragraph {"id":"lc-address","props":{"tag":"p"},"bind":{"text":"props.address","visible":"props.address"},"class":"whitespace-pre-line text-base"}
:::::

::::: component {"id":"lc-hours","props":{"ref":"hours","values":{"compact":true}},"bind":{"values.hours":"props.hours"}}
:::::
::::
:::
