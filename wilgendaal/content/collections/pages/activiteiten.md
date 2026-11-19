---
id: 01m9a0xh0gaky5dqb810wedase
title: Activiteiten
status: published
position: 4
summary: 'Markten, wandelingen, sport, cultuur en de gemeenteraad in Wilgendaal. Veel activiteiten zijn gratis.'
template: sectie
keywords: 'agenda, uit, evenementen, activiteiten, kalender'
---

::: box {"id":"ev","class":"wrap pb-section"}
:::: heading {"id":"ev-h","props":{"level":"2","text":"Wat komt eraan"},"class":"sr-only"}
::::

:::: list-filter {"id":"ev-filter","class":"flex flex-col gap-10"}
::::: filter-choice {"id":"ev-cats","props":{"facet":"item.category","label":"Toon","all_label":"Alles","look":"chips"}}
:::::

::::: repeat {"id":"ev-list","props":{"source":"entries","collection":"events","sort":"when.start","limit":100,"tag":"ul","where":[{"field":"when.start","op":">","value":"{site.today}"}],"empty":"Er staan nu geen activiteiten gepland.","filter_by":"item.category"},"class":"grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3"}
:::::: box {"id":"ev-item"}
::::::: component {"id":"ev-card","props":{"ref":"event-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.image":"item.cover","values.when":"{item.when.start|date:l j F}, {item.when.start|date:G.i} uur","values.venue":"item.venue"}}
:::::::
::::::
:::::

::::: filter-empty {"id":"ev-empty"}
:::::: paragraph {"id":"ev-none","props":{"tag":"p","text":"Er staat nu niets van deze soort gepland."}}
::::::
:::::
::::
:::
