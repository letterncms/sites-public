---
id: 01m9a0phn751btx8fdvqe8qswj
title: Nieuws
status: published
position: 3
summary: 'Nieuws, persberichten en werken in Wilgendaal.'
template: sectie
keywords: 'nieuws, persbericht, werken, wegenwerken, hinder'
---

::: box {"id":"nw","class":"wrap pb-section"}
:::: heading {"id":"nw-h","props":{"level":"2","text":"Nieuwsberichten"},"class":"sr-only"}
::::

:::: list-filter {"id":"nw-filter","class":"flex flex-col gap-10"}
::::: filter-choice {"id":"nw-kinds","props":{"facet":"item.kind","label":"Toon","all_label":"Alles","look":"chips"}}
:::::

::::: repeat {"id":"nw-list","props":{"source":"entries","collection":"news","sort":"-published_at","limit":60,"tag":"ul","filter_by":"item.kind"},"class":"grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3"}
:::::: box {"id":"nw-list-item"}
::::::: component {"id":"nw-card","props":{"ref":"news-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.image":"item.cover","values.kind":"item.kind","values.date":"item.date|date:j F Y"}}
:::::::
::::::
:::::

::::: filter-empty {"id":"nw-empty"}
:::::: paragraph {"id":"nw-none","props":{"tag":"p","text":"Er is nu geen nieuws van deze soort."}}
::::::
:::::
::::
:::
