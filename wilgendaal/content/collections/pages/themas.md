---
id: 01m9a0sjeezvs7d3d96033710t
title: Thema’s
status: published
position: 2
summary: 'Alles wat je bij de stad regelt, per thema en van A tot Z.'
template: sectie
keywords: 'producten, diensten, aanvragen, a-z, alfabetisch'
---

::: box {"id":"tm","class":"wrap pb-16"}
:::: repeat {"id":"tm-list","props":{"source":"entries","collection":"topics","sort":"position","limit":50,"tag":"ul"},"class":"grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3"}
::::: box {"id":"tm-item","props":{"tag":"li"},"class":"grid"}
:::::: component {"id":"tm-card","props":{"ref":"icon-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.icon":"item.icon","values.summary":"item.summary"}}
::::::
:::::
::::
:::

::: box {"id":"az","props":{"tag":"section"},"attrs":{"aria-labelledby":"#az-h"},"class":"bg-surface"}
:::: box {"id":"az-inner","class":"wrap py-section"}
::::: heading {"id":"az-h","props":{"level":"2","text":"Alles van A tot Z"}}
:::::

::::: list-filter {"id":"az-filter","class":"mt-8 flex flex-col gap-8"}
:::::: filter-search {"id":"az-search","props":{"label":"Zoek wat je wil regelen","show_label":true,"placeholder":""},"class":"max-w-xl"}
::::::

:::::: filter-choice {"id":"az-topics","props":{"facet":"item.topic","label":"Thema","all_label":"Alle thema’s","look":"chips"}}
::::::

:::::: repeat {"id":"az-list","props":{"source":"entries","collection":"products","sort":"title","limit":200,"tag":"div","filter_by":"item.topic","search_in":"item.title, item.summary, item.keywords","group_by":"item.title|initial"},"class":"flex flex-col"}
::::::: box {"id":"az-letter","props":{"tag":"section"},"class":"grid gap-3 border-t border-border py-8 md:grid-cols-[4.5rem_1fr] md:gap-8"}
:::::::: heading {"id":"az-letter-h","props":{"level":"3"},"bind":{"text":"item.label"},"class":"text-2xl leading-none text-primary"}
::::::::

:::::::: repeat {"id":"az-items","props":{"source":"list","tag":"ul","path":"item.items"},"class":"grid gap-x-12 gap-y-3 md:grid-cols-2 lg:grid-cols-3"}
::::::::: box {"id":"az-item","class":"flex flex-col gap-1"}
:::::::::: link {"id":"az-link","bind":{"label":"item.title","url":"item.url"},"class":"w-fit font-semibold text-foreground no-underline hover:text-primary hover:underline"}
::::::::::
:::::::::
::::::::
:::::::
::::::

:::::: filter-empty {"id":"az-empty"}
::::::: paragraph {"id":"az-none","props":{"tag":"p","text":"Niets gevonden. Probeer een ander woord, of kies een thema."}}
:::::::
::::::
:::::
::::
:::
