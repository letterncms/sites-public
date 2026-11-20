---
id: 01m7r6gs1qcb0rzjpycbge625w
title: Levensmomenten
status: published
position: 3
summary: 'Er verandert iets in je leven. Hier vind je per moment wat je bij de stad regelt, in de juiste volgorde.'
template: sectie
keywords: 'levensgebeurtenis, verhuizen, geboorte, baby, trouwen, samenwonen, bouwen, verbouwen, zaak starten, overlijden, sterfgeval'
---

::: box {"id":"lms","class":"wrap pb-section"}
:::: heading {"id":"lms-h","props":{"level":"2","text":"Alle levensmomenten"},"class":"sr-only"}
::::

:::: repeat {"id":"lms-list","props":{"source":"entries","collection":"moments","sort":"position","limit":24,"tag":"ul"},"class":"grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"}
::::: box {"id":"lms-item","props":{"tag":"li"}}
:::::: component {"id":"lms-card","props":{"ref":"moment-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.image":"item.photo"}}
::::::
:::::
::::
:::
