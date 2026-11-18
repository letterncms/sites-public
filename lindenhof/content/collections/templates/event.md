---
id: 01m7p2kg0ecx0zgp2a8q1qegdp
title: Activiteit
status: published
published_at: '2026-11-18T01:58:43+01:00'
position: 7
description: 'Wanneer en waar, voor wie en wat het kost, de uitleg, en het formulier om je in te schrijven.'
collections:
  - events
---

::: component {"id":"ev-header","props":{"ref":"header"}}
:::

::: box {"id":"ev-main","props":{"tag":"main"},"label":"Inhoud","anchor":"main"}
:::: box {"id":"ev-band","props":{"tag":"header"},"label":"Titel","class":"scheme-surface"}
::::: box {"id":"ev-band-in","class":"mx-auto grid max-w-content grid-cols-12 items-center gap-x-columns gap-y-8 px-gutter pt-8 pb-12 max-md:pt-6 max-md:pb-9"}
:::::: box {"id":"ev-band-text","class":"col-span-7 flex flex-col items-start gap-5 max-lg:col-span-full"}
::::::: box {"id":"ev-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Kruimelpad"}}
:::::::: box {"id":"ev-crumbs-l","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
::::::::: box {"id":"ev-c0","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"ev-c0-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::

::::::::: box {"id":"ev-c1","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: icon {"id":"ev-c1-s","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
::::::::::

:::::::::: link {"id":"ev-c1-a","props":{"label":"Activiteiten","url":"entry:01m7p2kg02mca2s304fb0a4xnh"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::
::::::::
:::::::

::::::: paragraph {"id":"ev-kind","props":{"tag":"p"},"bind":{"text":"entry.kind"},"class":"badge"}
:::::::

::::::: heading {"id":"ev-title","props":{"level":"1"},"bind":{"text":"entry.title"},"class":"rule"}
:::::::

::::::: paragraph {"id":"ev-summary","props":{"tag":"p"},"bind":{"text":"entry.summary"},"class":"lede max-w-[36em]"}
:::::::

::::::: button {"id":"ev-signup","props":{"label":"Schrijf je in","url":"#inschrijven","variant":"primary","size":"lg","icon":"arrow-down","icon_position":"end"}}
:::::::
::::::

:::::: image {"id":"ev-cover","props":{"aspect":"4/3","priority":true,"sizes":"(min-width: 64rem) 32vw, 0px","alt":""},"bind":{"image":"entry.cover","visible":"entry.cover"},"class":"leaf col-span-5 max-lg:hidden"}
::::::
:::::
::::

:::: box {"id":"ev-layout","class":"mx-auto grid max-w-content grid-cols-12 gap-x-columns gap-y-10 px-gutter pt-blocks"}
::::: box {"id":"bxhv5expzoy","class":"col-span-8 flex flex-col gap-section max-lg:col-span-full"}
:::::: outlet {"id":"ev-body","props":{"wrap":true,"prose":true}}
::::::

:::::: box {"id":"ev-form","props":{"tag":"section"},"attrs":{"aria-labelledby":"#ev-form-t"},"class":"flex flex-col gap-6"}
::::::: heading {"id":"ev-form-t","props":{"text":"Schrijf je in","level":"2"},"anchor":"inschrijven","class":"rule"}
:::::::

::::::: forms/form {"id":"ev-form-block","props":{"form":"inschrijving"},"class":"card p-[clamp(1.5rem,4vw,2.5rem)]"}
:::::::
::::::
:::::

::::: box {"id":"ev-aside","props":{"tag":"aside"},"attrs":{"aria-label":"Wanneer en waar"},"class":"col-span-4 self-start lg:sticky lg:top-32 max-lg:order-first max-lg:col-span-full"}
:::::: box {"id":"ev-facts","props":{"tag":"dl"},"class":"card flex flex-col gap-5"}
::::::: box {"id":"ev-f-when","bind":{"visible":"entry.starts"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"ev-f-when-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"ev-f-when-i","props":{"icon":"calendar-blank"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"ev-f-when-l","props":{"text":"Wanneer","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"ev-f-when-v","props":{"tag":"dd"},"bind":{"text":"{entry.starts|date:l j F Y}, {entry.starts|date:G.i} tot {entry.ends} uur"},"class":"pl-7 font-medium"}
::::::::
:::::::

::::::: box {"id":"ev-f-where","bind":{"visible":"entry.venue"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"ev-f-where-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"ev-f-where-i","props":{"icon":"map-pin"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"ev-f-where-l","props":{"text":"Waar","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"ev-f-where-v","props":{"tag":"dd"},"bind":{"text":"entry.venue"},"class":"pl-7 font-medium"}
::::::::
:::::::

::::::: box {"id":"ev-f-for","bind":{"visible":"entry.audience"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"ev-f-for-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"ev-f-for-i","props":{"icon":"users-three"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"ev-f-for-l","props":{"text":"Voor","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"ev-f-for-v","props":{"tag":"dd"},"bind":{"text":"entry.audience"},"class":"pl-7 font-medium"}
::::::::
:::::::

::::::: box {"id":"ev-f-price","bind":{"visible":"entry.price"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"ev-f-price-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"ev-f-price-i","props":{"icon":"ticket"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"ev-f-price-l","props":{"text":"Prijs","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"ev-f-price-v","props":{"tag":"dd"},"bind":{"text":"entry.price"},"class":"pl-7 font-medium"}
::::::::
:::::::
::::::
:::::
::::
:::

::: component {"id":"ev-footer","props":{"ref":"footer"}}
:::
