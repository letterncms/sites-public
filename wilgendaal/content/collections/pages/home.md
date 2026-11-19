---
id: 01m9a0gjp671jz43qjemdqb5s2
title: Home
status: published
position: 1
summary: 'Regel het bij Stad Wilgendaal: zoek een dienst, kijk wat vandaag open is, lees het nieuws en zie wat er te doen is.'
template: default
---

::: box {"id":"hm-hero","props":{"tag":"section"},"label":"Hero","attrs":{"aria-labelledby":"#hm-h1"}}
:::: box {"id":"hm-hero-photo","class":"hero-photo slab mt-frame flex min-h-[min(54rem,94svh)] flex-col justify-end bg-ink"}
::::: image {"id":"hm-hero-img","props":{"priority":true,"aspect":"3/2","sizes":"100vw","image":["01mbszkjz4qz863h7jp00w61w1"],"alt":"Drie mensen op een bank onder treurwilgen, voor een bakstenen huis met een trapgevel en rode geraniums."},"class":"absolute inset-0 size-full object-cover [&_img]:object-[50%_60%] lg:[&_img]:object-[60%_62%]"}
:::::

::::: box {"id":"hm-hero-tab","label":"Tab","class":"notch relative! flex w-full max-w-[60rem] flex-col gap-6 pt-7 pr-6 pb-1 pl-[calc(var(--spacing-gutter)-var(--spacing-frame))] [--notch-r:var(--radius-slab)] sm:w-[calc(100%-4rem)] sm:pt-9 sm:pr-10 lg:gap-7 lg:pt-11 lg:pr-14"}
:::::: box {"id":"hm-title","class":"flex flex-col gap-3"}
::::::: heading {"id":"hm-h1","props":{"level":"1","text":"Welkom in Wilgendaal"},"class":"text-5xl"}
:::::::

::::::: paragraph {"id":"hm-ask","props":{"tag":"p","text":"Wat wil je vandaag regelen?"},"class":"font-display text-2xl text-muted"}
:::::::
::::::

:::::: search-field {"id":"hm-search","props":{"label":"Zoek een dienst, een document of een adres","show_label":false,"placeholder":"Wat zoek je?","button_label":"Zoeken","button_style":"primary","size":"lg","icon_only":false,"results_page":"/zoeken"},"class":"home-search search-box search-box-hero w-full"}
::::::

:::::: box {"id":"hm-quick","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#hm-quick-h"}}
::::::: heading {"id":"hm-quick-h","props":{"level":"2","text":"Snel naar"},"class":"sr-only"}
:::::::

::::::: repeat {"id":"hm-quick-list","props":{"source":"menu","menu":"quick","tag":"ul"},"class":"flex flex-wrap gap-2"}
:::::::: box {"id":"hm-quick-item","props":{"tag":"li"}}
::::::::: box {"id":"hm-quick-link","bind":{"link":"item.url"},"class":"flex min-h-11 items-center gap-2 rounded-full bg-surface py-2 pr-4 pl-3 font-semibold text-foreground no-underline transition-colors hover:bg-blue hover:text-white"}
:::::::::: icon {"id":"hm-quick-icon","bind":{"icon":"item.icon"},"class":"size-5 shrink-0"}
::::::::::

:::::::::: paragraph {"id":"hm-quick-label","props":{"tag":"span"},"bind":{"text":"item.label"}}
::::::::::
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-tasks","props":{"tag":"section"},"label":"Veel gevraagd","attrs":{"aria-labelledby":"#hm-tasks-h"}}
:::: box {"id":"hm-tasks-inner","class":"wrap-wide pt-16 pb-section sm:pt-20"}
::::: box {"id":"hm-tasks-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4"}
:::::: heading {"id":"hm-tasks-h","props":{"level":"2","text":"Veel gevraagd"}}
::::::

:::::: link {"id":"hm-tasks-all","props":{"label":"Alles van A tot Z","url":"/themas#alles-van-a-tot-z"},"class":"arrow-link shrink-0"}
::::::
:::::

