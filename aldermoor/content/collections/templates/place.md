---
id: 01m9a0hp4174wxjyzxgz4erxpv
title: Place
status: published
position: 0
collections:
  - places
description: 'A public building: its photo and what you can do there, with the address, contact details and opening hours beside it.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"pl-wrap","class":"wrap pt-6 pb-section"}
::::: box {"id":"pl-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
:::::: box {"id":"pl-crumbs-ol","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::::: box {"id":"pl-crumbs-li-home","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"pl-crumbs-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::::
:::::::

::::::: box {"id":"pl-crumbs-li0","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"pl-crumbs-l0","props":{"label":"Places","url":"/places"},"class":"text-link text-foreground"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"pl-title","class":"mt-8 flex max-w-prose flex-col gap-4"}
:::::: heading {"id":"pl-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::

:::::: paragraph {"id":"pl-title-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead"}
::::::
:::::

::::: box {"id":"pl-grid","class":"mt-10 flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12"}
:::::: box {"id":"pl-main","class":"min-w-0 lg:col-span-8"}
::::::: box {"id":"pl-photo","bind":{"visible":"entry.photo"},"class":"photo"}
:::::::: image {"id":"pl-img","props":{"priority":true,"aspect":"3/2"},"bind":{"image":"entry.photo"},"class":"aspect-[3/2] w-full object-cover"}
::::::::
:::::::

::::::: outlet {"id":"pl-outlet","props":{"wrap":true,"prose":true},"class":"mt-10"}
:::::::

::::::: box {"id":"pl-access-box","props":{"tag":"section"},"bind":{"visible":"entry.access"},"class":"mt-12 flex flex-col gap-4 rounded-xl bg-surface p-6"}
:::::::: heading {"id":"pl-access-title","props":{"level":"2","text":"Accessibility"},"class":"text-2xl"}
::::::::

:::::::: repeat {"id":"pl-access","props":{"source":"list","tag":"ul","path":"entry.access"},"class":"flex flex-col gap-2"}
::::::::: box {"id":"pl-access-item","props":{"tag":"li"},"class":"flex gap-3"}
:::::::::: icon {"id":"pl-access-icon","props":{"icon":"check-circle"},"class":"mt-0.5 size-6 shrink-0 text-success"}
::::::::::

:::::::::: paragraph {"id":"pl-access-text","props":{"tag":"span"},"bind":{"text":"item"}}
::::::::::
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"pl-aside","props":{"tag":"aside"},"attrs":{"aria-label":"Address and opening hours"},"class":"lg:col-span-4 max-lg:order-first max-lg:mb-10"}
::::::: box {"id":"pl-card","class":"card-flat gap-6 lg:sticky lg:top-8"}
:::::::: box {"id":"pl-address-box","class":"flex flex-col gap-1"}
::::::::: heading {"id":"pl-address-title","props":{"level":"2","text":"Address"},"class":"text-base text-muted"}
:::::::::

::::::::: paragraph {"id":"pl-address","props":{"tag":"p"},"bind":{"text":"entry.address"},"class":"whitespace-pre-line font-bold"}
:::::::::

::::::::: link {"id":"pl-directions","props":{"new_tab":true,"label":"Get directions","url":"#"},"bind":{"url":"https://www.openstreetmap.org/directions?to={entry.location.lat}%2C{entry.location.lng}","visible":"entry.location"},"class":"text-link font-bold text-primary"}
:::::::::
::::::::

:::::::: box {"id":"pl-contact-box","bind":{"visible":"entry.phone"},"class":"flex flex-col items-start gap-1"}
::::::::: heading {"id":"pl-contact-title","props":{"level":"2","text":"Contact"},"class":"text-base text-muted"}
:::::::::

::::::::: link {"id":"pl-phone","bind":{"label":"entry.phone","url":"tel:{entry.phone}","visible":"entry.phone"},"class":"text-link font-bold text-primary"}
:::::::::

::::::::: link {"id":"pl-email","bind":{"label":"entry.email","url":"mailto:{entry.email}","visible":"entry.email"},"class":"text-link font-bold text-primary break-all"}
:::::::::
::::::::

:::::::: box {"id":"pl-hours-box","bind":{"visible":"entry.hours"},"class":"flex flex-col gap-2"}
::::::::: heading {"id":"pl-hours-title","props":{"level":"2","text":"Opening hours"},"class":"text-base text-muted"}
:::::::::

::::::::: repeat {"id":"pl-hours","props":{"source":"list","tag":"ul","path":"entry.hours.rows"},"class":"flex flex-col text-base"}
:::::::::: box {"id":"pl-hours-row","props":{"tag":"li"},"class":"flex justify-between gap-4 border-b border-border py-2 last:border-0"}
::::::::::: paragraph {"id":"pl-hours-day","props":{"tag":"span"},"bind":{"text":"item.0"},"class":"font-bold"}
:::::::::::

::::::::::: paragraph {"id":"pl-hours-time","props":{"tag":"span"},"bind":{"text":"item.1"},"class":"text-right"}
:::::::::::
::::::::::
:::::::::

::::::::: paragraph {"id":"pl-hours-note","props":{"tag":"p"},"bind":{"text":"entry.hours_note","visible":"entry.hours_note"},"class":"meta"}
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
