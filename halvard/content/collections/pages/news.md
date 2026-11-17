---
id: 01m7nkejakn16aqnk5d5ryx9kf
title: News
status: published
published_at: '2026-11-17T20:33:52+00:00'
position: 6
summary: 'Stories from the hospital: research, new services and the people behind them.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"nl","class":"mx-auto max-w-wide px-gutter pt-blocks"}
:::: list-filter {"id":"nl-filter","props":{"status":":count of :total stories"}}
::::: filter-choice {"id":"nl-topic","props":{"look":"chips","facet":"topic","label":"Topic","all_label":"All news"},"class":"mb-10"}
:::::

::::: repeat {"id":"nl-list","props":{"tag":"ul","sort":"-published_at","limit":60,"source":"entries","filter_by":"item.topic","collection":"news"},"class":"grid grid-cols-3 gap-x-columns gap-y-14 max-lg:grid-cols-2 max-md:grid-cols-1"}
:::::: box {"id":"nl-item","props":{"tag":"li"}}
::::::: component {"id":"nl-card","props":{"ref":"news-card"},"bind":{"values.date":"item.date|date:j F Y","values.link":"item.url","values.image":"item.cover","values.title":"item.title","values.topic":"item.topic.title"}}
:::::::
::::::
:::::
::::
:::
