---
id: 01m9a0akapxq32cy9k6stx95n2
title: Persoonskaart
status: published
position: 0
category: Kaarten
description: 'Een bestuurslid: foto, naam, functie en bevoegdheden.'
props:
  -
    handle: name
    type: text
    label: Naam
    default: Schepen
  -
    handle: role
    type: text
    label: Functie
  -
    handle: portfolio
    type: text
    label: Bevoegdheden
  -
    handle: photo
    type: media
    label: Foto
    max: 1
  -
    handle: url
    type: url
    label: Link
---

::: box {"id":"pe","bind":{"link":"props.url"},"class":"group flex flex-col gap-4 text-foreground no-underline"}
:::: box {"id":"pe-photo","class":"frame"}
::::: image {"id":"pe-img","props":{"aspect":"4/5"},"bind":{"image":"props.photo"},"class":"aspect-[4/5] w-full object-cover"}
:::::
::::

:::: box {"id":"pe-body","class":"flex flex-col gap-1"}
::::: heading {"id":"pe-name","props":{"level":"3"},"bind":{"text":"props.name"},"class":"text-xl group-hover:text-primary"}
:::::

::::: paragraph {"id":"pe-role","props":{"tag":"p"},"bind":{"text":"props.role"},"class":"text-base font-semibold text-primary"}
:::::

::::: paragraph {"id":"pe-portfolio","props":{"tag":"p"},"bind":{"text":"props.portfolio","visible":"props.portfolio"},"class":"text-base text-muted"}
:::::
::::
:::
