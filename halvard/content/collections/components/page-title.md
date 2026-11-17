---
id: 01m7nqftagk53yj8axk5yx8gga
title: 'Page Title'
status: published
published_at: '2026-11-17T21:44:27+00:00'
position: 4
synced: true
category: Site
description: 'The band at the top of a page: the way back, its title and its summary.'
---

::: box {"id":"pt","props":{"tag":"header"},"label":"Title band","class":"scheme-surface"}
:::: box {"id":"pt-in","class":"mx-auto flex max-w-wide flex-col items-start gap-5 px-gutter pt-10 pb-14 max-md:pt-6 max-md:pb-10"}
::::: box {"id":"pt-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"},"bind":{"visible":"entry.parent"}}
:::::: box {"id":"pt-crumbs-in","class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
::::::: link {"id":"pt-crumb-home-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
:::::::

::::::: repeat {"id":"pt-crumbs-list","props":{"source":"breadcrumbs","tag":"ol"},"class":"contents"}
:::::::: box {"id":"pt-crumb","props":{"tag":"li"},"class":"flex items-center gap-2"}
::::::::: icon {"id":"pt-crumb-sep","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
:::::::::

::::::::: link {"id":"pt-crumb-link","bind":{"label":"item.title","url":"item.url"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
:::::::::
::::::::
:::::::
::::::
:::::

::::: heading {"id":"pt-title","props":{"level":"1"},"bind":{"text":"entry.title"},"class":"max-w-[18em]"}
:::::

::::: paragraph {"id":"pt-summary","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lede max-w-[36em]"}
:::::
::::
:::
