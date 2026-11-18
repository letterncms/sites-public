---
id: 01m7p3g24e9v8cd0ywn1f9k53p
title: 'Laatste nieuws'
status: published
published_at: '2026-11-18T02:14:18+01:00'
position: 30
synced: false
category: Secties
description: 'Een titel en de drie nieuwste berichten als kaarten.'
keywords:
  - nieuws
  - berichten
  - blog
---

::: box {"id":"ln","props":{"tag":"section"},"attrs":{"aria-labelledby":"#ln-title"},"class":"mx-auto max-w-content px-gutter pt-section"}
:::: box {"id":"ln-head","class":"mb-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-6"}
::::: box {"id":"ln-intro","class":"flex flex-col gap-4"}
:::::: heading {"id":"ln-title","props":{"text":"Nieuws","level":"2"},"class":"rule"}
::::::
:::::

::::: button {"id":"ln-all","props":{"variant":"secondary","icon":"arrow-right","icon_position":"end","label":"Al het nieuws","url":"entry:01m7p3g28ph31zyqzvh74hae5p"}}
:::::
::::

:::: repeat {"id":"ln-list","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"tag":"ul"},"class":"grid grid-cols-3 gap-columns max-lg:grid-cols-2 max-md:grid-cols-1"}
::::: box {"id":"ln-item","props":{"tag":"li"}}
:::::: component {"id":"ln-card","props":{"ref":"news-card"},"bind":{"values.title":"item.title","values.image":"item.cover","values.link":"item.url","values.date":"item.date|date:j F Y","values.topic":"item.topic.title"}}
::::::
:::::
::::
:::
