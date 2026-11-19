---
id: 01m9a0gjp671jz43qjemdqb5s2
title: Home
status: published
position: 1
summary: 'Regel het bij Stad Wilgendaal: zoek een dienst, kijk wat vandaag open is, lees het nieuws en zie wat er te doen is.'
template: default
---

::: box {"id":"hm-hero","props":{"tag":"section"},"label":"Hero","attrs":{"aria-labelledby":"#hm-h1"}}
:::: box {"id":"hm-hero-photo","class":"relative isolate flex min-h-[min(46rem,82svh)] items-end overflow-hidden bg-ink"}
::::: image {"id":"hm-hero-img","props":{"priority":true,"aspect":"3/2","sizes":"100vw","image":["01m9a0abdvapx21pxbnhr3b9d8"],"alt":"Bakstenen huizen met trapgevels langs het water van de Mere, in de zon."},"class":"absolute inset-0 size-full object-cover"}
:::::

::::: box {"id":"hm-hero-shade","attrs":{"aria-hidden":"true"},"class":"absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.8)_0%,rgb(0_0_0/0.55)_45%,rgb(0_0_0/0.05)_85%)]"}
:::::

::::: box {"id":"hm-hero-text","class":"wrap-wide relative flex flex-col gap-7 pt-40 pb-12 sm:pb-14 lg:gap-8 lg:pb-16"}
:::::: heading {"id":"hm-h1","props":{"level":"1","text":"Wat wil je regelen?"},"class":"text-6xl text-white"}
::::::

:::::: search-field {"id":"hm-search","props":{"label":"Zoek een dienst, een document of een adres","show_label":false,"placeholder":"Wat zoek je?","button_label":"Zoeken","button_style":"primary","size":"lg","icon_only":false,"results_page":"/zoeken"},"class":"home-search search-box search-box-hero w-full max-w-2xl [&>div]:border-white"}
::::::

:::::: box {"id":"hm-quick","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#hm-quick-h"}}
::::::: heading {"id":"hm-quick-h","props":{"level":"2","text":"Snel naar"},"class":"sr-only"}
:::::::

::::::: repeat {"id":"hm-quick-list","props":{"source":"menu","menu":"quick","tag":"ul"},"class":"flex flex-wrap gap-x-10 gap-y-3"}
:::::::: box {"id":"hm-quick-item","props":{"tag":"li"}}
::::::::: link {"id":"hm-quick-link","bind":{"label":"item.label","url":"item.url"},"class":"arrow-link text-lg text-white decoration-2 underline-offset-4"}
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-tasks","props":{"tag":"section"},"label":"Veel gevraagd","attrs":{"aria-labelledby":"#hm-tasks-h"}}
:::: box {"id":"hm-tasks-inner","class":"wrap-wide py-section"}
::::: box {"id":"hm-tasks-grid","class":"grid gap-10 lg:grid-cols-12 lg:gap-x-16"}
:::::: box {"id":"hm-tasks-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4 lg:col-span-4 lg:flex-col lg:items-start lg:justify-start lg:gap-6"}
::::::: heading {"id":"hm-tasks-h","props":{"level":"2","text":"Veel gevraagd"}}
:::::::

::::::: link {"id":"hm-tasks-all","props":{"label":"Alles van A tot Z","url":"/themas#alles-van-a-tot-z"},"class":"arrow-link shrink-0"}
:::::::
::::::

