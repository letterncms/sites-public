---
title: Hulpvlak
status: published
position: 0
category: Site
description: 'Waar je terechtkunt: een titel, een knop en het telefoonnummer van de stad. Smal onder elkaar, breed naast elkaar.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: 'Hulp nodig?'
  -
    handle: text
    type: textarea
    label: Tekst
  -
    handle: label
    type: text
    label: Knoptekst
    default: 'Stel je vraag'
  -
    handle: url
    type: url
    label: Link
    default: /contact
---

::: box {"id":"hp","label":"Hulpvlak","class":"@container bg-surface"}
:::: box {"id":"hp-inner","class":"flex flex-col items-start gap-5 p-6 @2xl:flex-row @2xl:items-center @2xl:justify-between @2xl:gap-10 @2xl:p-10"}
::::: box {"id":"hp-text","class":"flex max-w-xl flex-col gap-2"}
:::::: heading {"id":"hp-title","props":{"level":"2"},"bind":{"text":"props.title"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"hp-body","props":{"tag":"p"},"bind":{"text":"props.text","visible":"props.text"},"class":"text-base text-muted"}
::::::
:::::

::::: box {"id":"hp-actions","class":"flex shrink-0 flex-wrap items-center gap-3"}
:::::: button {"id":"hp-action","props":{"label":"Stel je vraag","url":"/contact","variant":"primary"},"bind":{"label":"props.label","url":"props.url"}}
::::::

:::::: button {"id":"hp-call","props":{"label":"Bel ons","url":"#","variant":"secondary","icon":"phone"},"bind":{"label":"Bel {globals.city.phone}","url":"tel:{globals.city.phone_link}"}}
::::::
:::::
::::
:::
