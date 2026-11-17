---
id: 01m7npd9ykcsvmvzmcvcrg02jh
title: 'Conditions and treatments'
status: published
published_at: '2026-11-17T21:25:37+00:00'
position: 3
summary: 'Conditions, treatments and tests explained in plain words, with who treats them here.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"cl","class":"mx-auto max-w-wide px-gutter pt-blocks"}
:::: box {"id":"cl-letters","props":{"tag":"nav"},"attrs":{"aria-label":"Jump to a letter"},"class":"mb-6"}
::::: repeat {"id":"cl-letters-list","props":{"tag":"ul","sort":"title","limit":200,"source":"entries","group_by":"item.title|initial","collection":"conditions"},"class":"flex flex-wrap gap-2"}
:::::: box {"id":"cl-letter","props":{"tag":"li"}}
::::::: link {"id":"cl-letter-a","bind":{"url":"#letter-{item.label|lower}","label":"item.label"},"class":"flex size-11 items-center justify-center rounded-full bg-surface font-semibold text-foreground no-underline hover:bg-primary hover:text-primary-foreground"}
:::::::
::::::
:::::
::::

:::: list-filter {"id":"cl-filter","props":{"status":":count of :total topics"}}
::::: box {"id":"cl-bar","class":"mb-10 flex flex-col gap-5 rounded-lg bg-surface p-6 max-md:p-4"}
:::::: filter-search {"id":"cl-search","props":{"label":"Search conditions, treatments and tests","placeholder":"For example: stroke, MRI, asthma"},"class":"w-full max-w-md [&_.cms-input]:h-12 [&_.cms-input]:rounded-full [&_.cms-input]:px-5"}
::::::

:::::: filter-choice {"id":"cl-kind","props":{"look":"chips","facet":"kind","label":"Show","all_label":"All"}}
::::::
:::::

::::: repeat {"id":"cl-list","props":{"tag":"div","sort":"title","limit":200,"source":"entries","group_by":"item.title|initial","filter_by":"item.kind","search_in":"item.title, item.summary, item.also_known_as, item.specialties, item.kind","collection":"conditions"},"class":"flex flex-col"}
:::::: heading {"id":"cl-letter-title","props":{"level":"2"},"bind":{"text":"item.label","anchor":"letter-{item.label|lower}"},"class":"mt-10 border-b-2 border-foreground pb-2 text-3xl first:mt-0"}
::::::

:::::: repeat {"id":"cl-letter-items","props":{"tag":"ul","path":"item.items","source":"list"},"class":"grid grid-cols-2 gap-x-columns max-md:grid-cols-1"}
::::::: box {"id":"cl-item","props":{"tag":"li"}}
:::::::: link {"id":"cl-a","bind":{"url":"item.url"},"class":"group flex h-full items-center gap-4 border-b border-border py-5 no-underline"}
::::::::: box {"id":"cl-text","class":"flex flex-col gap-1"}
:::::::::: paragraph {"id":"cl-title","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"text-lg font-semibold text-foreground group-hover:text-primary"}
::::::::::

:::::::::: paragraph {"id":"cl-summary","props":{"tag":"span"},"bind":{"text":"item.summary"},"class":"text-[0.9375rem] leading-snug text-muted"}
::::::::::
:::::::::

::::::::: icon {"id":"cl-arrow","props":{"icon":"arrow-right"},"attrs":{"aria-hidden":"true"},"class":"ml-auto size-5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5"}
:::::::::
::::::::
:::::::
::::::
:::::

::::: filter-empty {"id":"cl-empty"}
:::::: box {"id":"cl-empty-in","class":"flex flex-col items-center gap-3 rounded-lg border border-dashed border-border px-6 py-16 text-center"}
::::::: icon {"id":"cl-empty-i","props":{"icon":"magnifying-glass"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-muted"}
:::::::

::::::: paragraph {"id":"cl-empty-t","props":{"tag":"p","text":"Nothing matches your search. Try another word, or ask your doctor."},"class":"text-lg text-muted"}
:::::::
::::::
:::::
::::
:::
