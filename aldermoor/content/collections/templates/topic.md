---
id: 01m9a0v34v2m2hq3x56edzrd3g
title: Topic
status: published
position: 0
collections:
  - topics
description: 'A topic: every service filed under it, and its latest news.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"tp-head","class":"scheme-soft"}
::::: box {"id":"tp-head-inner","class":"wrap grid items-center gap-10 pt-6 pb-12 lg:grid-cols-12"}
:::::: box {"id":"tp-text","class":"lg:col-span-7"}
::::::: box {"id":"tp-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
:::::::: box {"id":"tp-crumbs-ol","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::::::: box {"id":"tp-crumbs-li-home","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::::: link {"id":"tp-crumbs-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::::::
:::::::::

::::::::: box {"id":"tp-crumbs-li0","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::::: link {"id":"tp-crumbs-l0","props":{"label":"Services","url":"/services"},"class":"text-link text-foreground"}
::::::::::
:::::::::
::::::::
:::::::

::::::: box {"id":"tp-title","class":"mt-8 flex max-w-prose flex-col items-start gap-4"}
:::::::: icon {"id":"tp-icon","bind":{"icon":"entry.icon"},"class":"size-14 rounded-xl bg-background p-3 text-primary"}
::::::::

:::::::: heading {"id":"tp-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::::

:::::::: paragraph {"id":"tp-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead"}
::::::::
:::::::
::::::

:::::: box {"id":"tp-photo","bind":{"visible":"entry.photo"},"class":"photo max-lg:hidden lg:col-span-5"}
::::::: image {"id":"tp-img","props":{"priority":true,"aspect":"3/2","sizes":"(min-width: 64rem) 34vw, 100vw"},"bind":{"image":"entry.photo"},"class":"aspect-[3/2] w-full object-cover"}
:::::::
::::::
:::::
::::

:::: box {"id":"tp-body","class":"wrap py-12"}
::::: heading {"id":"tp-services-title","props":{"level":"2","text":"Services"},"class":"sr-only"}
:::::

::::: repeat {"id":"tp-services","props":{"source":"entries","collection":"services","sort":"title","limit":100,"tag":"ul","where":[{"field":"topic","op":"contains","value":"{entry.id}"}],"empty":"There are no services under this topic yet."},"class":"grid gap-4 md:grid-cols-2"}
:::::: box {"id":"tp-card-item","props":{"tag":"li"},"class":"grid"}
::::::: component {"id":"tp-card","props":{"ref":"service-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url"}}
:::::::
::::::
:::::
::::

:::: box {"id":"tp-news-wrap","class":"wrap pb-section"}
::::: box {"id":"tp-news-head","class":"flex flex-wrap items-end justify-between gap-4"}
:::::: heading {"id":"tp-news-title","props":{"level":"2"},"bind":{"text":"News about {entry.title|lower}"}}
::::::

:::::: link {"id":"tp-news-all","props":{"label":"All news","url":"/news"},"class":"text-link font-bold"}
::::::
:::::

::::: repeat {"id":"tp-news","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"tag":"ul","where":[{"field":"topic","op":"contains","value":"{entry.id}"}],"empty":"No news about this topic at the moment."},"class":"mt-8 grid gap-10 md:grid-cols-3"}
:::::: box {"id":"tp-news-item","props":{"tag":"li"}}
::::::: component {"id":"tp-news-card","props":{"ref":"news-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.image":"item.cover","values.date":"item.date|date:j F Y"}}
:::::::
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
