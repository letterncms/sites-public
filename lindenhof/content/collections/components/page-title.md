---
id: 01m7p2kfy69agdcgggq2vfq8pr
title: Paginatitel
status: published
published_at: '2026-11-18T01:58:41+01:00'
position: 4
synced: true
category: Site
description: 'Bovenaan een pagina: de weg terug, de titel en de samenvatting.'
---

::: box {"id":"pt","props":{"tag":"header"},"label":"Titel","class":"scheme-surface"}
:::: box {"id":"pt-in","class":"mx-auto flex max-w-content flex-col items-start gap-5 px-gutter pt-8 pb-12 max-md:pb-9"}
::::: box {"id":"pt-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Kruimelpad"}}
:::::: box {"id":"pt-crumbs-in","class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::::: link {"id":"pt-home","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
:::::::

::::::: repeat {"id":"pt-crumbs-list","props":{"source":"breadcrumbs","tag":"ol"},"class":"contents"}
:::::::: box {"id":"pt-crumb","props":{"tag":"li"},"class":"flex items-center gap-2"}
::::::::: icon {"id":"pt-sep","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
:::::::::

::::::::: link {"id":"pt-crumb-a","bind":{"label":"item.title","url":"item.url"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
:::::::::
::::::::
:::::::
::::::
:::::

::::: heading {"id":"pt-title","props":{"level":"1"},"bind":{"text":"entry.title"},"class":"rule max-w-[20em]"}
:::::

::::: paragraph {"id":"pt-summary","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lede max-w-[38em]"}
:::::
::::
:::
