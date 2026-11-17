---
id: 01m7nqftagk53yj8axk5yx8gg7
title: Header
status: published
published_at: '2026-11-17T21:44:27+00:00'
position: 1
synced: true
category: Site
description: 'The notice, the emergency number, the hospital’s name, the main menu, search and the appointment button; on phones a full menu behind one button.'
---

::: box {"id":"hd-notice","props":{"tag":"aside"},"label":"Notice","attrs":{"aria-label":"Notice"},"bind":{"visible":"globals.hospital.notice"},"class":"scheme-sun"}
:::: box {"id":"hd-notice-in","class":"mx-auto flex max-w-wide items-start gap-3 px-gutter py-2.5 text-sm leading-snug"}
::::: icon {"id":"hd-notice-icon","props":{"icon":"info"},"class":"mt-px size-[1.125rem] shrink-0"}
:::::

::::: box {"id":"hd-notice-text","class":"flex flex-wrap gap-x-3 gap-y-1"}
:::::: paragraph {"id":"hd-notice-p","props":{"tag":"p"},"bind":{"text":"globals.hospital.notice"},"class":"font-medium"}
::::::

:::::: link {"id":"hd-notice-link","bind":{"label":"globals.hospital.notice_link.label","url":"globals.hospital.notice_link.url","visible":"globals.hospital.notice_link.url"},"class":"font-semibold underline"}
::::::
:::::
::::
:::

::: box {"id":"hd","props":{"tag":"header"},"label":"Header","logic":{"data":{"open":false},"on":[{"event":"keydown","mods":["window"],"key":"escape","actions":[{"do":"if","test":"open","then":[{"do":"set","var":"open","value":"false"},{"do":"lock","on":false},{"do":"focus","node":"hd-toggle"}],"else":[]}]}],"states":{"open":"open"},"behaviors":{"scroll":{"threshold":8,"hide":false}}},"class":"sticky top-0 z-50 border-b border-transparent bg-background transition-[border-color,box-shadow] duration-200 data-open:border-border data-scrolled:border-border data-scrolled:shadow-sm"}
:::: box {"id":"hd-top","label":"Top bar","class":"border-b border-border max-lg:hidden"}
::::: box {"id":"hd-top-in","class":"mx-auto flex h-10 max-w-wide items-center justify-between gap-6 px-gutter text-sm"}
:::::: box {"id":"hd-er","class":"flex items-center gap-4"}
::::::: link {"id":"hd-er-call","props":{"label":"Emergency? Call 112"},"bind":{"label":"Emergency? Call {globals.hospital.emergency_number}","url":"tel:{globals.hospital.emergency_number}"},"class":"inline-flex items-center gap-2 font-semibold text-emergency-text no-underline hover:underline"}
:::::::

