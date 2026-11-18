---
id: 01m7p2kfy69agdcgggq2vfq8pn
title: Kop
status: published
published_at: '2026-11-18T01:58:41+01:00'
position: 1
synced: true
category: Site
description: 'De melding, het noodnummer, het logo, het hoofdmenu met zijn panelen, zoeken en Mijn dossier; op de gsm een volledig menu achter één knop.'
---

::: box {"id":"hd-notice","props":{"tag":"aside"},"label":"Melding","attrs":{"aria-label":"Melding"},"bind":{"visible":"globals.hospital.notice"},"class":"scheme-sand"}
:::: box {"id":"hd-notice-in","class":"mx-auto flex max-w-content items-start gap-3 px-gutter py-2.5 text-sm leading-snug"}
::::: icon {"id":"hd-notice-icon","props":{"icon":"warning-circle"},"attrs":{"aria-hidden":"true"},"class":"mt-0.5 size-5 shrink-0"}
:::::

::::: box {"id":"hd-notice-text","class":"flex flex-wrap gap-x-3 gap-y-1"}
:::::: paragraph {"id":"hd-notice-p","props":{"tag":"p"},"bind":{"text":"globals.hospital.notice"},"class":"font-medium"}
::::::

:::::: link {"id":"hd-notice-link","bind":{"label":"globals.hospital.notice_link.label","url":"globals.hospital.notice_link.url","visible":"globals.hospital.notice_link.url"},"class":"font-semibold text-current underline"}
::::::
:::::
::::
:::

::: box {"id":"hd","props":{"tag":"header"},"label":"Kop","logic":{"data":{"open":false},"on":[{"event":"keydown","mods":["window"],"key":"escape","actions":[{"do":"if","test":"open","then":[{"do":"set","var":"open","value":"false"},{"do":"lock","on":false},{"do":"focus","node":"hd-toggle"}],"else":[]}]}],"states":{"open":"open"},"behaviors":{"scroll":{"threshold":8,"hide":false}}},"class":"sticky top-0 z-50 bg-background shadow-[0_1px_0_var(--color-border)] transition-shadow data-scrolled:shadow-md"}
:::: box {"id":"hd-top","label":"Bovenbalk","class":"bg-forest max-lg:hidden"}
::::: box {"id":"hd-top-in","class":"mx-auto flex h-10 max-w-content items-center justify-between gap-6 px-gutter text-sm"}
:::::: box {"id":"hd-er","class":"flex items-center gap-2"}
::::::: icon {"id":"hd-er-i","props":{"icon":"phone"},"attrs":{"aria-hidden":"true"},"class":"size-4 text-lime"}
:::::::

::::::: link {"id":"hd-er-call","props":{"label":"Spoed? Bel 112","url":"tel:112"},"bind":{"label":"Spoed? Bel {globals.hospital.emergency_number}","url":"tel:{globals.hospital.emergency_number}"},"class":"font-semibold text-white no-underline hover:underline"}
:::::::

::::::: paragraph {"id":"hd-er-sep","props":{"text":"·","tag":"span"},"attrs":{"aria-hidden":"true"},"class":"text-white/50"}
:::::::

::::::: link {"id":"hd-er-dept","props":{"label":"Spoedgevallendienst, dag en nacht open","url":"entry:01m7p2kg02mca2s304fb0a4xnb"},"class":"text-white/85 no-underline hover:text-white hover:underline"}
:::::::
::::::

