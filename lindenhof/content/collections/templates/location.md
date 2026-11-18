---
id: 01m7p3g291ay24bfsfkwnmh9fv
title: Campus
status: published
published_at: '2026-11-18T02:14:20+01:00'
position: 9
description: 'Een campus: adres en telefoon, openingsuren, hoe je er geraakt en waar je parkeert, en de route op een kaart.'
collections:
  - locations
---

::: component {"id":"lo-header","props":{"ref":"header"}}
:::

::: box {"id":"lo-main","props":{"tag":"main"},"label":"Inhoud","anchor":"main"}
:::: box {"id":"lo-band","props":{"tag":"header"},"label":"Titel","class":"scheme-surface"}
::::: box {"id":"lo-band-in","class":"mx-auto grid max-w-content grid-cols-12 items-center gap-x-columns gap-y-8 px-gutter pt-8 pb-12 max-md:pt-6 max-md:pb-9"}
:::::: box {"id":"lo-band-text","class":"col-span-7 flex flex-col items-start gap-5 max-lg:col-span-full"}
::::::: box {"id":"lo-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Kruimelpad"}}
:::::::: box {"id":"lo-crumbs-l","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
::::::::: box {"id":"lo-c0","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"lo-c0-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::

::::::::: box {"id":"lo-c1","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: icon {"id":"lo-c1-s","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
::::::::::

:::::::::: link {"id":"lo-c1-a","props":{"label":"Campussen","url":"entry:01m7p3g28ph31zyqzvh74hae5m"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::
::::::::
:::::::

::::::: heading {"id":"lo-title","props":{"level":"1"},"bind":{"text":"entry.title"},"class":"rule"}
:::::::

::::::: paragraph {"id":"lo-summary","props":{"tag":"p"},"bind":{"text":"entry.summary"},"class":"lede max-w-[34em]"}
:::::::

::::::: buttons {"id":"lo-actions","class":"pt-2"}
:::::::: button {"id":"lo-route","props":{"label":"Routebeschrijving","variant":"primary","size":"lg","icon":"navigation-arrow"},"bind":{"url":"https://www.openstreetmap.org/directions?to={entry.place.lat}%2C{entry.place.lng}","visible":"entry.place"}}
::::::::

:::::::: button {"id":"lo-call","props":{"variant":"secondary","size":"lg","icon":"phone"},"bind":{"label":"Bel {entry.phone}","url":"tel:{entry.phone}","visible":"entry.phone"}}
::::::::
:::::::
::::::

:::::: image {"id":"lo-cover","props":{"aspect":"4/3","priority":true,"sizes":"(min-width: 64rem) 32vw, 0px","alt":""},"bind":{"image":"entry.cover","visible":"entry.cover"},"class":"leaf col-span-5 max-lg:hidden"}
::::::
:::::
::::

:::: box {"id":"lo-layout","class":"mx-auto grid max-w-content grid-cols-12 gap-x-columns gap-y-10 px-gutter pt-blocks"}
::::: box {"id":"bcajjcavekb","class":"col-span-8 flex flex-col gap-blocks max-lg:col-span-full"}
:::::: map {"id":"lo-map","props":{"style":"site","zoom":16,"aspect":"16/9","label":"Kaart met de ligging van de campus"},"class":"leaf-map"}
::::::: map-place {"id":"lo-map-place","bind":{"place":"entry.place","title":"entry.title","text":"entry.address"}}
:::::::

::::::

:::::: box {"id":"lo-ways","class":"grid grid-cols-2 gap-4 max-md:grid-cols-1"}
::::::: box {"id":"lo-w1","bind":{"visible":"entry.getting_there"},"class":"card flex flex-col gap-3"}
:::::::: icon {"id":"lo-w1-i","props":{"icon":"bus"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-primary"}
::::::::

:::::::: heading {"id":"lo-w1-h","props":{"text":"Met het openbaar vervoer","level":"2"},"class":"text-xl"}
::::::::

:::::::: paragraph {"id":"lo-w1-p","props":{"tag":"p"},"bind":{"text":"entry.getting_there"},"class":"text-muted"}
::::::::
:::::::

::::::: box {"id":"lo-w2","bind":{"visible":"entry.parking"},"class":"card flex flex-col gap-3"}
:::::::: icon {"id":"lo-w2-i","props":{"icon":"car"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-primary"}
::::::::

:::::::: heading {"id":"lo-w2-h","props":{"text":"Met de wagen","level":"2"},"class":"text-xl"}
::::::::

:::::::: paragraph {"id":"lo-w2-p","props":{"tag":"p"},"bind":{"text":"entry.parking"},"class":"text-muted"}
::::::::
:::::::
::::::

:::::: outlet {"id":"lo-body","props":{"wrap":true,"prose":true}}
::::::
:::::

::::: box {"id":"lo-aside","props":{"tag":"aside"},"attrs":{"aria-label":"Adres en openingsuren"},"class":"col-span-4 self-start lg:sticky lg:top-32 max-lg:order-first max-lg:col-span-full"}
:::::: box {"id":"lo-facts","props":{"tag":"dl"},"class":"card flex flex-col gap-5"}
::::::: box {"id":"lo-f-addr","bind":{"visible":"entry.address"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"lo-f-addr-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"lo-f-addr-i","props":{"icon":"map-pin"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"lo-f-addr-l","props":{"text":"Adres","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"lo-f-addr-v","props":{"tag":"dd"},"bind":{"text":"entry.address"},"class":"pl-7 font-medium whitespace-pre-line"}
::::::::
:::::::

::::::: box {"id":"lo-f-phone","bind":{"visible":"entry.phone"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"lo-f-phone-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"lo-f-phone-i","props":{"icon":"phone"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"lo-f-phone-l","props":{"text":"Telefoon","tag":"span"}}
:::::::::
::::::::

:::::::: box {"id":"lo-f-phone-dd","props":{"tag":"dd"},"class":"pl-7"}
::::::::: link {"id":"lo-f-phone-v","bind":{"label":"entry.phone","url":"tel:{entry.phone}"},"class":"font-semibold"}
:::::::::
::::::::
:::::::

::::::: box {"id":"lo-f-hours","bind":{"visible":"entry.hours"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"lo-f-hours-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"lo-f-hours-i","props":{"icon":"clock"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"lo-f-hours-l","props":{"text":"Open","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"lo-f-hours-v","props":{"tag":"dd"},"bind":{"text":"entry.hours"},"class":"pl-7 font-medium whitespace-pre-line"}
::::::::
:::::::
::::::
:::::
::::
:::

::: component {"id":"lo-footer","props":{"ref":"footer"}}
:::
