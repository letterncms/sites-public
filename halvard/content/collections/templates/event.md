---
id: 01m7nqftc5hn7vgmwpr8886w9y
title: Event
status: published
published_at: '2026-11-17T21:44:28+00:00'
position: 7
description: 'An event: who it is for, its title and summary, when and where, the details, and a form to sign up.'
collections:
  - events
---

::: component {"id":"ev-header","props":{"ref":"header"}}
:::

::: box {"id":"ev-main","props":{"tag":"main"},"label":"Main","anchor":"main"}
:::: box {"id":"ev-band","props":{"tag":"header"},"class":"scheme-surface"}
::::: box {"id":"ev-band-in","class":"mx-auto grid max-w-content grid-cols-12 items-center gap-x-columns gap-y-8 px-gutter pt-10 pb-14 max-md:pt-6 max-md:pb-10"}
:::::: box {"id":"ev-band-text","class":"col-span-7 flex flex-col items-start gap-5 max-lg:col-span-full"}
::::::: box {"id":"ev-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
:::::::: box {"id":"ev-crumbs-list","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
::::::::: box {"id":"ev-crumb-home","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"ev-crumb-home-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::

:::::::::: icon {"id":"ev-crumb-sep1","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
::::::::::
:::::::::

::::::::: box {"id":"ev-crumb-up","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"ev-crumb-up-a","props":{"label":"Events and classes","url":"entry:01m7nqftbvfcw2y4b3yr35fmr0"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::
::::::::
:::::::

::::::: paragraph {"id":"ev-eyebrow","props":{"tag":"p"},"bind":{"text":"entry.audience"},"class":"eyebrow"}
:::::::

::::::: heading {"id":"ev-title","props":{"level":"1"},"bind":{"text":"entry.title"},"class":"text-5xl"}
:::::::

::::::: paragraph {"id":"ev-summary","props":{"tag":"p"},"bind":{"text":"entry.summary"},"class":"lede max-w-[34em]"}
:::::::

::::::: buttons {"id":"ev-actions","class":"pt-2"}
:::::::: button {"id":"ev-signup","props":{"label":"Sign up","url":"#ev-register","variant":"primary","size":"lg","icon":"arrow-down","icon_position":"end"}}
::::::::
:::::::
::::::

:::::: box {"id":"ev-facts","props":{"tag":"dl"},"class":"card col-span-4 col-start-9 flex flex-col gap-5 max-lg:col-span-full max-lg:col-start-1"}
::::::: box {"id":"ev-f-date","bind":{"visible":"entry.starts|date:l j F Y"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"ev-f-date-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"ev-f-date-i","props":{"icon":"calendar"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"ev-f-date-l","props":{"text":"Date","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"ev-f-date-v","props":{"tag":"dd"},"bind":{"text":"entry.starts|date:l j F Y"},"class":"pl-7 font-medium"}
::::::::
:::::::

::::::: box {"id":"ev-f-time","bind":{"visible":"{entry.starts|date:H:i} to {entry.ends}"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"ev-f-time-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"ev-f-time-i","props":{"icon":"clock"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"ev-f-time-l","props":{"text":"Time","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"ev-f-time-v","props":{"tag":"dd"},"bind":{"text":"{entry.starts|date:H:i} to {entry.ends}"},"class":"pl-7 font-medium"}
::::::::
:::::::

::::::: box {"id":"ev-f-where","bind":{"visible":"entry.venue"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"ev-f-where-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"ev-f-where-i","props":{"icon":"map-pin"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"ev-f-where-l","props":{"text":"Where","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"ev-f-where-v","props":{"tag":"dd"},"bind":{"text":"entry.venue"},"class":"pl-7 font-medium"}
::::::::
:::::::

::::::: box {"id":"ev-f-price","bind":{"visible":"entry.price"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"ev-f-price-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"ev-f-price-i","props":{"icon":"ticket"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"ev-f-price-l","props":{"text":"Price","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"ev-f-price-v","props":{"tag":"dd"},"bind":{"text":"entry.price"},"class":"pl-7 font-medium"}
::::::::
:::::::
::::::
:::::
::::

:::: outlet {"id":"ev-body","props":{"wrap":true,"prose":true},"class":"mx-auto max-w-[calc(var(--container-prose)+2*var(--spacing-gutter))] px-gutter pt-blocks"}
::::

:::: box {"id":"ev-form","props":{"tag":"section"},"attrs":{"aria-labelledby":"#ev-form-title"},"anchor":"ev-register","class":"mx-auto max-w-[calc(var(--container-prose)+2*var(--spacing-gutter))] px-gutter pt-blocks"}
::::: box {"id":"ev-form-in","class":"card flex flex-col gap-3 p-[clamp(1.5rem,4vw,3rem)]"}
:::::: heading {"id":"ev-form-title","props":{"text":"Sign up","level":"2"},"class":"text-3xl"}
::::::

:::::: paragraph {"id":"ev-form-intro","props":{"text":"Places are limited. We confirm your place by email.","tag":"p"},"class":"text-muted"}
::::::

:::::: forms/form {"id":"ev-form-block","props":{"form":"event-registration"},"class":"mt-4"}
::::::
:::::
::::
:::

::: component {"id":"ev-footer","props":{"ref":"footer"}}
:::