:::::: box {"id":"hd-utility","props":{"tag":"nav"},"attrs":{"aria-label":"Snelkoppelingen"}}
::::::: repeat {"id":"hd-utility-list","props":{"source":"menu","menu":"utility","tag":"ul"},"class":"flex items-center gap-5"}
:::::::: box {"id":"hd-utility-item","props":{"tag":"li"}}
::::::::: link {"id":"hd-utility-a","bind":{"label":"item.label","url":"item.url","attr:aria-current":"item.current|is:true"},"class":"text-white/85 no-underline hover:text-white hover:underline"}
:::::::::
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"hd-bar","label":"Balk","class":"mx-auto flex h-20 max-w-content items-center gap-4 px-gutter max-md:h-16"}
::::: link {"id":"hd-home","props":{"url":"/"},"class":"flex shrink-0 items-center gap-3 text-foreground no-underline"}
:::::: icon {"id":"hd-mark","props":{"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 40\"><path d=\"M0 0H30A10 10 0 0 1 40 10V40H10A10 10 0 0 1 0 30Z\" fill=\"currentColor\"/><path d=\"M20 31.5C12.2 27 7.6 21.4 9 15.6 10.3 10.6 16 9.6 20 13.6 24 9.6 29.7 10.6 31 15.6 32.4 21.4 27.8 27 20 31.5Z\" fill=\"#c5e36a\"/><path d=\"M20 15V28.6M20 20.4C17.6 19.8 15.6 18.2 14.6 16.2M20 20.4C22.4 19.8 24.4 18.2 25.4 16.2\" fill=\"none\" stroke=\"#0b3a2c\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M20 13.6C20.4 11 21.6 9 23.6 7.6\" fill=\"none\" stroke=\"#c5e36a\" stroke-width=\"1.9\" stroke-linecap=\"round\"/></svg>"},"attrs":{"aria-hidden":"true"},"class":"size-11 shrink-0 text-forest dark:text-[#14533f] max-md:size-10"}
::::::

:::::: box {"id":"hd-wordmark","attrs":{"aria-hidden":"true"},"class":"flex flex-col leading-tight"}
::::::: paragraph {"id":"hd-wm-az","props":{"text":"AZ","tag":"span"},"class":"text-xs font-bold tracking-[0.18em] text-muted"}
:::::::

::::::: paragraph {"id":"hd-wm-name","props":{"text":"Lindenhof","tag":"span"},"class":"text-[1.375rem] leading-none font-bold tracking-tight"}
:::::::
::::::

:::::: paragraph {"id":"hd-home-sr","props":{"text":"AZ Lindenhof, naar de startpagina","tag":"span"},"class":"sr-only"}
::::::
:::::

::::: box {"id":"hd-nav","props":{"tag":"nav"},"attrs":{"aria-label":"Hoofdmenu"},"class":"ml-6 max-xl:hidden"}
:::::: box {"id":"hd-nav-list","props":{"tag":"ul"},"logic":{"behaviors":{"menu":[]}},"class":"flex items-center gap-1"}
::::::: box {"id":"hd-nav-zorg","props":{"tag":"li"}}
:::::::: box {"id":"hd-nav-zorg-b","props":{"tag":"button","type":"button"},"class":"inline-flex h-12 items-center gap-1.5 rounded-md px-3.5 text-[1.0625rem] font-semibold text-foreground"}
::::::::: paragraph {"id":"hd-nav-zorg-t","props":{"text":"Zorg","tag":"span"}}
:::::::::

::::::::: icon {"id":"hd-nav-zorg-i","props":{"icon":"caret-down"},"attrs":{"aria-hidden":"true"},"class":"size-4 transition-transform in-aria-expanded:rotate-180"}
:::::::::
::::::::

:::::::: box {"id":"hd-panel-zorg","class":"flex gap-6 p-6"}
::::::::: box {"id":"hd-panel-zorg-intro","class":"flex w-56 shrink-0 flex-col gap-3 border-r border-border pr-6"}
:::::::::: paragraph {"id":"hd-panel-zorg-p","props":{"text":"Diensten, centra en zorgverleners, en uitleg over ziekten en behandelingen.","tag":"p"},"class":"text-[0.9375rem] leading-snug text-muted"}
::::::::::

:::::::::: link {"id":"hd-panel-zorg-all","props":{"url":"entry:01m7p2kg02mca2s304fb0a4xn8"},"class":"inline-flex items-center gap-1.5 font-semibold"}
::::::::::: paragraph {"id":"hd-panel-zorg-all-t","props":{"text":"Alle zorg","tag":"span"}}
:::::::::::

::::::::::: icon {"id":"hd-panel-zorg-all-i","props":{"icon":"arrow-right"},"attrs":{"aria-hidden":"true"},"class":"size-4"}
:::::::::::
::::::::::
:::::::::

