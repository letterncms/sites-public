---
id: 01m9a0jg6e3pc13e3h34ksbg7e
title: Voet
status: published
position: 0
category: Site
description: 'De voet als zwart vlak: het stadhuis met zijn adres, uren en telefoon, de thema’s, stad en bestuur de kanalen op sociale media en de wettelijke links.'
---

::: box {"id":"ft","props":{"tag":"footer"},"label":"Voet","class":"slab scheme-night mb-frame"}
:::: box {"id":"ft-grid","class":"wrap grid gap-12 pt-20 pb-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-10"}
::::: box {"id":"ft-visit","class":"flex flex-col gap-4 lg:col-span-4"}
:::::: heading {"id":"ft-visit-h","props":{"level":"2","text":"Stadhuis"},"class":"eyebrow border-b border-border pb-3 font-sans"}
::::::

:::::: box {"id":"ft-city","props":{"tag":"address"},"class":"flex flex-col items-start gap-2 not-italic"}
::::::: paragraph {"id":"ft-address","props":{"tag":"p"},"bind":{"text":"globals.city.address"},"class":"whitespace-pre-line text-lg"}
:::::::

::::::: paragraph {"id":"ft-hours","props":{"tag":"p"},"bind":{"text":"globals.city.hours"},"class":"whitespace-pre-line text-sm text-muted"}
:::::::

::::::: link {"id":"ft-phone","bind":{"label":"globals.city.phone","url":"tel:{globals.city.phone_link}"},"class":"mt-3 font-display text-3xl font-medium text-current no-underline hover:underline"}
:::::::

::::::: link {"id":"ft-email","bind":{"label":"globals.city.email","url":"mailto:{globals.city.email}"},"class":"text-link text-base break-all text-current"}
:::::::
::::::

:::::: box {"id":"ft-social","props":{"tag":"nav"},"attrs":{"aria-label":"Volg Stad Wilgendaal"},"class":"mt-6 flex flex-col gap-3"}
::::::: paragraph {"id":"ft-social-h","props":{"tag":"p","text":"Volg ons"},"class":"text-sm font-semibold text-muted"}
:::::::

::::::: repeat {"id":"ft-social-list","props":{"source":"menu","menu":"social","tag":"ul"},"class":"flex flex-wrap gap-2"}
:::::::: box {"id":"ft-social-item","props":{"tag":"li"}}
::::::::: box {"id":"ft-social-link","bind":{"link":"item.url"},"class":"flex size-11 items-center justify-center rounded-full border border-border text-current no-underline transition-colors hover:border-white hover:bg-white hover:text-ink"}
:::::::::: icon {"id":"ft-social-icon","bind":{"icon":"item.icon"},"class":"size-5"}
::::::::::

:::::::::: paragraph {"id":"ft-social-label","props":{"tag":"span"},"bind":{"text":"item.label"},"class":"sr-only"}
::::::::::
:::::::::
::::::::
:::::::
::::::
:::::

::::: box {"id":"ft-themes-col","class":"lg:col-span-4 lg:col-start-6"}
:::::: box {"id":"ft-themes","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#ft-themes-h"},"class":"flex flex-col gap-4"}
::::::: heading {"id":"ft-themes-h","props":{"level":"2","text":"Thema’s"},"class":"eyebrow border-b border-border pb-3 font-sans"}
:::::::

::::::: repeat {"id":"ft-topic-list","props":{"tag":"ul","source":"entries","collection":"topics","sort":"position","limit":12},"class":"flex flex-col gap-2.5"}
:::::::: box {"id":"ft-topic-item","props":{"tag":"li"}}
::::::::: link {"id":"ft-topic-link","bind":{"label":"item.title","url":"item.url"},"class":"quiet-link text-base text-current"}
:::::::::
::::::::
:::::::
::::::
:::::

::::: box {"id":"ft-about-col","class":"lg:col-span-3 lg:col-start-10"}
:::::: box {"id":"ft-about","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#ft-about-h"},"class":"flex flex-col gap-4"}
::::::: heading {"id":"ft-about-h","props":{"level":"2","text":"Stad en bestuur"},"class":"eyebrow border-b border-border pb-3 font-sans"}
:::::::

::::::: repeat {"id":"ft-menu","props":{"source":"menu","menu":"footer","tag":"ul"},"class":"flex flex-col gap-2.5"}
:::::::: box {"id":"ft-menu-item","props":{"tag":"li"}}
::::::::: link {"id":"ft-menu-link","bind":{"label":"item.label","url":"item.url"},"class":"quiet-link text-base text-current"}
:::::::::
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"ft-bottom-wrap","class":"border-t border-border"}
::::: box {"id":"ft-bottom","class":"wrap flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between"}
:::::: box {"id":"ft-legal","props":{"tag":"nav"},"attrs":{"aria-label":"Over deze website"}}
::::::: repeat {"id":"ft-legal-list","props":{"source":"menu","menu":"legal","tag":"ul"},"class":"flex flex-wrap gap-x-6 gap-y-2"}
:::::::: box {"id":"ft-legal-item","props":{"tag":"li"}}
::::::::: link {"id":"ft-legal-link","bind":{"label":"item.label","url":"item.url"},"class":"quiet-link text-current"}
:::::::::
::::::::
:::::::
::::::

:::::: paragraph {"id":"ft-copy","props":{"tag":"p"},"bind":{"text":"© {site.year} {globals.city.name}"},"class":"text-muted"}
::::::
:::::
::::
:::
