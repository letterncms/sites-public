---
id: 01m9a0gttq07trfafwsf19sh2y
title: Thema
status: published
position: 0
collections:
  - topics
description: 'Een thema: de titel met wat je er meteen kan regelen en een foto, alle diensten met hun uitleg, het nieuws, wie je kan vragen, en de andere thema’s.'
---

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"th-head","class":"page-head"}
::::: box {"id":"th-crumbs-wrap","class":"wrap-wide"}
:::::: component {"id":"th-crumbs","props":{"ref":"crumbs","values":{"label":"Thema’s","url":"/themas"}}}
::::::
:::::

::::: box {"id":"th-head-inner","class":"wrap-wide grid items-end gap-10 pt-8 pb-12 lg:grid-cols-12 lg:gap-16 lg:pt-12 lg:pb-16"}
:::::: box {"id":"th-text","class":"flex flex-col items-start gap-5 lg:col-span-7"}
::::::: heading {"id":"th-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
:::::::

::::::: paragraph {"id":"th-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead max-w-xl"}
:::::::

::::::: box {"id":"th-want-nav","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#th-want-h"},"class":"mt-3"}
:::::::: heading {"id":"th-want-h","props":{"level":"2","text":"Ik wil"},"class":"sr-only"}
::::::::

:::::::: repeat {"id":"th-want","props":{"source":"entries","collection":"products","sort":"-featured","limit":4,"tag":"ul","where":[{"field":"topic","op":"contains","value":"{entry.id}"}]},"class":"flex flex-wrap gap-2"}
::::::::: box {"id":"th-want-item","props":{"tag":"li"}}
:::::::::: link {"id":"th-want-link","bind":{"label":"item.title","url":"item.url"},"class":"arrow-link min-h-11 rounded-full bg-background px-4 py-2.5 text-foreground transition-colors hover:bg-blue hover:text-white hover:no-underline"}
::::::::::
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"th-photo","bind":{"visible":"entry.photo"},"class":"photo lg:col-span-5"}
::::::: image {"id":"th-img","props":{"priority":true,"aspect":"3/2","sizes":"(min-width: 64rem) 36vw, 100vw"},"bind":{"image":"entry.photo"},"class":"aspect-[3/2] w-full object-cover"}
:::::::
::::::
:::::
::::

:::: box {"id":"th-list","props":{"tag":"section"},"class":"wrap-wide pt-14 pb-section lg:pt-20"}
::::: component {"id":"th-list-head","props":{"ref":"section-head","values":{"title":"Dit regel je bij de stad","label":"Alles van A tot Z","url":"/themas#alles-van-a-tot-z"}}}
:::::

::::: repeat {"id":"th-products","props":{"source":"entries","collection":"products","sort":"title","limit":100,"tag":"ul","where":[{"field":"topic","op":"contains","value":"{entry.id}"}],"empty":"Er staat nog niets in dit thema."},"class":"mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3"}
:::::: box {"id":"th-card-item","props":{"tag":"li"},"class":"grid"}
::::::: component {"id":"th-card","props":{"ref":"product-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.online":"item.online"}}
:::::::
::::::
:::::
::::

:::: box {"id":"th-more","props":{"tag":"section"},"attrs":{"aria-label":"Nieuws en contact"}}
::::: box {"id":"th-more-grid","class":"wrap-wide grid gap-14 pb-section lg:grid-cols-12"}
:::::: box {"id":"th-news-col","class":"lg:col-span-7"}
::::::: component {"id":"th-news-head","props":{"ref":"section-head","values":{"title":"Nieuws","label":"Al het nieuws","url":"/nieuws"}}}
:::::::