::::::::: repeat {"id":"hd-panel-zorg-list","props":{"source":"menu","menu":"menu-care","tag":"ul"},"class":"grid w-[30rem] grid-cols-2 gap-x-6 gap-y-0.5"}
:::::::::: box {"id":"hd-panel-zorg-item","props":{"tag":"li"}}
::::::::::: link {"id":"hd-panel-zorg-a","bind":{"label":"item.label","url":"item.url"},"class":"-mx-3 block rounded-md px-3 py-2 font-medium text-foreground no-underline hover:bg-tint hover:text-primary"}
:::::::::::
::::::::::
:::::::::
::::::::
:::::::

::::::: box {"id":"hd-nav-afspraak","props":{"tag":"li"}}
:::::::: box {"id":"hd-nav-afspraak-b","props":{"tag":"button","type":"button"},"class":"inline-flex h-12 items-center gap-1.5 rounded-md px-3.5 text-[1.0625rem] font-semibold text-foreground"}
::::::::: paragraph {"id":"hd-nav-afspraak-t","props":{"text":"Afspraak en opname","tag":"span"}}
:::::::::

::::::::: icon {"id":"hd-nav-afspraak-i","props":{"icon":"caret-down"},"attrs":{"aria-hidden":"true"},"class":"size-4 transition-transform in-aria-expanded:rotate-180"}
:::::::::
::::::::

:::::::: box {"id":"hd-panel-afspraak","class":"flex gap-6 p-6"}
::::::::: box {"id":"hd-panel-afspraak-intro","class":"flex w-56 shrink-0 flex-col gap-3 border-r border-border pr-6"}
:::::::::: paragraph {"id":"hd-panel-afspraak-p","props":{"text":"Een afspraak maken, je voorbereiden en weten wat het kost.","tag":"p"},"class":"text-[0.9375rem] leading-snug text-muted"}
::::::::::

:::::::::: link {"id":"hd-panel-afspraak-all","props":{"url":"entry:01m7p2kg02mca2s304fb0a4xnc"},"class":"inline-flex items-center gap-1.5 font-semibold"}
::::::::::: paragraph {"id":"hd-panel-afspraak-all-t","props":{"text":"Alles voor je komst","tag":"span"}}
:::::::::::

::::::::::: icon {"id":"hd-panel-afspraak-all-i","props":{"icon":"arrow-right"},"attrs":{"aria-hidden":"true"},"class":"size-4"}
:::::::::::
::::::::::
:::::::::

::::::::: repeat {"id":"hd-panel-afspraak-list","props":{"source":"menu","menu":"menu-visit","tag":"ul"},"class":"grid w-[30rem] grid-cols-2 gap-x-6 gap-y-0.5"}
:::::::::: box {"id":"hd-panel-afspraak-item","props":{"tag":"li"}}
::::::::::: link {"id":"hd-panel-afspraak-a","bind":{"label":"item.label","url":"item.url"},"class":"-mx-3 block rounded-md px-3 py-2 font-medium text-foreground no-underline hover:bg-tint hover:text-primary"}
:::::::::::
::::::::::
:::::::::
::::::::
:::::::

::::::: box {"id":"hd-nav-bezoek","props":{"tag":"li"}}
:::::::: box {"id":"hd-nav-bezoek-b","props":{"tag":"button","type":"button"},"class":"inline-flex h-12 items-center gap-1.5 rounded-md px-3.5 text-[1.0625rem] font-semibold text-foreground"}
::::::::: paragraph {"id":"hd-nav-bezoek-t","props":{"text":"Bezoek","tag":"span"}}
:::::::::

::::::::: icon {"id":"hd-nav-bezoek-i","props":{"icon":"caret-down"},"attrs":{"aria-hidden":"true"},"class":"size-4 transition-transform in-aria-expanded:rotate-180"}
:::::::::
::::::::

:::::::: box {"id":"hd-panel-bezoek","class":"flex gap-6 p-6"}
::::::::: box {"id":"hd-panel-bezoek-intro","class":"flex w-56 shrink-0 flex-col gap-3 border-r border-border pr-6"}
:::::::::: paragraph {"id":"hd-panel-bezoek-p","props":{"text":"Wanneer je op bezoek kunt komen en hoe je ons vindt.","tag":"p"},"class":"text-[0.9375rem] leading-snug text-muted"}
::::::::::

