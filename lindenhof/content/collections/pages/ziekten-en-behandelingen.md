---
id: 01m7p3g28ph31zyqzvh74hae5g
title: 'Ziekten, onderzoeken en behandelingen'
status: published
published_at: '2026-11-18T02:14:19+01:00'
position: 3
summary: 'Uitleg in gewone woorden, en welke dienst je erbij helpt. Deze informatie vervangt geen gesprek met je arts.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"zb","class":"mx-auto max-w-content px-gutter pt-blocks"}
:::: list-filter {"id":"zb-filter","props":{"status":":count van :total onderwerpen"}}
::::: box {"id":"zb-bar","class":"mb-10 flex flex-col gap-6 border-y border-border py-8"}
:::::: filter-search {"id":"zb-search","props":{"label":"Zoek een ziekte, onderzoek of behandeling","placeholder":"Bijvoorbeeld: beroerte, MRI, migraine"},"class":"w-full max-w-xl [&_.cms-input]:h-13 [&_.cms-input]:text-lg"}
::::::

:::::: filter-choice {"id":"zb-kind","props":{"look":"chips","facet":"kind","label":"Soort","all_label":"Alles"}}
::::::
:::::

::::: box {"id":"zb-letters","props":{"tag":"nav"},"attrs":{"aria-label":"Spring naar een letter"},"class":"mb-8"}
:::::: repeat {"id":"zb-letters-list","props":{"tag":"ul","sort":"title","limit":300,"source":"entries","group_by":"item.title|initial","collection":"conditions"},"class":"flex flex-wrap gap-1.5"}
::::::: box {"id":"zb-letter","props":{"tag":"li"}}
:::::::: link {"id":"zb-letter-a","bind":{"url":"#letter-{item.label|lower}","label":"item.label"},"class":"flex size-11 items-center justify-center rounded-full border border-border bg-raised font-semibold text-foreground no-underline hover:border-primary hover:bg-primary hover:text-primary-foreground"}
::::::::
:::::::
::::::
:::::

::::: repeat {"id":"zb-list","props":{"tag":"div","sort":"title","limit":300,"source":"entries","group_by":"item.title|initial","filter_by":"item.kind","search_in":"item.title, item.summary, item.also_known_as, item.keywords, item.specialties","collection":"conditions"},"class":"flex flex-col"}
:::::: heading {"id":"zb-letter-title","props":{"level":"2"},"bind":{"text":"item.label","anchor":"letter-{item.label|lower}"},"class":"col-span-full mt-12 flex items-center gap-4 text-3xl first:mt-0 after:h-px after:flex-1 after:bg-border"}
::::::

:::::: repeat {"id":"zb-items","props":{"tag":"ul","path":"item.items","source":"list"},"class":"grid grid-cols-2 gap-x-columns max-md:grid-cols-1"}
::::::: box {"id":"zb-item","class":"group relative flex h-full items-start gap-4 border-b border-border py-5"}
:::::::: box {"id":"zb-t","class":"flex flex-col gap-1.5"}
::::::::: box {"id":"zb-th","class":"flex flex-wrap items-center gap-x-3 gap-y-1"}
:::::::::: link {"id":"zb-a","bind":{"url":"item.url"},"class":"text-lg font-bold text-foreground no-underline after:absolute after:inset-0 group-hover:text-primary group-hover:underline"}
::::::::::: paragraph {"id":"zb-title","props":{"tag":"span"},"bind":{"text":"item.title"}}
:::::::::::
::::::::::

:::::::::: paragraph {"id":"bbdrldu4omr","props":{"tag":"span"},"bind":{"text":"item.kind"},"class":"badge"}
::::::::::
:::::::::

::::::::: paragraph {"id":"zb-aka","props":{"tag":"p"},"bind":{"text":"Ook: {item.also_known_as}","visible":"item.also_known_as"},"class":"meta"}
:::::::::

::::::::: paragraph {"id":"zb-sum","props":{"tag":"p"},"bind":{"text":"item.summary"},"class":"text-[0.9375rem] leading-snug text-muted line-clamp-2"}
:::::::::
::::::::

:::::::: icon {"id":"zb-r","props":{"icon":"arrow-right"},"attrs":{"aria-hidden":"true"},"class":"ml-auto mt-1 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"}
::::::::
:::::::
::::::
:::::

::::: filter-empty {"id":"zb-empty"}
:::::: box {"id":"zb-empty-in","class":"flex flex-col items-center gap-3 rounded-lg border border-dashed border-border px-6 py-16 text-center"}
::::::: icon {"id":"zb-empty-i","props":{"icon":"magnifying-glass"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-muted"}
:::::::

::::::: paragraph {"id":"zb-empty-t","props":{"tag":"p","text":"Niets gevonden. Probeer een ander woord, of vraag het aan je arts."},"class":"text-lg text-muted max-w-[30em]"}
:::::::
::::::
:::::
::::
:::
