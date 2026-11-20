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

::::: box {"id":"hm-hero-tab","label":"Tab","class":"notch relative! flex w-full max-w-[60rem] flex-col gap-6 pt-7 pr-6 pb-1 pl-pad [--notch-r:var(--radius-slab)] sm:w-[calc(100%-4rem)] sm:pt-9 sm:pr-10 lg:gap-7 lg:pt-11 lg:pr-14"}
:::::: heading {"id":"hm-h1","props":{"level":"1","text":"Welkom in Wilgendaal"},"class":"text-5xl"}
::::::

:::::: search-field {"id":"hm-search","props":{"label":"Zoek een dienst, een document of een adres","show_label":false,"placeholder":"Wat zoek je?","button_label":"Zoeken","button_style":"primary","size":"lg","icon_only":false,"results_page":"/zoeken"},"class":"search-box search-box-hero w-full"}
::::::

:::::: box {"id":"hm-quick","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#hm-quick-h"},"class":"mt-2 lg:mt-3"}
::::::: heading {"id":"hm-quick-h","props":{"level":"2","text":"Snel naar"},"class":"sr-only"}
:::::::

::::::: repeat {"id":"hm-quick-list","props":{"source":"menu","menu":"quick","tag":"ul"},"class":"flex flex-wrap gap-2"}
:::::::: box {"id":"hm-quick-item","props":{"tag":"li"}}
::::::::: component {"id":"hm-quick-pill","props":{"ref":"pill"},"bind":{"values.label":"item.label","values.url":"item.url","values.icon":"item.icon"}}
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-tasks","props":{"tag":"section"},"label":"Veel gevraagd","class":"wrap pt-16 pb-section sm:pt-20"}
:::: component {"id":"hm-tasks-head","props":{"ref":"section-head","values":{"title":"Veel gevraagd","label":"Alles van A tot Z","url":"/themas#alles-van-a-tot-z"}}}
::::

:::: repeat {"id":"hm-tasks-list","props":{"source":"entries","collection":"products","sort":"title","limit":8,"tag":"ul","where":[{"field":"featured","op":"=","value":true}]},"class":"mt-10 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4"}
::::: box {"id":"hm-task-item","props":{"tag":"li"},"class":"grid"}
:::::: component {"id":"hm-task","props":{"ref":"product-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.online":"item.online"}}
::::::
:::::
::::
:::

::: box {"id":"hm-moments","props":{"tag":"section"},"label":"Levensmomenten","class":"wrap pb-section"}
:::: component {"id":"hm-moments-head","props":{"ref":"section-head","values":{"title":"Er verandert iets in je leven","label":"Alle levensmomenten","url":"/levensmomenten"}}}
::::

:::: repeat {"id":"hm-moments-list","props":{"source":"entries","collection":"moments","sort":"position","limit":6,"tag":"ul"},"class":"mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"}
::::: box {"id":"hm-moment-item","props":{"tag":"li"}}
:::::: component {"id":"hm-moment","props":{"ref":"moment-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.image":"item.photo"}}
::::::
:::::
::::
:::

::: box {"id":"hm-themes","props":{"tag":"section"},"label":"Thema’s","class":"slab scheme-night"}
:::: box {"id":"hm-themes-inner","class":"wrap"}
::::: component {"id":"hm-themes-head","props":{"ref":"section-head","values":{"title":"Alle thema’s","label":"Alles van A tot Z","url":"/themas"}}}
:::::

::::: repeat {"id":"hm-themes-list","props":{"source":"entries","collection":"topics","sort":"position","limit":12,"tag":"ul"},"class":"mt-10 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5"}
:::::: box {"id":"hm-theme-item","props":{"tag":"li"},"class":"grid"}
::::::: component {"id":"hm-theme","props":{"ref":"icon-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.icon":"item.icon","values.summary":"item.summary"}}
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-news","props":{"tag":"section"},"label":"Nieuws","class":"wrap py-section"}
:::: component {"id":"hm-news-head","props":{"ref":"section-head","values":{"title":"Nieuws uit de stad","label":"Al het nieuws","url":"/nieuws"}}}
::::

