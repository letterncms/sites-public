---
id: 01m9a0jg6e3pc13e3h34ksbg7e
title: Voet
status: published
position: 0
category: Site
description: 'De voet: het stadhuis, de thema’s, stad en bestuur, wat te doen bij nood, en de wettelijke links.'
---

::: box {"id":"ft","props":{"tag":"footer"},"label":"Voet","class":"scheme-night"}
:::: box {"id":"ft-grid","class":"wrap-wide grid gap-12 pt-20 pb-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10"}
::::: box {"id":"ft-intro","class":"flex flex-col gap-6 lg:col-span-4"}
:::::: component {"id":"ft-logo","props":{"ref":"logo"}}
::::::

:::::: paragraph {"id":"ft-tagline","props":{"tag":"p","text":"Samen maken we van Lindevoorde een stad waar het goed wonen, werken en leven is."},"class":"max-w-sm text-xl leading-snug font-medium tracking-tight"}
::::::
:::::

::::: box {"id":"ft-city","class":"flex flex-col items-start gap-2 lg:col-span-3"}
:::::: heading {"id":"ft-city-h","props":{"level":"2","text":"Stadhuis"},"class":"text-base font-semibold text-white"}
::::::

:::::: paragraph {"id":"ft-address","props":{"tag":"p"},"bind":{"text":"globals.city.address"},"class":"whitespace-pre-line text-base"}
::::::

:::::: link {"id":"ft-phone","bind":{"label":"globals.city.phone","url":"tel:{globals.city.phone_link}"},"class":"text-link text-base font-semibold text-current"}
::::::

:::::: link {"id":"ft-email","bind":{"label":"globals.city.email","url":"mailto:{globals.city.email}"},"class":"text-link text-base font-semibold text-current break-all"}
::::::

:::::: paragraph {"id":"ft-hours","props":{"tag":"p"},"bind":{"text":"globals.city.hours"},"class":"whitespace-pre-line text-sm text-muted"}
::::::
:::::

::::: box {"id":"ft-themes","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#ft-themes-h"},"class":"flex flex-col gap-4 lg:col-span-2"}
:::::: heading {"id":"ft-themes-h","props":{"level":"2","text":"Thema’s"},"class":"text-base font-semibold text-white"}
::::::

:::::: repeat {"id":"ft-topics","props":{"source":"entries","collection":"topics","sort":"position","limit":12,"tag":"ul"},"class":"flex flex-col gap-2"}
::::::: box {"id":"ft-topic","props":{"tag":"li"}}
:::::::: link {"id":"ft-topic-link","bind":{"label":"item.title","url":"item.url"},"class":"quiet-link text-base text-current"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"ft-about","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#ft-about-h"},"class":"flex flex-col gap-4 lg:col-span-3"}
:::::: heading {"id":"ft-about-h","props":{"level":"2","text":"Stad en bestuur"},"class":"text-base font-semibold text-white"}
::::::

:::::: repeat {"id":"ft-menu","props":{"source":"menu","tag":"ul","menu":"footer"},"class":"flex flex-col gap-2"}
::::::: box {"id":"ft-menu-item","props":{"tag":"li"}}
:::::::: link {"id":"ft-menu-link","bind":{"label":"item.label","url":"item.url"},"class":"quiet-link text-base text-current"}
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"ft-sos-bar","class":"wrap-wide flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between"}
::::: box {"id":"ft-sos-text","class":"flex items-center gap-3"}
:::::: icon {"id":"ft-sos-icon","props":{"icon":"phone-call"},"class":"size-7 shrink-0"}
::::::

:::::: paragraph {"id":"ft-sos","props":{"tag":"p"},"bind":{"text":"Bij nood: bel {globals.city.emergency}. Politie dringend: 101."},"class":"font-semibold"}
::::::
:::::

::::: box {"id":"ft-report-box","class":"flex flex-wrap items-center gap-4"}
:::::: paragraph {"id":"ft-report-q","props":{"tag":"p","text":"Iets kapot of vuil op straat?"}}
::::::

:::::: button {"id":"ft-report","props":{"label":"Iets melden","url":"/melden","variant":"accent","size":"sm"}}
::::::
:::::
::::

:::: box {"id":"ft-bottom-wrap","class":"border-t border-border"}
::::: box {"id":"ft-bottom","class":"wrap-wide flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between"}
:::::: box {"id":"ft-legal","props":{"tag":"nav"},"attrs":{"aria-label":"Over deze website"}}
::::::: repeat {"id":"ft-legal-list","props":{"source":"menu","tag":"ul","menu":"legal"},"class":"flex flex-wrap gap-x-6 gap-y-2"}
:::::::: box {"id":"ft-legal-item","props":{"tag":"li"}}
::::::::: link {"id":"ft-legal-link","bind":{"label":"item.label","url":"item.url"},"class":"quiet-link text-current"}
:::::::::
::::::::
:::::::
::::::

:::::: paragraph {"id":"ft-copy","props":{"tag":"p"},"bind":{"text":"© {site.year} {globals.city.name}"}}
::::::
:::::
::::
:::
