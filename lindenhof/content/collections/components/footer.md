---
id: 01m7p3g24e9v8cd0ywn1f9k537
title: Voet
status: published
published_at: '2026-11-18T02:14:18+01:00'
position: 3
synced: true
category: Site
description: 'Het noodnummer, de adresgegevens, het voetmenu in kolommen, de juridische links en een schakelaar voor licht of donker.'
---

::: box {"id":"ft","props":{"tag":"footer"},"label":"Voet","class":"scheme-forest mt-section"}
:::: box {"id":"ft-help","class":"border-b border-white/15"}
::::: box {"id":"ft-help-in","class":"mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-10 gap-y-6 px-gutter py-10"}
:::::: box {"id":"ft-help-er","class":"flex items-start gap-5"}
::::::: icon {"id":"ft-help-er-i","props":{"icon":"siren"},"attrs":{"aria-hidden":"true"},"class":"size-12 shrink-0 rounded-full bg-emergency p-3 text-white"}
:::::::

::::::: box {"id":"ft-help-er-t","class":"flex flex-col gap-1"}
:::::::: paragraph {"id":"ft-help-er-h","props":{"text":"Levensbedreigend? Bel 112","tag":"p"},"bind":{"text":"Levensbedreigend? Bel {globals.hospital.emergency_number}"},"class":"text-2xl font-bold tracking-tight"}
::::::::

:::::::: paragraph {"id":"ft-help-er-p","props":{"text":"Niet dringend, maar kan het niet wachten? Bel buiten de kantooruren de huisartsenwachtpost: 1733.","tag":"p"},"class":"text-muted"}
::::::::
:::::::
::::::

:::::: button {"id":"ft-help-spoed","props":{"label":"Naar de spoedgevallendienst","url":"entry:01m7p3g28ph31zyqzvh74hae5h","variant":"lime","size":"lg","icon":"arrow-right","icon_position":"end"}}
::::::
:::::
::::

:::: box {"id":"ft-main","class":"mx-auto grid max-w-content grid-cols-12 gap-x-columns gap-y-12 px-gutter py-14"}
::::: box {"id":"ft-about","class":"col-span-4 flex flex-col items-start gap-6 max-lg:col-span-full"}
:::::: link {"id":"ft-home","props":{"url":"/"},"class":"flex items-center gap-3 text-white no-underline"}
::::::: icon {"id":"ft-mark","props":{"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 40\"><path d=\"M0 0H30A10 10 0 0 1 40 10V40H10A10 10 0 0 1 0 30Z\" fill=\"currentColor\"/><path d=\"M20 31.5C12.2 27 7.6 21.4 9 15.6 10.3 10.6 16 9.6 20 13.6 24 9.6 29.7 10.6 31 15.6 32.4 21.4 27.8 27 20 31.5Z\" fill=\"#c5e36a\"/><path d=\"M20 15V28.6M20 20.4C17.6 19.8 15.6 18.2 14.6 16.2M20 20.4C22.4 19.8 24.4 18.2 25.4 16.2\" fill=\"none\" stroke=\"#1b3d14\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M20 13.6C20.4 11 21.6 9 23.6 7.6\" fill=\"none\" stroke=\"#c5e36a\" stroke-width=\"1.9\" stroke-linecap=\"round\"/></svg>"},"attrs":{"aria-hidden":"true"},"class":"size-11 text-[#2f5f22]"}
:::::::

::::::: box {"id":"ft-wm","attrs":{"aria-hidden":"true"},"class":"flex flex-col leading-tight"}
:::::::: paragraph {"id":"ft-wm-az","props":{"text":"AZ","tag":"span"},"class":"text-xs font-bold tracking-[0.18em] text-white/70"}
::::::::

:::::::: paragraph {"id":"ft-wm-name","props":{"text":"Lindenhof","tag":"span"},"class":"text-[1.375rem] leading-none font-bold tracking-tight"}
::::::::
:::::::

