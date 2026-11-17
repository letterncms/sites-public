---
id: 01m9a0pzjnwapxvj5styweh9r6
title: 'Person Card'
status: published
position: 0
category: Cards
description: 'A member of the council or the executive: photo, name, role and responsibilities.'
props:
  -
    handle: name
    type: text
    label: Name
    default: Councillor
  -
    handle: role
    type: text
    label: Role
  -
    handle: portfolio
    type: text
    label: 'Responsible For'
  -
    handle: photo
    type: media
    label: Photo
    max: 1
  -
    handle: url
    type: url
    label: Link
---

::: box {"id":"pc","bind":{"link":"props.url"},"class":"group flex flex-col gap-4 text-foreground no-underline"}
:::: box {"id":"pc-photo","class":"photo"}
::::: image {"id":"pc-img","props":{"aspect":"4/5"},"bind":{"image":"props.photo"},"class":"aspect-[4/5] w-full object-cover"}
:::::
::::

:::: box {"id":"pc-body","class":"flex flex-col gap-1"}
::::: heading {"id":"pc-name","props":{"level":"3"},"bind":{"text":"props.name"},"class":"text-xl group-hover:text-primary group-hover:underline"}
:::::

::::: paragraph {"id":"pc-role","props":{"tag":"p"},"bind":{"text":"props.role"},"class":"text-base font-bold text-primary"}
:::::

::::: paragraph {"id":"pc-portfolio","props":{"tag":"p"},"bind":{"text":"props.portfolio","visible":"props.portfolio"},"class":"text-base text-muted"}
:::::
::::
:::
