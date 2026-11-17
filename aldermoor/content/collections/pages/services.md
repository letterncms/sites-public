---
id: 01m9a0cn5f6757s5a4eskscqz5
title: Services
status: published
position: 2
summary: 'Everything you can apply for, book, pay or report, by topic and from A to Z.'
template: landing
---

::: box {"id":"svc-topics","props":{"tag":"section"},"attrs":{"aria-labelledby":"#sv-topics-h"},"class":"wrap pb-section"}
:::: heading {"id":"sv-topics-h","props":{"level":"2","text":"Browse by topic"},"class":"text-2xl"}
::::

:::: box {"id":"svc-topics-body","class":"mt-6"}
::::: repeat {"id":"svc-topics","props":{"source":"entries","collection":"topics","sort":"position","limit":50,"tag":"ul"},"class":"grid gap-4 sm:grid-cols-2 lg:grid-cols-3"}
:::::: box {"id":"svc-topics-item","props":{"tag":"li"},"class":"grid"}
::::::: box {"id":"svc-topics-card","bind":{"link":"item.url"},"class":"card group flex-row items-start gap-4 max-sm:items-center max-sm:p-4"}
:::::::: icon {"id":"svc-topics-icon","bind":{"icon":"item.icon"},"class":"size-12 shrink-0 rounded-lg bg-primary-soft p-2.5 text-primary-strong"}
::::::::

:::::::: box {"id":"svc-topics-text","class":"flex flex-col gap-1.5"}
::::::::: heading {"id":"svc-topics-title","props":{"level":"3"},"bind":{"text":"item.title"},"class":"text-xl text-primary group-hover:underline"}
:::::::::

::::::::: paragraph {"id":"svc-topics-summary","props":{"tag":"p"},"bind":{"text":"item.summary"},"class":"text-base text-muted max-sm:hidden"}
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"svc-az","props":{"tag":"section"},"attrs":{"aria-labelledby":"#svc-az-h"},"class":"border-t border-border bg-surface"}
:::: box {"id":"svc-az-inner","class":"wrap py-section"}
::::: heading {"id":"svc-az-h","props":{"level":"2","text":"All services A to Z"},"class":"text-2xl"}
:::::

::::: list-filter {"id":"svc-az-filter","class":"mt-6 flex flex-col gap-6"}
:::::: filter-search {"id":"svc-az-search","props":{"label":"Search services","show_label":true,"placeholder":""},"class":"max-w-xl"}
::::::

:::::: filter-choice {"id":"svc-az-topics","props":{"facet":"item.topic","label":"Topic","all_label":"All topics","look":"chips"}}
::::::

:::::: repeat {"id":"svc-az-list","props":{"source":"entries","collection":"services","sort":"title","limit":200,"tag":"ul","filter_by":"item.topic","search_in":"item.title, item.summary, item.keywords"},"class":"grid border-t border-border md:grid-cols-2 md:gap-x-12"}
::::::: box {"id":"svc-az-item","props":{"tag":"li"},"class":"flex flex-col gap-1 border-b border-border py-4"}
:::::::: link {"id":"svc-az-link","bind":{"label":"item.title","url":"item.url"},"class":"text-link text-lg font-bold"}
::::::::

:::::::: paragraph {"id":"svc-az-summary","props":{"tag":"p"},"bind":{"text":"item.summary"},"class":"text-base text-muted"}
::::::::
:::::::
::::::

:::::: filter-empty {"id":"svc-az-empty"}
::::::: paragraph {"id":"svc-az-none","props":{"tag":"p","text":"No services match. Try another word, or browse by topic."}}
:::::::
::::::
:::::
::::
:::
