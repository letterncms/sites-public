---
id: 01m9a0mztb8qz6k2t66pxy7ck3
title: Home
status: published
position: 1
summary: 'Services and information from the City of Aldermoor: bins, parking, passports, council tax, care, schools and more.'
template: default
---

::: box {"id":"hm-hero","props":{"tag":"section"},"label":"Hero","attrs":{"aria-labelledby":"#hm-h1"},"class":"scheme-night"}
:::: box {"id":"hm-hero-grid","class":"wrap-wide grid items-center gap-10 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16"}
::::: box {"id":"hm-hero-text","class":"flex flex-col gap-6 lg:col-span-7 lg:py-8"}
:::::: paragraph {"id":"hm-eyebrow","props":{"tag":"p","text":"City of Aldermoor"},"class":"eyebrow text-base"}
::::::

:::::: heading {"id":"hm-h1","props":{"level":"1","text":"How can we help you today?"},"class":"text-5xl tracking-tighter"}
::::::

:::::: paragraph {"id":"hm-lead","props":{"tag":"p","text":"Find a service, pay a bill, book an appointment or report a problem. Most things you can do online, any time."},"class":"lead max-w-xl text-muted"}
::::::

:::::: search-field {"id":"hm-search","props":{"label":"Search for a service or information","show_label":true,"placeholder":"","button_label":"Search","button_style":"sun","size":"lg","icon_only":false,"results_page":"/search"},"class":"mt-2 w-full max-w-2xl [&_label]:text-base"}
::::::

:::::: box {"id":"hm-popular","class":"flex flex-wrap items-baseline gap-x-4 gap-y-2 text-base"}
::::::: paragraph {"id":"hm-popular-label","props":{"tag":"span","text":"Popular:"},"class":"font-bold"}
:::::::

::::::: repeat {"id":"hm-popular-list","props":{"source":"entries","collection":"services","sort":"title","limit":4,"tag":"ul","where":[{"field":"featured","op":"=","value":true}]},"class":"flex flex-wrap gap-x-5 gap-y-2"}
:::::::: box {"id":"hm-popular-item","props":{"tag":"li"}}
::::::::: link {"id":"hm-popular-link","bind":{"label":"item.title","url":"item.url"},"class":"text-link text-current"}
:::::::::
::::::::
:::::::
::::::
:::::

::::: box {"id":"hm-hero-photo","class":"relative lg:col-span-5"}
:::::: image {"id":"hm-hero-img","props":{"priority":true,"aspect":"4/5","sizes":"(min-width: 64rem) 36vw, 100vw","image":["01m9a0jb1qg29j75tztdtd1kde"],"alt":"People walking and cycling across a sunny city square."},"class":"aspect-[4/3] w-full rounded-2xl object-cover lg:aspect-[4/5]"}
::::::

:::::: box {"id":"hm-hours-card","class":"scheme-paper absolute right-4 bottom-4 left-4 flex gap-3 rounded-xl bg-background p-5 text-foreground shadow-lift sm:left-auto sm:w-80"}
::::::: icon {"id":"hm-hours-icon","props":{"icon":"clock"},"class":"mt-0.5 size-6 shrink-0 text-primary"}
:::::::

::::::: box {"id":"hm-hours-text"}
:::::::: paragraph {"id":"hm-hours-title","props":{"tag":"p","text":"City Hall is open"},"class":"font-bold"}
::::::::

:::::::: paragraph {"id":"hm-hours","props":{"tag":"p"},"bind":{"text":"globals.city.hours"},"class":"whitespace-pre-line text-base text-muted"}
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-top","props":{"tag":"section"},"attrs":{"aria-labelledby":"#hm-top-h"},"class":"wrap-wide pt-14 pb-10"}
:::: box {"id":"hm-top-head","class":"flex flex-wrap items-end justify-between gap-x-8 gap-y-3"}
::::: box {"id":"hm-top-titles","class":"flex max-w-prose flex-col gap-2"}
:::::: heading {"id":"hm-top-h","props":{"level":"2","text":"Most requested"}}
::::::
:::::
::::

