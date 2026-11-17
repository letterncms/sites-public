---
id: 01m7nkejaz71xhmycw17g2256c
title: Vacancy
status: published
published_at: '2026-11-17T20:33:52+00:00'
position: 8
description: 'A vacancy: its department and title, the terms beside it, the job, and a form to apply.'
collections:
  - jobs
---

::: component {"id":"jb-header","props":{"ref":"header"}}
:::

::: box {"id":"jb-main","props":{"tag":"main"},"label":"Main","anchor":"main"}
:::: box {"id":"jb-band","props":{"tag":"header"},"class":"scheme-surface"}
::::: box {"id":"jb-band-in","class":"mx-auto grid max-w-content grid-cols-12 items-center gap-x-columns gap-y-8 px-gutter pt-10 pb-14 max-md:pt-6 max-md:pb-10"}
:::::: box {"id":"jb-band-text","class":"col-span-7 flex flex-col items-start gap-5 max-lg:col-span-full"}
::::::: box {"id":"jb-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
:::::::: box {"id":"jb-crumbs-list","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
::::::::: box {"id":"jb-crumb-home","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"jb-crumb-home-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::

:::::::::: icon {"id":"jb-crumb-sep1","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
::::::::::
:::::::::

::::::::: box {"id":"jb-crumb-up","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"jb-crumb-up-a","props":{"label":"Careers","url":"entry:01m7nkejakn16aqnk5d5ryx9kh"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::
::::::::
:::::::

::::::: paragraph {"id":"jb-eyebrow","props":{"tag":"p"},"bind":{"text":"entry.department"},"class":"eyebrow"}
:::::::

::::::: heading {"id":"jb-title","props":{"level":"1"},"bind":{"text":"entry.title"},"class":"text-5xl"}
:::::::

::::::: paragraph {"id":"jb-summary","props":{"tag":"p"},"bind":{"text":"entry.summary"},"class":"lede max-w-[34em]"}
:::::::

::::::: buttons {"id":"jb-actions","class":"pt-2"}
:::::::: button {"id":"jb-apply","props":{"label":"Apply now","url":"#jb-register","variant":"primary","size":"lg","icon":"arrow-down","icon_position":"end"}}
::::::::
:::::::
::::::

:::::: box {"id":"jb-facts","props":{"tag":"dl"},"class":"card col-span-4 col-start-9 flex flex-col gap-5 max-lg:col-span-full max-lg:col-start-1"}
::::::: box {"id":"jb-f-field","bind":{"visible":"entry.field"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"jb-f-field-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"jb-f-field-i","props":{"icon":"briefcase"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"jb-f-field-l","props":{"text":"Job family","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"jb-f-field-v","props":{"tag":"dd"},"bind":{"text":"entry.field"},"class":"pl-7 font-medium"}
::::::::
:::::::

::::::: box {"id":"jb-f-hours","bind":{"visible":"entry.hours"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"jb-f-hours-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"jb-f-hours-i","props":{"icon":"clock"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"jb-f-hours-l","props":{"text":"Hours","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"jb-f-hours-v","props":{"tag":"dd"},"bind":{"text":"entry.hours"},"class":"pl-7 font-medium"}
::::::::
:::::::

::::::: box {"id":"jb-f-contract","bind":{"visible":"entry.contract"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"jb-f-contract-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"jb-f-contract-i","props":{"icon":"file-text"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"jb-f-contract-l","props":{"text":"Contract","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"jb-f-contract-v","props":{"tag":"dd"},"bind":{"text":"entry.contract"},"class":"pl-7 font-medium"}
::::::::
:::::::

::::::: box {"id":"jb-f-salary","bind":{"visible":"entry.salary"},"class":"flex flex-col gap-0.5"}
:::::::: box {"id":"jb-f-salary-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm text-muted"}
::::::::: icon {"id":"jb-f-salary-i","props":{"icon":"wallet"},"attrs":{"aria-hidden":"true"},"class":"size-5 shrink-0 text-primary"}
:::::::::

::::::::: paragraph {"id":"jb-f-salary-l","props":{"text":"Salary","tag":"span"}}
:::::::::
::::::::

:::::::: paragraph {"id":"jb-f-salary-v","props":{"tag":"dd"},"bind":{"text":"entry.salary"},"class":"pl-7 font-medium"}
::::::::
:::::::
::::::
:::::
::::

:::: outlet {"id":"jb-body","props":{"wrap":true,"prose":true},"class":"mx-auto max-w-[calc(var(--container-prose)+2*var(--spacing-gutter))] px-gutter pt-blocks"}
::::

:::: box {"id":"jb-form","props":{"tag":"section"},"attrs":{"aria-labelledby":"#jb-form-title"},"anchor":"jb-register","class":"mx-auto max-w-[calc(var(--container-prose)+2*var(--spacing-gutter))] px-gutter pt-blocks"}
::::: box {"id":"jb-form-in","class":"card flex flex-col gap-3 p-[clamp(1.5rem,4vw,3rem)]"}
:::::: heading {"id":"jb-form-title","props":{"text":"Apply for this job","level":"2"},"class":"text-3xl"}
::::::

:::::: paragraph {"id":"jb-form-intro","props":{"text":"Your application goes straight to the recruitment team. We reply within a week.","tag":"p"},"class":"text-muted"}
::::::

:::::: forms/form {"id":"jb-form-block","props":{"form":"job-application"},"class":"mt-4"}
::::::
:::::
::::
:::

::: component {"id":"jb-footer","props":{"ref":"footer"}}
:::