:::: box {"id":"hm-news-grid","class":"mt-10 grid gap-12 lg:grid-cols-12 lg:gap-x-14"}
::::: repeat {"id":"hm-lead","props":{"source":"entries","collection":"news","sort":"-published_at","limit":1,"tag":"ul"},"class":"lg:col-span-7"}
:::::: box {"id":"hm-lead-item","props":{"tag":"li"}}
::::::: component {"id":"hm-lead-card","props":{"ref":"news-card","values":{"featured":true}},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.image":"item.cover","values.kind":"item.kind","values.date":"item.date|date:j F Y"}}
:::::::
::::::
:::::

::::: repeat {"id":"hm-rows","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"offset":1,"tag":"ul"},"class":"flex flex-col gap-2.5 lg:col-span-5"}
:::::: box {"id":"hm-row-item","props":{"tag":"li"}}
::::::: component {"id":"hm-row","props":{"ref":"news-row"},"bind":{"values.title":"item.title","values.url":"item.url","values.image":"item.cover","values.kind":"item.kind","values.date":"item.date|date:j F Y"}}
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-events","props":{"tag":"section"},"label":"Activiteiten","class":"wrap pb-section"}
:::: component {"id":"hm-events-head","props":{"ref":"section-head","values":{"title":"Uit in Wilgendaal","label":"Alle activiteiten","url":"/activiteiten"}}}
::::

:::: repeat {"id":"hm-events-list","props":{"source":"entries","collection":"events","sort":"when.start","limit":4,"tag":"ul","where":[{"field":"when.start","op":">","value":"{site.today}"},{"field":"category","op":"!=","value":"Bestuur"}],"empty":"Er staan nu geen activiteiten gepland."},"class":"mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"}
::::: box {"id":"hm-ev-item","props":{"tag":"li"}}
:::::: component {"id":"hm-ev","props":{"ref":"event-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.image":"item.cover","values.day":"item.when.start|date:j","values.month":"item.when.start|date:M","values.when":"{item.when.start|date:l} {item.when.start|date:G.i} uur","values.venue":"item.venue"}}
::::::
:::::
::::
:::

::: box {"id":"hm-say","props":{"tag":"section"},"label":"Doe mee","attrs":{"aria-labelledby":"#hm-say-h"},"class":"slab scheme-accent"}
:::: box {"id":"hm-say-grid","class":"wrap grid items-start gap-12 lg:grid-cols-12 lg:gap-x-16"}
::::: box {"id":"hm-say-text-col","class":"flex flex-col items-start gap-5 lg:col-span-5"}
:::::: heading {"id":"hm-say-h","props":{"level":"2","text":"Wilgendaal maak je samen"},"class":"text-4xl"}
::::::

:::::: paragraph {"id":"hm-say-text","props":{"tag":"p","text":"Geef je mening over plannen voor je straat, je wijk en de stad. Wat de stad met je antwoorden doet, lees je bij elke ronde."},"class":"max-w-md"}
::::::

:::::: button {"id":"hm-say-all","props":{"label":"Alle inspraakrondes","url":"/doe-mee","variant":"primary","icon":"arrow-right","icon_position":"end"},"class":"mt-3"}
::::::
:::::

::::: repeat {"id":"hm-say-list","props":{"source":"entries","collection":"participation","sort":"closes","limit":3,"tag":"ul","where":[{"field":"state","op":"=","value":"Open"}]},"class":"flex flex-col gap-2.5 lg:col-span-7"}
:::::: box {"id":"hm-say-item","props":{"tag":"li"}}
::::::: component {"id":"hm-say-card","props":{"ref":"participation-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.state":"item.state","values.closes":"Reageer tot {item.closes|date:j F Y}"}}
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-gap","attrs":{"aria-hidden":"true"},"class":"h-frame"}
:::
