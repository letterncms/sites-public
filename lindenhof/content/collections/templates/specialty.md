---
id: 01m7p3g291ay24bfsfkwnmh9fn
title: Dienst
status: published
published_at: '2026-11-18T02:14:20+01:00'
position: 3
description: 'Een titelband met foto, de praktische informatie naast de pagina en wat erop staat, dan het team en de ziekten en behandelingen.'
collections:
  - specialties
---

::: component {"id":"sp-header","props":{"ref":"header"}}
:::

::: box {"id":"sp-main","props":{"tag":"main"},"label":"Inhoud","anchor":"main"}
:::: box {"id":"sp-band","props":{"tag":"header"},"label":"Titel","class":"scheme-surface"}
::::: box {"id":"sp-band-in","class":"mx-auto grid max-w-content grid-cols-12 items-center gap-x-columns gap-y-8 px-gutter pt-8 pb-12 max-md:pt-6 max-md:pb-9"}
:::::: box {"id":"sp-band-text","class":"col-span-7 flex flex-col items-start gap-5 max-lg:col-span-full"}
::::::: box {"id":"sp-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Kruimelpad"}}
:::::::: box {"id":"sp-crumbs-l","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
::::::::: box {"id":"sp-c0","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"sp-c0-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::

::::::::: box {"id":"sp-c1","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: icon {"id":"sp-c1-s","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
::::::::::

:::::::::: link {"id":"sp-c1-a","props":{"label":"Zorgaanbod","url":"entry:01m7p3g28ph31zyqzvh74hae5e"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::
::::::::
:::::::

::::::: box {"id":"sp-kicker","class":"flex flex-wrap items-center gap-3"}
:::::::: box {"id":"sp-ic","props":{"tag":"span"},"class":"icon-tile"}
::::::::: icon {"id":"sp-i","attrs":{"aria-hidden":"true"},"bind":{"icon":"entry.icon"},"class":"size-6"}
:::::::::
::::::::

:::::::: paragraph {"id":"sp-kind","props":{"tag":"span"},"bind":{"text":"entry.kind"},"class":"badge"}
::::::::

:::::::: paragraph {"id":"sp-area","props":{"tag":"span"},"bind":{"text":"entry.area.title"},"class":"text-sm font-semibold text-muted"}
::::::::
:::::::

::::::: heading {"id":"sp-title","props":{"level":"1"},"bind":{"text":"entry.title"},"class":"rule"}
:::::::

::::::: paragraph {"id":"sp-summary","props":{"tag":"p"},"bind":{"text":"entry.summary"},"class":"lede max-w-[34em]"}
:::::::

::::::: buttons {"id":"sp-actions","class":"pt-2"}
:::::::: button {"id":"sp-book","props":{"label":"Afspraak maken","url":"entry:01m7p3g28ph31zyqzvh74hae61","variant":"primary","size":"lg"}}
::::::::

:::::::: button {"id":"sp-call","props":{"variant":"secondary","size":"lg","icon":"phone"},"bind":{"label":"Bel {entry.phone}","url":"tel:{entry.phone}","visible":"entry.phone"}}
::::::::
:::::::
::::::

:::::: image {"id":"sp-cover","props":{"aspect":"4/3","priority":true,"sizes":"(min-width: 64rem) 32vw, 0px","alt":""},"bind":{"image":"entry.cover","visible":"entry.cover"},"class":"leaf col-span-5 max-lg:hidden"}
::::::
:::::
::::

:::: box {"id":"sp-layout","class":"mx-auto grid max-w-content grid-cols-12 gap-x-columns gap-y-12 px-gutter pt-blocks"}
::::: outlet {"id":"sp-body","props":{"wrap":true,"prose":true},"class":"col-span-8 max-lg:col-span-full"}
:::::

::::: box {"id":"sp-aside","props":{"tag":"aside"},"attrs":{"aria-label":"Praktisch"},"class":"col-span-4 flex flex-col gap-8 self-start lg:sticky lg:top-32 max-lg:order-first max-lg:col-span-full"}
:::::: box {"id":"sp-facts","class":"card flex flex-col gap-5"}
::::::: heading {"id":"sp-facts-title","props":{"text":"Praktisch","level":"2"},"class":"text-xl"}
:::::::

::::::: box {"id":"sp-facts-list","props":{"tag":"dl"},"class":"flex flex-col gap-5"}
:::::::: box {"id":"sp-f-phone","bind":{"visible":"entry.phone"},"class":"flex flex-col gap-0.5"}
::::::::: box {"id":"sp-f-phone-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
:::::::::: icon {"id":"sp-f-phone-i","props":{"icon":"phone"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
::::::::::

:::::::::: paragraph {"id":"sp-f-phone-l","props":{"text":"Afspraken","tag":"span"}}
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

:::::::::: paragraph {"id":"sp-f-where-l","props":{"text":"Waar","tag":"span"}}
::::::::::
:::::::::

::::::::: paragraph {"id":"sp-f-where-v","props":{"tag":"dd"},"bind":{"text":"entry.location"},"class":"pl-7 font-medium"}
:::::::::
::::::::

:::::::: box {"id":"sp-f-hours","bind":{"visible":"entry.hours"},"class":"flex flex-col gap-0.5"}
::::::::: box {"id":"sp-f-hours-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
:::::::::: icon {"id":"sp-f-hours-i","props":{"icon":"clock"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
::::::::::

:::::::::: paragraph {"id":"sp-f-hours-l","props":{"text":"Open","tag":"span"}}
::::::::::
:::::::::

::::::::: paragraph {"id":"sp-f-hours-v","props":{"tag":"dd"},"bind":{"text":"entry.hours"},"class":"pl-7 font-medium whitespace-pre-line"}
:::::::::
::::::::

:::::::: box {"id":"sp-f-ref","class":"flex flex-col gap-0.5"}
::::::::: box {"id":"sp-f-ref-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
:::::::::: icon {"id":"sp-f-ref-i","props":{"icon":"file-text"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
::::::::::

:::::::::: paragraph {"id":"sp-f-ref-l","props":{"text":"Verwijsbrief","tag":"span"}}
::::::::::
:::::::::

::::::::: paragraph {"id":"sp-f-ref-yes","props":{"text":"Voor een eerste afspraak heb je een verwijsbrief van je huisarts nodig.","tag":"dd"},"bind":{"visible":"entry.referral"},"class":"pl-7 font-medium"}
:::::::::

::::::::: paragraph {"id":"sp-f-ref-no","props":{"text":"Je kunt een afspraak maken zonder verwijsbrief.","tag":"dd"},"bind":{"hidden":"entry.referral"},"class":"pl-7 font-medium"}
:::::::::
::::::::

:::::::: box {"id":"sp-f-online","bind":{"visible":"entry.online"},"class":"flex flex-col gap-0.5"}
::::::::: box {"id":"sp-f-online-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
:::::::::: icon {"id":"sp-f-online-i","props":{"icon":"device-mobile"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
::::::::::

:::::::::: paragraph {"id":"sp-f-online-l","props":{"text":"Online afspraak","tag":"span"}}
::::::::::
:::::::::

::::::::: box {"id":"sp-f-online-dd","props":{"tag":"dd"},"class":"pl-7"}
:::::::::: link {"id":"sp-f-online-a","props":{"label":"Kies zelf een dag en uur in Mijn dossier"},"bind":{"url":"globals.hospital.portal.url"},"class":"font-semibold"}
::::::::::
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"sp-toc-wrap","class":"max-lg:hidden"}
::::::: box {"id":"sp-toc","props":{"tag":"nav"},"attrs":{"aria-label":"Op deze pagina"},"class":"border-t-4 border-primary pt-4"}
:::::::: paragraph {"id":"sp-toc-t","props":{"text":"Op deze pagina","tag":"p"},"class":"text-sm font-semibold text-muted"}
::::::::

:::::::: repeat {"id":"sp-toc-list","props":{"source":"headings","depth":"2","tag":"ul"},"class":"mt-3 flex flex-col"}
::::::::: box {"id":"sp-toc-li","props":{"tag":"li"}}
:::::::::: link {"id":"sp-toc-a","bind":{"label":"item.text","url":"item.url"},"class":"-mx-3 block border-l-3 border-transparent px-3 py-1.5 font-medium text-foreground no-underline hover:border-primary hover:text-primary"}
::::::::::
:::::::::
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"sp-team","props":{"tag":"section"},"attrs":{"aria-labelledby":"#sp-team-title"},"class":"mx-auto max-w-content px-gutter pt-section"}
::::: box {"id":"sp-team-head","class":"mb-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-6"}
:::::: box {"id":"sp-team-intro","class":"flex flex-col gap-4"}
::::::: heading {"id":"sp-team-title","props":{"text":"Ons team","level":"2"},"class":"rule"}
:::::::
::::::

:::::: button {"id":"sp-team-all","props":{"variant":"secondary","icon":"arrow-right","icon_position":"end","label":"Zoek een zorgverlener","url":"entry:01m7p3g28ph31zyqzvh74hae5f"}}
::::::
:::::

::::: repeat {"id":"sp-team-list","props":{"source":"entries","collection":"doctors","sort":"family_name","limit":24,"references":"current","tag":"ul","empty":"Bel de afsprakenlijn om te horen bij wie je terechtkunt."},"class":"grid grid-cols-4 gap-columns max-lg:grid-cols-3 max-md:grid-cols-2"}
:::::: box {"id":"sp-team-item","props":{"tag":"li"}}
::::::: component {"id":"sp-team-card","props":{"ref":"doctor-card"},"bind":{"values.name":"{item.honorific} {item.title}","values.role":"item.role","values.photo":"item.photo","values.link":"item.url","values.new_patients":"item.new_patients"}}
:::::::
::::::
:::::
::::

:::: box {"id":"sp-topics","props":{"tag":"section"},"attrs":{"aria-labelledby":"#sp-topics-title"},"class":"mx-auto max-w-content px-gutter pt-section"}
::::: box {"id":"sp-topics-head","class":"mb-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-6"}
:::::: box {"id":"sp-topics-intro","class":"flex flex-col gap-4"}
::::::: heading {"id":"sp-topics-title","props":{"text":"Ziekten en behandelingen","level":"2"},"class":"rule"}
:::::::
::::::

:::::: button {"id":"sp-topics-all","props":{"variant":"secondary","icon":"arrow-right","icon_position":"end","label":"Alles van A tot Z","url":"entry:01m7p3g28ph31zyqzvh74hae5g"}}
::::::
:::::

::::: repeat {"id":"sp-topics-list","props":{"source":"entries","collection":"conditions","sort":"title","limit":24,"references":"current","tag":"ul","empty":"We schrijven nog over de ziekten die we behandelen. Vraag het intussen aan je arts."},"class":"grid grid-cols-2 gap-3 max-md:grid-cols-1"}
:::::: box {"id":"sp-topic","props":{"tag":"li"},"class":"card group relative flex items-start gap-4 p-5 transition-[border-color,box-shadow] hover:border-primary/60 hover:shadow-md"}
::::::: box {"id":"sp-topic-t","class":"flex flex-col gap-1"}
:::::::: link {"id":"sp-topic-a","bind":{"url":"item.url"},"class":"text-lg font-bold text-foreground no-underline after:absolute after:inset-0 group-hover:text-primary group-hover:underline"}
::::::::: paragraph {"id":"sp-topic-title","props":{"tag":"span"},"bind":{"text":"item.title"}}
:::::::::
::::::::

:::::::: paragraph {"id":"sp-topic-sum","props":{"tag":"p"},"bind":{"text":"item.summary"},"class":"text-[0.9375rem] leading-snug text-muted line-clamp-2"}
::::::::
:::::::

::::::: icon {"id":"sp-topic-r","props":{"icon":"arrow-right"},"attrs":{"aria-hidden":"true"},"class":"ml-auto mt-1 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"}
:::::::
::::::
:::::
::::
:::

::: component {"id":"sp-footer","props":{"ref":"footer"}}
:::
