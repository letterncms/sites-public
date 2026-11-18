---
id: 01m7p3g291ay24bfsfkwnmh9fp
title: Zorgverlener
status: published
published_at: '2026-11-18T02:14:20+01:00'
position: 4
description: 'Een profiel: foto, naam en functie, diensten en of hij of zij nieuwe patiënten aanneemt, dan het verhaal naast expertise, talen, raadplegingen en opleiding.'
collections:
  - doctors
---

::: component {"id":"dr-header","props":{"ref":"header"}}
:::

::: box {"id":"dr-main","props":{"tag":"main"},"label":"Inhoud","anchor":"main"}
:::: box {"id":"dr-band","props":{"tag":"header"},"label":"Titel","class":"scheme-surface"}
::::: box {"id":"dr-band-in","class":"mx-auto grid max-w-content grid-cols-12 items-center gap-x-columns gap-y-8 px-gutter pt-8 pb-12"}
:::::: box {"id":"dr-photo-frame","class":"leaf col-span-4 aspect-4/5 max-lg:col-span-5 max-md:col-span-full max-md:w-2/3"}
::::::: image {"id":"dr-photo","props":{"aspect":"4/5","priority":true,"sizes":"(min-width: 64rem) 22rem, 60vw","alt":""},"bind":{"image":"entry.photo","visible":"entry.photo"},"class":"size-full object-cover"}
:::::::

::::::: box {"id":"dr-nophoto","bind":{"hidden":"entry.photo"},"class":"flex size-full items-center justify-center bg-tint"}
:::::::: icon {"id":"dr-nophoto-i","props":{"icon":"user"},"attrs":{"aria-hidden":"true"},"class":"size-24 text-primary/40"}
::::::::
:::::::
::::::

:::::: box {"id":"dr-text","class":"col-span-8 flex flex-col items-start gap-4 max-lg:col-span-7 max-md:col-span-full"}
::::::: box {"id":"dr-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Kruimelpad"}}
:::::::: box {"id":"dr-crumbs-l","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
::::::::: box {"id":"dr-c0","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"dr-c0-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::

::::::::: box {"id":"dr-c1","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: icon {"id":"dr-c1-s","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
::::::::::

:::::::::: link {"id":"dr-c1-a","props":{"label":"Zorgverleners","url":"entry:01m7p3g28ph31zyqzvh74hae5f"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::
::::::::
:::::::

::::::: paragraph {"id":"dr-honorific","props":{"tag":"p"},"bind":{"text":"entry.honorific","visible":"entry.honorific"},"class":"eyebrow"}
:::::::

::::::: heading {"id":"dr-name","props":{"level":"1"},"bind":{"text":"entry.title"},"class":"rule -mt-3"}
:::::::

::::::: paragraph {"id":"dr-role","props":{"tag":"p"},"bind":{"text":"entry.role"},"class":"lede"}
:::::::

::::::: repeat {"id":"dr-sp","props":{"source":"list","path":"entry.specialties","tag":"ul"},"attrs":{"aria-label":"Diensten"},"class":"flex flex-wrap gap-2"}
:::::::: box {"id":"dr-sp-li","props":{"tag":"li"}}
::::::::: link {"id":"dr-sp-a","bind":{"label":"item.title","url":"item.url"},"class":"chip"}
:::::::::
::::::::
:::::::

::::::: box {"id":"dr-new","bind":{"visible":"entry.new_patients"},"class":"badge px-3 py-1.5 text-sm"}
:::::::: icon {"id":"dr-new-i","props":{"icon":"check-circle"},"attrs":{"aria-hidden":"true"},"class":"size-5"}
::::::::

:::::::: paragraph {"id":"dr-new-t","props":{"text":"Neemt nieuwe patiënten aan","tag":"span"}}
::::::::
:::::::

::::::: buttons {"id":"dr-actions","class":"pt-2"}
:::::::: button {"id":"book","props":{"label":"Afspraak maken","url":"entry:01m7p3g28ph31zyqzvh74hae61","variant":"primary","size":"lg"}}
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"dr-layout","class":"mx-auto grid max-w-content grid-cols-12 gap-x-columns gap-y-10 px-gutter pt-blocks"}
::::: outlet {"id":"dr-body","props":{"wrap":true,"prose":true},"class":"col-span-7 max-lg:col-span-full"}
:::::

::::: box {"id":"dr-aside","props":{"tag":"aside"},"attrs":{"aria-label":"Over deze zorgverlener"},"class":"col-span-4 col-start-9 self-start max-lg:col-span-full max-lg:col-start-1"}
:::::: box {"id":"dr-facts","props":{"tag":"dl"},"class":"card flex flex-col gap-5"}
::::::: box {"id":"dr-f-exp","bind":{"visible":"entry.expertise"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"dr-f-exp-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"dr-f-exp-i","props":{"icon":"star"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"dr-f-exp-l","props":{"text":"Expertise","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"dr-f-exp-v","props":{"tag":"dd"},"bind":{"text":"entry.expertise"},"class":"pl-7 font-medium"}
::::::::
:::::::

::::::: box {"id":"dr-f-lang","bind":{"visible":"entry.languages"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"dr-f-lang-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"dr-f-lang-i","props":{"icon":"translate"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"dr-f-lang-l","props":{"text":"Spreekt","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"dr-f-lang-v","props":{"tag":"dd"},"bind":{"text":"entry.languages"},"class":"pl-7 font-medium"}
::::::::
:::::::

::::::: box {"id":"dr-f-clin","bind":{"visible":"entry.clinics"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"dr-f-clin-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"dr-f-clin-i","props":{"icon":"calendar-blank"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"dr-f-clin-l","props":{"text":"Raadplegingen","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"dr-f-clin-v","props":{"tag":"dd"},"bind":{"text":"entry.clinics"},"class":"pl-7 font-medium whitespace-pre-line"}
::::::::
:::::::

::::::: box {"id":"dr-f-edu","bind":{"visible":"entry.education"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"dr-f-edu-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"dr-f-edu-i","props":{"icon":"graduation-cap"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"dr-f-edu-l","props":{"text":"Opleiding","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"dr-f-edu-v","props":{"tag":"dd"},"bind":{"text":"entry.education"},"class":"pl-7 font-medium whitespace-pre-line"}
::::::::
:::::::
::::::
:::::
::::
:::

::: component {"id":"dr-footer","props":{"ref":"footer"}}
:::
