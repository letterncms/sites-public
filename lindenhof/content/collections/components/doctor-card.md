---
id: 01m7p2kfy69agdcgggq2vfq8pt
title: 'Kaart zorgverlener'
status: published
published_at: '2026-11-18T01:58:41+01:00'
position: 10
synced: true
category: Kaarten
description: 'Een zorgverlener in een lijst: foto, naam, functie en of hij of zij nieuwe patiënten ziet, gelinkt aan het profiel.'
props:
  -
    handle: name
    type: text
    label: Naam
    default: 'dr. Arjun Mehta'
  -
    handle: role
    type: text
    label: Functie
    default: Cardioloog
  -
    handle: photo
    type: media
    label: Foto
    max: 1
  -
    handle: link
    type: url
    label: Link
  -
    handle: new_patients
    type: toggle
    label: 'Neemt nieuwe patiënten aan'
    default: true
---

::: box {"id":"dc","props":{"tag":"article"},"label":"Zorgverlener","class":"group relative flex h-full flex-col gap-4"}
:::: box {"id":"dc-frame","class":"leaf-sm relative aspect-4/5 bg-surface"}
::::: image {"id":"dc-photo","props":{"aspect":"4/5","sizes":"(min-width: 80rem) 18rem, (min-width: 40rem) 45vw, 90vw","alt":""},"bind":{"image":"props.photo","visible":"props.photo"},"class":"size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"}
:::::

::::: box {"id":"dc-nophoto","bind":{"hidden":"props.photo"},"class":"flex size-full items-center justify-center bg-tint"}
:::::: icon {"id":"dc-nophoto-i","props":{"icon":"user"},"attrs":{"aria-hidden":"true"},"class":"size-20 text-primary/40"}
::::::
:::::
::::

:::: box {"id":"dc-text","class":"flex flex-col gap-0.5"}
::::: link {"id":"dc-link","bind":{"url":"props.link"},"class":"text-foreground no-underline after:absolute after:inset-0 group-hover:text-primary group-hover:underline"}
:::::: heading {"id":"dc-name","props":{"level":"3"},"bind":{"text":"props.name"},"class":"text-lg leading-snug"}
::::::
:::::

::::: paragraph {"id":"dc-role","props":{"tag":"p"},"bind":{"text":"props.role"},"class":"text-[0.9375rem] text-muted"}
:::::

::::: paragraph {"id":"dc-new","props":{"text":"Neemt nieuwe patiënten aan","tag":"p"},"bind":{"visible":"props.new_patients"},"class":"badge mt-2 self-start"}
:::::
::::
:::
