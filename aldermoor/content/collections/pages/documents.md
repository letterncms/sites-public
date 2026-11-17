---
id: 01m9a0kyr37fph4hke9rrx6npq
title: Documents
status: published
position: 11
summary: 'The city’s plans, budgets, reports and policies, and the agendas and minutes of council meetings.'
template: landing
keywords: 'pdf, report, minutes, agenda, budget, policy, publications'
---

::: box {"id":"dc","class":"wrap pb-section"}
:::: heading {"id":"dc-h","props":{"level":"2","text":"All documents"},"class":"sr-only"}
::::

:::: list-filter {"id":"dc-filter","class":"flex max-w-4xl flex-col gap-8"}
::::: box {"id":"dc-controls","class":"flex flex-col gap-6"}
:::::: filter-search {"id":"dc-search","props":{"label":"Search documents","show_label":true,"placeholder":""},"class":"w-full max-w-md"}
::::::

:::::: filter-choice {"id":"dc-kinds","props":{"facet":"item.kind","label":"Kind","all_label":"All documents","look":"chips"}}
::::::
:::::

::::: repeat {"id":"dc-list","props":{"source":"entries","collection":"documents","sort":"-published_at","limit":200,"tag":"ul","filter_by":"item.kind","search_in":"item.title, item.summary"},"class":"flex flex-col border-t border-border"}
:::::: box {"id":"dc-item","class":"border-b border-border"}
::::::: component {"id":"dc-row","props":{"ref":"document-row"},"bind":{"values.title":"item.title","values.url":"item.url","values.meta":"{item.kind} · {item.date|date:j F Y}"}}
:::::::
::::::
:::::

::::: filter-empty {"id":"dc-empty"}
:::::: paragraph {"id":"dc-none","props":{"tag":"p","text":"No documents match. Try another word."}}
::::::
:::::
::::
:::
