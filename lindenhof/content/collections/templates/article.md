---
id: 01m7p2kg0ecx0zgp2a8q1qegdn
title: Bericht
status: published
published_at: '2026-11-18T01:58:43+01:00'
position: 6
description: 'Een nieuwsbericht: thema, datum, titel en inleiding, een grote foto, de tekst in een leeskolom, en meer nieuws.'
collections:
  - news
---

::: component {"id":"ar-header","props":{"ref":"header"}}
:::

::: box {"id":"ar-main","props":{"tag":"main"},"label":"Inhoud","anchor":"main"}
:::: box {"id":"ar-head","props":{"tag":"header"},"class":"mx-auto flex max-w-[52rem] flex-col items-start gap-5 px-gutter pt-8"}
::::: box {"id":"ar-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Kruimelpad"}}
:::::: box {"id":"ar-crumbs-l","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
::::::: box {"id":"ar-c0","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::: link {"id":"ar-c0-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::
:::::::

::::::: box {"id":"ar-c1","props":{"tag":"li"},"class":"flex items-center gap-2"}
:::::::: icon {"id":"ar-c1-s","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
::::::::

:::::::: link {"id":"ar-c1-a","props":{"label":"Nieuws","url":"entry:01m7p2kg02mca2s304fb0a4xng"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"ar-meta","class":"flex flex-wrap gap-x-3"}
:::::: paragraph {"id":"ar-topic","props":{"tag":"span"},"bind":{"text":"entry.topic.title"},"class":"font-semibold text-primary"}
::::::

:::::: paragraph {"id":"ar-date","props":{"tag":"span"},"bind":{"text":"entry.date|date:j F Y"},"class":"text-muted"}
::::::
:::::

::::: heading {"id":"ar-title","props":{"level":"1"},"bind":{"text":"entry.title"},"class":"text-5xl"}
:::::

::::: paragraph {"id":"ar-summary","props":{"tag":"p"},"bind":{"text":"entry.summary"},"class":"lede"}
:::::
::::

:::: box {"id":"ar-photo-wrap","class":"mx-auto max-w-[68rem] px-gutter pt-10"}
::::: image {"id":"ar-photo","props":{"aspect":"16/9","priority":true,"sizes":"(min-width: 64rem) 64rem, 100vw","alt":""},"bind":{"image":"entry.cover","visible":"entry.cover"},"class":"leaf"}
:::::
::::

:::: outlet {"id":"ar-body","props":{"wrap":true,"prose":true},"class":"mx-auto max-w-[44rem] px-gutter pt-blocks"}
::::

:::: box {"id":"ar-more","props":{"tag":"section"},"attrs":{"aria-labelledby":"#ar-more-title"},"class":"mx-auto max-w-content px-gutter pt-section"}
::::: box {"id":"ar-more-head","class":"mb-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-6"}
:::::: box {"id":"ar-more-intro","class":"flex flex-col gap-4"}
::::::: heading {"id":"ar-more-title","props":{"text":"Meer nieuws","level":"2"},"class":"rule"}
:::::::
::::::

:::::: button {"id":"ar-more-all","props":{"variant":"secondary","icon":"arrow-right","icon_position":"end","label":"Al het nieuws","url":"entry:01m7p2kg02mca2s304fb0a4xng"}}
::::::
:::::

::::: repeat {"id":"ar-more-list","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"skipCurrent":true,"tag":"ul"},"class":"grid grid-cols-3 gap-columns max-lg:grid-cols-2 max-md:grid-cols-1"}
:::::: box {"id":"ar-more-li","props":{"tag":"li"}}
::::::: component {"id":"ar-more-card","props":{"ref":"news-card"},"bind":{"values.title":"item.title","values.image":"item.cover","values.link":"item.url","values.date":"item.date|date:j F Y","values.topic":"item.topic.title"}}
:::::::
::::::
:::::
::::
:::

::: component {"id":"ar-footer","props":{"ref":"footer"}}
:::
