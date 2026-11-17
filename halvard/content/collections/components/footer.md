---
id: 01m7nkej93cve87248079gbd1p
title: Footer
status: published
published_at: '2026-11-17T20:33:51+00:00'
position: 3
synced: true
category: Site
description: 'The hospital’s address and phone numbers, the footer menu in columns, the emergency number, the legal links and a light or dark switch.'
---

::: box {"id":"ft","props":{"tag":"footer"},"label":"Footer","class":"scheme-lagoon mt-section"}
:::: box {"id":"ft-er","label":"Emergency line","class":"border-b border-border"}
::::: box {"id":"ft-er-in","class":"mx-auto flex max-w-wide flex-wrap items-center justify-between gap-x-8 gap-y-4 px-gutter py-6"}
:::::: box {"id":"ft-er-text","class":"flex items-center gap-4"}
::::::: icon {"id":"ft-er-icon","props":{"icon":"siren"},"class":"size-11 shrink-0 rounded-full bg-emergency p-2.5 text-white"}
:::::::

::::::: box {"id":"ft-er-words"}
:::::::: paragraph {"id":"ft-er-title","props":{"text":"In a life-threatening emergency, call 112","tag":"p"},"bind":{"text":"In a life-threatening emergency, call {globals.hospital.emergency_number}"},"class":"text-xl font-semibold tracking-snug"}
::::::::

:::::::: paragraph {"id":"ft-er-sub","props":{"text":"Our emergency department is open day and night, every day of the year.","tag":"p"},"class":"text-muted"}
::::::::
:::::::
::::::

:::::: button {"id":"ft-er-more","props":{"label":"Emergency department","url":"entry:01m7nkejakn16aqnk5d5ryx9kd","variant":"light","size":"md","icon":"arrow-right","icon_position":"end"}}
::::::
:::::
::::

:::: box {"id":"ft-main","class":"mx-auto grid max-w-wide grid-cols-12 gap-x-columns gap-y-12 px-gutter py-16"}
::::: box {"id":"ft-about","class":"col-span-4 flex flex-col items-start gap-5 max-lg:col-span-full"}
:::::: link {"id":"ft-home","props":{"url":"/"},"bind":{"attr:aria-label":"{site.name}, home"},"class":"flex items-center gap-2.5 no-underline"}
::::::: icon {"id":"ft-mark","props":{"svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 40\"><rect width=\"40\" height=\"40\" rx=\"12\" fill=\"currentColor\"/><path d=\"M12.5 11v18M27.5 11v18M12.5 21.5h15\" fill=\"none\" stroke=\"#0b3a46\" stroke-width=\"3.6\" stroke-linecap=\"round\"/><circle cx=\"20\" cy=\"13.75\" r=\"2.75\" fill=\"#0b3a46\"/></svg>"},"attrs":{"aria-hidden":"true"},"class":"size-10 text-lagoon-foreground"}
:::::::

::::::: paragraph {"id":"ft-name","props":{"tag":"span"},"bind":{"text":"site.name"},"class":"text-xl font-bold tracking-tight"}
:::::::
::::::

:::::: paragraph {"id":"ft-tagline","props":{"tag":"p"},"bind":{"text":"globals.hospital.tagline"},"class":"max-w-[22em] text-lg text-muted"}
::::::

:::::: box {"id":"ft-contact","props":{"tag":"address"},"class":"flex flex-col gap-1.5 not-italic"}
::::::: paragraph {"id":"ft-address","props":{"tag":"p"},"bind":{"text":"globals.hospital.address"},"class":"whitespace-pre-line"}
:::::::

::::::: link {"id":"ft-phone","bind":{"label":"globals.hospital.phone","url":"tel:{globals.hospital.phone}"},"class":"mt-2 font-semibold"}
:::::::

::::::: link {"id":"ft-email","bind":{"label":"globals.hospital.email","url":"mailto:{globals.hospital.email}"}}
:::::::

::::::: paragraph {"id":"ft-lines","props":{"tag":"p"},"bind":{"text":"globals.hospital.switchboard_hours"},"class":"text-sm text-muted"}
:::::::
::::::
:::::

::::: repeat {"id":"ft-groups","props":{"source":"menu","menu":"footer","as":"group"},"class":"col-span-8 grid grid-cols-3 gap-x-columns gap-y-10 max-lg:col-span-full max-md:grid-cols-2 max-sm:grid-cols-1"}
:::::: box {"id":"ft-group","props":{"tag":"nav"},"bind":{"attr:aria-label":"group.label"}}
::::::: heading {"id":"ft-group-title","props":{"level":"2"},"bind":{"text":"group.label"},"class":"text-base font-semibold tracking-normal"}
:::::::

::::::: repeat {"id":"ft-links","props":{"source":"list","path":"group.children","tag":"ul"},"class":"mt-4 flex flex-col gap-2.5"}
:::::::: box {"id":"ft-item","props":{"tag":"li"}}
::::::::: link {"id":"ft-link","bind":{"label":"item.label","url":"item.url"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
:::::::::
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"ft-base","class":"border-t border-border"}
::::: box {"id":"ft-base-in","class":"mx-auto flex max-w-wide flex-wrap items-center justify-between gap-x-8 gap-y-4 px-gutter py-6 text-sm text-muted"}
:::::: paragraph {"id":"ft-copy","props":{"tag":"p"},"bind":{"text":"© {site.year} {site.name}"}}
::::::

:::::: box {"id":"ft-legal","props":{"tag":"nav"},"attrs":{"aria-label":"Legal"},"class":"flex flex-wrap items-center gap-x-6 gap-y-2"}
::::::: repeat {"id":"ft-legal-list","props":{"source":"menu","menu":"legal","tag":"ul"},"class":"flex flex-wrap gap-x-6 gap-y-2"}
:::::::: box {"id":"ft-legal-item","props":{"tag":"li"}}
::::::::: link {"id":"ft-legal-link","bind":{"label":"item.label","url":"item.url"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
:::::::::
::::::::
:::::::

::::::: box {"id":"ft-theme","props":{"tag":"button","type":"button"},"logic":{"on":[{"event":"click","actions":[{"do":"theme","mode":"toggle"}]}]},"class":"inline-flex h-11 items-center gap-2 rounded-full border border-border px-4 text-foreground hover:bg-foreground/5"}
:::::::: icon {"id":"ft-theme-icon","props":{"icon":"circle-half"},"attrs":{"aria-hidden":"true"},"class":"size-5"}
::::::::

:::::::: paragraph {"id":"ft-theme-label","props":{"text":"Light or dark","tag":"span"}}
::::::::
:::::::
::::::
:::::
::::
:::