:::: repeat {"id":"hm-top-list","props":{"source":"entries","collection":"services","sort":"title","limit":8,"tag":"ul","where":[{"field":"featured","op":"=","value":true}]},"class":"mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"}
::::: box {"id":"hm-top-item","props":{"tag":"li"},"class":"grid"}
:::::: box {"id":"hm-top-tile","bind":{"link":"item.url"},"class":"tile group h-full"}
::::::: paragraph {"id":"hm-top-title","props":{"tag":"span"},"bind":{"text":"item.title"}}
:::::::

::::::: icon {"id":"hm-top-arrow","props":{"icon":"arrow-right"},"class":"ml-auto size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1 motion-reduce:transform-none"}
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-topics","props":{"tag":"section"},"attrs":{"aria-labelledby":"#hm-topics-h"},"class":"wrap-wide py-10"}
:::: box {"id":"hm-topics-head","class":"flex flex-wrap items-end justify-between gap-x-8 gap-y-3"}
::::: box {"id":"hm-topics-titles","class":"flex max-w-prose flex-col gap-2"}
:::::: heading {"id":"hm-topics-h","props":{"level":"2","text":"Services by topic"}}
::::::
:::::

::::: link {"id":"hm-topics-all","props":{"label":"All services A to Z","url":"/services"},"class":"text-link font-bold"}
:::::
::::

:::: box {"id":"hm-topics-body","class":"mt-8"}
::::: repeat {"id":"hm-topics-list","props":{"source":"entries","collection":"topics","sort":"position","limit":50,"tag":"ul"},"class":"grid gap-4 sm:grid-cols-2 lg:grid-cols-3"}
:::::: box {"id":"hm-topics-list-item","props":{"tag":"li"},"class":"grid"}
::::::: box {"id":"hm-topics-list-card","bind":{"link":"item.url"},"class":"card group flex-row items-start gap-4 max-sm:items-center max-sm:p-4"}
:::::::: icon {"id":"hm-topics-list-icon","bind":{"icon":"item.icon"},"class":"size-12 shrink-0 rounded-lg bg-primary-soft p-2.5 text-primary-strong"}
::::::::

:::::::: box {"id":"hm-topics-list-text","class":"flex flex-col gap-1.5"}
::::::::: heading {"id":"hm-topics-list-title","props":{"level":"3"},"bind":{"text":"item.title"},"class":"text-xl text-primary group-hover:underline"}
:::::::::

::::::::: paragraph {"id":"hm-topics-list-summary","props":{"tag":"p"},"bind":{"text":"item.summary"},"class":"text-base text-muted max-sm:hidden"}
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-split-wrap","class":"mt-10 border-y border-border bg-surface"}
:::: box {"id":"hm-split","class":"wrap-wide grid gap-16 py-section lg:grid-cols-12 lg:gap-12"}
::::: box {"id":"hm-news","props":{"tag":"section"},"attrs":{"aria-labelledby":"#hm-news-h"},"class":"lg:col-span-8"}
:::::: box {"id":"hm-news-head","class":"flex flex-wrap items-end justify-between gap-x-8 gap-y-3"}
::::::: box {"id":"hm-news-titles","class":"flex max-w-prose flex-col gap-2"}
:::::::: heading {"id":"hm-news-h","props":{"level":"2","text":"Latest news"}}
::::::::
:::::::

::::::: link {"id":"hm-news-all","props":{"label":"All news","url":"/news"},"class":"text-link font-bold"}
:::::::
::::::

:::::: box {"id":"hm-news-body","class":"mt-8"}
::::::: repeat {"id":"hm-news-list","props":{"source":"entries","collection":"news","sort":"-published_at","limit":2,"tag":"ul"},"class":"grid gap-x-8 gap-y-12 md:grid-cols-2"}
:::::::: box {"id":"hm-news-list-item","props":{"tag":"li"}}
::::::::: component {"id":"hm-news-list-card","props":{"ref":"news-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.image":"item.cover","values.kind":"item.kind","values.date":"item.date|date:j F Y"}}
:::::::::
::::::::
:::::::
::::::
:::::

