---
id: 01m9a00mbgbgjky38z2qww9j4a
title: Header
status: published
position: 0
category: Site
description: 'The strip that says whose site this is, the logo, the main menu and search, with a menu on phones.'
---

::: box {"id":"hd","props":{"tag":"header"},"label":"Header","logic":{"data":{"open":false},"states":{"open":"open"},"on":[{"event":"keydown","mods":["window"],"key":"escape","actions":[{"do":"set","var":"open","value":"false"}]}]},"class":"relative z-40 border-b border-border bg-background"}
:::: box {"id":"hd-strip","label":"Official strip","class":"scheme-night"}
::::: box {"id":"hd-strip-inner","class":"wrap-wide flex min-h-10 items-center justify-between gap-6 py-1.5 text-sm"}
:::::: paragraph {"id":"hd-official","props":{"tag":"p"},"bind":{"text":"The official website of the {globals.city.name}"},"class":"flex items-center gap-2"}
::::::

:::::: box {"id":"hd-util","props":{"tag":"nav"},"attrs":{"aria-label":"Help"},"class":"max-md:hidden"}
::::::: repeat {"id":"hd-util-list","props":{"source":"menu","tag":"ul","menu":"utility"},"class":"flex items-center gap-6"}
:::::::: box {"id":"hd-util-item","props":{"tag":"li"}}
::::::::: link {"id":"hd-util-link","bind":{"label":"item.label","url":"item.url"},"class":"quiet-link font-bold text-current"}
:::::::::
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"hd-bar","label":"Bar","class":"wrap-wide flex h-20 items-center justify-between gap-6 max-sm:h-18"}
::::: component {"id":"hd-logo","props":{"ref":"logo"}}
:::::

::::: box {"id":"hd-nav","props":{"tag":"nav"},"attrs":{"aria-label":"Main"},"class":"h-full max-lg:hidden"}
:::::: repeat {"id":"hd-links","props":{"source":"menu","tag":"ul","menu":"main"},"class":"flex h-full items-stretch"}
::::::: box {"id":"hd-item","props":{"tag":"li"},"class":"h-full"}
:::::::: link {"id":"hd-link","bind":{"label":"item.label","url":"item.url","state:active":"item.active"},"class":"relative flex h-full items-center px-3 font-bold whitespace-nowrap text-foreground no-underline transition-colors hover:text-primary after:absolute after:inset-x-3 after:bottom-0 after:h-1 after:rounded-t-sm after:bg-transparent data-active:text-primary data-active:after:bg-primary"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"hd-search-wrap","class":"flex items-center max-xl:hidden"}
:::::: site-search/form {"id":"hd-search","props":{"label":"Search","show_label":false,"placeholder":"Search","button_label":"Search","button_style":"primary","size":"sm","icon_only":true,"results_page":"/search"},"class":"w-64"}
::::::
:::::

::::: button {"id":"hd-search-link","props":{"label":"","icon":"magnifying-glass","accessible_label":"Search","url":"/search","variant":"ghost"},"class":"hidden lg:inline-flex xl:hidden"}
:::::

::::: box {"id":"hd-toggle","props":{"tag":"button"},"label":"Menu button","attrs":{"aria-controls":"#hd-panel"},"logic":{"on":[{"event":"click","actions":[{"do":"toggle","var":"open"}]}],"attrs":{"aria-expanded":"open"}},"class":"cms-button btn-ghost -mr-3 gap-2 lg:hidden"}
:::::: icon {"id":"hd-toggle-open","props":{"icon":"list"},"class":"size-6 in-data-open:hidden"}
::::::

:::::: icon {"id":"hd-toggle-close","props":{"icon":"x"},"class":"hidden size-6 in-data-open:block"}
::::::

:::::: paragraph {"id":"hd-toggle-label","props":{"tag":"span","text":"Menu"},"logic":{"show":"!open"}}
::::::

:::::: paragraph {"id":"hd-toggle-close-label","props":{"tag":"span","text":"Close"},"logic":{"show":"open"}}
::::::
:::::
::::

:::: box {"id":"hd-panel","label":"Phone menu","logic":{"show":"open","transition":"collapse"},"anchor":"site-menu","class":"border-t border-border bg-background lg:hidden"}
::::: box {"id":"hd-panel-inner","class":"wrap-wide flex flex-col gap-8 pt-2 pb-10"}
:::::: site-search/form {"id":"hd-panel-search","props":{"label":"Search this site","show_label":true,"placeholder":"","button_label":"Search","button_style":"primary","size":"md","icon_only":false,"results_page":"/search"}}
::::::

:::::: box {"id":"hd-panel-nav","props":{"tag":"nav"},"attrs":{"aria-label":"Main"}}
::::::: repeat {"id":"hd-panel-links","props":{"source":"menu","tag":"ul","menu":"main"},"class":"flex flex-col border-t border-border"}
:::::::: box {"id":"hd-panel-item","props":{"tag":"li"}}
::::::::: link {"id":"hd-panel-link","bind":{"label":"item.label","url":"item.url","state:active":"item.active"},"class":"flex items-center justify-between border-b border-border py-4 text-xl font-bold text-foreground no-underline data-active:text-primary"}
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"hd-panel-util","props":{"tag":"nav"},"attrs":{"aria-label":"Help"}}
::::::: repeat {"id":"hd-panel-util-list","props":{"source":"menu","tag":"ul","menu":"utility"},"class":"flex flex-col gap-3"}
:::::::: box {"id":"hd-panel-util-item","props":{"tag":"li"}}
::::::::: link {"id":"hd-panel-util-link","bind":{"label":"item.label","url":"item.url"},"class":"text-link font-bold"}
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::