::::::: paragraph {"id":"ft-home-sr","props":{"text":"AZ Lindenhof, naar de startpagina","tag":"span"},"class":"sr-only"}
:::::::
::::::

:::::: box {"id":"ft-contact","props":{"tag":"address"},"class":"flex flex-col gap-1 not-italic"}
::::::: paragraph {"id":"ft-address","props":{"tag":"p"},"bind":{"text":"globals.hospital.address"},"class":"whitespace-pre-line"}
:::::::

::::::: link {"id":"ft-phone","bind":{"label":"globals.hospital.phone","url":"tel:{globals.hospital.phone}"},"class":"mt-2 text-lg font-semibold text-white"}
:::::::

::::::: link {"id":"ft-email","bind":{"label":"globals.hospital.email","url":"mailto:{globals.hospital.email}"},"class":"text-white"}
:::::::

::::::: paragraph {"id":"ft-lines","props":{"tag":"p"},"bind":{"text":"Telefonisch bereikbaar {globals.hospital.switchboard_hours}"},"class":"text-sm text-muted"}
:::::::
::::::

:::::: button {"id":"ft-contact-all","props":{"label":"Alle contactgegevens","url":"entry:01m7p3g28ph31zyqzvh74hae5v","variant":"link","icon":"arrow-right","icon_position":"end"}}
::::::
:::::

::::: repeat {"id":"ft-groups","props":{"source":"menu","menu":"footer","as":"group"},"class":"col-span-8 grid grid-cols-4 gap-x-columns gap-y-10 max-lg:col-span-full max-md:grid-cols-2"}
:::::: box {"id":"ft-group","props":{"tag":"nav"},"bind":{"attr:aria-label":"group.label"}}
::::::: heading {"id":"ft-group-t","props":{"level":"2"},"bind":{"text":"group.label"},"class":"text-base font-bold tracking-normal"}
:::::::

::::::: repeat {"id":"ft-group-links","props":{"source":"list","path":"group.children","tag":"ul"},"class":"mt-4 flex flex-col gap-2.5 text-[0.9375rem]"}
:::::::: box {"id":"ft-group-item","props":{"tag":"li"}}
::::::::: link {"id":"ft-group-a","bind":{"label":"item.label","url":"item.url"},"class":"text-white/85 no-underline hover:text-white hover:underline"}
:::::::::
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"ft-base","class":"border-t border-white/15"}
::::: box {"id":"ft-base-in","class":"mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-8 gap-y-4 px-gutter py-6 text-sm text-white/80"}
:::::: paragraph {"id":"ft-copy","props":{"tag":"p"},"bind":{"text":"© {site.year} AZ Lindenhof vzw"}}
::::::

:::::: box {"id":"ft-legal","props":{"tag":"nav"},"attrs":{"aria-label":"Juridisch"},"class":"flex flex-wrap items-center gap-x-6 gap-y-3"}
::::::: repeat {"id":"ft-legal-list","props":{"source":"menu","menu":"legal","tag":"ul"},"class":"flex flex-wrap gap-x-6 gap-y-2"}
:::::::: box {"id":"ft-legal-item","props":{"tag":"li"}}
::::::::: link {"id":"ft-legal-a","bind":{"label":"item.label","url":"item.url"},"class":"text-white/80 no-underline hover:text-white hover:underline"}
:::::::::
::::::::
:::::::

::::::: box {"id":"ft-theme","props":{"tag":"button","type":"button"},"logic":{"on":[{"event":"click","actions":[{"do":"theme","mode":"toggle"}]}]},"class":"inline-flex h-11 items-center gap-2 rounded-full border border-white/30 px-5 text-white hover:bg-white/10"}
:::::::: icon {"id":"ft-theme-i","props":{"icon":"circle-half"},"attrs":{"aria-hidden":"true"},"class":"size-5"}
::::::::

:::::::: paragraph {"id":"ft-theme-t","props":{"text":"Licht of donker","tag":"span"}}
::::::::
:::::::
::::::
:::::
::::
:::