::::: box {"id":"hm-events","props":{"tag":"section"},"attrs":{"aria-labelledby":"#hm-events-h"},"class":"lg:col-span-4"}
:::::: box {"id":"hm-events-head","class":"flex flex-wrap items-end justify-between gap-x-8 gap-y-3"}
::::::: box {"id":"hm-events-titles","class":"flex max-w-prose flex-col gap-2"}
:::::::: heading {"id":"hm-events-h","props":{"level":"2","text":"What’s on"}}
::::::::
:::::::

::::::: link {"id":"hm-events-all","props":{"label":"All events","url":"/events"},"class":"text-link font-bold"}
:::::::
::::::

:::::: box {"id":"hm-events-body","class":"mt-8"}
::::::: repeat {"id":"hm-events-list","props":{"source":"entries","collection":"events","sort":"when","limit":4,"tag":"ul","empty":"No events planned at the moment."},"class":"flex flex-col gap-6"}
:::::::: box {"id":"hm-events-list-item","props":{"tag":"li"}}
::::::::: component {"id":"hm-events-list-card","props":{"ref":"event-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.day":"item.when.start|date:j","values.month":"item.when.start|date:M","values.when":"{item.when.start|date:l j F}, {item.when.start|date:H:i}","values.venue":"item.venue"}}
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-say","props":{"tag":"section"},"attrs":{"aria-labelledby":"#hm-say-h"},"class":"scheme-soft"}
:::: box {"id":"hm-say-grid","class":"wrap-wide grid items-center gap-10 py-section lg:grid-cols-12 lg:gap-14"}
::::: box {"id":"hm-say-text-col","class":"flex flex-col items-start gap-5 lg:col-span-5"}
:::::: paragraph {"id":"hm-say-eyebrow","props":{"tag":"p","text":"Have your say"},"class":"eyebrow text-base"}
::::::

:::::: heading {"id":"hm-say-h","props":{"level":"2","text":"Help shape the plans for your city"}}
::::::

:::::: paragraph {"id":"hm-say-text","props":{"tag":"p","text":"We ask residents before we make big changes: to squares and streets, services and budgets. Every response is read."},"class":"text-lg"}
::::::

:::::: button {"id":"hm-say-all","props":{"label":"See All Consultations","url":"/have-your-say","variant":"secondary"}}
::::::
:::::

::::: repeat {"id":"hm-say-list","props":{"source":"entries","collection":"consultations","sort":"closes","limit":2,"tag":"ul","where":[{"field":"state","op":"=","value":"Open"}]},"class":"grid gap-4 md:grid-cols-2 lg:col-span-7"}
:::::: box {"id":"hm-say-item","props":{"tag":"li"},"class":"grid"}
::::::: component {"id":"hm-say-card","props":{"ref":"consultation-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.state":"item.state","values.closes":"Closes {item.closes|date:j F Y}"}}
:::::::
::::::
:::::
::::
:::

::: box {"id":"hm-council","props":{"tag":"section"},"attrs":{"aria-labelledby":"#hm-council-h"}}
:::: box {"id":"hm-council-grid","class":"wrap-wide grid items-center gap-10 py-section lg:grid-cols-12"}
::::: box {"id":"hm-mayor-photo","class":"photo max-w-sm lg:col-span-4"}
:::::: image {"id":"hm-mayor-img","props":{"aspect":"4/5","image":["01m9a08pkmftgf2ccajqcv4csb"],"alt":"Mayor Helen Achterberg"},"class":"aspect-[4/5] w-full object-cover"}
::::::
:::::

::::: box {"id":"hm-council-text","class":"flex flex-col gap-6 lg:col-span-7 lg:col-start-6"}
:::::: paragraph {"id":"hm-council-eyebrow","props":{"tag":"p","text":"Your council"},"class":"eyebrow text-base"}
::::::

