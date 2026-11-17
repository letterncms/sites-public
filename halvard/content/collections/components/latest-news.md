---
id: 01m7npd9x8g8e4hhhdejz1f4kt
title: 'Latest News'
status: published
published_at: '2026-11-17T21:25:36+00:00'
position: 31
synced: false
category: Lists
description: 'A heading and the three newest stories as cards.'
keywords:
  - news
  - stories
  - blog
  - posts
---

::: box {"id":"ln","props":{"tag":"section"},"class":"mx-auto max-w-wide px-gutter pt-section"}
:::: box {"id":"ln-head","class":"mb-8 flex flex-wrap items-end justify-between gap-4"}
::::: heading {"id":"ln-title","props":{"text":"News","level":"2"},"class":"text-3xl"}
:::::

::::: button {"id":"ln-all","props":{"label":"All news","url":"entry:01m7npd9ykcsvmvzmcvcrg02jm","variant":"link","icon":"arrow-right","icon_position":"end"}}
:::::
::::

:::: repeat {"id":"ln-list","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"tag":"ul"},"class":"grid grid-cols-3 gap-columns max-lg:grid-cols-2 max-md:grid-cols-1"}
::::: box {"id":"ln-item","props":{"tag":"li"}}
:::::: component {"id":"ln-card","props":{"ref":"news-card"},"bind":{"values.title":"item.title","values.image":"item.cover","values.link":"item.url","values.date":"item.date|date:j F Y","values.topic":"item.topic.title"}}
::::::
:::::
::::
:::