:::::: repeat {"id":"hm-tasks-list","props":{"source":"entries","collection":"products","sort":"title","limit":8,"tag":"ul","where":[{"field":"featured","op":"=","value":true}]},"class":"grid border-t border-rule sm:grid-cols-2 sm:gap-x-10 lg:col-span-8"}
::::::: box {"id":"hm-task-item","props":{"tag":"li"},"class":"border-b border-border"}
:::::::: box {"id":"hm-task-link","bind":{"link":"item.url"},"class":"group index-row gap-4 py-4 sm:py-5"}
::::::::: paragraph {"id":"hm-task-title","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"flex-1 font-display text-xl font-medium leading-snug group-hover:underline"}
:::::::::

::::::::: paragraph {"id":"hm-task-online","props":{"tag":"span","text":"Online"},"bind":{"visible":"item.online"},"class":"tag shrink-0"}
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-moments","props":{"tag":"section"},"label":"Levensmomenten","attrs":{"aria-labelledby":"#hm-moments-h"},"class":"border-t border-border"}
:::: box {"id":"hm-moments-inner","class":"wrap-wide py-section"}
::::: box {"id":"hm-moments-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4 "}
:::::: heading {"id":"hm-moments-h","props":{"level":"2","text":"Er verandert iets in je leven"}}
::::::

:::::: link {"id":"hm-moments-all","props":{"label":"Alle levensmomenten","url":"/levensmomenten"},"class":"arrow-link shrink-0"}
::::::
:::::

::::: repeat {"id":"hm-moments-list","props":{"source":"entries","collection":"moments","sort":"position","limit":6,"tag":"ul"},"class":"index-list mt-10"}
:::::: box {"id":"hm-moment-item","props":{"tag":"li"}}
::::::: box {"id":"hm-moment-link","bind":{"link":"item.url"},"class":"group index-row text-4xl"}
:::::::: paragraph {"id":"hm-moment-title","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"font-display text-4xl font-medium group-hover:underline group-hover:decoration-2 group-hover:underline-offset-[0.12em]"}
::::::::

:::::::: box {"id":"hm-moment-photo","class":"zoom hidden h-[0.9em] shrink-0 aspect-[4/3] sm:block"}
::::::::: image {"id":"hm-moment-img","props":{"aspect":"4/3","sizes":"8rem"},"bind":{"image":"item.photo"},"class":"size-full object-cover"}
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-themes","props":{"tag":"section"},"label":"Thema’s","attrs":{"aria-labelledby":"#hm-themes-h"},"class":"scheme-soft"}
:::: box {"id":"hm-themes-inner","class":"wrap-wide py-section"}
::::: box {"id":"hm-themes-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4 "}
:::::: heading {"id":"hm-themes-h","props":{"level":"2","text":"Alle thema’s"}}
::::::

:::::: link {"id":"hm-themes-all","props":{"label":"Alles van A tot Z","url":"/themas"},"class":"arrow-link shrink-0"}
::::::
:::::

::::: repeat {"id":"hm-themes-list","props":{"source":"entries","collection":"topics","sort":"position","limit":12,"tag":"ul"},"class":"mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3"}
:::::: box {"id":"hm-theme-item","props":{"tag":"li"},"class":"grid"}
::::::: box {"id":"hm-theme-link","bind":{"link":"item.url"},"class":"group flex h-full flex-col gap-2 border-t border-rule pt-5 pb-8 text-foreground no-underline"}
:::::::: paragraph {"id":"hm-theme-title","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"font-display text-xl font-medium after:ml-2 after:inline-block after:content-[\"→\"] group-hover:underline"}
::::::::

:::::::: paragraph {"id":"hm-theme-summary","props":{"tag":"span"},"bind":{"text":"item.summary","visible":"item.summary"},"class":"text-base text-muted"}
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-news","props":{"tag":"section"},"label":"Nieuws","attrs":{"aria-labelledby":"#hm-news-h"}}
:::: box {"id":"hm-news-inner","class":"wrap-wide py-section"}
::::: box {"id":"hm-news-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4 "}
:::::: heading {"id":"hm-news-h","props":{"level":"2","text":"Nieuws uit de stad"}}
::::::

:::::: link {"id":"hm-news-all","props":{"label":"Al het nieuws","url":"/nieuws"},"class":"arrow-link shrink-0"}
::::::
:::::

::::: box {"id":"hm-news-grid","class":"mt-10 grid gap-12 lg:grid-cols-12 lg:gap-x-16"}
:::::: repeat {"id":"hm-lead","props":{"source":"entries","collection":"news","sort":"-published_at","limit":1,"tag":"ul"},"class":"lg:col-span-7"}
::::::: box {"id":"hm-lead-item","props":{"tag":"li"}}
:::::::: box {"id":"hm-lead-link","bind":{"link":"item.url"},"class":"group block text-foreground no-underline"}
::::::::: box {"id":"hm-lead-photo","class":"zoom bg-surface"}
:::::::::: image {"id":"hm-lead-img","props":{"aspect":"3/2","sizes":"(min-width: 64rem) 55vw, 100vw"},"bind":{"image":"item.cover"},"class":"aspect-[3/2] w-full object-cover"}
::::::::::
:::::::::

::::::::: box {"id":"hm-lead-meta","class":"mt-5 flex gap-3 text-sm text-muted"}
:::::::::: paragraph {"id":"hm-lead-kind","props":{"tag":"span"},"bind":{"text":"item.kind"},"class":"font-semibold text-foreground"}
::::::::::

:::::::::: paragraph {"id":"hm-lead-date","props":{"tag":"span"},"bind":{"text":"item.date|date:j F Y"}}
::::::::::
:::::::::

::::::::: heading {"id":"hm-lead-title","props":{"level":"3"},"bind":{"text":"item.title"},"class":"mt-2 text-3xl group-hover:underline group-hover:decoration-2"}
:::::::::

::::::::: paragraph {"id":"hm-lead-sum","props":{"tag":"p"},"bind":{"text":"item.summary","visible":"item.summary"},"class":"mt-3 max-w-2xl text-muted"}
:::::::::
::::::::
:::::::
::::::

:::::: repeat {"id":"hm-rows","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"offset":1,"tag":"ul"},"class":"flex flex-col lg:col-span-5"}
::::::: box {"id":"hm-row-item","props":{"tag":"li"},"class":"border-b border-border first:border-t first:border-rule"}
:::::::: box {"id":"hm-row-link","bind":{"link":"item.url"},"class":"group flex gap-5 py-5 text-foreground no-underline"}
::::::::: box {"id":"hm-row-photo","class":"zoom size-24 shrink-0 bg-surface sm:size-28"}
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
::::: box {"id":"hm-events-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4 "}
:::::: heading {"id":"hm-events-h","props":{"level":"2","text":"Uit in Wilgendaal"}}
::::::

:::::: link {"id":"hm-events-all","props":{"label":"Alle activiteiten","url":"/activiteiten"},"class":"arrow-link shrink-0"}
::::::
:::::

::::: repeat {"id":"hm-events-list","props":{"source":"entries","collection":"events","sort":"when.start","limit":4,"tag":"ul","where":[{"field":"when.start","op":">","value":"{site.today}"},{"field":"category","op":"!=","value":"Bestuur"}],"empty":"Er staan nu geen activiteiten gepland."},"class":"mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"}
:::::: box {"id":"hm-ev-item","props":{"tag":"li"}}
::::::: box {"id":"hm-ev-link","bind":{"link":"item.url"},"class":"group block text-foreground no-underline"}
:::::::: box {"id":"hm-ev-photo","class":"zoom bg-surface"}
::::::::: image {"id":"hm-ev-img","props":{"aspect":"4/5","sizes":"(min-width: 64rem) 22vw, (min-width: 40rem) 45vw, 90vw"},"bind":{"image":"item.cover"},"class":"aspect-[4/5] w-full object-cover"}
:::::::::
::::::::

:::::::: paragraph {"id":"hm-ev-when","props":{"tag":"span"},"bind":{"text":"{item.when.start|date:l j F}, {item.when.start|date:G.i} uur"},"class":"mt-4 block text-sm font-semibold"}
::::::::

:::::::: heading {"id":"hm-ev-title","props":{"level":"3"},"bind":{"text":"item.title"},"class":"mt-1 text-xl leading-snug group-hover:underline"}
::::::::

:::::::: paragraph {"id":"hm-ev-venue","props":{"tag":"p"},"bind":{"text":"item.venue","visible":"item.venue"},"class":"mt-1 text-sm text-muted"}
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-say","props":{"tag":"section"},"label":"Doe mee","attrs":{"aria-labelledby":"#hm-say-h"},"class":"scheme-accent"}
:::: box {"id":"hm-say-grid","class":"wrap-wide grid items-start gap-12 py-section lg:grid-cols-12 lg:gap-x-16"}
::::: box {"id":"hm-say-text-col","class":"flex flex-col items-start gap-5 lg:col-span-5"}
:::::: heading {"id":"hm-say-h","props":{"level":"2","text":"Wilgendaal maak je samen"},"class":"text-4xl"}
::::::

:::::: paragraph {"id":"hm-say-text","props":{"tag":"p","text":"Geef je mening over plannen voor je straat, je wijk en de stad. Wat de stad met je antwoorden doet, lees je bij elke ronde."},"class":"max-w-md text-lg"}
::::::

:::::: link {"id":"hm-say-all","props":{"label":"Alle inspraakrondes","url":"/doe-mee"},"class":"arrow-link mt-2"}
::::::
:::::

::::: repeat {"id":"hm-say-list","props":{"source":"entries","collection":"participation","sort":"closes","limit":3,"tag":"ul","where":[{"field":"state","op":"=","value":"Open"}]},"class":"index-list lg:col-span-7"}
:::::: box {"id":"hm-say-item","props":{"tag":"li"}}
::::::: box {"id":"hm-say-link","bind":{"link":"item.url"},"class":"group index-row"}
:::::::: box {"id":"hm-say-body","class":"flex min-w-0 flex-1 flex-col gap-2.5"}
::::::::: box {"id":"hm-say-meta","class":"flex flex-wrap items-center gap-x-4 gap-y-1"}
:::::::::: paragraph {"id":"hm-say-state","props":{"tag":"span"},"bind":{"text":"item.state"},"class":"state"}
::::::::::

:::::::::: paragraph {"id":"hm-say-closes","props":{"tag":"span"},"bind":{"text":"Reageer tot {item.closes|date:j F}"},"class":"text-sm"}
::::::::::
:::::::::

::::::::: paragraph {"id":"hm-say-title","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"font-display text-2xl font-medium leading-tight group-hover:underline"}
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::
