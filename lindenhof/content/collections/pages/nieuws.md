---
id: 01m7p3g28ph31zyqzvh74hae5p
title: Nieuws
status: published
published_at: '2026-11-18T02:14:19+01:00'
position: 9
summary: 'Nieuws uit het ziekenhuis: nieuwe zorg, onderzoek en de mensen erachter.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"nw","class":"mx-auto max-w-content px-gutter pt-blocks"}
:::: list-filter {"id":"nw-filter","props":{"status":":count van :total berichten"}}
::::: filter-choice {"id":"nw-topic","props":{"look":"chips","facet":"topic","label":"Thema","all_label":"Al het nieuws"},"class":"mb-10"}
:::::

::::: repeat {"id":"nw-list","props":{"tag":"ul","sort":"-published_at","limit":60,"source":"entries","filter_by":"item.topic","collection":"news"},"class":"grid grid-cols-3 gap-x-columns gap-y-14 max-lg:grid-cols-2 max-md:grid-cols-1"}
:::::: box {"id":"nw-item","class":"h-full"}
::::::: component {"id":"nw-card","props":{"ref":"news-card"},"bind":{"values.date":"item.date|date:j F Y","values.link":"item.url","values.image":"item.cover","values.title":"item.title","values.topic":"item.topic.title"}}
:::::::
::::::
:::::
::::
:::
