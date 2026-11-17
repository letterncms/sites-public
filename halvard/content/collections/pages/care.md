---
id: 01m7npd9ykcsvmvzmcvcrg02jf
title: 'Care and specialties'
status: published
published_at: '2026-11-17T21:25:37+00:00'
position: 1
summary: 'Find the department or clinic for you, by area of care or by name.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"cs","class":"mx-auto max-w-wide px-gutter pt-blocks"}
:::: list-filter {"id":"cs-filter","props":{"status":":count of :total specialties"}}
::::: box {"id":"cs-bar","class":"mb-10 flex flex-col gap-5 rounded-lg bg-surface p-6 max-md:p-4"}
:::::: filter-search {"id":"cs-search","props":{"label":"Search specialties","placeholder":"For example: heart, pregnancy, knee"},"class":"w-full max-w-md [&_.cms-input]:h-12 [&_.cms-input]:rounded-full [&_.cms-input]:px-5"}
::::::

:::::: filter-choice {"id":"cs-area","props":{"look":"chips","facet":"area","label":"Area of care","all_label":"All"}}
::::::
:::::

::::: repeat {"id":"cs-list","props":{"tag":"ul","sort":"title","limit":100,"source":"entries","filter_by":"item.area","search_in":"item.title, item.summary, item.area","collection":"specialties"},"class":"grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1"}
:::::: box {"id":"cs-item","props":{"tag":"li"}}
::::::: component {"id":"cs-card","props":{"ref":"specialty-card"},"bind":{"values.icon":"item.icon","values.link":"item.url","values.title":"item.title","values.colour":"item.area.colour","values.summary":"item.summary"}}
:::::::
::::::
:::::

::::: filter-empty {"id":"cs-empty"}
:::::: box {"id":"cs-empty-in","class":"flex flex-col items-center gap-3 rounded-lg border border-dashed border-border px-6 py-16 text-center"}
::::::: icon {"id":"cs-empty-i","props":{"icon":"magnifying-glass"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-muted"}
:::::::

::::::: paragraph {"id":"cs-empty-t","props":{"tag":"p","text":"No specialty matches your search. Try another word, or call our appointments line."},"class":"text-lg text-muted"}
:::::::
::::::
:::::
::::
:::

::: box {"id":"cs-help","props":{"tag":"section"},"attrs":{"aria-labelledby":"#cs-help-title"},"class":"mx-auto max-w-wide px-gutter pt-section"}
:::: box {"id":"cs-help-in","class":"scheme-mint flex flex-wrap items-center justify-between gap-8 rounded-xl p-[clamp(1.75rem,4vw,3.5rem)]"}
::::: box {"id":"cs-help-text","class":"flex flex-col gap-3"}
:::::: heading {"id":"cs-help-title","props":{"text":"Not sure where to go?","level":"2"},"class":"text-3xl"}
::::::

:::::: paragraph {"id":"cs-help-p","props":{"tag":"p","text":"Your GP can tell you which specialist to see. You can also call our appointments line: we are happy to help you find your way."},"class":"text-lg text-muted max-w-[36em]"}
::::::
:::::

::::: buttons {"id":"cs-help-buttons"}
:::::: button {"id":"cs-help-book","props":{"url":"entry:01m7npd9ykcsvmvzmcvcrg02jx","size":"lg","label":"Make an appointment","variant":"primary"}}
::::::

:::::: button {"id":"cs-help-call","props":{"icon":"phone","size":"lg","variant":"secondary"},"bind":{"url":"tel:{globals.hospital.appointments_phone}","label":"Call {globals.hospital.appointments_phone}"}}
::::::
:::::
::::
:::
