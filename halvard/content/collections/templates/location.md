---
id: 01m7nqftc5hn7vgmwpr8886wa0
title: Location
status: published
published_at: '2026-11-17T21:44:28+00:00'
position: 9
description: 'A location: its photo and summary, address, phone and hours, how to get there and where to park, and a map.'
collections:
  - locations
---

::: component {"id":"lo-header","props":{"ref":"header"}}
:::

::: box {"id":"lo-main","props":{"tag":"main"},"label":"Main","anchor":"main"}
:::: box {"id":"lo-band","props":{"tag":"header"},"class":"scheme-surface"}
::::: box {"id":"lo-band-in","class":"mx-auto grid max-w-wide grid-cols-12 items-center gap-x-columns gap-y-8 px-gutter pt-10 pb-14 max-md:pt-6"}
:::::: box {"id":"lo-band-text","class":"col-span-6 flex flex-col items-start gap-5 max-lg:col-span-full"}
::::::: box {"id":"lo-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
:::::::: box {"id":"lo-crumbs-list","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
::::::::: box {"id":"lo-crumb-home","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"lo-crumb-home-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::

:::::::::: icon {"id":"lo-crumb-sep1","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
::::::::::
:::::::::

::::::::: box {"id":"lo-crumb-up","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"lo-crumb-up-a","props":{"label":"Locations","url":"entry:01m7nqftbvfcw2y4b3yr35fmr3"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::
::::::::
:::::::

::::::: heading {"id":"lo-title","props":{"level":"1"},"bind":{"text":"entry.title"},"class":"text-5xl"}
:::::::

::::::: paragraph {"id":"lo-summary","props":{"tag":"p"},"bind":{"text":"entry.summary"},"class":"lede max-w-[32em]"}
:::::::

::::::: box {"id":"lo-facts","props":{"tag":"dl"},"class":"grid grid-cols-2 gap-5 pt-2 max-sm:grid-cols-1"}
:::::::: box {"id":"lo-f-address","bind":{"visible":"entry.address"},"class":"flex flex-col gap-0.5"}
::::::::: box {"id":"lo-f-address-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
:::::::::: icon {"id":"lo-f-address-i","props":{"icon":"map-pin"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
::::::::::

:::::::::: paragraph {"id":"lo-f-address-l","props":{"text":"Address","tag":"span"}}
::::::::::
:::::::::

::::::::: paragraph {"id":"lo-f-address-v","props":{"tag":"dd"},"bind":{"text":"entry.address"},"class":"pl-7 font-medium whitespace-pre-line"}
:::::::::
::::::::

:::::::: box {"id":"lo-f-phone","bind":{"visible":"entry.phone"},"class":"flex flex-col gap-0.5"}
::::::::: box {"id":"lo-f-phone-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
:::::::::: icon {"id":"lo-f-phone-i","props":{"icon":"phone"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
::::::::::

:::::::::: paragraph {"id":"lo-f-phone-l","props":{"text":"Phone","tag":"span"}}
::::::::::
:::::::::

::::::::: box {"id":"lo-f-phone-dd","props":{"tag":"dd"},"class":"pl-7"}
:::::::::: link {"id":"lo-f-phone-v","bind":{"label":"entry.phone","url":"tel:{entry.phone}"},"class":"font-semibold"}
::::::::::
:::::::::
::::::::

:::::::: box {"id":"lo-f-hours","bind":{"visible":"entry.hours"},"class":"flex flex-col gap-0.5"}
::::::::: box {"id":"lo-f-hours-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
:::::::::: icon {"id":"lo-f-hours-i","props":{"icon":"clock"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
::::::::::

:::::::::: paragraph {"id":"lo-f-hours-l","props":{"text":"Opening hours","tag":"span"}}
::::::::::
:::::::::

::::::::: paragraph {"id":"lo-f-hours-v","props":{"tag":"dd"},"bind":{"text":"entry.hours"},"class":"pl-7 font-medium whitespace-pre-line"}
:::::::::
::::::::
:::::::
::::::

:::::: image {"id":"lo-cover","props":{"aspect":"4/3","priority":true,"sizes":"(min-width: 64rem) 45vw, 100vw"},"bind":{"image":"entry.cover","visible":"entry.cover"},"class":"col-span-6 overflow-hidden rounded-xl max-lg:col-span-full"}
::::::
:::::
::::

:::: box {"id":"lo-layout","class":"mx-auto grid max-w-wide grid-cols-12 gap-x-columns gap-y-10 px-gutter pt-blocks"}
::::: box {"id":"lo-text","class":"col-span-7 flex flex-col gap-10 max-lg:col-span-full"}
:::::: outlet {"id":"lo-body","props":{"wrap":true,"prose":true}}
::::::

:::::: box {"id":"lo-travel","class":"grid grid-cols-2 gap-4 max-md:grid-cols-1"}
::::::: box {"id":"lo-transit","bind":{"visible":"entry.getting_there"},"class":"card flex flex-col gap-3"}
:::::::: icon {"id":"lo-transit-i","props":{"icon":"bus"},"attrs":{"aria-hidden":"true"},"class":"size-7 text-primary"}
::::::::

:::::::: heading {"id":"lo-transit-t","props":{"text":"By public transport","level":"2"},"class":"text-xl"}
::::::::

:::::::: paragraph {"id":"lo-transit-v","props":{"tag":"p"},"bind":{"text":"entry.getting_there"},"class":"text-muted"}
::::::::
:::::::

::::::: box {"id":"lo-parking","bind":{"visible":"entry.parking"},"class":"card flex flex-col gap-3"}
:::::::: icon {"id":"lo-parking-i","props":{"icon":"car"},"attrs":{"aria-hidden":"true"},"class":"size-7 text-primary"}
::::::::

:::::::: heading {"id":"lo-parking-t","props":{"text":"By car","level":"2"},"class":"text-xl"}
::::::::

:::::::: paragraph {"id":"lo-parking-v","props":{"tag":"p"},"bind":{"text":"entry.parking"},"class":"text-muted"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"lo-directions","props":{"tag":"aside"},"attrs":{"aria-label":"Directions"},"class":"card col-span-4 col-start-9 flex flex-col items-start gap-3 self-start max-lg:col-span-full max-lg:col-start-1"}
:::::: icon {"id":"lo-dir-i","props":{"icon":"map-trifold"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-primary"}
::::::

:::::: heading {"id":"lo-dir-t","props":{"text":"Plan your route","level":"2"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"lo-dir-addr","props":{"tag":"p"},"bind":{"text":"entry.address"},"class":"whitespace-pre-line text-lg"}
::::::

:::::: button {"id":"lo-dir-osm","props":{"label":"Get directions","variant":"primary","icon":"arrow-up-right","icon_position":"end","new_tab":true},"bind":{"url":"https://www.openstreetmap.org/directions?to={entry.place.lat}%2C{entry.place.lng}#map=16/{entry.place.lat}/{entry.place.lng}","visible":"entry.place","attr:aria-label":"Get directions to {entry.title}, opens OpenStreetMap in a new tab"}}
::::::

:::::: paragraph {"id":"lo-dir-note","props":{"text":"Opens OpenStreetMap in a new tab.","tag":"p"},"bind":{"visible":"entry.place"},"class":"text-sm text-muted"}
::::::
:::::
::::
:::

::: component {"id":"lo-footer","props":{"ref":"footer"}}
:::
