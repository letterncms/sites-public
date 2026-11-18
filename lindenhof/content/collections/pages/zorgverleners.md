---
id: 01m7p2kg02mca2s304fb0a4xn9
title: 'Zoek een zorgverlener'
status: published
published_at: '2026-11-18T01:58:43+01:00'
position: 2
summary: 'Artsen, vroedvrouwen, verpleegkundigen en therapeuten. Zoek op naam, dienst, expertise of taal.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"zv","class":"mx-auto max-w-content px-gutter pt-blocks"}
:::: list-filter {"id":"zv-filter","props":{"status":":count van :total zorgverleners"}}
::::: box {"id":"zv-bar","class":"mb-10 flex flex-col gap-6 border-y border-border py-8"}
:::::: filter-search {"id":"zv-search","props":{"label":"Zoek op naam, dienst of taal","placeholder":"Bijvoorbeeld: Mehta, kinderarts, Frans"},"class":"w-full max-w-xl [&_.cms-input]:h-13 [&_.cms-input]:text-lg"}
::::::

:::::: filter-choice {"id":"zv-discipline","props":{"look":"chips","facet":"discipline","label":"Beroep","all_label":"Iedereen"}}
::::::
:::::

::::: repeat {"id":"zv-list","props":{"tag":"ul","sort":"family_name","limit":300,"source":"entries","filter_by":"item.discipline","search_in":"item.title, item.role, item.languages, item.expertise, item.specialties","collection":"doctors"},"class":"grid grid-cols-4 gap-x-columns gap-y-12 max-lg:grid-cols-3 max-md:grid-cols-2"}
:::::: box {"id":"zv-item","class":"h-full"}
::::::: component {"id":"zv-card","props":{"ref":"doctor-card"},"bind":{"values.link":"item.url","values.name":"{item.honorific} {item.title}","values.role":"item.role","values.photo":"item.photo","values.new_patients":"item.new_patients"}}
:::::::
::::::
:::::

::::: filter-empty {"id":"zv-empty"}
:::::: box {"id":"zv-empty-in","class":"flex flex-col items-center gap-3 rounded-lg border border-dashed border-border px-6 py-16 text-center"}
::::::: icon {"id":"zv-empty-i","props":{"icon":"magnifying-glass"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-muted"}
:::::::

::::::: paragraph {"id":"zv-empty-t","props":{"tag":"p","text":"Niemand gevonden. Probeer een deel van een naam, of een dienst."},"class":"text-lg text-muted max-w-[30em]"}
:::::::
::::::
:::::
::::
:::
