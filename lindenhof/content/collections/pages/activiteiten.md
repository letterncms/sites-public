---
id: 01m7p3g28ph31zyqzvh74hae5q
title: Activiteiten
status: published
published_at: '2026-11-18T02:14:19+01:00'
position: 10
summary: 'Infosessies voor aanstaande ouders, voor patiënten en hun naasten, rondleidingen en symposia voor zorgprofessionals.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"ac","class":"mx-auto max-w-content px-gutter pt-blocks"}
:::: list-filter {"id":"ac-filter","props":{"status":":count van :total activiteiten"}}
::::: filter-choice {"id":"ac-aud","props":{"look":"chips","facet":"audience","label":"Voor wie","all_label":"Alle activiteiten"},"class":"mb-10"}
:::::

::::: repeat {"id":"ac-list","props":{"tag":"ul","sort":"starts","empty":"Er staan nu geen activiteiten gepland. Kijk binnenkort nog eens.","limit":60,"where":[{"op":">","field":"starts","value":"{site.today}"}],"source":"entries","filter_by":"item.audience","collection":"events"},"class":"grid grid-cols-2 gap-4 max-md:grid-cols-1"}
:::::: box {"id":"ac-item","class":"h-full"}
::::::: component {"id":"ac-card","props":{"ref":"event-card"},"bind":{"values.day":"item.starts|date:j","values.link":"item.url","values.when":"{item.starts|date:l j F}, {item.starts|date:G.i} uur","values.month":"item.starts|date:M","values.title":"item.title","values.venue":"item.venue","values.audience":"item.audience"}}
:::::::
::::::
:::::

::::: filter-empty {"id":"ac-empty"}
:::::: box {"id":"ac-empty-in","class":"flex flex-col items-center gap-3 rounded-lg border border-dashed border-border px-6 py-16 text-center"}
::::::: icon {"id":"ac-empty-i","props":{"icon":"magnifying-glass"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-muted"}
:::::::

::::::: paragraph {"id":"ac-empty-t","props":{"tag":"p","text":"Voor deze groep staat nu niets gepland."},"class":"text-lg text-muted max-w-[30em]"}
:::::::
::::::
:::::
::::
:::
