---
id: 01m9a0pvb2exbv7d803shdacfk
title: Locatie
status: published
position: 0
collections:
  - places
description: 'Een openbaar gebouw: foto en wat je er kan doen, met adres, contact en openingsuren ernaast.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"lo-wrap","class":"wrap pt-8 pb-section"}
::::: box {"id":"lo-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Kruimelpad"}}
:::::: box {"id":"lo-crumbs-ol","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::::: box {"id":"lo-crumbs-li-home","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['/'] last:after:hidden"}
:::::::: link {"id":"lo-crumbs-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::::
:::::::

::::::: box {"id":"lo-crumbs-li0","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['/'] last:after:hidden"}
:::::::: link {"id":"lo-crumbs-l0","props":{"label":"Contact","url":"/contact"},"class":"text-link text-foreground"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"lo-title","class":"mt-10 flex max-w-3xl flex-col gap-5"}
:::::: heading {"id":"lo-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::

:::::: paragraph {"id":"lo-title-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead max-w-2xl text-muted"}
::::::
:::::

::::: box {"id":"lo-grid","class":"mt-12 flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-16"}
:::::: box {"id":"lo-main","class":"min-w-0 lg:col-span-8"}
::::::: box {"id":"lo-photo","bind":{"visible":"entry.photo"},"class":"frame"}
:::::::: image {"id":"lo-img","props":{"priority":true,"aspect":"3/2"},"bind":{"image":"entry.photo"},"class":"aspect-[3/2] w-full object-cover"}
::::::::
:::::::

::::::: outlet {"id":"lo-outlet","props":{"wrap":true,"prose":true},"class":"mt-12"}
:::::::

::::::: box {"id":"lo-map-box","props":{"tag":"section"},"attrs":{"aria-labelledby":"#lo-map-h"},"bind":{"visible":"entry.location"},"class":"mt-12 flex flex-col gap-5"}
:::::::: heading {"id":"lo-map-h","props":{"level":"2","text":"Ligging"},"class":"text-2xl"}
::::::::

:::::::: map {"id":"lo-map","props":{"style":"site","zoom":16,"aspect":"16/9","interactive":true,"label":"Kaart met de ligging"},"class":"overflow-hidden rounded-xl"}
::::::::: map-place {"id":"lo-map-place","bind":{"place":"entry.location","title":"entry.title","text":"entry.address"}}
:::::::::
::::::::
:::::::

::::::: box {"id":"lo-access-box","props":{"tag":"section"},"bind":{"visible":"entry.access"},"class":"panel mt-12 flex flex-col gap-4"}
:::::::: heading {"id":"lo-access-h","props":{"level":"2","text":"Toegankelijkheid"},"class":"text-2xl"}
::::::::

:::::::: repeat {"id":"lo-access","props":{"source":"list","tag":"ul","path":"entry.access"},"class":"flex flex-col gap-2"}
::::::::: box {"id":"lo-access-item","props":{"tag":"li"},"class":"flex gap-3"}
:::::::::: icon {"id":"lo-access-icon","props":{"icon":"check-circle"},"class":"mt-0.5 size-6 shrink-0 text-success"}
::::::::::

:::::::::: paragraph {"id":"lo-access-text","props":{"tag":"span"},"bind":{"text":"item"}}
::::::::::
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"lo-aside","props":{"tag":"aside"},"attrs":{"aria-label":"Adres en openingsuren"},"class":"lg:col-span-4 max-lg:order-first max-lg:mb-10"}
::::::: box {"id":"lo-card","class":"panel flex flex-col gap-7 p-8 md:p-8 lg:sticky lg:top-8"}
:::::::: box {"id":"lo-address-box","class":"flex flex-col items-start gap-1"}
::::::::: heading {"id":"lo-address-h","props":{"level":"2","text":"Adres"},"class":"text-sm font-semibold text-muted"}
:::::::::

::::::::: paragraph {"id":"lo-address","props":{"tag":"p"},"bind":{"text":"entry.address"},"class":"whitespace-pre-line text-lg font-semibold"}
:::::::::

::::::::: link {"id":"lo-route","props":{"new_tab":true,"label":"Plan je route","url":"#"},"bind":{"url":"https://www.openstreetmap.org/directions?to={entry.location.lat}%2C{entry.location.lng}","visible":"entry.location"},"class":"arrow-link"}
:::::::::
::::::::

:::::::: box {"id":"lo-contact-box","bind":{"visible":"entry.phone"},"class":"flex flex-col items-start gap-1"}
::::::::: heading {"id":"lo-contact-h","props":{"level":"2","text":"Contact"},"class":"text-sm font-semibold text-muted"}
:::::::::

::::::::: link {"id":"lo-phone","bind":{"label":"entry.phone","url":"tel:{entry.phone}","visible":"entry.phone"},"class":"text-link font-semibold text-primary"}
:::::::::

::::::::: link {"id":"lo-email","bind":{"label":"entry.email","url":"mailto:{entry.email}","visible":"entry.email"},"class":"text-link font-semibold text-primary break-all"}
:::::::::
::::::::

:::::::: box {"id":"lo-hours-box","bind":{"visible":"entry.hours"},"class":"flex flex-col gap-2"}
::::::::: heading {"id":"lo-hours-h","props":{"level":"2","text":"Openingsuren"},"class":"text-sm font-semibold text-muted"}
:::::::::

::::::::: repeat {"id":"lo-hours","props":{"source":"list","tag":"ul","path":"entry.hours.rows"},"class":"flex flex-col"}
:::::::::: box {"id":"lo-hours-row","props":{"tag":"li"},"class":"flex justify-between gap-4 border-b border-border py-2 text-base last:border-0"}
::::::::::: paragraph {"id":"lo-hours-day","props":{"tag":"span"},"bind":{"text":"item.0"},"class":"font-semibold"}
:::::::::::

::::::::::: paragraph {"id":"lo-hours-time","props":{"tag":"span"},"bind":{"text":"item.1"},"class":"text-right"}
:::::::::::
::::::::::
:::::::::

::::::::: paragraph {"id":"lo-hours-note","props":{"tag":"p"},"bind":{"text":"entry.hours_note","visible":"entry.hours_note"},"class":"meta"}
:::::::::
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
