---
id: 01m9a0gjp671jz43qjemdqb5s2
title: Home
status: published
position: 1
summary: 'De officiële website van Stad Lindevoorde: producten en diensten, afval, wonen, mobiliteit, welzijn, nieuws en activiteiten.'
template: default
---

::: box {"id":"hm-hero","props":{"tag":"section"},"label":"Hero","attrs":{"aria-labelledby":"#hm-h1"},"class":"overflow-hidden"}
:::: box {"id":"hm-hero-grid","class":"wrap-wide grid items-center gap-12 pt-10 pb-16 lg:grid-cols-12 lg:gap-16 lg:pt-16 lg:pb-24"}
::::: box {"id":"hm-hero-text","class":"relative z-10 flex flex-col gap-7 lg:col-span-7 lg:py-10"}
:::::: paragraph {"id":"hm-eyebrow","props":{"tag":"p","text":"Stad Lindevoorde"},"class":"eyebrow text-base"}
::::::

:::::: heading {"id":"hm-h1","props":{"level":"1","text":"Waarmee kunnen we je helpen?"},"class":"display max-w-[12ch]"}
::::::

:::::: search-field {"id":"hm-search","props":{"label":"Zoek een product, dienst of informatie","show_label":true,"placeholder":"Bv. identiteitskaart","button_label":"Zoeken","button_style":"primary","size":"lg","icon_only":false,"results_page":"/zoeken"},"class":"mt-4 w-full max-w-2xl [&_label]:text-base [&_label]:text-muted"}
::::::

:::::: box {"id":"hm-quick","class":"flex flex-col gap-3"}
::::::: paragraph {"id":"hm-quick-label","props":{"tag":"span","text":"Snel naar"},"class":"text-sm font-semibold text-muted"}
:::::::

::::::: repeat {"id":"hm-quick-list","props":{"source":"entries","collection":"products","sort":"title","limit":4,"tag":"ul","where":[{"field":"featured","op":"=","value":true}]},"class":"flex flex-wrap gap-2"}
:::::::: box {"id":"hm-quick-item","props":{"tag":"li"}}
::::::::: link {"id":"hm-quick-link","bind":{"label":"item.title","url":"item.url"},"class":"tag bg-surface px-3.5 py-2 text-foreground hover:bg-primary-soft hover:text-primary-strong"}
:::::::::
::::::::
:::::::
::::::
:::::

::::: box {"id":"hm-hero-visual","class":"relative lg:col-span-5"}
:::::: box {"id":"hm-hero-figure","class":"relative"}
::::::: box {"id":"hm-hero-gable","attrs":{"aria-hidden":"true"},"class":"gable absolute inset-0 translate-x-6 -translate-y-6 bg-primary-soft max-lg:hidden"}
:::::::

::::::: box {"id":"hm-hero-photo","class":"gable frame relative"}
:::::::: image {"id":"hm-hero-img","props":{"priority":true,"aspect":"4/5","sizes":"(min-width: 64rem) 38vw, 100vw","image":["01m9a0jjkh2dg0ms9f4nxshvtj"],"alt":"Mensen wandelen en fietsen door een zonnige straat met bakstenen huizen."},"class":"aspect-[4/3] w-full object-cover lg:aspect-[4/5]"}
::::::::
:::::::
::::::

:::::: box {"id":"hm-hours-card","class":"scheme-night relative mt-4 flex w-full flex-col gap-2 rounded-xl p-6 shadow-lift sm:mt-[-4rem] sm:mr-6 sm:ml-auto sm:w-[min(20rem,85%)]"}
::::::: box {"id":"hm-hours-head","class":"flex items-center gap-2"}
:::::::: icon {"id":"hm-hours-icon","props":{"icon":"clock"},"class":"size-5 shrink-0"}
::::::::

:::::::: paragraph {"id":"hm-hours-title","props":{"tag":"span","text":"Stadhuis"},"class":"font-semibold"}
::::::::
:::::::

