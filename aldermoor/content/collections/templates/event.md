---
id: 01m9a082mbzh1pd6s2v4ev3pxw
title: Event
status: published
position: 0
collections:
  - events
description: 'An event: the photo and what it is, with the date, time, place, price and booking beside it.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"ev-wrap","class":"wrap pt-6 pb-section"}
::::: box {"id":"ev-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
:::::: box {"id":"ev-crumbs-ol","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::::: box {"id":"ev-crumbs-li-home","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"ev-crumbs-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::::
:::::::

::::::: box {"id":"ev-crumbs-li0","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"ev-crumbs-l0","props":{"label":"Events","url":"/events"},"class":"text-link text-foreground"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"ev-title","class":"mt-8 flex max-w-prose flex-col gap-4"}
:::::: heading {"id":"ev-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::

:::::: paragraph {"id":"ev-title-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead"}
::::::
:::::

::::: box {"id":"ev-grid","class":"mt-10 flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12"}
:::::: box {"id":"ev-main","class":"min-w-0 lg:col-span-8"}
::::::: box {"id":"ev-photo","bind":{"visible":"entry.cover"},"class":"photo"}
:::::::: image {"id":"ev-img","props":{"priority":true,"aspect":"3/2"},"bind":{"image":"entry.cover"},"class":"aspect-[3/2] w-full object-cover"}
::::::::
:::::::

::::::: outlet {"id":"ev-outlet","props":{"wrap":true,"prose":true},"class":"mt-10"}
:::::::

::::::: box {"id":"ev-access-box","props":{"tag":"section"},"bind":{"visible":"entry.access"},"class":"mt-12 flex flex-col gap-3 rounded-xl bg-surface p-6"}
:::::::: heading {"id":"ev-access-title","props":{"level":"2","text":"Accessibility"},"class":"text-2xl"}
::::::::

:::::::: paragraph {"id":"ev-access","props":{"tag":"p"},"bind":{"text":"entry.access"},"class":"whitespace-pre-line"}
::::::::
:::::::
::::::

:::::: box {"id":"ev-aside","props":{"tag":"aside"},"attrs":{"aria-label":"Event details"},"class":"lg:col-span-4 max-lg:order-first max-lg:mb-10"}
::::::: box {"id":"ev-card","class":"card-flat gap-6 lg:sticky lg:top-8"}
:::::::: box {"id":"ev-details","props":{"tag":"dl"},"class":"flex flex-col gap-5"}
::::::::: box {"id":"ev-d1","bind":{"visible":"entry.when"}}
:::::::::: box {"id":"ev-d1-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm font-bold text-muted"}
::::::::::: icon {"id":"ev-d1-icon","props":{"icon":"calendar-blank"},"class":"size-5 shrink-0 text-primary"}
:::::::::::

::::::::::: paragraph {"id":"ev-d1-label","props":{"tag":"span","text":"Date"}}
:::::::::::
::::::::::

:::::::::: paragraph {"id":"ev-d1-dd","props":{"tag":"dd"},"bind":{"text":"{entry.when.start|date:l j F Y}"},"class":"mt-1 pl-7 font-bold whitespace-pre-line"}
::::::::::
:::::::::

::::::::: box {"id":"ev-d2","bind":{"visible":"entry.when"}}
:::::::::: box {"id":"ev-d2-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm font-bold text-muted"}
::::::::::: icon {"id":"ev-d2-icon","props":{"icon":"clock"},"class":"size-5 shrink-0 text-primary"}
:::::::::::

::::::::::: paragraph {"id":"ev-d2-label","props":{"tag":"span","text":"Time"}}
:::::::::::
::::::::::

:::::::::: paragraph {"id":"ev-d2-dd","props":{"tag":"dd"},"bind":{"text":"{entry.when.start|date:H:i} to {entry.when.end|date:H:i}"},"class":"mt-1 pl-7 font-bold whitespace-pre-line"}
::::::::::
:::::::::

::::::::: box {"id":"ev-d3","bind":{"visible":"entry.venue"}}
:::::::::: box {"id":"ev-d3-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm font-bold text-muted"}
::::::::::: icon {"id":"ev-d3-icon","props":{"icon":"map-pin"},"class":"size-5 shrink-0 text-primary"}
:::::::::::

::::::::::: paragraph {"id":"ev-d3-label","props":{"tag":"span","text":"Where"}}
:::::::::::
::::::::::

:::::::::: paragraph {"id":"ev-d3-dd","props":{"tag":"dd"},"bind":{"text":"{entry.venue}\n{entry.address}"},"class":"mt-1 pl-7 font-bold whitespace-pre-line"}
::::::::::
:::::::::

::::::::: box {"id":"ev-d4","bind":{"visible":"entry.price"}}
:::::::::: box {"id":"ev-d4-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm font-bold text-muted"}
::::::::::: icon {"id":"ev-d4-icon","props":{"icon":"ticket"},"class":"size-5 shrink-0 text-primary"}
:::::::::::

::::::::::: paragraph {"id":"ev-d4-label","props":{"tag":"span","text":"Price"}}
:::::::::::
::::::::::

:::::::::: paragraph {"id":"ev-d4-dd","props":{"tag":"dd"},"bind":{"text":"{entry.price}"},"class":"mt-1 pl-7 font-bold whitespace-pre-line"}
::::::::::
:::::::::

::::::::: box {"id":"ev-d5","bind":{"visible":"entry.audience"}}
:::::::::: box {"id":"ev-d5-dt","props":{"tag":"dt"},"class":"flex items-center gap-2 text-sm font-bold text-muted"}
::::::::::: icon {"id":"ev-d5-icon","props":{"icon":"users-three"},"class":"size-5 shrink-0 text-primary"}
:::::::::::

::::::::::: paragraph {"id":"ev-d5-label","props":{"tag":"span","text":"Who it is for"}}
:::::::::::
::::::::::

:::::::::: paragraph {"id":"ev-d5-dd","props":{"tag":"dd"},"bind":{"text":"{entry.audience}"},"class":"mt-1 pl-7 font-bold whitespace-pre-line"}
::::::::::
:::::::::
::::::::

:::::::: button {"id":"ev-book","props":{"label":"Book a Place","url":"#","variant":"primary","icon":"arrow-right","icon_position":"end"},"bind":{"label":"entry.booking.label|default:Book a place","url":"entry.booking.url","visible":"entry.booking.url"},"class":"w-full"}
::::::::
:::::::
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
