---
id: 01m9a01228dvdm27mcxd5593kn
title: Bekendmakingen
status: published
position: 9
summary: 'Besluitenlijsten van de gemeenteraad en het college, reglementen, openbare onderzoeken, verslagen en beleidsplannen.'
template: sectie
keywords: 'bekendmaking, besluitenlijst, reglement, openbaar onderzoek, verslag, notulen, meerjarenplan, decreet lokaal bestuur'
---

::: box {"id":"bk","class":"wrap pb-section"}
:::: heading {"id":"bk-h","props":{"level":"2","text":"Alle bekendmakingen"},"class":"sr-only"}
::::

:::: list-filter {"id":"bk-filter","class":"flex max-w-4xl flex-col gap-8"}
::::: box {"id":"bk-controls","class":"flex flex-col gap-6"}
:::::: filter-search {"id":"bk-search","props":{"label":"Zoek in de bekendmakingen","show_label":true,"placeholder":""},"class":"w-full max-w-md"}
::::::

:::::: filter-choice {"id":"bk-kinds","props":{"facet":"item.kind","label":"Soort","all_label":"Alles","look":"chips"}}
::::::
:::::

::::: repeat {"id":"bk-list","props":{"source":"entries","collection":"notices","sort":"-published_at","limit":200,"tag":"ul","filter_by":"item.kind","search_in":"item.title, item.summary"},"class":"flex flex-col border-t border-border"}
:::::: box {"id":"bk-item","class":"border-b border-border"}
::::::: component {"id":"bk-row","props":{"ref":"notice-row"},"bind":{"values.title":"item.title","values.url":"item.url","values.meta":"{item.kind} · {item.date|date:j F Y}"}}
:::::::
::::::
:::::

::::: filter-empty {"id":"bk-empty"}
:::::: paragraph {"id":"bk-none","props":{"tag":"p","text":"Geen bekendmakingen gevonden. Probeer een ander woord."}}
::::::
:::::
::::
:::
