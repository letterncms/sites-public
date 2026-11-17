---
id: 01m7nnfjmc4vrktkjs4mh8tcp4
title: 'Specialty Card'
status: published
published_at: '2026-11-17T21:09:22+00:00'
position: 10
synced: true
category: Cards
description: 'A specialty in a list: its icon in its area’s colour, its name and what it cares for, linked to its page.'
props:
  -
    handle: title
    type: text
    label: Title
    default: Cardiology
  -
    handle: summary
    type: textarea
    label: Summary
    default: 'Care for your heart and blood vessels, from a first check to surgery.'
  -
    handle: icon
    type: icon
    label: Icon
    default: heartbeat
  -
    handle: link
    type: url
    label: Link
  -
    handle: colour
    type: text
    label: Colour
    default: rose
---

::: box {"id":"sc","props":{"tag":"article"},"label":"Specialty","bind":{"state:mint":"props.colour|is:mint","state:sky":"props.colour|is:sky","state:lilac":"props.colour|is:lilac","state:peach":"props.colour|is:peach","state:sun":"props.colour|is:sun","state:rose":"props.colour|is:rose"},"class":"card-link group relative flex h-full flex-col gap-4 p-6"}
:::: icon {"id":"sc-icon","attrs":{"aria-hidden":"true"},"bind":{"icon":"props.icon"},"class":"icon-tile in-data-mint:scheme-mint in-data-sky:scheme-sky in-data-lilac:scheme-lilac in-data-peach:scheme-peach in-data-sun:scheme-sun in-data-rose:scheme-rose"}
::::

:::: link {"id":"sc-link","bind":{"url":"props.link"},"class":"text-foreground no-underline after:absolute after:inset-0 after:rounded-lg group-hover:text-primary"}
::::: heading {"id":"sc-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-xl"}
:::::
::::

:::: paragraph {"id":"sc-summary","props":{"tag":"p"},"bind":{"text":"props.summary","visible":"props.summary"},"class":"text-[0.9375rem] leading-[1.5] text-muted"}
::::
:::