:::::::::: link {"id":"hd-panel-bezoek-all","props":{"url":"entry:01m7p2kg02mca2s304fb0a4xnd"},"class":"inline-flex items-center gap-1.5 font-semibold"}
::::::::::: paragraph {"id":"hd-panel-bezoek-all-t","props":{"text":"Alles voor bezoekers","tag":"span"}}
:::::::::::

::::::::::: icon {"id":"hd-panel-bezoek-all-i","props":{"icon":"arrow-right"},"attrs":{"aria-hidden":"true"},"class":"size-4"}
:::::::::::
::::::::::
:::::::::

::::::::: repeat {"id":"hd-panel-bezoek-list","props":{"source":"menu","menu":"menu-visitors","tag":"ul"},"class":"grid w-[30rem] grid-cols-2 gap-x-6 gap-y-0.5"}
:::::::::: box {"id":"hd-panel-bezoek-item","props":{"tag":"li"}}
::::::::::: link {"id":"hd-panel-bezoek-a","bind":{"label":"item.label","url":"item.url"},"class":"-mx-3 block rounded-md px-3 py-2 font-medium text-foreground no-underline hover:bg-tint hover:text-primary"}
:::::::::::
::::::::::
:::::::::
::::::::
:::::::

::::::: box {"id":"hd-nav-over","props":{"tag":"li"}}
:::::::: box {"id":"hd-nav-over-b","props":{"tag":"button","type":"button"},"class":"inline-flex h-12 items-center gap-1.5 rounded-md px-3.5 text-[1.0625rem] font-semibold text-foreground"}
::::::::: paragraph {"id":"hd-nav-over-t","props":{"text":"Over ons","tag":"span"}}
:::::::::

::::::::: icon {"id":"hd-nav-over-i","props":{"icon":"caret-down"},"attrs":{"aria-hidden":"true"},"class":"size-4 transition-transform in-aria-expanded:rotate-180"}
:::::::::
::::::::

:::::::: box {"id":"hd-panel-over","class":"flex gap-6 p-6"}
::::::::: box {"id":"hd-panel-over-intro","class":"flex w-56 shrink-0 flex-col gap-3 border-r border-border pr-6"}
:::::::::: paragraph {"id":"hd-panel-over-p","props":{"text":"Wie we zijn, nieuws, activiteiten en werken bij ons.","tag":"p"},"class":"text-[0.9375rem] leading-snug text-muted"}
::::::::::

:::::::::: link {"id":"hd-panel-over-all","props":{"url":"entry:01m7p2kg02mca2s304fb0a4xnf"},"class":"inline-flex items-center gap-1.5 font-semibold"}
::::::::::: paragraph {"id":"hd-panel-over-all-t","props":{"text":"Over AZ Lindenhof","tag":"span"}}
:::::::::::

::::::::::: icon {"id":"hd-panel-over-all-i","props":{"icon":"arrow-right"},"attrs":{"aria-hidden":"true"},"class":"size-4"}
:::::::::::
::::::::::
:::::::::

::::::::: repeat {"id":"hd-panel-over-list","props":{"source":"menu","menu":"menu-about","tag":"ul"},"class":"grid w-[30rem] grid-cols-2 gap-x-6 gap-y-0.5"}
:::::::::: box {"id":"hd-panel-over-item","props":{"tag":"li"}}
::::::::::: link {"id":"hd-panel-over-a","bind":{"label":"item.label","url":"item.url"},"class":"-mx-3 block rounded-md px-3 py-2 font-medium text-foreground no-underline hover:bg-tint hover:text-primary"}
:::::::::::
::::::::::
:::::::::
::::::::
:::::::
::::::
:::::