::::: repeat {"id":"hm-tasks-list","props":{"source":"entries","collection":"products","sort":"title","limit":8,"tag":"ul","where":[{"field":"featured","op":"=","value":true}]},"class":"mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4"}
:::::: box {"id":"hm-task-item","props":{"tag":"li"},"class":"grid"}
::::::: box {"id":"hm-task-link","bind":{"link":"item.url"},"class":"group card justify-between gap-4 p-5 max-sm:flex-row max-sm:items-center sm:min-h-36 sm:gap-6 sm:p-6"}
:::::::: paragraph {"id":"hm-task-title","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"min-w-0 font-display text-xl font-medium leading-snug text-balance hyphens-auto max-sm:flex-1"}
::::::::

:::::::: box {"id":"hm-task-foot","class":"flex shrink-0 items-center justify-between gap-3 sm:items-end"}
::::::::: paragraph {"id":"hm-task-online","props":{"tag":"span","text":"Online"},"bind":{"visible":"item.online"},"class":"tag"}
:::::::::

::::::::: icon {"id":"hm-task-go","props":{"icon":"arrow-right"},"class":"go size-10 p-2.5 sm:ml-auto"}
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-moments","props":{"tag":"section"},"label":"Levensmomenten","attrs":{"aria-labelledby":"#hm-moments-h"}}
:::: box {"id":"hm-moments-inner","class":"wrap-wide pb-section"}
::::: box {"id":"hm-moments-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4"}
:::::: box {"id":"hm-moments-text","class":"flex max-w-2xl flex-col gap-3"}
::::::: heading {"id":"hm-moments-h","props":{"level":"2","text":"Er verandert iets in je leven"}}
:::::::

::::::: paragraph {"id":"hm-moments-lead","props":{"tag":"p","text":"Wat je wanneer regelt, op één plek: van een verhuizing tot een geboorte of een overlijden."},"class":"lead"}
:::::::
::::::

:::::: link {"id":"hm-moments-all","props":{"label":"Alle levensmomenten","url":"/levensmomenten"},"class":"arrow-link shrink-0"}
::::::
:::::

::::: repeat {"id":"hm-moments-list","props":{"source":"entries","collection":"moments","sort":"position","limit":6,"tag":"ul"},"class":"mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"}
:::::: box {"id":"hm-moment-item","props":{"tag":"li"}}
::::::: component {"id":"hm-moment","props":{"ref":"moment-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.image":"item.photo"}}
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-themes","props":{"tag":"section"},"label":"Thema’s","attrs":{"aria-labelledby":"#hm-themes-h"},"class":"slab scheme-night"}
:::: box {"id":"hm-themes-inner","class":"wrap-wide py-section"}
::::: box {"id":"hm-themes-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4"}
:::::: heading {"id":"hm-themes-h","props":{"level":"2","text":"Alle thema’s"}}
::::::

:::::: link {"id":"hm-themes-all","props":{"label":"Alles van A tot Z","url":"/themas"},"class":"arrow-link shrink-0"}
::::::
:::::

::::: repeat {"id":"hm-themes-list","props":{"source":"entries","collection":"topics","sort":"position","limit":12,"tag":"ul"},"class":"mt-10 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5"}
:::::: box {"id":"hm-theme-item","props":{"tag":"li"},"class":"grid"}
::::::: box {"id":"hm-theme-link","bind":{"link":"item.url"},"class":"group card h-full gap-1.5 p-5 sm:gap-3 sm:p-6"}
:::::::: icon {"id":"hm-theme-icon","bind":{"icon":"item.icon","visible":"item.icon"},"class":"mb-3 size-7 text-accent sm:mb-6 sm:size-8"}
::::::::

:::::::: paragraph {"id":"hm-theme-title","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"font-display text-xl font-medium leading-snug group-hover:underline"}
::::::::

:::::::: paragraph {"id":"hm-theme-summary","props":{"tag":"span"},"bind":{"text":"item.summary","visible":"item.summary"},"class":"text-sm text-muted"}
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-news","props":{"tag":"section"},"label":"Nieuws","attrs":{"aria-labelledby":"#hm-news-h"}}
:::: box {"id":"hm-news-inner","class":"wrap-wide py-section"}
::::: box {"id":"hm-news-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4"}
:::::: heading {"id":"hm-news-h","props":{"level":"2","text":"Nieuws uit de stad"}}
::::::

:::::: link {"id":"hm-news-all","props":{"label":"Al het nieuws","url":"/nieuws"},"class":"arrow-link shrink-0"}
::::::
:::::

::::: box {"id":"hm-news-grid","class":"mt-10 grid gap-12 lg:grid-cols-12 lg:gap-x-14"}
:::::: repeat {"id":"hm-lead","props":{"source":"entries","collection":"news","sort":"-published_at","limit":1,"tag":"ul"},"class":"lg:col-span-7"}
::::::: box {"id":"hm-lead-item","props":{"tag":"li"}}
:::::::: box {"id":"hm-lead-link","bind":{"link":"item.url"},"class":"group block text-foreground no-underline"}
::::::::: box {"id":"hm-lead-media","class":"relative"}
:::::::::: box {"id":"hm-lead-photo","class":"zoom photo"}
::::::::::: image {"id":"hm-lead-img","props":{"aspect":"3/2","sizes":"(min-width: 64rem) 55vw, 100vw"},"bind":{"image":"item.cover"},"class":"aspect-[3/2] w-full object-cover"}
:::::::::::
::::::::::

:::::::::: box {"id":"hm-lead-meta","class":"notch flex items-center gap-3 pt-3.5 pr-5 pb-0 pl-0 text-sm"}
::::::::::: paragraph {"id":"hm-lead-kind","props":{"tag":"span"},"bind":{"text":"item.kind"},"class":"tag"}
:::::::::::

::::::::::: paragraph {"id":"hm-lead-date","props":{"tag":"span"},"bind":{"text":"item.date|date:j F Y"},"class":"text-muted"}
:::::::::::
::::::::::
:::::::::

::::::::: heading {"id":"hm-lead-title","props":{"level":"3"},"bind":{"text":"item.title"},"class":"mt-4 text-3xl group-hover:underline group-hover:decoration-2"}
:::::::::

::::::::: paragraph {"id":"hm-lead-sum","props":{"tag":"p"},"bind":{"text":"item.summary","visible":"item.summary"},"class":"mt-3 max-w-2xl text-muted"}
:::::::::
::::::::
:::::::
::::::

:::::: repeat {"id":"hm-rows","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"offset":1,"tag":"ul"},"class":"flex flex-col gap-2.5 lg:col-span-5"}
::::::: box {"id":"hm-row-item","props":{"tag":"li"}}
:::::::: box {"id":"hm-row-link","bind":{"link":"item.url"},"class":"group card flex-row items-center gap-5 p-3 pr-5"}
::::::::: box {"id":"hm-row-photo","class":"zoom size-24 shrink-0 overflow-hidden rounded-lg bg-surface sm:size-28"}
:::::::::: image {"id":"hm-row-img","props":{"aspect":"1/1","sizes":"7rem"},"bind":{"image":"item.cover"},"class":"size-full object-cover"}
::::::::::
:::::::::

::::::::: box {"id":"hm-row-text","class":"flex min-w-0 flex-col gap-1.5"}
:::::::::: box {"id":"hm-row-meta","class":"flex gap-3 text-sm text-muted"}
::::::::::: paragraph {"id":"hm-row-kind","props":{"tag":"span"},"bind":{"text":"item.kind"},"class":"font-semibold text-foreground"}
:::::::::::

::::::::::: paragraph {"id":"hm-row-date","props":{"tag":"span"},"bind":{"text":"item.date|date:j F"}}
:::::::::::
::::::::::

:::::::::: heading {"id":"hm-row-title","props":{"level":"3"},"bind":{"text":"item.title"},"class":"text-xl leading-snug group-hover:underline"}
::::::::::
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-events","props":{"tag":"section"},"label":"Activiteiten","attrs":{"aria-labelledby":"#hm-events-h"}}
:::: box {"id":"hm-events-inner","class":"wrap-wide pb-section"}
::::: box {"id":"hm-events-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4"}
:::::: heading {"id":"hm-events-h","props":{"level":"2","text":"Uit in Wilgendaal"}}
::::::

:::::: link {"id":"hm-events-all","props":{"label":"Alle activiteiten","url":"/activiteiten"},"class":"arrow-link shrink-0"}
::::::
:::::

::::: repeat {"id":"hm-events-list","props":{"source":"entries","collection":"events","sort":"when.start","limit":4,"tag":"ul","where":[{"field":"when.start","op":">","value":"{site.today}"},{"field":"category","op":"!=","value":"Bestuur"}],"empty":"Er staan nu geen activiteiten gepland."},"class":"mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"}
:::::: box {"id":"hm-ev-item","props":{"tag":"li"}}
::::::: component {"id":"hm-ev","props":{"ref":"event-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.image":"item.cover","values.day":"item.when.start|date:j","values.month":"item.when.start|date:M","values.when":"{item.when.start|date:l} {item.when.start|date:G.i} uur","values.venue":"item.venue"}}
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-say","props":{"tag":"section"},"label":"Doe mee","attrs":{"aria-labelledby":"#hm-say-h"},"class":"slab scheme-accent"}
:::: box {"id":"hm-say-grid","class":"wrap-wide grid items-start gap-12 py-section lg:grid-cols-12 lg:gap-x-16"}
::::: box {"id":"hm-say-text-col","class":"flex flex-col items-start gap-5 lg:col-span-5"}
:::::: heading {"id":"hm-say-h","props":{"level":"2","text":"Wilgendaal maak je samen"},"class":"text-4xl"}
::::::

:::::: paragraph {"id":"hm-say-text","props":{"tag":"p","text":"Geef je mening over plannen voor je straat, je wijk en de stad. Wat de stad met je antwoorden doet, lees je bij elke ronde."},"class":"max-w-md text-lg"}
::::::

:::::: button {"id":"hm-say-all","props":{"label":"Alle inspraakrondes","url":"/doe-mee","variant":"primary","icon":"arrow-right","icon_position":"end"},"class":"mt-3"}
::::::
:::::

::::: repeat {"id":"hm-say-list","props":{"source":"entries","collection":"participation","sort":"closes","limit":3,"tag":"ul","where":[{"field":"state","op":"=","value":"Open"}]},"class":"flex flex-col gap-2.5 lg:col-span-7"}
:::::: box {"id":"hm-say-item","props":{"tag":"li"}}
::::::: box {"id":"hm-say-link","bind":{"link":"item.url"},"class":"group flex items-center gap-6 rounded-xl bg-white p-5 text-ink no-underline sm:p-7"}
:::::::: box {"id":"hm-say-body","class":"flex min-w-0 flex-1 flex-col gap-2.5"}
::::::::: box {"id":"hm-say-meta","class":"flex flex-wrap items-center gap-x-4 gap-y-1"}
:::::::::: paragraph {"id":"hm-say-state","props":{"tag":"span"},"bind":{"text":"item.state"},"class":"state text-[#176a3f]"}
::::::::::

:::::::::: paragraph {"id":"hm-say-closes","props":{"tag":"span"},"bind":{"text":"Reageer tot {item.closes|date:j F}"},"class":"text-sm"}
::::::::::
:::::::::

::::::::: paragraph {"id":"hm-say-title","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"font-display text-2xl font-medium leading-tight group-hover:underline"}
:::::::::
::::::::

:::::::: icon {"id":"hm-say-go","props":{"icon":"arrow-right"},"class":"go size-11 p-3 text-ink"}
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-gap","attrs":{"aria-hidden":"true"},"class":"h-frame"}
:::