::::::: paragraph {"id":"hm-hours","props":{"tag":"p"},"bind":{"text":"globals.city.hours"},"class":"whitespace-pre-line text-base"}
:::::::

::::::: link {"id":"hm-hours-link","props":{"label":"Afspraak maken","url":"/afspraak"},"class":"arrow-link text-base"}
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-top","props":{"tag":"section"},"attrs":{"aria-labelledby":"#hm-top-h"},"class":"bg-surface"}
:::: box {"id":"hm-top-inner","class":"wrap-wide py-14"}
::::: box {"id":"hm-top-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4"}
:::::: box {"id":"hm-top-titles","class":"flex max-w-2xl flex-col gap-3"}
::::::: heading {"id":"hm-top-h","props":{"level":"2","text":"Snel naar"},"class":"text-2xl"}
:::::::
::::::

:::::: link {"id":"hm-top-all","props":{"label":"Alle producten","url":"/themas"},"class":"arrow-link"}
::::::
:::::

::::: repeat {"id":"hm-top-list","props":{"source":"entries","collection":"products","sort":"title","limit":8,"tag":"ul","where":[{"field":"featured","op":"=","value":true}]},"class":"mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"}
:::::: box {"id":"hm-top-item","props":{"tag":"li"},"class":"grid"}
::::::: box {"id":"hm-top-tile","bind":{"link":"item.url"},"class":"tile h-full"}
:::::::: icon {"id":"hm-top-icon","bind":{"icon":"item.icon|default:arrow-right"},"class":"icon-chip size-11 p-2.5"}
::::::::

