---
id: 01m9a0pjvwkcmpqap71fjm9mgp
title: Person
status: published
position: 0
collections:
  - people
description: 'A member of the council: photo, role, responsibilities, ward and how to reach them.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"pe-wrap","class":"wrap pt-6 pb-section"}
::::: box {"id":"pe-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
:::::: box {"id":"pe-crumbs-ol","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::::: box {"id":"pe-crumbs-li-home","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"pe-crumbs-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::::
:::::::

::::::: box {"id":"pe-crumbs-li0","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"pe-crumbs-l0","props":{"label":"The council","url":"/council"},"class":"text-link text-foreground"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"pe-grid","class":"mt-8 grid gap-10 md:grid-cols-12 md:gap-12"}
:::::: box {"id":"pe-photo","bind":{"visible":"entry.photo"},"class":"photo md:col-span-4"}
::::::: image {"id":"pe-img","props":{"priority":true,"aspect":"4/5"},"bind":{"image":"entry.photo"},"class":"aspect-[4/5] w-full object-cover"}
:::::::
::::::

:::::: box {"id":"pe-main","class":"md:col-span-8 lg:col-span-7 lg:col-start-6"}
::::::: box {"id":"pe-head","class":"flex flex-col gap-3"}
:::::::: paragraph {"id":"pe-role","props":{"tag":"p"},"bind":{"text":"entry.role"},"class":"eyebrow text-base"}
::::::::

:::::::: heading {"id":"pe-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::::

:::::::: paragraph {"id":"pe-portfolio","props":{"tag":"p"},"bind":{"text":"Responsible for {entry.portfolio}","visible":"entry.portfolio"},"class":"lead"}
::::::::
:::::::

::::::: box {"id":"pe-facts","props":{"tag":"dl"},"class":"facts mt-8 border-y border-border py-6"}
:::::::: box {"id":"pe-ward-row","bind":{"visible":"entry.ward"}}
::::::::: paragraph {"id":"pe-ward-dt","props":{"tag":"dt","text":"Ward"}}
:::::::::

::::::::: paragraph {"id":"pe-ward","props":{"tag":"dd"},"bind":{"text":"entry.ward"}}
:::::::::
::::::::

:::::::: box {"id":"pe-since-row","bind":{"visible":"entry.since"}}
::::::::: paragraph {"id":"pe-since-dt","props":{"tag":"dt","text":"In office since"}}
:::::::::

::::::::: paragraph {"id":"pe-since","props":{"tag":"dd"},"bind":{"text":"entry.since"}}
:::::::::
::::::::

:::::::: box {"id":"pe-email-row","bind":{"visible":"entry.email"}}
::::::::: paragraph {"id":"pe-email-dt","props":{"tag":"dt","text":"Email"}}
:::::::::

::::::::: box {"id":"pe-email-dd","props":{"tag":"dd"}}
:::::::::: link {"id":"pe-email","bind":{"label":"entry.email","url":"mailto:{entry.email}"},"class":"text-link text-primary"}
::::::::::
:::::::::
::::::::

:::::::: box {"id":"pe-phone-row","bind":{"visible":"entry.phone"}}
::::::::: paragraph {"id":"pe-phone-dt","props":{"tag":"dt","text":"Phone"}}
:::::::::

::::::::: paragraph {"id":"pe-phone","props":{"tag":"dd"},"bind":{"text":"entry.phone"}}
:::::::::
::::::::
:::::::

::::::: outlet {"id":"pe-outlet","props":{"wrap":true,"prose":true},"class":"mt-8"}
:::::::
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
