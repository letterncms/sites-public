---
id: 01m9a0b37qh52r3pnrj4jvjkwr
title: 'News Article'
status: published
position: 0
collections:
  - news
description: 'A news article or press release: the kind and date, the photo, the story and more news.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"ar-wrap","class":"wrap pt-6 pb-16"}
::::: box {"id":"ar-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
:::::: box {"id":"ar-crumbs-ol","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::::: box {"id":"ar-crumbs-li-home","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"ar-crumbs-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::::
:::::::

::::::: box {"id":"ar-crumbs-li0","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"ar-crumbs-l0","props":{"label":"News","url":"/news"},"class":"text-link text-foreground"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"ar-title","class":"mt-8 flex max-w-prose flex-col gap-4"}
:::::: box {"id":"ar-meta","class":"flex flex-wrap items-center gap-3"}
::::::: paragraph {"id":"ar-kind","props":{"tag":"span"},"bind":{"text":"entry.kind"},"class":"tag"}
:::::::

::::::: paragraph {"id":"ar-date","props":{"tag":"time"},"bind":{"text":"entry.date|date:j F Y"},"class":"meta"}
:::::::
::::::

:::::: heading {"id":"ar-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::

:::::: paragraph {"id":"ar-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead"}
::::::
:::::

::::: box {"id":"ar-photo","bind":{"visible":"entry.cover"},"class":"photo mt-10"}
:::::: image {"id":"ar-img","props":{"priority":true,"aspect":"16/9","sizes":"(min-width: 76rem) 72rem, 100vw"},"bind":{"image":"entry.cover"},"class":"aspect-[16/9] w-full object-cover"}
::::::
:::::

::::: outlet {"id":"ar-outlet","props":{"wrap":true,"prose":true},"class":"mt-10 max-w-prose"}
:::::

::::: box {"id":"ar-foot","class":"mt-12 flex max-w-prose items-center gap-3 border-t border-border pt-6"}
:::::: link {"id":"ar-topic","bind":{"label":"entry.topic.title","url":"entry.topic.url","visible":"entry.topic"},"class":"tag"}
::::::
:::::
::::

:::: box {"id":"ar-more-wrap","class":"wrap border-t border-border py-section"}
::::: box {"id":"ar-more-head","class":"flex flex-wrap items-end justify-between gap-4"}
:::::: heading {"id":"ar-more-title","props":{"level":"2","text":"More news"}}
::::::

:::::: link {"id":"ar-more-all","props":{"label":"All news","url":"/news"},"class":"text-link font-bold"}
::::::
:::::

::::: repeat {"id":"ar-more","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"tag":"ul","skipCurrent":true},"class":"mt-8 grid gap-10 md:grid-cols-3"}
:::::: box {"id":"ar-more-item","props":{"tag":"li"}}
::::::: component {"id":"ar-more-card","props":{"ref":"news-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.image":"item.cover","values.date":"item.date|date:j F Y"}}
:::::::
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
