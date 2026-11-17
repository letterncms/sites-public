---
id: 01m7nnfjmc4vrktkjs4mh8tcp5
title: 'Doctor Card'
status: published
published_at: '2026-11-17T21:09:22+00:00'
position: 11
synced: true
category: Cards
description: 'A doctor in a list: photo, name, role and whether they see new patients, linked to their profile.'
props:
  -
    handle: name
    type: text
    label: Name
    default: 'Dr Arjun Mehta'
  -
    handle: role
    type: text
    label: Role
    default: Cardiologist
  -
    handle: photo
    type: media
    label: Photo
    max: 1
  -
    handle: link
    type: url
    label: Link
  -
    handle: new_patients
    type: toggle
    label: 'Sees New Patients'
    default: true
---

::: box {"id":"dc","props":{"tag":"article"},"label":"Doctor","class":"group relative flex h-full flex-col gap-4"}
:::: box {"id":"dc-frame","class":"relative aspect-4/5 overflow-hidden rounded-lg bg-surface"}
::::: image {"id":"dc-photo","props":{"aspect":"4/5","sizes":"(min-width: 80rem) 20rem, (min-width: 40rem) 45vw, 90vw","alt":""},"bind":{"image":"props.photo","visible":"props.photo"},"class":"size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"}
:::::

::::: box {"id":"dc-nophoto","bind":{"hidden":"props.photo"},"class":"flex size-full items-center justify-center text-muted"}
:::::: icon {"id":"dc-nophoto-icon","props":{"icon":"user"},"attrs":{"aria-hidden":"true"},"class":"size-16 opacity-40"}
::::::
:::::
::::

:::: box {"id":"dc-text","class":"flex flex-col gap-1"}
::::: link {"id":"dc-link","bind":{"url":"props.link"},"class":"text-foreground no-underline after:absolute after:inset-0 group-hover:text-primary"}
:::::: heading {"id":"dc-name","props":{"level":"3"},"bind":{"text":"props.name"},"class":"text-lg leading-snug"}
::::::
:::::

::::: paragraph {"id":"dc-role","props":{"tag":"p"},"bind":{"text":"props.role"},"class":"text-muted"}
:::::

::::: paragraph {"id":"dc-new","props":{"text":"Sees new patients","tag":"p"},"bind":{"visible":"props.new_patients"},"class":"badge mt-2 self-start bg-mint text-mint-foreground"}
:::::
::::
:::
