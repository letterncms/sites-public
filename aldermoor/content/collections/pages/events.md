---
id: 01m9a0cf216jbg57hh7dx1zaew
title: Events
status: published
position: 4
summary: 'Markets, walks, sport, culture and council meetings in Aldermoor. Most events are free.'
template: landing
---

::: box {"id":"ev","class":"wrap pb-section"}
:::: list-filter {"id":"ev-filter","class":"flex max-w-3xl flex-col gap-8"}
::::: filter-choice {"id":"ev-cats","props":{"facet":"item.category","label":"Show","all_label":"Everything","look":"chips"}}
:::::

::::: repeat {"id":"ev-all","props":{"source":"entries","collection":"events","sort":"when","limit":100,"tag":"ul","empty":"No events planned at the moment.","filter_by":"item.category"},"class":"flex flex-col gap-6"}
:::::: box {"id":"ev-all-item","props":{"tag":"li"},"class":"border-b border-border pb-6"}
::::::: component {"id":"ev-all-card","props":{"ref":"event-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.day":"item.when.start|date:j","values.month":"item.when.start|date:M","values.when":"{item.when.start|date:l j F Y}, {item.when.start|date:H:i} to {item.when.end|date:H:i}","values.venue":"item.venue"}}
:::::::
::::::
:::::

::::: filter-empty {"id":"ev-empty"}
:::::: paragraph {"id":"ev-none","props":{"tag":"p","text":"Nothing of this kind is planned at the moment."}}
::::::
:::::
::::
:::
