---
id: 01m9a0h1g16vvhz8y2jc4ke7yc
title: Kop
status: published
position: 0
category: Site
description: 'De kop: een witte, afgeronde balk die bovenaan blijft zweven, met het logo, drie snelle links, zoeken en een menuknop. Op een foto ligt hij over de foto. Het menu vult het hele scherm; alleen de balk blijft erboven staan.'
---

::: box {"id":"hd","props":{"tag":"header"},"behavior":{"module":"scrolled"},"label":"Kop","logic":{"data":{"open":false},"states":{"open":"open"},"on":[{"event":"keydown","mods":["window"],"key":"escape","actions":[{"do":"set","var":"open","value":"false"}]}]},"class":"site-header z-40"}
:::: box {"id":"hd-bar","label":"Balk","class":"hd-bar relative z-10 flex h-16 items-center gap-2 rounded-2xl bg-background pr-2.5 sm:gap-4 lg:h-[4.5rem]"}
::::: component {"id":"hd-logo","props":{"ref":"logo"}}
:::::

::::: box {"id":"hd-tools","class":"ml-auto flex items-center gap-0.5 sm:gap-2"}
:::::: box {"id":"hd-links","props":{"tag":"nav"},"attrs":{"aria-label":"Snel naar"},"class":"hd-extra flex items-center max-lg:hidden"}
::::::: link {"id":"hd-l1","props":{"label":"Iets melden","url":"/melden"},"class":"rounded-lg px-3.5 py-2.5 font-semibold text-foreground no-underline transition-colors hover:bg-surface"}
:::::::

::::::: link {"id":"hd-l2","props":{"label":"Afspraak maken","url":"/afspraak"},"class":"rounded-lg px-3.5 py-2.5 font-semibold text-foreground no-underline transition-colors hover:bg-surface"}
:::::::

::::::: link {"id":"hd-l3","props":{"label":"Contact","url":"/contact"},"class":"rounded-lg px-3.5 py-2.5 font-semibold text-foreground no-underline transition-colors hover:bg-surface"}
:::::::
::::::

:::::: button {"id":"hd-search-link","props":{"label":"Zoeken","url":"/zoeken","variant":"ghost","icon":"magnifying-glass","icon_position":"start"},"class":"hd-extra max-sm:hidden"}
::::::

:::::: button {"id":"hd-search-icon","props":{"label":"","url":"/zoeken","variant":"ghost","icon":"magnifying-glass","accessible_label":"Zoeken"},"class":"hd-extra size-11 sm:hidden"}
::::::

:::::: menu-button {"id":"hd-toggle","props":{"label":"Menu","show_label":true,"animation":"cross","lines":"2"},"label":"Menuknop","attrs":{"aria-controls":"#hd-menu"},"logic":{"on":[{"event":"click","actions":[{"do":"toggle","var":"open"}]}],"attrs":{"aria-expanded":"open"}},"class":"h-11 gap-2.5 rounded-xl bg-blue px-4 sm:h-12 sm:px-5 font-semibold text-white transition-colors duration-200 hover:bg-blue-strong lg:h-[3.25rem]"}
::::::
:::::
::::

:::: box {"id":"hd-menu","label":"Menu","logic":{"show":"open","transition":"fade","on":[{"event":"click","mods":["outside"],"actions":[{"do":"set","var":"open","value":"false"}]}]},"anchor":"menu","class":"fixed inset-0 overflow-y-auto overscroll-contain bg-background pt-24 lg:pt-28"}
::::: box {"id":"hd-menu-inner","class":"wrap grid content-start gap-12 pt-6 pb-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-14 lg:pt-10 lg:pb-16"}
:::::: search-field {"id":"hd-menu-search","props":{"label":"Zoek op de website","show_label":false,"placeholder":"Wat zoek je?","button_label":"Zoeken","button_style":"primary","size":"md","icon_only":false,"results_page":"/zoeken"},"class":"search-box w-full max-w-2xl lg:col-span-12"}
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
