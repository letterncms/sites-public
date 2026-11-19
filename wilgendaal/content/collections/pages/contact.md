---
id: 01m9a0bse9ag5mmjvjfe4r8aea
title: Contact
status: published
position: 10
summary: 'Bel, mail of kom langs. We beantwoorden de meeste vragen binnen vijf werkdagen.'
template: sectie
keywords: 'contact, telefoon, adres, openingsuren, onthaal, loket'
---

::: box {"id":"ct-top","class":"wrap pb-16"}
:::: box {"id":"ct-cards","class":"grid gap-2.5 md:grid-cols-3"}
::::: box {"id":"ct-1","class":"panel flex flex-col gap-3"}
:::::: icon {"id":"ct-1-icon","props":{"icon":"phone"},"class":"mb-2 size-8 text-primary"}
::::::

:::::: heading {"id":"ct-1-h","props":{"level":"2","text":"Bellen"},"class":"text-xl"}
::::::

:::::: link {"id":"ct-1-phone","bind":{"label":"globals.city.phone","url":"tel:{globals.city.phone_link}"},"class":"font-display text-3xl font-medium text-foreground no-underline hover:underline"}
::::::

:::::: paragraph {"id":"ct-1-hours","props":{"tag":"p"},"bind":{"text":"globals.city.phone_hours"},"class":"text-base text-muted"}
::::::

:::::: paragraph {"id":"ct-1-relay","props":{"tag":"p","text":"Doof of slechthorend? Gebruik de tolkdienst van je provider, of stuur een sms naar 0400 00 00 00."},"class":"text-base"}
::::::
:::::

::::: box {"id":"ct-2","class":"panel flex flex-col gap-3"}
:::::: icon {"id":"ct-2-icon","props":{"icon":"envelope-simple"},"class":"mb-2 size-8 text-primary"}
::::::

:::::: heading {"id":"ct-2-h","props":{"level":"2","text":"Schrijven"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"ct-2-text","props":{"tag":"p","text":"Gebruik het formulier hieronder, of mail ons. We antwoorden binnen vijf werkdagen."},"class":"text-base"}
::::::

:::::: link {"id":"ct-2-email","bind":{"label":"globals.city.email","url":"mailto:{globals.city.email}"},"class":"text-link font-semibold text-primary break-all"}
::::::

:::::: paragraph {"id":"ct-2-postal","props":{"tag":"p"},"bind":{"text":"globals.city.postal"},"class":"whitespace-pre-line text-base text-muted"}
::::::
:::::

::::: box {"id":"ct-3","class":"panel flex flex-col gap-3"}
:::::: icon {"id":"ct-3-icon","props":{"icon":"buildings"},"class":"mb-2 size-8 text-primary"}
::::::

:::::: heading {"id":"ct-3-h","props":{"level":"2","text":"Langskomen"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"ct-3-address","props":{"tag":"p"},"bind":{"text":"globals.city.address"},"class":"whitespace-pre-line text-base"}
::::::

:::::: paragraph {"id":"ct-3-hours","props":{"tag":"p"},"bind":{"text":"globals.city.hours"},"class":"whitespace-pre-line text-base text-muted"}
::::::

:::::: link {"id":"ct-3-link","props":{"label":"Afspraak maken","url":"/afspraak"},"class":"arrow-link mt-auto text-base"}
::::::
:::::
::::

:::

::: box {"id":"ct-places","props":{"tag":"section"},"attrs":{"aria-labelledby":"#ct-places-h"},"class":"wrap pb-section"}
:::: box {"id":"ct-places-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4"}
::::: box {"id":"ct-places-titles","class":"flex max-w-2xl flex-col gap-3"}
:::::: heading {"id":"ct-places-h","props":{"level":"2","text":"Locaties en openingsuren"}}
::::::
:::::
::::

:::: map {"id":"ct-map","props":{"style":"site","zoom":14,"aspect":"21/9","interactive":true,"label":"Kaart met alle locaties van de stad"},"class":"mt-10 overflow-hidden rounded-2xl"}
::::: repeat {"id":"ct-map-list","props":{"source":"entries","collection":"places","sort":"title","limit":50}}
:::::: map-place {"id":"ct-map-place","bind":{"place":"item.location","title":"item.title","url":"item.url"}}
::::::
:::::
::::

:::: repeat {"id":"ct-places-list","props":{"source":"entries","collection":"places","sort":"title","limit":50,"tag":"ul"},"class":"mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"}
::::: box {"id":"ct-pl-item","props":{"tag":"li"}}
:::::: box {"id":"ct-pl-card","bind":{"link":"item.url"},"class":"group flex flex-col gap-4 text-foreground no-underline"}
::::::: box {"id":"ct-pl-photo","class":"photo"}
:::::::: image {"id":"ct-pl-img","props":{"aspect":"3/2"},"bind":{"image":"item.photo"},"class":"aspect-[3/2] w-full object-cover"}
::::::::
:::::::

::::::: box {"id":"ct-pl-body","class":"flex flex-col gap-1"}
:::::::: heading {"id":"ct-pl-title","props":{"level":"3"},"bind":{"text":"item.title"},"class":"text-xl group-hover:text-primary"}
::::::::

:::::::: paragraph {"id":"ct-pl-address","props":{"tag":"p"},"bind":{"text":"item.address"},"class":"whitespace-pre-line text-base"}
::::::::

:::::::: box {"id":"ct-pl-hours","behavior":{"module":"open-now"},"class":"mt-1"}
::::::::: box {"id":"ct-pl-now","class":"flex items-center gap-2.5 text-base font-semibold"}
:::::::::: box {"id":"ct-pl-now-dot","attrs":{"aria-hidden":"true"},"class":"size-2.5 shrink-0 rounded-full bg-line in-data-open:bg-success"}
::::::::::

:::::::::: paragraph {"id":"ct-pl-now-text","props":{"tag":"span","text":"Bekijk de openingsuren"},"attrs":{"data-status":""}}
::::::::::
:::::::::

::::::::: repeat {"id":"ct-pl-rows","props":{"source":"list","tag":"ul","path":"item.hours.rows"},"attrs":{"data-hours":""},"class":"hidden"}
:::::::::: box {"id":"ct-pl-row","props":{"tag":"li"}}
::::::::::: paragraph {"id":"ct-pl-day","props":{"tag":"span"},"bind":{"text":"item.0"}}
:::::::::::

::::::::::: paragraph {"id":"ct-pl-time","props":{"tag":"span"},"bind":{"text":"item.1"}}
:::::::::::
::::::::::
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"ct-form-section","props":{"tag":"section"},"attrs":{"aria-labelledby":"#ct-form-h"},"class":"slab scheme-soft"}
:::: box {"id":"ct-form-grid","class":"wrap grid gap-12 py-section lg:grid-cols-12"}
::::: box {"id":"ct-form-intro","class":"flex flex-col gap-4 lg:col-span-4"}
:::::: heading {"id":"ct-form-h","props":{"level":"2","text":"Stel je vraag"}}
::::::

:::::: paragraph {"id":"ct-form-text","props":{"tag":"p","text":"Voor alles wat niet dringend is. Iets kapot of vuil op straat? Gebruik het <a href=\"/melden\">meldingsformulier</a>: dan komt het meteen bij de juiste dienst."},"class":"text-lg"}
::::::
:::::

::::: box {"id":"ct-form-wrap","class":"lg:col-span-7 lg:col-start-6"}
:::::: forms/form {"id":"ct-form","props":{"form":"contact"}}
::::::
:::::
::::
:::
