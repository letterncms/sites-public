---
id: 01m9a0h1g16vvhz8y2jc4ke7yc
title: Kop
status: published
position: 0
category: Site
description: 'De dienstbalk, het logo, het hoofdmenu met een paneel van alle thema’s, zoeken en het e-loket, met een menu op gsm.'
---

::: box {"id":"hd","props":{"tag":"header"},"label":"Kop","logic":{"data":{"open":false,"themes":false},"states":{"open":"open","themes":"themes"},"on":[{"event":"keydown","mods":["window"],"key":"escape","actions":[{"do":"set","var":"open","value":"false"},{"do":"set","var":"themes","value":"false"}]}]},"class":"relative z-40 border-b border-border bg-background"}
:::: box {"id":"hd-strip","label":"Dienstbalk","class":"bg-surface"}
::::: box {"id":"hd-strip-inner","class":"wrap-wide flex min-h-10 items-center justify-between gap-6 text-sm"}
:::::: paragraph {"id":"hd-official","props":{"tag":"p","text":"Officiële website van Stad Lindevoorde"},"class":"max-sm:hidden"}
::::::

:::::: box {"id":"hd-service","props":{"tag":"nav"},"attrs":{"aria-label":"Dienstverlening"},"class":"flex items-center gap-6 max-sm:w-full max-sm:justify-end"}
::::::: link {"id":"hd-help","props":{"label":"Hulp nodig?","url":"/contact"},"class":"font-semibold text-foreground no-underline hover:underline"}
:::::::

::::::: link {"id":"hd-login","props":{"label":"Aanmelden","url":"/e-loket"},"class":"font-semibold text-foreground no-underline hover:underline"}
:::::::
::::::
:::::
::::

:::: box {"id":"hd-bar","label":"Hoofdbalk","class":"wrap-wide flex h-22 items-center justify-between gap-6 max-sm:h-18"}
::::: component {"id":"hd-logo","props":{"ref":"logo"}}
:::::

::::: box {"id":"hd-nav","props":{"tag":"nav"},"attrs":{"aria-label":"Hoofdmenu"},"class":"flex h-full items-stretch max-lg:hidden"}
:::::: box {"id":"hd-themes-button","props":{"tag":"button"},"attrs":{"aria-controls":"#hd-themes-panel"},"logic":{"on":[{"event":"click","actions":[{"do":"toggle","var":"themes"}]}],"attrs":{"aria-expanded":"themes"}},"class":"relative flex h-full items-center px-3.5 font-semibold whitespace-nowrap text-foreground no-underline transition-colors hover:text-primary after:absolute after:inset-x-3.5 after:bottom-0 after:h-[3px] after:rounded-full after:bg-transparent data-active:text-primary data-active:after:bg-primary gap-1.5 cursor-pointer in-data-themes:text-primary in-data-themes:after:bg-primary"}
::::::: paragraph {"id":"hd-themes-label","props":{"tag":"span","text":"Thema’s"}}
:::::::

::::::: icon {"id":"hd-themes-caret","props":{"icon":"caret-down"},"class":"size-4 transition-transform in-data-themes:rotate-180 motion-reduce:transition-none"}
:::::::
::::::

:::::: repeat {"id":"hd-links","props":{"source":"menu","tag":"ul","menu":"main"},"class":"flex h-full items-stretch"}
::::::: box {"id":"hd-item","props":{"tag":"li"},"class":"h-full"}
:::::::: link {"id":"hd-link","bind":{"label":"item.label","url":"item.url","state:active":"item.active"},"class":"relative flex h-full items-center px-3.5 font-semibold whitespace-nowrap text-foreground no-underline transition-colors hover:text-primary after:absolute after:inset-x-3.5 after:bottom-0 after:h-[3px] after:rounded-full after:bg-transparent data-active:text-primary data-active:after:bg-primary"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"hd-tools","class":"flex items-center gap-2 sm:gap-3"}
:::::: search-field {"id":"hd-search","props":{"label":"Zoeken","show_label":false,"placeholder":"Zoek op de website","button_label":"Zoeken","button_style":"primary","size":"sm","icon_only":true,"results_page":"/zoeken"},"class":"w-72 max-xl:hidden"}
::::::

:::::: button {"id":"hd-search-link","props":{"label":"","icon":"magnifying-glass","accessible_label":"Zoeken","url":"/zoeken","variant":"ghost","size":"sm"},"class":"xl:hidden"}
::::::

:::::: button {"id":"hd-eloket","props":{"label":"E-loket","url":"/e-loket","variant":"primary","size":"sm","icon":"user-circle"},"class":"max-sm:hidden"}
::::::

:::::: box {"id":"hd-toggle","props":{"tag":"button"},"label":"Menuknop","attrs":{"aria-controls":"#hd-panel"},"logic":{"on":[{"event":"click","actions":[{"do":"toggle","var":"open"}]}],"attrs":{"aria-expanded":"open"}},"class":"cms-button btn-ghost -mr-3 gap-2 lg:hidden"}
::::::: icon {"id":"hd-toggle-open","props":{"icon":"list"},"class":"size-6 in-data-open:hidden"}
:::::::

