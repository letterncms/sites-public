---
id: 01m9a0sjeezvs7d3d96033710t
title: Thema’s
status: published
position: 2
summary: 'Alle producten en diensten van de stad, per thema en van A tot Z.'
template: sectie
keywords: 'producten, diensten, aanvragen, a-z, alfabetisch'
---

::: box {"id":"tm","class":"wrap pb-16"}
:::: repeat {"id":"tm-list","props":{"source":"entries","collection":"topics","sort":"position","limit":50,"tag":"ul"},"class":"grid gap-4 sm:grid-cols-2 lg:grid-cols-3"}
::::: box {"id":"tm-item","props":{"tag":"li"},"class":"grid"}
:::::: box {"id":"tm-card","bind":{"link":"item.url"},"class":"card group flex-row items-start gap-5"}
::::::: icon {"id":"tm-icon","bind":{"icon":"item.icon"},"class":"icon-chip"}
:::::::

::::::: box {"id":"tm-text","class":"flex flex-col gap-1.5"}
:::::::: heading {"id":"tm-title","props":{"level":"2"},"bind":{"text":"item.title"},"class":"text-xl group-hover:text-primary"}
::::::::

:::::::: paragraph {"id":"tm-summary","props":{"tag":"p"},"bind":{"text":"item.summary"},"class":"text-base text-muted max-sm:hidden"}
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"az","props":{"tag":"section"},"attrs":{"aria-labelledby":"#az-h"},"class":"bg-surface"}
:::: box {"id":"az-inner","class":"wrap py-section"}
::::: heading {"id":"az-h","props":{"level":"2","text":"Alle producten van A tot Z"},"class":"text-3xl"}
:::::

::::: list-filter {"id":"az-filter","class":"mt-8 flex flex-col gap-8"}
:::::: filter-search {"id":"az-search","props":{"label":"Zoek een product","show_label":true,"placeholder":""},"class":"max-w-xl"}
::::::

:::::: filter-choice {"id":"az-topics","props":{"facet":"item.topic","label":"Thema","all_label":"Alle thema’s","look":"chips"}}
::::::

:::::: repeat {"id":"az-list","props":{"source":"entries","collection":"products","sort":"title","limit":200,"tag":"div","filter_by":"item.topic","search_in":"item.title, item.summary, item.keywords","group_by":"item.title|initial"},"class":"flex flex-col gap-10"}
::::::: box {"id":"az-letter","props":{"tag":"section"},"class":"grid gap-2 md:grid-cols-[4.5rem_1fr] md:gap-8"}
:::::::: heading {"id":"az-letter-h","props":{"level":"3"},"bind":{"text":"item.label"},"class":"text-4xl text-primary md:pt-2"}
::::::::

:::::::: repeat {"id":"az-items","props":{"source":"list","tag":"ul","path":"item.items"},"class":"grid border-t border-border md:grid-cols-2 md:gap-x-12"}
::::::::: box {"id":"az-item","class":"flex flex-col gap-1 border-b border-border py-4"}
:::::::::: link {"id":"az-link","bind":{"label":"item.title","url":"item.url"},"class":"text-link text-lg font-semibold"}
::::::::::

:::::::::: paragraph {"id":"az-summary","props":{"tag":"p"},"bind":{"text":"item.summary"},"class":"text-base text-muted"}
::::::::::
:::::::::
::::::::
:::::::
::::::

:::::: filter-empty {"id":"az-empty"}
::::::: paragraph {"id":"az-none","props":{"tag":"p","text":"Geen producten gevonden. Probeer een ander woord, of kies een thema."}}
:::::::
::::::
:::::
::::
:::
