---
title: Levensmomentkaart
status: published
position: 0
category: Kaarten
description: 'Een levensmoment: een foto en de titel.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Je verhuist'
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

:::: heading {"id":"mc-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl group-hover:underline group-hover:decoration-2"}
::::
:::
