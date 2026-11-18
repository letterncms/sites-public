---
id: 01m7p3g24e9v8cd0ywn1f9k53b
title: 'Kaart nieuws'
status: published
published_at: '2026-11-18T02:14:18+01:00'
position: 11
synced: true
category: Kaarten
description: 'Een nieuwsbericht in een lijst: foto, onderwerp, datum en titel, gelinkt aan het bericht.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Nieuwe, stillere MRI-scanner'
  -
    handle: image
    type: media
    label: Foto
    max: 1
  -
    handle: link
    type: url
    label: Link
  -
    handle: date
    type: text
    label: Datum
  -
    handle: topic
    type: text
    label: Onderwerp
  -
    handle: large
    type: toggle
    label: Groot
    default: false
---

::: box {"id":"nc","props":{"tag":"article"},"label":"Bericht","class":"group relative flex h-full flex-col gap-5"}
:::: image {"id":"nc-photo","props":{"aspect":"3/2","sizes":"(min-width: 64rem) 36rem, 100vw","alt":""},"bind":{"image":"props.image","visible":"props.image"},"class":"leaf-sm [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.03]"}
::::

:::: box {"id":"nc-text","class":"flex flex-col gap-2"}
::::: box {"id":"nc-meta","class":"flex flex-wrap gap-x-3 text-sm"}
:::::: paragraph {"id":"nc-topic","props":{"tag":"span"},"bind":{"text":"props.topic","visible":"props.topic"},"class":"font-semibold text-primary"}
::::::

:::::: paragraph {"id":"nc-date","props":{"tag":"span"},"bind":{"text":"props.date"},"class":"text-muted"}
::::::
:::::

::::: link {"id":"nc-link","bind":{"url":"props.link"},"class":"text-foreground no-underline after:absolute after:inset-0 group-hover:text-primary group-hover:underline"}
:::::: heading {"id":"nc-title","props":{"level":"3"},"bind":{"text":"props.title","state:large":"props.large"},"class":"text-xl leading-snug data-large:text-3xl"}
::::::
:::::
::::
:::
