---
id: 01m7p3g291ay24bfsfkwnmh9ft
title: Vacature
status: published
published_at: '2026-11-18T02:14:20+01:00'
position: 8
description: 'De vacature naast wat ze inhoudt in het kort, en het formulier om te solliciteren.'
collections:
  - jobs
---

::: component {"id":"jo-header","props":{"ref":"header"}}
:::

::: box {"id":"jo-main","props":{"tag":"main"},"label":"Inhoud","anchor":"main"}
:::: box {"id":"jo-band","props":{"tag":"header"},"label":"Titel","class":"scheme-surface"}
::::: box {"id":"jo-band-in","class":"mx-auto grid max-w-content grid-cols-12 items-center gap-x-columns gap-y-8 px-gutter pt-8 pb-12 max-md:pt-6 max-md:pb-9"}
:::::: box {"id":"jo-band-text","class":"col-span-9 flex flex-col items-start gap-5 max-lg:col-span-full"}
::::::: box {"id":"jo-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Kruimelpad"}}
:::::::: box {"id":"jo-crumbs-l","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
::::::::: box {"id":"jo-c0","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"jo-c0-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::

::::::::: box {"id":"jo-c1","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: icon {"id":"jo-c1-s","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
::::::::::

:::::::::: link {"id":"jo-c1-a","props":{"label":"Jobs","url":"entry:01m7p3g28ph31zyqzvh74hae5r"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::
::::::::
:::::::

::::::: paragraph {"id":"jo-dept","props":{"tag":"p"},"bind":{"text":"entry.department"},"class":"eyebrow"}
:::::::

::::::: heading {"id":"jo-title","props":{"level":"1"},"bind":{"text":"entry.title"},"class":"rule"}
:::::::

::::::: paragraph {"id":"jo-summary","props":{"tag":"p"},"bind":{"text":"entry.summary"},"class":"lede max-w-[36em]"}
:::::::

::::::: button {"id":"jo-apply","props":{"label":"Solliciteer","url":"#solliciteren","variant":"primary","size":"lg","icon":"arrow-down","icon_position":"end"}}
:::::::
::::::
:::::
::::

:::: box {"id":"jo-layout","class":"mx-auto grid max-w-content grid-cols-12 gap-x-columns gap-y-10 px-gutter pt-blocks"}
::::: box {"id":"bdhc5izhizz","class":"col-span-8 flex flex-col gap-section max-lg:col-span-full"}
:::::: outlet {"id":"jo-body","props":{"wrap":true,"prose":true}}
::::::

:::::: box {"id":"jo-form","props":{"tag":"section"},"attrs":{"aria-labelledby":"#jo-form-t"},"class":"flex flex-col gap-6"}
::::::: heading {"id":"jo-form-t","props":{"text":"Solliciteer","level":"2"},"anchor":"solliciteren","class":"rule"}
:::::::

::::::: forms/form {"id":"jo-form-block","props":{"form":"sollicitatie"},"class":"card p-[clamp(1.5rem,4vw,2.5rem)]"}
:::::::
::::::
:::::

::::: box {"id":"jo-aside","props":{"tag":"aside"},"attrs":{"aria-label":"In het kort"},"class":"col-span-4 self-start lg:sticky lg:top-32 max-lg:order-first max-lg:col-span-full"}
:::::: box {"id":"jo-facts","props":{"tag":"dl"},"class":"card flex flex-col gap-5"}
::::::: box {"id":"jo-f-field","bind":{"visible":"entry.field"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"jo-f-field-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"jo-f-field-i","props":{"icon":"briefcase"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"jo-f-field-l","props":{"text":"Domein","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"jo-f-field-v","props":{"tag":"dd"},"bind":{"text":"entry.field"},"class":"pl-7 font-medium"}
::::::::
:::::::

::::::: box {"id":"jo-f-hours","bind":{"visible":"entry.hours"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"jo-f-hours-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"jo-f-hours-i","props":{"icon":"clock"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"jo-f-hours-l","props":{"text":"Uren","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"jo-f-hours-v","props":{"tag":"dd"},"bind":{"text":"entry.hours"},"class":"pl-7 font-medium"}
::::::::
:::::::

::::::: box {"id":"jo-f-contract","bind":{"visible":"entry.contract"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"jo-f-contract-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"jo-f-contract-i","props":{"icon":"file-text"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"jo-f-contract-l","props":{"text":"Contract","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"jo-f-contract-v","props":{"tag":"dd"},"bind":{"text":"entry.contract"},"class":"pl-7 font-medium"}
::::::::
:::::::

::::::: box {"id":"jo-f-salary","bind":{"visible":"entry.salary"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"jo-f-salary-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"jo-f-salary-i","props":{"icon":"coins"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"jo-f-salary-l","props":{"text":"Verloning","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"jo-f-salary-v","props":{"tag":"dd"},"bind":{"text":"entry.salary"},"class":"pl-7 font-medium"}
::::::::
:::::::
::::::
:::::
::::
:::

::: component {"id":"jo-footer","props":{"ref":"footer"}}
:::
