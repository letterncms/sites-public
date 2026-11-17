---
id: 01m7nqftc5hn7vgmwpr8886w9t
title: Specialty
status: published
published_at: '2026-11-17T21:44:28+00:00'
position: 3
description: 'A title band in the colour of the specialty’s area, its practical details beside the page, then its team and the conditions it treats.'
collections:
  - specialties
---

::: component {"id":"sp-header","props":{"ref":"header"}}
:::

::: box {"id":"sp-main","props":{"tag":"main"},"label":"Main","anchor":"main"}
:::: box {"id":"sp-band","props":{"tag":"header"},"label":"Title band","bind":{"state:mint":"entry.area.colour|is:mint","state:sky":"entry.area.colour|is:sky","state:lilac":"entry.area.colour|is:lilac","state:peach":"entry.area.colour|is:peach","state:sun":"entry.area.colour|is:sun","state:rose":"entry.area.colour|is:rose"},"class":"data-mint:scheme-mint data-sky:scheme-sky data-lilac:scheme-lilac data-peach:scheme-peach data-sun:scheme-sun data-rose:scheme-rose"}
::::: box {"id":"sp-band-in","class":"mx-auto grid max-w-wide grid-cols-12 items-center gap-x-columns gap-y-8 px-gutter pt-8 pb-14 max-md:pt-6 max-md:pb-10"}
:::::: box {"id":"sp-band-text","class":"col-span-7 flex flex-col items-start gap-5 max-lg:col-span-full"}
::::::: box {"id":"sp-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
:::::::: box {"id":"sp-crumbs-list","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
::::::::: box {"id":"sp-crumb-home","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"sp-crumb-home-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::

:::::::::: icon {"id":"sp-crumb-sep1","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
::::::::::
:::::::::

::::::::: box {"id":"sp-crumb-up","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"sp-crumb-up-a","props":{"label":"Our care","url":"entry:01m7nqftbvfcw2y4b3yr35fmqt"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::
::::::::
:::::::

::::::: icon {"id":"sp-icon","attrs":{"aria-hidden":"true"},"bind":{"icon":"entry.icon","visible":"entry.icon"},"class":"size-12 rounded-md bg-background/70 p-2.5"}
:::::::

::::::: heading {"id":"sp-title","props":{"level":"1"},"bind":{"text":"entry.title"}}
:::::::

::::::: paragraph {"id":"sp-summary","props":{"tag":"p"},"bind":{"text":"entry.summary"},"class":"text-xl leading-[1.5] text-muted max-w-[34em]"}
:::::::

::::::: buttons {"id":"sp-actions","class":"pt-2"}
:::::::: button {"id":"sp-book","props":{"label":"Make an appointment","url":"entry:01m7nqftbvfcw2y4b3yr35fmr8","variant":"primary","size":"lg"}}
::::::::

:::::::: button {"id":"sp-call","props":{"variant":"secondary","size":"lg","icon":"phone"},"bind":{"label":"Call {entry.phone}","url":"tel:{entry.phone}","visible":"entry.phone"}}
::::::::
:::::::
::::::

:::::: image {"id":"sp-cover","props":{"aspect":"4/3","priority":true,"sizes":"(min-width: 64rem) 36vw, 0px","alt":""},"bind":{"image":"entry.cover","visible":"entry.cover"},"class":"col-span-5 overflow-hidden rounded-xl max-lg:hidden"}
::::::
:::::
::::

:::: box {"id":"sp-layout","class":"mx-auto grid max-w-wide grid-cols-12 gap-x-columns gap-y-12 px-gutter pt-blocks"}
::::: outlet {"id":"sp-body","props":{"wrap":true,"prose":true},"class":"col-span-8 max-lg:col-span-full"}
:::::

::::: box {"id":"sp-aside","props":{"tag":"aside"},"attrs":{"aria-label":"Practical information"},"class":"col-span-4 flex flex-col gap-6 self-start lg:sticky lg:top-32 max-lg:order-first max-lg:col-span-full"}
:::::: box {"id":"sp-facts","class":"card flex flex-col gap-5"}
::::::: heading {"id":"sp-facts-title","props":{"text":"Practical information","level":"2"},"class":"text-xl"}
:::::::

::::::: box {"id":"sp-facts-list","props":{"tag":"dl"},"class":"flex flex-col gap-5"}
:::::::: box {"id":"sp-f-phone","bind":{"visible":"entry.phone"},"class":"flex flex-col gap-0.5"}
::::::::: box {"id":"sp-f-phone-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
:::::::::: icon {"id":"sp-f-phone-i","props":{"icon":"phone"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
::::::::::

:::::::::: paragraph {"id":"sp-f-phone-l","props":{"text":"Appointments","tag":"span"}}
::::::::::
:::::::::

::::::::: box {"id":"sp-f-phone-dd","props":{"tag":"dd"},"class":"pl-7"}
:::::::::: link {"id":"sp-f-phone-v","bind":{"label":"entry.phone","url":"tel:{entry.phone}"},"class":"font-semibold"}
::::::::::
:::::::::
::::::::

:::::::: box {"id":"sp-f-where","bind":{"visible":"entry.location"},"class":"flex flex-col gap-0.5"}
::::::::: box {"id":"sp-f-where-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
:::::::::: icon {"id":"sp-f-where-i","props":{"icon":"map-pin"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
::::::::::

:::::::::: paragraph {"id":"sp-f-where-l","props":{"text":"Where to find us","tag":"span"}}
::::::::::
:::::::::

::::::::: paragraph {"id":"sp-f-where-v","props":{"tag":"dd"},"bind":{"text":"entry.location"},"class":"pl-7 font-medium"}
:::::::::
::::::::

:::::::: box {"id":"sp-f-hours","bind":{"visible":"entry.hours"},"class":"flex flex-col gap-0.5"}
::::::::: box {"id":"sp-f-hours-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
:::::::::: icon {"id":"sp-f-hours-i","props":{"icon":"clock"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
::::::::::

:::::::::: paragraph {"id":"sp-f-hours-l","props":{"text":"Opening hours","tag":"span"}}
::::::::::
:::::::::

::::::::: paragraph {"id":"sp-f-hours-v","props":{"tag":"dd"},"bind":{"text":"entry.hours"},"class":"pl-7 font-medium whitespace-pre-line"}
:::::::::
::::::::

:::::::: box {"id":"sp-f-ref","class":"flex flex-col gap-0.5"}
::::::::: box {"id":"sp-f-ref-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
:::::::::: icon {"id":"sp-f-ref-i","props":{"icon":"file-text"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
::::::::::

:::::::::: paragraph {"id":"sp-f-ref-l","props":{"text":"Referral","tag":"span"}}
::::::::::
:::::::::

::::::::: paragraph {"id":"sp-f-ref-yes","props":{"text":"You need a letter from your GP for a first appointment.","tag":"dd"},"bind":{"visible":"entry.referral"},"class":"pl-7 font-medium"}
:::::::::

::::::::: paragraph {"id":"sp-f-ref-no","props":{"text":"You can make an appointment without a referral.","tag":"dd"},"bind":{"hidden":"entry.referral"},"class":"pl-7 font-medium"}
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"sp-help-wrap","class":"max-lg:hidden"}
::::::: component {"id":"sp-help","props":{"ref":"help-card"}}
:::::::
::::::
:::::
::::

:::: box {"id":"sp-team","props":{"tag":"section"},"attrs":{"aria-labelledby":"#sp-team-title"},"class":"mx-auto max-w-wide px-gutter pt-section"}
::::: box {"id":"sp-team-head","class":"mb-8 flex flex-wrap items-end justify-between gap-4"}
:::::: heading {"id":"sp-team-title","props":{"text":"Our team","level":"2"},"class":"text-3xl"}
::::::

:::::: button {"id":"sp-team-all","props":{"variant":"link","icon":"arrow-right","icon_position":"end","label":"Find a doctor","url":"entry:01m7nqftbvfcw2y4b3yr35fmqv"}}
::::::
:::::

::::: repeat {"id":"sp-team-list","props":{"source":"entries","collection":"doctors","sort":"family_name","limit":24,"references":"current","tag":"ul","empty":"Call the appointments line to hear who you can see."},"class":"grid grid-cols-4 gap-columns max-lg:grid-cols-3 max-md:grid-cols-2"}
:::::: box {"id":"sp-team-item","props":{"tag":"li"}}
::::::: component {"id":"sp-team-card","props":{"ref":"doctor-card"},"bind":{"values.name":"{item.honorific} {item.title}","values.role":"item.role","values.photo":"item.photo","values.link":"item.url","values.new_patients":"item.new_patients"}}
:::::::
::::::
:::::
::::

:::: box {"id":"sp-topics","props":{"tag":"section"},"attrs":{"aria-labelledby":"#sp-topics-title"},"class":"mx-auto max-w-wide px-gutter pt-section"}
::::: box {"id":"sp-topics-head","class":"mb-8 flex flex-wrap items-end justify-between gap-4"}
:::::: heading {"id":"sp-topics-title","props":{"text":"Conditions and treatments","level":"2"},"class":"text-3xl"}
::::::

:::::: button {"id":"sp-topics-all","props":{"variant":"link","icon":"arrow-right","icon_position":"end","label":"All conditions and treatments","url":"entry:01m7nqftbvfcw2y4b3yr35fmqw"}}
::::::
:::::

::::: repeat {"id":"sp-topics-list","props":{"source":"entries","collection":"conditions","sort":"title","limit":24,"references":"current","tag":"ul","empty":"We are writing about the conditions we treat. Ask your doctor in the meantime."},"class":"grid grid-cols-2 gap-3 max-md:grid-cols-1"}
:::::: box {"id":"sp-topic","props":{"tag":"li"}}
::::::: link {"id":"sp-topic-a","bind":{"url":"item.url"},"class":"card-link group flex h-full items-center gap-4 p-5"}
:::::::: box {"id":"sp-topic-text","class":"flex flex-col gap-1"}
::::::::: paragraph {"id":"sp-topic-title","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"font-semibold text-foreground group-hover:text-primary"}
:::::::::

::::::::: paragraph {"id":"sp-topic-summary","props":{"tag":"span"},"bind":{"text":"item.summary"},"class":"text-[0.9375rem] leading-snug text-muted"}
:::::::::
::::::::

:::::::: icon {"id":"sp-topic-arrow","props":{"icon":"arrow-right"},"attrs":{"aria-hidden":"true"},"class":"ml-auto size-5 shrink-0 text-muted"}
::::::::
:::::::
::::::
:::::
::::
:::

::: component {"id":"sp-footer","props":{"ref":"footer"}}
:::