::::: box {"id":"hd-actions","class":"ml-auto flex items-center gap-2"}
:::::: search {"id":"hd-search","props":{"label":"Zoeken","placeholder":"Zoek een arts, dienst of ziekte","empty":"Niets gevonden. Probeer een ander woord, of bel ons.","shortcut":true,"compact":"mobile"},"class":"h-11 min-w-64 rounded-md border-border bg-surface px-3.5 text-[0.9375rem] max-2xl:min-w-0 max-2xl:[&_.cms-search__kbd]:hidden max-2xl:[&_.cms-search__label]:sr-only max-md:size-11 max-md:justify-center max-md:p-0"}
::::::

:::::: button {"id":"hd-portal","props":{"label":"Mijn dossier","variant":"secondary","size":"md","icon":"user"},"bind":{"url":"globals.hospital.portal.url"},"class":"max-sm:hidden"}
::::::

:::::: link {"id":"hd-call","props":{"url":"tel:112"},"attrs":{"aria-label":"Spoed? Bel 112"},"bind":{"url":"tel:{globals.hospital.emergency_number}","attr:aria-label":"Spoed? Bel {globals.hospital.emergency_number}"},"class":"inline-flex size-11 items-center justify-center rounded-md bg-emergency text-white lg:hidden"}
::::::: icon {"id":"hd-call-i","props":{"icon":"phone"},"attrs":{"aria-hidden":"true"},"class":"size-5"}
:::::::
::::::

:::::: box {"id":"hd-toggle","props":{"tag":"button","type":"button"},"label":"Menuknop","attrs":{"aria-label":"Menu","aria-controls":"#hd-sheet"},"logic":{"on":[{"event":"click","actions":[{"do":"toggle","var":"open"},{"do":"if","test":"open","then":[{"do":"lock","on":true}],"else":[{"do":"lock","on":false}]}]}],"attrs":{"aria-expanded":"open"}},"class":"inline-flex size-11 items-center justify-center rounded-md border border-border text-foreground xl:hidden"}
::::::: icon {"id":"hd-toggle-open","props":{"icon":"list"},"attrs":{"aria-hidden":"true"},"logic":{"show":"!open"},"class":"size-6"}
:::::::

::::::: icon {"id":"hd-toggle-close","props":{"icon":"x"},"attrs":{"aria-hidden":"true"},"logic":{"show":"open"},"class":"size-6"}
:::::::
::::::
:::::
::::

:::: box {"id":"hd-sheet","props":{"tag":"nav"},"label":"Menu op de gsm","attrs":{"aria-label":"Hoofdmenu"},"logic":{"show":"open","transition":"collapse"},"anchor":"site-menu","class":"max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background px-gutter pt-2 pb-10 xl:hidden"}
::::: box {"id":"hd-sheet-groups","class":"flex flex-col"}
:::::: box {"id":"hd-sheet-zorg","props":{"tag":"details"},"class":"border-b border-border"}
::::::: box {"id":"hd-sheet-zorg-s","props":{"tag":"summary"},"class":"flex cursor-pointer list-none items-center justify-between py-4 text-xl font-semibold [&::-webkit-details-marker]:hidden"}
:::::::: paragraph {"id":"hd-sheet-zorg-t","props":{"text":"Zorg","tag":"span"}}
::::::::

:::::::: icon {"id":"hd-sheet-zorg-i","props":{"icon":"caret-down"},"attrs":{"aria-hidden":"true"},"class":"size-5 transition-transform in-open:rotate-180"}
::::::::
:::::::

::::::: repeat {"id":"hd-sheet-zorg-list","props":{"source":"menu","menu":"menu-care","tag":"ul"},"class":"flex flex-col pb-4"}
:::::::: box {"id":"hd-sheet-zorg-item","props":{"tag":"li"}}
::::::::: link {"id":"hd-sheet-zorg-a","bind":{"label":"item.label","url":"item.url"},"class":"block py-2 text-lg text-foreground no-underline"}
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"hd-sheet-afspraak","props":{"tag":"details"},"class":"border-b border-border"}
::::::: box {"id":"hd-sheet-afspraak-s","props":{"tag":"summary"},"class":"flex cursor-pointer list-none items-center justify-between py-4 text-xl font-semibold [&::-webkit-details-marker]:hidden"}
:::::::: paragraph {"id":"hd-sheet-afspraak-t","props":{"text":"Afspraak en opname","tag":"span"}}
::::::::

