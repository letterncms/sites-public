---
id: 01m9a06kesda12yj3gdhb82mdz
title: Service
status: published
position: 0
collections:
  - services
description: 'A service: what it costs, how long it takes and who can use it, the button to start, then the details.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"sv-wrap","class":"wrap pt-6 pb-section"}
::::: box {"id":"sv-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
:::::: box {"id":"sv-crumbs-ol","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::::: box {"id":"sv-crumbs-li-home","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"sv-crumbs-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::::
:::::::

::::::: box {"id":"sv-crumbs-li0","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"sv-crumbs-l0","props":{"label":"Services","url":"/services"},"class":"text-link text-foreground"}
::::::::
:::::::

::::::: box {"id":"sv-crumbs-li1","props":{"tag":"li"},"bind":{"visible":"entry.topic"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"sv-crumbs-l1","bind":{"label":"entry.topic.title","url":"entry.topic.url"},"class":"text-link text-foreground"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"sv-grid","class":"mt-8 lg:grid lg:grid-cols-12 lg:gap-x-12"}
:::::: box {"id":"sv-main","class":"min-w-0 lg:col-span-8"}
::::::: box {"id":"sv-title","class":"flex flex-col gap-4"}
:::::::: heading {"id":"sv-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::::

:::::::: paragraph {"id":"sv-title-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead"}
::::::::
:::::::

::::::: box {"id":"sv-facts","props":{"tag":"dl"},"class":"facts card-flat mt-8 bg-surface"}
:::::::: box {"id":"sv-f1","bind":{"visible":"entry.cost"}}
::::::::: paragraph {"id":"sv-dt1","props":{"tag":"dt","text":"Cost"}}
:::::::::

::::::::: paragraph {"id":"sv-dd1","props":{"tag":"dd"},"bind":{"text":"entry.cost"}}
:::::::::
::::::::

:::::::: box {"id":"sv-f2","bind":{"visible":"entry.duration"}}
::::::::: paragraph {"id":"sv-dt2","props":{"tag":"dt","text":"How long it takes"}}
:::::::::

::::::::: paragraph {"id":"sv-dd2","props":{"tag":"dd"},"bind":{"text":"entry.duration"}}
:::::::::
::::::::

:::::::: box {"id":"sv-f3","bind":{"visible":"entry.eligibility"}}
::::::::: paragraph {"id":"sv-dt3","props":{"tag":"dt","text":"Who can use it"}}
:::::::::

::::::::: paragraph {"id":"sv-dd3","props":{"tag":"dd"},"bind":{"text":"entry.eligibility"}}
:::::::::
::::::::

:::::::: box {"id":"sv-f4","bind":{"visible":"entry.channels"}}
::::::::: paragraph {"id":"sv-dt4","props":{"tag":"dt","text":"How to apply"}}
:::::::::

::::::::: paragraph {"id":"sv-dd4","props":{"tag":"dd"},"bind":{"text":"entry.channels"}}
:::::::::
::::::::
:::::::

::::::: button {"id":"sv-action","props":{"label":"Start Now","url":"#","variant":"primary","size":"lg","icon":"arrow-right","icon_position":"end"},"bind":{"label":"entry.action_label|default:Start now","url":"entry.action.url","visible":"entry.action.url"},"class":"mt-8"}
:::::::

::::::: outlet {"id":"sv-outlet","props":{"wrap":true,"prose":true},"class":"mt-12"}
:::::::

::::::: box {"id":"sv-place","props":{"tag":"section"},"bind":{"visible":"entry.place"},"class":"mt-12 flex flex-col gap-4"}
:::::::: heading {"id":"sv-place-title","props":{"level":"2","text":"Where to go"},"class":"text-2xl"}
::::::::

:::::::: box {"id":"sv-place-card","class":"card-flat flex-row items-start gap-4"}
::::::::: icon {"id":"sv-place-icon","props":{"icon":"map-pin"},"class":"mt-1 size-7 shrink-0 text-primary"}
:::::::::

::::::::: box {"id":"sv-place-body","class":"flex flex-col gap-1"}
:::::::::: link {"id":"sv-place-link","bind":{"label":"entry.place.title","url":"entry.place.url"},"class":"text-link text-xl font-bold text-primary"}
::::::::::

:::::::::: paragraph {"id":"sv-place-address","props":{"tag":"p"},"bind":{"text":"entry.place.address"},"class":"whitespace-pre-line text-base"}
::::::::::

:::::::::: paragraph {"id":"sv-place-phone","props":{"tag":"p"},"bind":{"text":"Phone {entry.place.phone}","visible":"entry.place.phone"},"class":"text-base text-muted"}
::::::::::
:::::::::
::::::::
:::::::

::::::: box {"id":"sv-foot","class":"mt-12 border-t border-border pt-6"}
:::::::: paragraph {"id":"sv-updated","props":{"tag":"p"},"bind":{"text":"Last updated {entry.updated|date:j F Y}","visible":"entry.updated"},"class":"meta"}
::::::::
:::::::
::::::

:::::: box {"id":"sv-aside","props":{"tag":"aside"},"class":"lg:col-span-4 max-lg:mt-14"}
::::::: box {"id":"sv-aside-inner","class":"flex flex-col gap-10 lg:sticky lg:top-8"}
:::::::: box {"id":"sv-toc","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#sv-toc-title"},"class":"flex flex-col gap-3"}
::::::::: heading {"id":"sv-toc-title","props":{"level":"2","text":"On this page"},"class":"text-base"}
:::::::::

::::::::: repeat {"id":"sv-toc-list","props":{"source":"headings","tag":"ul","depth":2},"class":"flex flex-col"}
:::::::::: box {"id":"sv-toc-item","props":{"tag":"li"}}
::::::::::: link {"id":"sv-toc-link","bind":{"label":"item.text","url":"item.url"},"class":"block border-l-4 border-border py-1.5 pl-4 text-base text-foreground no-underline hover:border-primary hover:text-primary hover:underline"}
:::::::::::
::::::::::
:::::::::
::::::::

:::::::: box {"id":"sv-rel","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#sv-rel-title"},"class":"flex flex-col gap-3 border-t-4 border-primary pt-4"}
::::::::: heading {"id":"sv-rel-title","props":{"level":"2","text":"Related services"},"class":"text-base"}
:::::::::

::::::::: repeat {"id":"sv-rel-list","props":{"source":"entries","collection":"services","sort":"title","limit":6,"tag":"ul","where":[{"field":"topic","op":"contains","value":"{entry.topic.id}"}],"skipCurrent":true},"class":"flex flex-col gap-2.5 text-base"}
:::::::::: box {"id":"sv-rel-item","props":{"tag":"li"}}
::::::::::: link {"id":"sv-rel-link","bind":{"label":"item.title","url":"item.url"},"class":"text-link font-bold"}
:::::::::::
::::::::::
:::::::::

::::::::: link {"id":"sv-rel-all","bind":{"label":"All about {entry.topic.title|lower}","url":"entry.topic.url"},"class":"text-link text-base font-bold"}
:::::::::
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