::::::: repeat {"id":"th-news","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"tag":"ul","where":[{"field":"topic","op":"contains","value":"{entry.id}"}],"empty":"Er is nu geen nieuws over dit thema. Het laatste nieuws van de stad staat bij Nieuws."},"class":"mt-8 flex flex-col gap-2.5"}
:::::::: box {"id":"th-news-item","props":{"tag":"li"}}
::::::::: box {"id":"th-news-link","bind":{"link":"item.url"},"class":"group card flex-row items-center gap-5 p-3 pr-5"}
:::::::::: box {"id":"th-news-photo","class":"zoom size-24 shrink-0 overflow-hidden rounded-lg bg-surface sm:size-28"}
::::::::::: image {"id":"th-news-img","props":{"aspect":"1/1","sizes":"7rem"},"bind":{"image":"item.cover"},"class":"size-full object-cover"}
:::::::::::
::::::::::

:::::::::: box {"id":"th-news-text","class":"flex min-w-0 flex-col gap-1.5"}
::::::::::: box {"id":"th-news-meta","class":"flex gap-3 text-sm text-muted"}
:::::::::::: paragraph {"id":"th-news-kind","props":{"tag":"span"},"bind":{"text":"item.kind"},"class":"font-semibold text-foreground"}
::::::::::::

:::::::::::: paragraph {"id":"th-news-date","props":{"tag":"span"},"bind":{"text":"item.date|date:j F Y"}}
::::::::::::
:::::::::::

::::::::::: heading {"id":"th-news-title","props":{"level":"3"},"bind":{"text":"item.title"},"class":"text-xl leading-snug group-hover:underline"}
:::::::::::
::::::::::
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"th-contact-col","class":"lg:col-span-4 lg:col-start-9"}
::::::: box {"id":"th-contact","props":{"tag":"aside"},"attrs":{"aria-labelledby":"#th-contact-h"},"class":"flex flex-col gap-6 rounded-2xl bg-surface p-6 sm:p-8"}
:::::::: heading {"id":"th-contact-h","props":{"level":"2","text":"Vragen over dit thema?"},"class":"text-2xl"}
::::::::

:::::::: box {"id":"th-contact-reach","props":{"tag":"address"},"class":"flex flex-col items-start gap-1 not-italic"}
::::::::: paragraph {"id":"th-contact-address","props":{"tag":"p"},"bind":{"text":"globals.city.address"},"class":"whitespace-pre-line"}
:::::::::

::::::::: link {"id":"th-contact-phone","bind":{"label":"globals.city.phone","url":"tel:{globals.city.phone_link}"},"class":"mt-2 font-display text-2xl font-medium text-foreground no-underline hover:underline"}
:::::::::

::::::::: link {"id":"th-contact-email","bind":{"label":"globals.city.email","url":"mailto:{globals.city.email}"},"class":"text-link break-all text-foreground"}
:::::::::
::::::::

:::::::: box {"id":"th-contact-hours-box","class":"flex flex-col gap-1 border-t border-border pt-4"}
::::::::: paragraph {"id":"th-contact-hours-h","props":{"tag":"p","text":"Openingsuren stadhuis"},"class":"text-sm font-semibold"}
:::::::::

::::::::: paragraph {"id":"th-contact-hours","props":{"tag":"p"},"bind":{"text":"globals.city.hours"},"class":"whitespace-pre-line text-sm text-muted"}
:::::::::
::::::::

:::::::: box {"id":"th-contact-actions","class":"flex flex-wrap gap-3"}
::::::::: button {"id":"th-contact-ask","props":{"label":"Stel je vraag","url":"/contact","variant":"primary"}}
:::::::::

::::::::: button {"id":"th-contact-meet","props":{"label":"Afspraak maken","url":"/afspraak","variant":"secondary"}}
:::::::::
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"th-others-section","props":{"tag":"section"},"attrs":{"aria-labelledby":"#th-others-h"},"class":"slab scheme-soft"}
::::: box {"id":"th-others-inner","class":"wrap-wide py-16"}
:::::: heading {"id":"th-others-h","props":{"level":"2","text":"Andere thema’s"},"class":"text-2xl"}
::::::

:::::: repeat {"id":"th-others","props":{"source":"entries","collection":"topics","sort":"position","limit":20,"tag":"ul","skipCurrent":true},"class":"mt-6 flex flex-wrap gap-3"}
::::::: box {"id":"th-others-item","props":{"tag":"li"}}
:::::::: link {"id":"th-others-link","bind":{"label":"item.title","url":"item.url"},"class":"flex min-h-11 items-center rounded-full bg-background px-4 py-2.5 font-semibold text-foreground no-underline transition-colors hover:bg-blue hover:text-white"}
::::::::
:::::::
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