:::::::: icon {"id":"hd-sheet-afspraak-i","props":{"icon":"caret-down"},"attrs":{"aria-hidden":"true"},"class":"size-5 transition-transform in-open:rotate-180"}
::::::::
:::::::

::::::: repeat {"id":"hd-sheet-afspraak-list","props":{"source":"menu","menu":"menu-visit","tag":"ul"},"class":"flex flex-col pb-4"}
:::::::: box {"id":"hd-sheet-afspraak-item","props":{"tag":"li"}}
::::::::: link {"id":"hd-sheet-afspraak-a","bind":{"label":"item.label","url":"item.url"},"class":"block py-2 text-lg text-foreground no-underline"}
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"hd-sheet-bezoek","props":{"tag":"details"},"class":"border-b border-border"}
::::::: box {"id":"hd-sheet-bezoek-s","props":{"tag":"summary"},"class":"flex cursor-pointer list-none items-center justify-between py-4 text-xl font-semibold [&::-webkit-details-marker]:hidden"}
:::::::: paragraph {"id":"hd-sheet-bezoek-t","props":{"text":"Bezoek","tag":"span"}}
::::::::

:::::::: icon {"id":"hd-sheet-bezoek-i","props":{"icon":"caret-down"},"attrs":{"aria-hidden":"true"},"class":"size-5 transition-transform in-open:rotate-180"}
::::::::
:::::::

::::::: repeat {"id":"hd-sheet-bezoek-list","props":{"source":"menu","menu":"menu-visitors","tag":"ul"},"class":"flex flex-col pb-4"}
:::::::: box {"id":"hd-sheet-bezoek-item","props":{"tag":"li"}}
::::::::: link {"id":"hd-sheet-bezoek-a","bind":{"label":"item.label","url":"item.url"},"class":"block py-2 text-lg text-foreground no-underline"}
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"hd-sheet-over","props":{"tag":"details"},"class":"border-b border-border"}
::::::: box {"id":"hd-sheet-over-s","props":{"tag":"summary"},"class":"flex cursor-pointer list-none items-center justify-between py-4 text-xl font-semibold [&::-webkit-details-marker]:hidden"}
:::::::: paragraph {"id":"hd-sheet-over-t","props":{"text":"Over ons","tag":"span"}}
::::::::

:::::::: icon {"id":"hd-sheet-over-i","props":{"icon":"caret-down"},"attrs":{"aria-hidden":"true"},"class":"size-5 transition-transform in-open:rotate-180"}
::::::::
:::::::

::::::: repeat {"id":"hd-sheet-over-list","props":{"source":"menu","menu":"menu-about","tag":"ul"},"class":"flex flex-col pb-4"}
:::::::: box {"id":"hd-sheet-over-item","props":{"tag":"li"}}
::::::::: link {"id":"hd-sheet-over-a","bind":{"label":"item.label","url":"item.url"},"class":"block py-2 text-lg text-foreground no-underline"}
:::::::::
::::::::
:::::::
::::::
:::::

::::: repeat {"id":"hd-sheet-utility","props":{"source":"menu","menu":"utility","tag":"ul"},"class":"mt-6 grid grid-cols-2 gap-x-6 gap-y-3"}
:::::: box {"id":"hd-sheet-u","props":{"tag":"li"}}
::::::: link {"id":"hd-sheet-u-a","bind":{"label":"item.label","url":"item.url"},"class":"text-muted no-underline hover:text-foreground"}
:::::::
::::::
:::::

::::: box {"id":"hd-sheet-actions","class":"mt-8 flex flex-col gap-3"}
:::::: button {"id":"hd-sheet-portal","props":{"label":"Mijn dossier","variant":"secondary","size":"lg","icon":"user"},"bind":{"url":"globals.hospital.portal.url"},"class":"w-full"}
::::::

:::::: button {"id":"hd-sheet-call","props":{"label":"Spoed? Bel 112","url":"tel:112","variant":"emergency","size":"lg","icon":"phone"},"bind":{"label":"Spoed? Bel {globals.hospital.emergency_number}","url":"tel:{globals.hospital.emergency_number}"},"class":"w-full"}
::::::
:::::
::::
:::
