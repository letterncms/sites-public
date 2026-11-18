---
id: 01m9a04b25ygc7gjz9zcs1yxqd
title: Nieuwsbericht
status: published
position: 0
collections:
  - news
description: 'Een nieuwsbericht, persbericht of melding van werken: soort en datum, foto, het verhaal en meer nieuws.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"nw-wrap","class":"wrap pt-8 pb-20"}
::::: box {"id":"nw-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Kruimelpad"}}
:::::: box {"id":"nw-crumbs-ol","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::::: box {"id":"nw-crumbs-li-home","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['/'] last:after:hidden"}
:::::::: link {"id":"nw-crumbs-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::::
:::::::

::::::: box {"id":"nw-crumbs-li0","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['/'] last:after:hidden"}
:::::::: link {"id":"nw-crumbs-l0","props":{"label":"Nieuws","url":"/nieuws"},"class":"text-link text-foreground"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"nw-title","class":"mt-10 flex max-w-3xl flex-col gap-5"}
:::::: box {"id":"nw-meta","class":"flex flex-wrap items-center gap-3"}
::::::: paragraph {"id":"nw-kind","props":{"tag":"span"},"bind":{"text":"entry.kind"},"class":"tag"}
:::::::

::::::: paragraph {"id":"nw-date","props":{"tag":"time"},"bind":{"text":"entry.date|date:j F Y"},"class":"meta"}
:::::::
::::::

:::::: heading {"id":"nw-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::

:::::: paragraph {"id":"nw-title-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead max-w-2xl text-muted"}
::::::
:::::

::::: box {"id":"nw-photo","bind":{"visible":"entry.cover"},"class":"frame mt-12"}
:::::: image {"id":"nw-img","props":{"priority":true,"aspect":"16/9","sizes":"(min-width: 80rem) 76rem, 100vw"},"bind":{"image":"entry.cover"},"class":"aspect-[16/9] w-full object-cover"}
::::::
:::::

::::: outlet {"id":"nw-outlet","props":{"wrap":true,"prose":true},"class":"mx-auto mt-14 max-w-prose"}
:::::

::::: box {"id":"nw-foot","class":"mx-auto mt-14 flex max-w-prose items-center gap-3 border-t border-border pt-6"}
:::::: link {"id":"nw-topic","bind":{"label":"entry.topic.title","url":"entry.topic.url","visible":"entry.topic"},"class":"tag"}
::::::
:::::
::::

:::: box {"id":"nw-more-section","props":{"tag":"section"},"attrs":{"aria-labelledby":"#nw-more-h"},"class":"bg-surface"}
::::: box {"id":"nw-more-inner","class":"wrap py-section"}
:::::: box {"id":"nw-more-head","class":"flex flex-wrap items-end justify-between gap-4"}
::::::: heading {"id":"nw-more-h","props":{"level":"2","text":"Meer nieuws"},"class":"text-2xl"}
:::::::

::::::: link {"id":"nw-more-all","props":{"label":"Al het nieuws","url":"/nieuws"},"class":"arrow-link"}
:::::::
::::::

:::::: repeat {"id":"nw-more","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"tag":"ul","skipCurrent":true},"class":"mt-8 grid gap-10 md:grid-cols-3"}
::::::: box {"id":"nw-more-item","props":{"tag":"li"}}
:::::::: component {"id":"nw-more-card","props":{"ref":"news-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.image":"item.cover","values.kind":"item.kind","values.date":"item.date|date:j F Y"}}
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
