---
id: 01m7p3g291ay24bfsfkwnmh9fq
title: 'Ziekte of behandeling'
status: published
published_at: '2026-11-18T02:14:20+01:00'
position: 5
description: 'Uitleg in een leeskolom, naast wie het behandelt en een herinnering dat je eigen arts je situatie het best kent.'
collections:
  - conditions
---

::: component {"id":"cd-header","props":{"ref":"header"}}
:::

::: box {"id":"cd-main","props":{"tag":"main"},"label":"Inhoud","anchor":"main"}
:::: box {"id":"cd-band","props":{"tag":"header"},"label":"Titel","class":"scheme-surface"}
::::: box {"id":"cd-band-in","class":"mx-auto grid max-w-content grid-cols-12 items-center gap-x-columns gap-y-8 px-gutter pt-8 pb-12 max-md:pt-6 max-md:pb-9"}
:::::: box {"id":"cd-band-text","class":"col-span-9 flex flex-col items-start gap-5 max-lg:col-span-full"}
::::::: box {"id":"cd-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Kruimelpad"}}
:::::::: box {"id":"cd-crumbs-l","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
::::::::: box {"id":"cd-c0","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"cd-c0-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::

::::::::: box {"id":"cd-c1","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: icon {"id":"cd-c1-s","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
::::::::::

:::::::::: link {"id":"cd-c1-a","props":{"label":"Ziekten en behandelingen","url":"entry:01m7p3g28ph31zyqzvh74hae5g"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::
::::::::
:::::::

::::::: paragraph {"id":"cd-kind","props":{"tag":"p"},"bind":{"text":"entry.kind"},"class":"badge"}
:::::::

::::::: heading {"id":"cd-title","props":{"level":"1"},"bind":{"text":"entry.title"},"class":"rule"}
:::::::

::::::: paragraph {"id":"cd-aka","props":{"tag":"p"},"bind":{"text":"Ook bekend als {entry.also_known_as}","visible":"entry.also_known_as"},"class":"meta"}
:::::::

::::::: paragraph {"id":"cd-summary","props":{"tag":"p"},"bind":{"text":"entry.summary"},"class":"lede max-w-[36em]"}
:::::::
::::::
:::::
::::

:::: box {"id":"cd-layout","class":"mx-auto grid max-w-content grid-cols-12 gap-x-columns gap-y-12 px-gutter pt-blocks"}
::::: outlet {"id":"cd-body","props":{"wrap":true,"prose":true},"class":"col-span-8 max-lg:col-span-full"}
:::::

::::: box {"id":"cd-aside","props":{"tag":"aside"},"attrs":{"aria-label":"Wie helpt je"},"class":"col-span-4 flex flex-col gap-6 self-start lg:sticky lg:top-32 max-lg:col-span-full"}
:::::: box {"id":"cd-who","bind":{"visible":"entry.specialties"},"class":"card flex flex-col gap-4"}
::::::: heading {"id":"cd-who-t","props":{"text":"Wie helpt je?","level":"2"},"class":"text-xl"}
:::::::

::::::: repeat {"id":"cd-who-list","props":{"source":"list","path":"entry.specialties","tag":"ul"},"class":"flex flex-col gap-3"}
:::::::: box {"id":"cd-who-li","props":{"tag":"li"},"class":"flex items-center gap-3"}
::::::::: box {"id":"cd-who-ic","props":{"tag":"span"},"class":"icon-tile size-10"}
:::::::::: icon {"id":"cd-who-i","attrs":{"aria-hidden":"true"},"bind":{"icon":"item.icon"},"class":"size-5"}
::::::::::
:::::::::

::::::::: link {"id":"cd-who-a","bind":{"label":"item.title","url":"item.url"},"class":"font-semibold"}
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"cd-note","class":"scheme-tint leaf-sm flex gap-3 p-5"}
::::::: icon {"id":"cd-note-i","props":{"icon":"info"},"attrs":{"aria-hidden":"true"},"class":"size-6 shrink-0 text-primary"}
:::::::

::::::: paragraph {"id":"cd-note-p","props":{"text":"Deze pagina legt de dingen in het algemeen uit. Je eigen arts kent jouw situatie: volg altijd zijn of haar advies.","tag":"p"},"class":"text-[0.9375rem] leading-snug"}
:::::::
::::::
:::::

::::: box {"id":"cd-upd","class":"col-span-8 border-t border-border pt-6 max-lg:col-span-full"}
:::::: paragraph {"id":"cd-upd-t","props":{"tag":"p"},"bind":{"text":"Laatst bijgewerkt op {entry.updated|date:j F Y}"},"class":"meta"}
::::::
:::::
::::
:::

::: component {"id":"cd-footer","props":{"ref":"footer"}}
:::
