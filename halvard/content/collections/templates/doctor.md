---
id: 01m7nqftc5hn7vgmwpr8886w9v
title: Doctor
status: published
published_at: '2026-11-17T21:44:28+00:00'
position: 4
description: 'A profile: photo, name and role, specialties and whether they see new patients, then the biography beside expertise, languages, consultation hours and training.'
collections:
  - doctors
---

::: component {"id":"dr-header","props":{"ref":"header"}}
:::

::: box {"id":"dr-main","props":{"tag":"main"},"label":"Main","anchor":"main"}
:::: box {"id":"dr-band","props":{"tag":"header"},"label":"Profile","class":"scheme-surface"}
::::: box {"id":"dr-band-in","class":"mx-auto grid max-w-content grid-cols-12 items-center gap-x-columns gap-y-8 px-gutter py-12 max-md:py-8"}
:::::: box {"id":"dr-photo-frame","class":"col-span-4 max-lg:col-span-5 max-md:col-span-full max-md:max-w-72"}
::::::: image {"id":"dr-photo","props":{"aspect":"4/5","priority":true,"sizes":"(min-width: 64rem) 28rem, 70vw"},"bind":{"image":"entry.photo","visible":"entry.photo"},"class":"overflow-hidden rounded-xl"}
:::::::

::::::: box {"id":"dr-nophoto","bind":{"hidden":"entry.photo"},"class":"flex aspect-4/5 items-center justify-center rounded-xl bg-background text-muted"}
:::::::: icon {"id":"dr-nophoto-i","props":{"icon":"user"},"attrs":{"aria-hidden":"true"},"class":"size-24 opacity-40"}
::::::::
:::::::
::::::

:::::: box {"id":"dr-text","class":"col-span-7 col-start-6 flex flex-col items-start gap-5 max-lg:col-span-7 max-lg:col-start-6 max-md:col-span-full max-md:row-start-1"}
::::::: box {"id":"dr-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
:::::::: box {"id":"dr-crumbs-list","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
::::::::: box {"id":"dr-crumb-home","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"dr-crumb-home-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::

:::::::::: icon {"id":"dr-crumb-sep1","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
::::::::::
:::::::::

::::::::: box {"id":"dr-crumb-up","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::::: link {"id":"dr-crumb-up-a","props":{"label":"Find a doctor","url":"entry:01m7nqftbvfcw2y4b3yr35fmqv"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::::
:::::::::
::::::::
:::::::

::::::: heading {"id":"dr-name","props":{"level":"1"},"bind":{"text":"{entry.honorific} {entry.title}"}}
:::::::

::::::: paragraph {"id":"dr-role","props":{"tag":"p"},"bind":{"text":"entry.role"},"class":"text-2xl leading-snug text-muted"}
:::::::

::::::: repeat {"id":"dr-specialties","props":{"source":"list","path":"entry.specialties","tag":"ul"},"attrs":{"aria-label":"Specialties"},"class":"flex flex-wrap gap-2"}
:::::::: box {"id":"dr-sp","props":{"tag":"li"}}
::::::::: link {"id":"dr-sp-a","bind":{"label":"item.title","url":"item.url"},"class":"chip-outline bg-background"}
:::::::::
::::::::
:::::::

::::::: paragraph {"id":"dr-new","props":{"text":"Sees new patients","tag":"p"},"bind":{"visible":"entry.new_patients"},"class":"badge bg-mint px-3 py-1 text-sm text-mint-foreground"}
:::::::

::::::: paragraph {"id":"dr-full","props":{"text":"Not taking new patients at the moment","tag":"p"},"bind":{"hidden":"entry.new_patients"},"class":"badge bg-background px-3 py-1 text-sm text-muted"}
:::::::

::::::: buttons {"id":"dr-actions","class":"pt-2"}
:::::::: button {"id":"dr-book","props":{"label":"Make an appointment","url":"entry:01m7nqftbvfcw2y4b3yr35fmr8","variant":"primary","size":"lg"}}
::::::::

:::::::: button {"id":"dr-call","props":{"variant":"secondary","size":"lg","icon":"phone"},"bind":{"label":"Call {globals.hospital.appointments_phone}","url":"tel:{globals.hospital.appointments_phone}"}}
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"dr-layout","class":"mx-auto grid max-w-content grid-cols-12 gap-x-columns gap-y-10 px-gutter pt-blocks"}
::::: box {"id":"dr-bio","class":"col-span-7 flex flex-col gap-4 max-lg:col-span-full"}
:::::: heading {"id":"dr-bio-title","props":{"text":"About","level":"2"},"class":"text-2xl"}
::::::

:::::: outlet {"id":"dr-body","props":{"wrap":true,"prose":true}}
::::::
:::::

::::: box {"id":"dr-facts","props":{"tag":"aside"},"attrs":{"aria-label":"Details"},"class":"card col-span-5 flex flex-col gap-7 self-start max-lg:col-span-full"}
:::::: box {"id":"dr-expertise","bind":{"visible":"entry.expertise"},"class":"flex flex-col gap-3"}
::::::: heading {"id":"dr-expertise-t","props":{"text":"Expertise","level":"2"},"class":"text-lg"}
:::::::

::::::: repeat {"id":"dr-expertise-list","props":{"source":"list","path":"entry.expertise","tag":"ul"},"class":"flex flex-col gap-1.5"}
:::::::: box {"id":"dr-ex","props":{"tag":"li"},"class":"flex gap-2 before:mt-[0.6em] before:size-1.5 before:shrink-0 before:rounded-full before:bg-primary"}
::::::::: paragraph {"id":"dr-ex-t","props":{"tag":"span"},"bind":{"text":"item"}}
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"dr-langs","bind":{"visible":"entry.languages"},"class":"flex flex-col gap-3"}
::::::: heading {"id":"dr-langs-t","props":{"text":"Languages","level":"2"},"class":"text-lg"}
:::::::

::::::: repeat {"id":"dr-langs-list","props":{"source":"list","path":"entry.languages","tag":"ul"},"class":"flex flex-wrap gap-2"}
:::::::: box {"id":"dr-lang","props":{"tag":"li"},"class":"chip"}
::::::::: paragraph {"id":"dr-lang-t","props":{"tag":"span"},"bind":{"text":"item"}}
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"dr-clinics","bind":{"visible":"entry.clinics"},"class":"flex flex-col gap-2"}
::::::: heading {"id":"dr-clinics-t","props":{"text":"Consultation hours","level":"2"},"class":"text-lg"}
:::::::

::::::: paragraph {"id":"dr-clinics-v","props":{"tag":"p"},"bind":{"text":"entry.clinics"},"class":"whitespace-pre-line"}
:::::::
::::::

:::::: box {"id":"dr-edu","bind":{"visible":"entry.education"},"class":"flex flex-col gap-2"}
::::::: heading {"id":"dr-edu-t","props":{"text":"Training","level":"2"},"class":"text-lg"}
:::::::

::::::: paragraph {"id":"dr-edu-v","props":{"tag":"p"},"bind":{"text":"entry.education"},"class":"whitespace-pre-line text-muted"}
:::::::
::::::
:::::
::::
:::

::: component {"id":"dr-footer","props":{"ref":"footer"}}
:::