:::::::: paragraph {"id":"hm-top-title","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"leading-snug"}
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-themes","props":{"tag":"section"},"attrs":{"aria-labelledby":"#hm-themes-h"},"class":"wrap-wide py-section"}
:::: box {"id":"hm-themes-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4"}
::::: box {"id":"hm-themes-titles","class":"flex max-w-2xl flex-col gap-3"}
:::::: heading {"id":"hm-themes-h","props":{"level":"2","text":"Alles over"},"class":"text-3xl"}
::::::

:::::: paragraph {"id":"hm-themes-intro","props":{"tag":"p","text":"Alle producten en diensten van de stad, per thema."},"class":"text-lg text-muted"}
::::::
:::::

::::: link {"id":"hm-themes-all","props":{"label":"Alle producten van A tot Z","url":"/themas"},"class":"arrow-link"}
:::::
::::

:::: repeat {"id":"hm-themes-list","props":{"source":"entries","collection":"topics","sort":"position","limit":9,"tag":"ul","as":"topic"},"class":"mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"}
::::: box {"id":"hm-th-card","props":{"tag":"li"},"class":"flex flex-col gap-5"}
:::::: box {"id":"hm-th-head","class":"flex items-center gap-4"}
::::::: icon {"id":"hm-th-icon","bind":{"icon":"topic.icon"},"class":"icon-chip"}
:::::::

::::::: heading {"id":"hm-th-title","props":{"level":"3"},"bind":{"text":"topic.title"},"class":"text-xl"}
:::::::
::::::

:::::: repeat {"id":"hm-th-products","props":{"source":"entries","collection":"products","sort":"title","limit":3,"tag":"ul","where":[{"field":"topic","op":"contains","value":"{topic.id}"}]},"class":"link-list text-base"}
::::::: box {"id":"hm-th-item","props":{"tag":"li"}}
:::::::: link {"id":"hm-th-link","bind":{"label":"item.title","url":"item.url"}}
::::::::
:::::::
::::::

:::::: link {"id":"hm-th-all","bind":{"label":"Alles over {topic.title|lower}","url":"topic.url"},"class":"arrow-link mt-auto text-base"}
::::::
:::::
::::
:::

::: box {"id":"hm-news","props":{"tag":"section"},"attrs":{"aria-labelledby":"#hm-news-h"},"class":"bg-surface"}
:::: box {"id":"hm-news-inner","class":"wrap-wide py-section"}
::::: box {"id":"hm-news-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4"}
:::::: box {"id":"hm-news-titles","class":"flex max-w-2xl flex-col gap-3"}
::::::: heading {"id":"hm-news-h","props":{"level":"2","text":"Actueel"},"class":"text-3xl"}
:::::::
::::::

:::::: link {"id":"hm-news-all","props":{"label":"Al het nieuws","url":"/nieuws"},"class":"arrow-link"}
::::::
:::::

::::: box {"id":"hm-news-grid","class":"mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16"}
:::::: repeat {"id":"hm-news-big-list","props":{"source":"entries","collection":"news","sort":"-published_at","limit":1,"tag":"ul"},"class":"lg:col-span-7 [&_h3]:text-3xl"}
::::::: box {"id":"hm-news-big-item","props":{"tag":"li"}}
:::::::: component {"id":"hm-news-big","props":{"ref":"news-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.image":"item.cover","values.kind":"item.kind","values.date":"item.date|date:j F Y"}}
::::::::
:::::::
::::::

:::::: repeat {"id":"hm-news-sm-list","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"tag":"ul","offset":1},"class":"flex flex-col gap-6 lg:col-span-5"}
::::::: box {"id":"hm-news-sm-item","props":{"tag":"li"},"class":"border-b border-border pb-6 last:border-0 last:pb-0"}
:::::::: box {"id":"hm-news-sm-link","bind":{"link":"item.url"},"class":"group flex items-start gap-5 text-foreground no-underline"}
::::::::: box {"id":"hm-news-sm-photo","class":"photo w-28 shrink-0 rounded-lg sm:w-36"}
:::::::::: image {"id":"hm-news-sm-img","props":{"aspect":"1/1"},"bind":{"image":"item.cover"},"class":"aspect-square w-full object-cover"}
::::::::::
:::::::::

::::::::: box {"id":"hm-news-sm-body","class":"flex flex-col gap-2"}
:::::::::: paragraph {"id":"hm-news-sm-date","props":{"tag":"time"},"bind":{"text":"item.date|date:j F Y"},"class":"meta"}
::::::::::

:::::::::: heading {"id":"hm-news-sm-title","props":{"level":"3"},"bind":{"text":"item.title"},"class":"text-xl group-hover:text-primary"}
::::::::::
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-events","props":{"tag":"section"},"attrs":{"aria-labelledby":"#hm-events-h"},"class":"wrap-wide py-section"}
:::: box {"id":"hm-events-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4"}
::::: box {"id":"hm-events-titles","class":"flex max-w-2xl flex-col gap-3"}
:::::: heading {"id":"hm-events-h","props":{"level":"2","text":"Uit in Lindevoorde"},"class":"text-3xl"}
::::::

:::::: paragraph {"id":"hm-events-intro","props":{"tag":"p","text":"Markten, wandelingen, sport, cultuur en de gemeenteraad. Veel activiteiten zijn gratis."},"class":"text-lg text-muted"}
::::::
:::::

::::: link {"id":"hm-events-all","props":{"label":"Alle activiteiten","url":"/activiteiten"},"class":"arrow-link"}
:::::
::::

:::: repeat {"id":"hm-events-list","props":{"source":"entries","collection":"events","sort":"when.start","limit":3,"tag":"ul","where":[{"field":"when.start","op":">","value":"{site.today}"}],"empty":"Er staan nu geen activiteiten gepland."},"class":"mt-10 grid gap-10 md:grid-cols-3"}
::::: box {"id":"hm-event-item","props":{"tag":"li"}}
:::::: component {"id":"hm-event-card","props":{"ref":"event-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.image":"item.cover","values.day":"item.when.start|date:j","values.month":"item.when.start|date:M","values.when":"{item.when.start|date:l j F}, {item.when.start|date:G.i} uur","values.venue":"item.venue"}}
::::::
:::::
::::
:::

::: box {"id":"hm-say","props":{"tag":"section"},"attrs":{"aria-labelledby":"#hm-say-h"},"class":"scheme-night"}
:::: box {"id":"hm-say-grid","class":"wrap-wide grid items-center gap-12 py-section lg:grid-cols-12 lg:gap-16"}
::::: box {"id":"hm-say-text-col","class":"flex flex-col items-start gap-6 lg:col-span-5"}
:::::: paragraph {"id":"hm-say-eyebrow","props":{"tag":"p","text":"Doe mee"},"class":"eyebrow text-base"}
::::::

:::::: heading {"id":"hm-say-h","props":{"level":"2","text":"Denk mee over de stad van morgen"},"class":"text-4xl"}
::::::

:::::: paragraph {"id":"hm-say-text","props":{"tag":"p","text":"Voor we grote plannen maken, vragen we wat jij ervan vindt. Over pleinen en straten, diensten en budgetten. We lezen elke reactie."},"class":"text-lg text-muted"}
::::::

:::::: button {"id":"hm-say-all","props":{"label":"Alle inspraaktrajecten","url":"/doe-mee","variant":"accent"}}
::::::
:::::

::::: repeat {"id":"hm-say-list","props":{"source":"entries","collection":"participation","sort":"closes","limit":2,"tag":"ul","where":[{"field":"state","op":"=","value":"Open"}]},"class":"grid gap-4 md:grid-cols-2 lg:col-span-7"}
:::::: box {"id":"hm-say-item","props":{"tag":"li"},"class":"grid"}
::::::: component {"id":"hm-say-card","props":{"ref":"participation-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.state":"item.state","values.closes":"Tot {item.closes|date:j F Y}"}}
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-council-wrap"}
:::: box {"id":"hm-council-grid","class":"wrap-wide grid gap-16 py-section lg:grid-cols-12"}
::::: box {"id":"hm-council","class":"flex flex-col gap-8 sm:flex-row sm:items-start lg:col-span-6"}
:::::: box {"id":"hm-mayor-photo","class":"frame w-40 shrink-0 sm:w-48"}
::::::: image {"id":"hm-mayor-img","props":{"aspect":"4/5","image":["01m9a0xmdh1a1f953ng8deycef"],"alt":"Burgemeester An De Wilde"},"class":"aspect-[4/5] w-full object-cover"}
:::::::
::::::

:::::: box {"id":"hm-council-text","class":"flex flex-col gap-5"}
::::::: paragraph {"id":"hm-council-eyebrow","props":{"tag":"p","text":"Bestuur"},"class":"eyebrow text-base"}
:::::::

::::::: quote {"id":"hm-council-quote","props":{"text":"Een goede stad begint bij luisteren. Kom naar de gemeenteraad, mail je schepen of doe mee aan een bevraging: elke stem in Lindevoorde telt.","cite":"An De Wilde, burgemeester"},"class":"[&_figcaption]:mt-4 [&_figcaption]:text-base [&_figcaption]:text-muted"}
:::::::

::::::: link {"id":"hm-council-link","props":{"label":"Maak kennis met het bestuur","url":"/bestuur"},"class":"arrow-link"}
:::::::
::::::
:::::

::::: box {"id":"hm-notices","props":{"tag":"section"},"attrs":{"aria-labelledby":"#hm-notices-h"},"class":"lg:col-span-6"}
:::::: box {"id":"hm-notices-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4"}
::::::: box {"id":"hm-notices-titles","class":"flex max-w-2xl flex-col gap-3"}
:::::::: heading {"id":"hm-notices-h","props":{"level":"2","text":"Bekendmakingen"},"class":"text-2xl"}
::::::::
:::::::

::::::: link {"id":"hm-notices-all","props":{"label":"Alle bekendmakingen","url":"/bekendmakingen"},"class":"arrow-link"}
:::::::
::::::

:::::: repeat {"id":"hm-notices-list","props":{"source":"entries","collection":"notices","sort":"-published_at","limit":4,"tag":"ul"},"class":"mt-4 flex flex-col border-t border-border"}
::::::: box {"id":"hm-notice-item","props":{"tag":"li"},"class":"border-b border-border"}
:::::::: component {"id":"hm-notice-row","props":{"ref":"notice-row"},"bind":{"values.title":"item.title","values.url":"item.url","values.meta":"{item.kind} · {item.date|date:j F Y}"}}
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-contact","props":{"tag":"section"},"attrs":{"aria-labelledby":"#hm-contact-h"}}
:::: box {"id":"hm-contact-inner","class":"wrap-wide pb-section"}
::::: heading {"id":"hm-contact-h","props":{"level":"2","text":"Contact"},"class":"text-3xl"}
:::::

::::: box {"id":"hm-contact-cards","class":"mt-10 grid gap-4 md:grid-cols-3"}
:::::: box {"id":"hm-c1","class":"panel flex flex-col gap-3 p-8 md:p-8"}
::::::: icon {"id":"hm-c1-icon","props":{"icon":"buildings"},"class":"icon-chip"}
:::::::

::::::: heading {"id":"hm-c1-h","props":{"level":"3","text":"Stadhuis"},"class":"text-xl"}
:::::::

::::::: paragraph {"id":"hm-c1-address","props":{"tag":"p"},"bind":{"text":"globals.city.address"},"class":"whitespace-pre-line text-base"}
:::::::

::::::: paragraph {"id":"hm-c1-hours","props":{"tag":"p"},"bind":{"text":"globals.city.hours"},"class":"whitespace-pre-line text-base text-muted"}
:::::::

::::::: link {"id":"hm-c1-link","props":{"label":"Afspraak maken","url":"/afspraak"},"class":"arrow-link mt-auto text-base"}
:::::::
::::::

:::::: box {"id":"hm-c2","class":"panel flex flex-col gap-3 p-8 md:p-8"}
::::::: icon {"id":"hm-c2-icon","props":{"icon":"phone"},"class":"icon-chip"}
:::::::

::::::: heading {"id":"hm-c2-h","props":{"level":"3","text":"Bel of mail ons"},"class":"text-xl"}
:::::::

::::::: link {"id":"hm-c2-phone","bind":{"label":"globals.city.phone","url":"tel:{globals.city.phone_link}"},"class":"text-link text-2xl font-semibold text-primary"}
:::::::

::::::: paragraph {"id":"hm-c2-hours","props":{"tag":"p"},"bind":{"text":"globals.city.phone_hours"},"class":"text-base text-muted"}
:::::::

::::::: link {"id":"hm-c2-link","props":{"label":"Alle contactgegevens","url":"/contact"},"class":"arrow-link mt-auto text-base"}
:::::::
::::::

:::::: box {"id":"hm-c3","class":"scheme-accent flex flex-col gap-3 rounded-xl p-8"}
::::::: icon {"id":"hm-c3-icon","props":{"icon":"megaphone-simple"},"class":"icon-chip bg-background"}
:::::::

::::::: heading {"id":"hm-c3-h","props":{"level":"3","text":"Iets melden"},"class":"text-xl"}
:::::::

::::::: paragraph {"id":"hm-c3-text","props":{"tag":"p","text":"Een put in de weg, een kapotte straatlamp, zwerfvuil of een vergeten afvalzak? Laat het ons weten."},"class":"text-base"}
:::::::

::::::: button {"id":"hm-c3-button","props":{"label":"Melding doen","url":"/melden","variant":"primary"},"class":"mt-auto self-start"}
:::::::
::::::
:::::
::::
:::
