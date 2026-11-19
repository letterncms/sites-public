---
title: Levensmomentkaart
status: published
position: 0
category: Kaarten
description: 'Een levensmoment: een foto, de titel en de korte inhoud.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Je verhuist'
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
---

::: box {"id":"mc","bind":{"link":"props.url"},"class":"group flex h-full flex-col gap-5 text-foreground no-underline"}
:::: box {"id":"mc-photo","class":"zoom photo"}
::::: image {"id":"mc-img","props":{"aspect":"4/3","sizes":"(min-width: 64rem) 30vw, (min-width: 40rem) 45vw, 100vw"},"bind":{"image":"props.image"},"class":"aspect-[4/3] w-full object-cover"}
:::::

::::

:::: box {"id":"mc-body","class":"flex flex-col gap-2"}
::::: heading {"id":"mc-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-2xl group-hover:underline group-hover:decoration-2"}
:::::

::::: paragraph {"id":"mc-summary","props":{"tag":"p"},"bind":{"text":"props.summary","visible":"props.summary"},"class":"text-base text-muted"}
:::::
::::
:::
