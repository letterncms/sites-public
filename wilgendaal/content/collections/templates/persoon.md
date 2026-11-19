---
id: 01m9a07vy86b4nh8tgtgsmzc6m
title: Bestuurslid
status: published
position: 0
collections:
  - people
description: 'Een bestuurslid: foto, functie, bevoegdheden en hoe je hem of haar bereikt.'
---

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"pe-top","class":"page-head"}
::::: box {"id":"pe-top-inner","class":"wrap pb-12 md:pb-16"}
:::::: component {"id":"pe-crumbs","props":{"ref":"crumbs","values":{"label":"Bestuur","url":"/bestuur"}}}
::::::

:::::: box {"id":"pe-grid","class":"mt-8 grid items-end gap-10 md:mt-12 md:grid-cols-12"}
::::::: box {"id":"pe-head","class":"flex flex-col gap-4 md:col-span-7"}
:::::::: paragraph {"id":"pe-role","props":{"tag":"p"},"bind":{"text":"entry.role"},"class":"eyebrow text-base"}
::::::::

:::::::: heading {"id":"pe-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::::

:::::::: paragraph {"id":"pe-portfolio","props":{"tag":"p"},"bind":{"text":"Bevoegd voor {entry.portfolio}","visible":"entry.portfolio"},"class":"lead text-muted"}
::::::::
:::::::

::::::: box {"id":"pe-photo","bind":{"visible":"entry.photo"},"class":"frame w-full max-w-sm md:col-span-5 md:justify-self-end lg:col-span-4 lg:col-start-9"}
:::::::: image {"id":"pe-img","props":{"priority":true,"aspect":"4/5"},"bind":{"image":"entry.photo"},"class":"aspect-[4/5] w-full object-cover"}
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"pe-wrap","class":"wrap pt-12 pb-section md:pt-16"}
::::: box {"id":"pe-main","class":"max-w-3xl"}
:::::: box {"id":"pe-facts","props":{"tag":"dl"},"class":"facts rounded-2xl bg-surface p-3 sm:p-4"}
::::::: box {"id":"pe-since-row","bind":{"visible":"entry.since"}}
:::::::: paragraph {"id":"pe-since-dt","props":{"tag":"dt","text":"In functie sinds"}}
::::::::

:::::::: paragraph {"id":"pe-since","props":{"tag":"dd"},"bind":{"text":"entry.since"}}
::::::::
:::::::

::::::: box {"id":"pe-email-row","bind":{"visible":"entry.email"}}
:::::::: paragraph {"id":"pe-email-dt","props":{"tag":"dt","text":"E-mail"}}
::::::::

:::::::: box {"id":"pe-email-dd","props":{"tag":"dd"}}
::::::::: link {"id":"pe-email","bind":{"label":"entry.email","url":"mailto:{entry.email}"},"class":"text-link text-primary"}
:::::::::
::::::::
:::::::

::::::: box {"id":"pe-phone-row","bind":{"visible":"entry.phone"}}
:::::::: paragraph {"id":"pe-phone-dt","props":{"tag":"dt","text":"Telefoon"}}
::::::::

:::::::: paragraph {"id":"pe-phone","props":{"tag":"dd"},"bind":{"text":"entry.phone"}}
::::::::
:::::::
::::::

:::::: outlet {"id":"pe-outlet","props":{"wrap":true,"prose":true},"class":"mt-10"}
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
