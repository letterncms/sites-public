---
id: 01m9a0hg32tb36zrf9zygqfh70
title: News
status: published
position: 3
summary: 'News, press releases and works and closures from the City of Aldermoor.'
template: landing
---

::: box {"id":"nw","class":"wrap pb-section"}
:::: list-filter {"id":"nw-filter","class":"flex flex-col gap-10"}
::::: filter-choice {"id":"nw-kinds","props":{"facet":"item.kind","label":"Show","all_label":"All news","look":"chips"}}
:::::

::::: repeat {"id":"nw-list","props":{"source":"entries","collection":"news","sort":"-published_at","limit":60,"tag":"ul","filter_by":"item.kind"},"class":"grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3"}
:::::: box {"id":"nw-list-item","props":{"tag":"li"}}
::::::: component {"id":"nw-list-card","props":{"ref":"news-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.image":"item.cover","values.kind":"item.kind","values.date":"item.date|date:j F Y"}}
:::::::
::::::
:::::

::::: filter-empty {"id":"nw-empty"}
:::::: paragraph {"id":"nw-none","props":{"tag":"p","text":"No news of this kind at the moment."}}
::::::
:::::
::::
:::
