---
id: 01m7nnfjp9xe6pjmmfm8q9am9t
title: 'Condition or Treatment'
status: published
published_at: '2026-11-17T21:09:23+00:00'
position: 5
description: 'A topic explained: what kind it is, its title and summary, the text in a reading column, and who treats it here beside it.'
collections:
  - conditions
---

::: component {"id":"co-header","props":{"ref":"header"}}
:::

::: box {"id":"co-main","props":{"tag":"main"},"label":"Main","anchor":"main"}
:::: box {"id":"co-band","props":{"tag":"header"},"class":"scheme-surface"}
::::: box {"id":"co-band-in","class":"mx-auto flex max-w-content flex-col items-start gap-4 px-gutter pt-10 pb-14 max-md:pt-6 max-md:pb-10"}
:::::: box {"id":"co-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
::::::: box {"id":"co-crumbs-list","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
:::::::: box {"id":"co-crumb-home","props":{"tag":"li"},"class":"flex items-center gap-2"}
::::::::: link {"id":"co-crumb-home-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
:::::::::

::::::::: icon {"id":"co-crumb-sep1","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
:::::::::
::::::::

:::::::: box {"id":"co-crumb-up","props":{"tag":"li"},"class":"flex items-center gap-2"}
::::::::: link {"id":"co-crumb-up-a","props":{"label":"Conditions and treatments","url":"entry:01m7nnfjnxtyfj10psmzqt69mz"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
:::::::::
::::::::
:::::::
::::::

:::::: paragraph {"id":"co-kind","props":{"tag":"p"},"bind":{"text":"entry.kind"},"class":"badge bg-background px-3 py-1 text-sm text-foreground"}
::::::

:::::: heading {"id":"co-title","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::

:::::: paragraph {"id":"co-aka","props":{"tag":"p"},"bind":{"text":"Also known as {entry.also_known_as}","visible":"entry.also_known_as"},"class":"text-muted"}
::::::

:::::: paragraph {"id":"co-summary","props":{"tag":"p"},"bind":{"text":"entry.summary"},"class":"lede max-w-[36em]"}
::::::
:::::
::::

:::: box {"id":"co-layout","class":"mx-auto grid max-w-content grid-cols-12 gap-x-columns gap-y-12 px-gutter pt-blocks"}
::::: box {"id":"co-text","class":"col-span-8 flex flex-col gap-10 max-lg:col-span-full"}
:::::: outlet {"id":"co-body","props":{"wrap":true,"prose":true}}
::::::

:::::: box {"id":"co-note","class":"flex items-start gap-3 rounded-md border border-border p-4 text-muted"}
::::::: icon {"id":"co-note-i","props":{"icon":"info"},"attrs":{"aria-hidden":"true"},"class":"mt-0.5 size-5 shrink-0"}
:::::::

::::::: paragraph {"id":"co-note-t","props":{"text":"This page explains things in general. Your own doctor knows your situation: always follow their advice.","tag":"p"},"class":"text-[0.9375rem] leading-snug"}
:::::::
::::::
:::::

::::: box {"id":"co-aside","props":{"tag":"aside"},"attrs":{"aria-label":"Who treats it"},"class":"col-span-4 flex flex-col gap-6 self-start lg:sticky lg:top-32 max-lg:col-span-full"}
:::::: box {"id":"co-by","bind":{"visible":"entry.specialties"},"class":"card flex flex-col gap-4"}
::::::: heading {"id":"co-by-t","props":{"text":"Treated here by","level":"2"},"class":"text-xl"}
:::::::

::::::: repeat {"id":"co-by-list","props":{"source":"list","path":"entry.specialties","tag":"ul"},"class":"flex flex-col gap-1"}
:::::::: box {"id":"co-by-item","props":{"tag":"li"}}
::::::::: link {"id":"co-by-a","bind":{"url":"item.url"},"class":"flex items-center gap-3 rounded-md p-2 -mx-2 text-foreground no-underline hover:bg-surface"}
:::::::::: icon {"id":"co-by-icon","attrs":{"aria-hidden":"true"},"bind":{"icon":"item.icon","state:mint":"item.area.colour|is:mint","state:sky":"item.area.colour|is:sky","state:lilac":"item.area.colour|is:lilac","state:peach":"item.area.colour|is:peach","state:sun":"item.area.colour|is:sun","state:rose":"item.area.colour|is:rose"},"class":"icon-tile size-10 text-xl data-mint:scheme-mint data-sky:scheme-sky data-lilac:scheme-lilac data-peach:scheme-peach data-sun:scheme-sun data-rose:scheme-rose"}
::::::::::

:::::::::: paragraph {"id":"co-by-name","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"font-semibold"}
::::::::::
:::::::::
::::::::
:::::::
::::::

:::::: component {"id":"co-help","props":{"ref":"help-card"}}
::::::
:::::
::::
:::

::: component {"id":"co-footer","props":{"ref":"footer"}}
:::