::::::: icon {"id":"hd-toggle-close","props":{"icon":"x"},"class":"hidden size-6 in-data-open:block"}
:::::::

::::::: paragraph {"id":"hd-toggle-label","props":{"tag":"span","text":"Menu"},"logic":{"show":"!open"}}
:::::::

::::::: paragraph {"id":"hd-toggle-close-label","props":{"tag":"span","text":"Sluiten"},"logic":{"show":"open"}}
:::::::
::::::
:::::
::::

:::: box {"id":"hd-themes-panel","label":"Themapaneel","logic":{"show":"themes","transition":"fade","on":[{"event":"click","mods":["outside"],"actions":[{"do":"set","var":"themes","value":"false"}]}]},"anchor":"themas-paneel","class":"absolute inset-x-0 top-full border-t border-border bg-background shadow-lift max-lg:hidden"}
::::: box {"id":"hd-themes-inner","class":"wrap-wide py-8"}
:::::: box {"id":"hd-themes-head","class":"flex items-baseline justify-between gap-6"}
::::::: heading {"id":"hd-themes-h","props":{"level":"2","text":"Alle thema’s"},"class":"text-xl"}
:::::::

::::::: link {"id":"hd-themes-all","props":{"label":"Alle producten van A tot Z","url":"/themas"},"class":"arrow-link"}
:::::::
::::::

:::::: repeat {"id":"hd-themes-list","props":{"source":"entries","collection":"topics","sort":"position","limit":50,"tag":"ul"},"class":"mt-6 grid grid-cols-3 gap-x-8 gap-y-2"}
::::::: box {"id":"hd-themes-list-item","props":{"tag":"li"}}
:::::::: box {"id":"hd-themes-list-link","bind":{"link":"item.url"},"class":"group flex items-start gap-4 rounded-lg p-3 text-foreground no-underline hover:bg-surface"}
::::::::: icon {"id":"hd-themes-list-icon","bind":{"icon":"item.icon"},"class":"icon-chip size-11 p-2.5"}
:::::::::

::::::::: box {"id":"hd-themes-list-text","class":"flex flex-col gap-0.5"}
:::::::::: paragraph {"id":"hd-themes-list-title","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"font-semibold group-hover:text-primary group-hover:underline"}
::::::::::

:::::::::: paragraph {"id":"hd-themes-list-summary","props":{"tag":"span"},"bind":{"text":"item.summary"},"class":"text-sm text-muted"}
::::::::::
:::::::::
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"hd-panel","label":"Gsm-menu","logic":{"show":"open","transition":"collapse"},"anchor":"site-menu","class":"border-t border-border bg-background lg:hidden"}
::::: box {"id":"hd-panel-inner","class":"wrap-wide flex flex-col gap-8 pt-4 pb-10"}
:::::: search-field {"id":"hd-panel-search","props":{"label":"Zoek op de website","show_label":true,"placeholder":"","button_label":"Zoeken","button_style":"primary","size":"md","icon_only":false,"results_page":"/zoeken"}}
::::::

:::::: box {"id":"hd-panel-nav","props":{"tag":"nav"},"attrs":{"aria-label":"Hoofdmenu"}}
::::::: repeat {"id":"hd-panel-links","props":{"source":"menu","tag":"ul","menu":"main"},"class":"flex flex-col border-t border-border"}
:::::::: box {"id":"hd-panel-item","props":{"tag":"li"}}
::::::::: link {"id":"hd-panel-link","bind":{"label":"item.label","url":"item.url","state:active":"item.active"},"class":"flex items-center justify-between border-b border-border py-4 text-xl font-semibold text-foreground no-underline data-active:text-primary"}
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"hd-panel-themes-nav","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#hd-panel-themes-h"}}
::::::: heading {"id":"hd-panel-themes-h","props":{"level":"2","text":"Thema’s"},"class":"text-lg"}
:::::::

::::::: repeat {"id":"hd-panel-themes","props":{"source":"entries","collection":"topics","sort":"position","limit":50,"tag":"ul"},"class":"mt-3 grid gap-1 sm:grid-cols-2"}
:::::::: box {"id":"hd-panel-themes-item","props":{"tag":"li"}}
::::::::: box {"id":"hd-panel-themes-link","bind":{"link":"item.url"},"class":"group flex items-center gap-3 rounded-lg py-2 text-foreground no-underline"}
:::::::::: icon {"id":"hd-panel-themes-icon","bind":{"icon":"item.icon"},"class":"icon-chip size-11 p-2.5"}
::::::::::

:::::::::: box {"id":"hd-panel-themes-text","class":"flex flex-col gap-0.5"}
::::::::::: paragraph {"id":"hd-panel-themes-title","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"font-semibold group-hover:text-primary group-hover:underline"}
:::::::::::
::::::::::
:::::::::
::::::::
:::::::
::::::

:::::: button {"id":"hd-panel-eloket","props":{"label":"E-loket","url":"/e-loket","variant":"primary","icon":"user-circle"},"class":"self-start sm:hidden"}
::::::
:::::
::::
:::
