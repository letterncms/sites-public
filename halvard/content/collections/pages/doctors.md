---
id: 01m7nnfjnxtyfj10psmzqt69my
title: 'Find a doctor'
status: published
published_at: '2026-11-17T21:09:23+00:00'
position: 2
summary: 'Search our doctors, midwives and therapists by name, specialty or the language they speak.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"dl","class":"mx-auto max-w-wide px-gutter pt-blocks"}
:::: list-filter {"id":"dl-filter","props":{"status":":count of :total people"}}
::::: box {"id":"dl-bar","class":"mb-10 flex flex-col gap-5 rounded-lg bg-surface p-6 max-md:p-4"}
:::::: filter-search {"id":"dl-search","props":{"label":"Search by name, role or language","placeholder":"For example: Mehta, midwife, French"},"class":"w-full max-w-md [&_.cms-input]:h-12 [&_.cms-input]:rounded-full [&_.cms-input]:px-5"}
::::::

:::::: filter-choice {"id":"dl-specialties","props":{"look":"chips","facet":"specialties","label":"Specialty","all_label":"All"}}
::::::
:::::

::::: repeat {"id":"dl-list","props":{"tag":"ul","sort":"family_name","limit":200,"source":"entries","filter_by":"item.specialties","search_in":"item.title, item.role, item.languages, item.expertise, item.specialties","collection":"doctors"},"class":"grid grid-cols-4 gap-x-columns gap-y-12 max-lg:grid-cols-3 max-md:grid-cols-2"}
:::::: box {"id":"dl-item","props":{"tag":"li"}}
::::::: component {"id":"dl-card","props":{"ref":"doctor-card"},"bind":{"values.link":"item.url","values.name":"{item.honorific} {item.title}","values.role":"item.role","values.photo":"item.photo","values.new_patients":"item.new_patients"}}
:::::::
::::::
:::::

::::: filter-empty {"id":"dl-empty"}
:::::: box {"id":"dl-empty-in","class":"flex flex-col items-center gap-3 rounded-lg border border-dashed border-border px-6 py-16 text-center"}
::::::: icon {"id":"dl-empty-i","props":{"icon":"magnifying-glass"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-muted"}
:::::::

::::::: paragraph {"id":"dl-empty-t","props":{"tag":"p","text":"No one matches your search. Try part of a name, or a specialty."},"class":"text-lg text-muted"}
:::::::
::::::
:::::
::::
:::
