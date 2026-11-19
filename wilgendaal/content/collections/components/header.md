---
id: 01m9a0h1g16vvhz8y2jc4ke7yc
title: Kop
status: published
position: 0
category: Site
description: 'Eén witte balk: het woordbeeld, drie snelle links, zoeken en een menuknop. Het menu opent over de volle breedte, met de hoofdpagina’s groot, alle thema’s en de snelle acties.'
---

::: box {"id":"hd","props":{"tag":"header"},"label":"Kop","logic":{"data":{"open":false},"states":{"open":"open"},"on":[{"event":"keydown","mods":["window"],"key":"escape","actions":[{"do":"set","var":"open","value":"false"}]}]},"class":"site-header z-40 border-b border-border bg-background"}
:::: box {"id":"hd-bar","label":"Balk","class":"wrap-wide flex h-20 items-center gap-4 max-sm:h-16"}
::::: component {"id":"hd-logo","props":{"ref":"logo"}}
:::::

::::: box {"id":"hd-tools","class":"ml-auto flex items-center gap-1 sm:gap-2"}
:::::: box {"id":"hd-links","props":{"tag":"nav"},"attrs":{"aria-label":"Snel naar"},"class":"flex items-center max-lg:hidden"}
::::::: link {"id":"hd-l1","props":{"label":"Iets melden","url":"/melden"},"class":"quiet-link px-3 py-2 font-semibold text-foreground"}
:::::::

::::::: link {"id":"hd-l2","props":{"label":"Afspraak maken","url":"/afspraak"},"class":"quiet-link px-3 py-2 font-semibold text-foreground"}
:::::::

::::::: link {"id":"hd-l3","props":{"label":"Contact","url":"/contact"},"class":"quiet-link px-3 py-2 font-semibold text-foreground"}
:::::::
::::::

:::::: button {"id":"hd-search-link","props":{"label":"Zoeken","url":"/zoeken","variant":"ghost","icon":"magnifying-glass","icon_position":"start"},"class":"px-3 max-sm:hidden"}
::::::

:::::: button {"id":"hd-search-icon","props":{"label":"","url":"/zoeken","variant":"ghost","icon":"magnifying-glass","accessible_label":"Zoeken"},"class":"sm:hidden"}
::::::

:::::: menu-button {"id":"hd-toggle","props":{"label":"Menu","show_label":true,"animation":"cross","lines":"2"},"label":"Menuknop","attrs":{"aria-controls":"#hd-menu"},"logic":{"on":[{"event":"click","actions":[{"do":"toggle","var":"open"}]}],"attrs":{"aria-expanded":"open"}},"class":"h-12 gap-2.5 bg-foreground px-5 font-semibold text-background transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"}
::::::
:::::
::::

:::: box {"id":"hd-menu","label":"Menu","logic":{"show":"open","transition":"fade","on":[{"event":"click","mods":["outside"],"actions":[{"do":"set","var":"open","value":"false"}]}]},"anchor":"menu","class":"fixed inset-x-0 top-16 bottom-0 overflow-y-auto overscroll-contain border-t border-border bg-background sm:top-20"}
::::: box {"id":"hd-menu-inner","class":"wrap-wide grid min-h-full content-start gap-12 pt-8 pb-12 lg:grid-cols-12 lg:gap-x-16 lg:pt-14 lg:pb-16"}
:::::: search-field {"id":"hd-menu-search","props":{"label":"Zoek op de website","show_label":false,"placeholder":"Wat zoek je?","button_label":"Zoeken","button_style":"primary","size":"md","icon_only":false,"results_page":"/zoeken"},"class":"search-box w-full lg:hidden"}
::::::

:::::: box {"id":"hd-menu-nav","props":{"tag":"nav"},"attrs":{"aria-label":"Hoofdmenu"},"class":"lg:col-span-5"}
::::::: repeat {"id":"hd-menu-links","props":{"source":"menu","tag":"ul","menu":"main"},"class":"flex flex-col"}
:::::::: box {"id":"hd-menu-item","props":{"tag":"li"}}
::::::::: link {"id":"hd-menu-link","bind":{"label":"item.label","url":"item.url","state:active":"item.active"},"class":"block py-1.5 font-display text-4xl font-medium text-foreground no-underline hover:underline hover:decoration-2 hover:underline-offset-[0.12em] data-active:underline"}
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"hd-menu-themes","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#hd-menu-themes-h"},"class":"lg:col-span-6 lg:col-start-7"}
::::::: box {"id":"hd-menu-themes-head","class":"flex items-baseline justify-between gap-4 border-b border-rule pb-3"}
:::::::: heading {"id":"hd-menu-themes-h","props":{"level":"2","text":"Thema’s"},"class":"eyebrow font-sans"}
::::::::

:::::::: link {"id":"hd-menu-az","props":{"label":"Alles van A tot Z","url":"/themas"},"class":"arrow-link text-sm"}
::::::::
:::::::

::::::: repeat {"id":"hd-menu-theme-list","props":{"source":"entries","collection":"topics","sort":"position","limit":50,"tag":"ul"},"class":"grid gap-x-10 sm:grid-cols-2"}
:::::::: box {"id":"hd-menu-theme-item","props":{"tag":"li"}}
::::::::: link {"id":"hd-menu-theme-link","bind":{"label":"item.title","url":"item.url"},"class":"flex border-b border-border py-3 text-lg font-medium text-foreground no-underline hover:underline"}
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"hd-menu-quick","class":"flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:col-span-12"}
::::::: box {"id":"hd-menu-actions","class":"flex flex-wrap gap-3"}
:::::::: button {"id":"hd-menu-report","props":{"label":"Iets melden","url":"/melden","variant":"primary"}}
::::::::

:::::::: button {"id":"hd-menu-appointment","props":{"label":"Afspraak maken","url":"/afspraak","variant":"secondary"}}
::::::::
:::::::

::::::: box {"id":"hd-menu-call","class":"flex flex-wrap items-baseline gap-x-3 gap-y-1"}
:::::::: paragraph {"id":"hd-menu-call-label","props":{"tag":"span","text":"Bel ons"},"class":"text-muted"}
::::::::

:::::::: link {"id":"hd-menu-phone","bind":{"label":"globals.city.phone","url":"tel:{globals.city.phone_link}"},"class":"font-display text-2xl font-medium text-foreground no-underline hover:underline"}
::::::::
:::::::
::::::
:::::
::::
:::