:::::: heading {"id":"hm-council-h","props":{"level":"2","text":"39 councillors, elected by you"}}
::::::

:::::: quote {"id":"hm-council-quote","props":{"text":"Good services start with listening. Come to a council meeting, write to your councillor or join a consultation: every voice in Aldermoor counts.","cite":"Helen Achterberg, Mayor of Aldermoor"},"class":"border-l-4 border-primary pl-6"}
::::::

:::::: list {"id":"hm-council-links","props":{"items":["<a href=\"/council\">How the council works</a>","<a href=\"/council/meetings\">Council meetings and minutes</a>","<a href=\"/council/councillors\">Find your councillor</a>","<a href=\"/documents\">Plans, budgets and reports</a>"]},"class":"mt-2 grid gap-x-8 gap-y-3 font-bold sm:grid-cols-2"}
::::::
:::::
::::
:::

::: box {"id":"hm-contact","props":{"tag":"section"},"attrs":{"aria-labelledby":"#hm-contact-h"}}
:::: box {"id":"hm-contact-inner","class":"wrap-wide pb-section"}
::::: heading {"id":"hm-contact-h","props":{"level":"2","text":"Get in touch"}}
:::::

::::: box {"id":"hm-contact-cards","class":"mt-8 grid gap-4 md:grid-cols-3"}
:::::: box {"id":"hm-c1","class":"card-flat"}
::::::: icon {"id":"hm-c1-icon","props":{"icon":"buildings"},"class":"size-8 text-primary"}
:::::::

::::::: heading {"id":"hm-c1-h","props":{"level":"3","text":"Visit City Hall"},"class":"text-xl"}
:::::::

::::::: paragraph {"id":"hm-c1-address","props":{"tag":"p"},"bind":{"text":"globals.city.address"},"class":"whitespace-pre-line text-base"}
:::::::

::::::: paragraph {"id":"hm-c1-hours","props":{"tag":"p"},"bind":{"text":"globals.city.hours"},"class":"whitespace-pre-line text-base text-muted"}
:::::::

::::::: link {"id":"hm-c1-link","props":{"label":"Make an appointment","url":"/make-an-appointment"},"class":"text-link mt-auto font-bold"}
:::::::
::::::

:::::: box {"id":"hm-c2","class":"card-flat"}
::::::: icon {"id":"hm-c2-icon","props":{"icon":"phone"},"class":"size-8 text-primary"}
:::::::

::::::: heading {"id":"hm-c2-h","props":{"level":"3","text":"Call us"},"class":"text-xl"}
:::::::

::::::: link {"id":"hm-c2-phone","bind":{"label":"globals.city.phone","url":"tel:{globals.city.phone_link}"},"class":"text-link text-2xl font-bold text-primary"}
:::::::

::::::: paragraph {"id":"hm-c2-hours","props":{"tag":"p"},"bind":{"text":"globals.city.phone_hours"},"class":"text-base text-muted"}
:::::::

::::::: link {"id":"hm-c2-link","props":{"label":"Other ways to contact us","url":"/contact"},"class":"text-link mt-auto font-bold"}
:::::::
::::::

:::::: box {"id":"hm-c3","class":"card-flat"}
::::::: icon {"id":"hm-c3-icon","props":{"icon":"megaphone-simple"},"class":"size-8 text-primary"}
:::::::

::::::: heading {"id":"hm-c3-h","props":{"level":"3","text":"Report a problem"},"class":"text-xl"}
:::::::

::::::: paragraph {"id":"hm-c3-text","props":{"tag":"p","text":"A pothole, a broken streetlight, litter or a missed bin? Tell us where it is and we’ll fix it."},"class":"text-base"}
:::::::

::::::: button {"id":"hm-c3-button","props":{"label":"Report a Problem","url":"/report-a-problem","variant":"primary"},"class":"mt-auto self-start"}
:::::::
::::::
:::::
::::
:::