::::::: link {"id":"hd-er-dept","props":{"label":"Emergency department, open day and night","url":"entry:01m7nqftbvfcw2y4b3yr35fmqx"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
:::::::
::::::

:::::: box {"id":"hd-utility","props":{"tag":"nav"},"attrs":{"aria-label":"Secondary"}}
::::::: repeat {"id":"hd-utility-list","props":{"source":"menu","menu":"utility","tag":"ul"},"class":"flex items-center gap-6"}
:::::::: box {"id":"hd-utility-item","props":{"tag":"li"}}
::::::::: link {"id":"hd-utility-link","bind":{"label":"item.label","url":"item.url","state:active":"item.active","attr:aria-current":"item.current|is:true"},"class":"text-muted no-underline hover:text-foreground hover:underline data-active:text-foreground"}
:::::::::
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"hd-bar","label":"Bar","class":"mx-auto flex h-20 max-w-wide items-center gap-6 px-gutter max-md:h-16"}
::::: link {"id":"hd-home","props":{"url":"/"},"label":"Name","attrs":{"aria-label":"Home"},"bind":{"attr:aria-label":"{site.name}, home"},"class":"flex shrink-0 items-center gap-2.5 text-foreground no-underline"}
:::::: component {"id":"hd-mark","props":{"ref":"logo-mark"}}
::::::

:::::: paragraph {"id":"hd-name","props":{"tag":"span"},"bind":{"text":"site.name"},"class":"text-xl font-bold tracking-tight"}
::::::
:::::

::::: box {"id":"hd-nav","props":{"tag":"nav"},"label":"Main menu","attrs":{"aria-label":"Main"},"class":"ml-4 max-lg:hidden"}
:::::: repeat {"id":"hd-links","props":{"source":"menu","menu":"main","tag":"ul"},"class":"flex items-center gap-1"}
::::::: box {"id":"hd-item","props":{"tag":"li"}}
:::::::: link {"id":"hd-link","bind":{"label":"item.label","url":"item.url","state:active":"item.active"},"class":"inline-flex h-11 items-center rounded-full px-3.5 text-[0.96875rem] font-medium text-foreground no-underline transition-colors hover:bg-surface data-active:bg-surface data-active:text-primary"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"hd-actions","class":"ml-auto flex items-center gap-2"}
:::::: search {"id":"hd-search","props":{"label":"Search","placeholder":"Search care, doctors and information","empty":"Nothing found. Try another word, or call us.","shortcut":true,"compact":"mobile"},"class":"h-11 min-w-56 rounded-full bg-surface px-4 text-[0.9375rem] max-xl:min-w-0 max-xl:px-3 max-xl:[&_.cms-search__kbd]:hidden max-xl:[&_.cms-search__label]:sr-only max-md:size-11 max-md:justify-center max-md:p-0"}
::::::

:::::: link {"id":"hd-call","props":{"url":"tel:112"},"label":"Emergency call","attrs":{"aria-label":"Emergency? Call 112"},"bind":{"url":"tel:{globals.hospital.emergency_number}","attr:aria-label":"Emergency? Call {globals.hospital.emergency_number}"},"class":"inline-flex size-11 items-center justify-center rounded-full bg-emergency text-white lg:hidden"}
::::::: icon {"id":"hd-call-icon","props":{"icon":"phone"},"attrs":{"aria-hidden":"true"},"class":"size-5"}
:::::::
::::::

:::::: button {"id":"hd-appointment","props":{"label":"Make an appointment","url":"entry:01m7nqftbvfcw2y4b3yr35fmr8","variant":"primary","size":"md"},"class":"max-sm:hidden"}
::::::

:::::: box {"id":"hd-toggle","props":{"tag":"button"},"label":"Menu button","attrs":{"aria-label":"Menu","aria-controls":"#hd-sheet"},"logic":{"on":[{"event":"click","actions":[{"do":"toggle","var":"open"},{"do":"if","test":"open","then":[{"do":"lock","on":true}],"else":[{"do":"lock","on":false}]}]}],"attrs":{"aria-expanded":"open"}},"class":"inline-flex size-11 items-center justify-center rounded-full bg-surface text-foreground lg:hidden"}
::::::: icon {"id":"hd-toggle-open","props":{"icon":"list"},"logic":{"show":"!open"},"class":"size-6"}
:::::::

::::::: icon {"id":"hd-toggle-close","props":{"icon":"x"},"logic":{"show":"open"},"class":"size-6"}
:::::::
::::::
:::::
::::

:::: box {"id":"hd-sheet","props":{"tag":"nav"},"label":"Phone menu","attrs":{"aria-label":"Main"},"logic":{"show":"open","transition":"collapse"},"anchor":"site-menu","class":"max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background px-gutter pt-4 pb-10 lg:hidden"}
::::: repeat {"id":"hd-sheet-links","props":{"source":"menu","menu":"main","tag":"ul"},"class":"flex flex-col"}
:::::: box {"id":"hd-sheet-item","props":{"tag":"li"},"class":"border-b border-border"}
::::::: link {"id":"hd-sheet-link","bind":{"label":"item.label","url":"item.url","state:active":"item.active"},"class":"flex items-center justify-between py-4 text-2xl font-semibold tracking-tight text-foreground no-underline data-active:text-primary"}
:::::::
::::::
:::::

::::: repeat {"id":"hd-sheet-utility","props":{"source":"menu","menu":"utility","tag":"ul"},"class":"mt-6 grid grid-cols-2 gap-x-6 gap-y-3"}
:::::: box {"id":"hd-sheet-uitem","props":{"tag":"li"}}
::::::: link {"id":"hd-sheet-ulink","bind":{"label":"item.label","url":"item.url"},"class":"text-lg text-muted no-underline hover:text-foreground"}
:::::::
::::::
:::::

::::: box {"id":"hd-sheet-actions","class":"mt-8 flex flex-col gap-3"}
:::::: button {"id":"hd-sheet-appointment","props":{"label":"Make an appointment","url":"entry:01m7nqftbvfcw2y4b3yr35fmr8","variant":"primary","size":"lg"},"class":"w-full"}
::::::

:::::: button {"id":"hd-sheet-call","props":{"label":"Emergency? Call 112","url":"tel:112","variant":"emergency","size":"lg","icon":"phone"},"bind":{"label":"Emergency? Call {globals.hospital.emergency_number}","url":"tel:{globals.hospital.emergency_number}"},"class":"w-full"}
::::::
:::::
::::
:::
