---
id: 01m7p3g28ph31zyqzvh74hae5e
title: 'Zorgaanbod van A tot Z'
status: published
published_at: '2026-11-18T02:14:19+01:00'
position: 1
summary: 'Alle diensten, centra en raadplegingen van AZ Lindenhof. Zoek op naam of klacht, of kies een zorgdomein.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"za","class":"mx-auto max-w-content px-gutter pt-blocks"}
:::: list-filter {"id":"za-filter","props":{"status":":count van :total diensten"}}
::::: box {"id":"za-bar","class":"mb-10 flex flex-col gap-6 border-y border-border py-8"}
:::::: filter-search {"id":"za-search","props":{"label":"Zoek in het zorgaanbod","placeholder":"Bijvoorbeeld: hart, zwanger, knie, bloedafname"},"class":"w-full max-w-xl [&_.cms-input]:h-13 [&_.cms-input]:text-lg"}
::::::

:::::: filter-choice {"id":"za-kind","props":{"look":"chips","facet":"kind","label":"Soort","all_label":"Alles"}}
::::::

:::::: filter-choice {"id":"za-area","props":{"look":"chips","facet":"area","label":"Zorgdomein","all_label":"Alle domeinen"}}
::::::
:::::

::::: box {"id":"za-letters","props":{"tag":"nav"},"attrs":{"aria-label":"Spring naar een letter"},"class":"mb-8"}
:::::: repeat {"id":"za-letters-list","props":{"tag":"ul","sort":"title","limit":200,"source":"entries","group_by":"item.title|initial","collection":"specialties"},"class":"flex flex-wrap gap-1.5"}
::::::: box {"id":"za-letter","props":{"tag":"li"}}
:::::::: link {"id":"za-letter-a","bind":{"url":"#letter-{item.label|lower}","label":"item.label"},"class":"flex size-11 items-center justify-center rounded-full border border-border bg-raised font-semibold text-foreground no-underline hover:border-primary hover:bg-primary hover:text-primary-foreground"}
::::::::
:::::::
::::::
:::::

::::: repeat {"id":"za-list","props":{"tag":"div","sort":"title","limit":200,"source":"entries","group_by":"item.title|initial","filter_by":"item.kind, item.area","search_in":"item.title, item.summary, item.keywords, item.area","collection":"specialties"},"class":"flex flex-col"}
:::::: heading {"id":"za-letter-title","props":{"level":"2"},"bind":{"text":"item.label","anchor":"letter-{item.label|lower}"},"class":"col-span-full mt-12 flex items-center gap-4 text-3xl first:mt-0 after:h-px after:flex-1 after:bg-border"}
::::::

:::::: repeat {"id":"za-items","props":{"tag":"ul","path":"item.items","source":"list"},"class":"grid grid-cols-2 gap-x-columns max-md:grid-cols-1"}
::::::: box {"id":"za-item","class":"group relative flex h-full items-start gap-4 border-b border-border py-5"}
:::::::: box {"id":"za-ic","props":{"tag":"span"},"class":"icon-tile transition-colors group-hover:bg-primary group-hover:text-primary-foreground"}
::::::::: icon {"id":"za-i","attrs":{"aria-hidden":"true"},"bind":{"icon":"item.icon"},"class":"size-6"}
:::::::::
::::::::

:::::::: box {"id":"za-t","class":"flex flex-col gap-1.5"}
::::::::: box {"id":"za-th","class":"flex flex-wrap items-center gap-x-3 gap-y-1"}
:::::::::: link {"id":"za-a","bind":{"url":"item.url"},"class":"text-lg font-bold text-foreground no-underline after:absolute after:inset-0 group-hover:text-primary group-hover:underline"}
::::::::::: paragraph {"id":"za-title","props":{"tag":"span"},"bind":{"text":"item.title"}}
:::::::::::
::::::::::

:::::::::: paragraph {"id":"bfw4sghvrgu","props":{"tag":"span"},"bind":{"text":"item.kind"},"class":"badge"}
::::::::::
:::::::::

::::::::: paragraph {"id":"za-sum","props":{"tag":"p"},"bind":{"text":"item.summary"},"class":"text-[0.9375rem] leading-snug text-muted line-clamp-2"}
:::::::::
::::::::
:::::::
::::::
:::::

::::: filter-empty {"id":"za-empty"}
:::::: box {"id":"za-empty-in","class":"flex flex-col items-center gap-3 rounded-lg border border-dashed border-border px-6 py-16 text-center"}
::::::: icon {"id":"za-empty-i","props":{"icon":"magnifying-glass"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-muted"}
:::::::

::::::: paragraph {"id":"za-empty-t","props":{"tag":"p","text":"Niets gevonden. Probeer een ander woord, of bel de afsprakenlijn: we helpen je de weg te vinden."},"class":"text-lg text-muted max-w-[30em]"}
:::::::
::::::
:::::
::::
:::

::: box {"id":"za-help","props":{"tag":"section"},"attrs":{"aria-labelledby":"#za-help-title"},"class":"mx-auto max-w-content px-gutter pt-section"}
:::: box {"id":"za-help-in","class":"scheme-tint leaf flex flex-wrap items-center justify-between gap-8 p-[clamp(1.75rem,4vw,3.5rem)]"}
::::: box {"id":"za-help-text","class":"flex flex-col gap-3"}
:::::: heading {"id":"za-help-title","props":{"text":"Weet je niet waar je moet zijn?","level":"2"},"class":"text-3xl"}
::::::

:::::: paragraph {"id":"za-help-p","props":{"tag":"p","text":"Je huisarts zegt je welke specialist je best ziet. Of bel onze afsprakenlijn: we zoeken samen de juiste dienst."},"class":"max-w-[36em] text-lg text-muted"}
::::::
:::::

::::: buttons {"id":"za-help-buttons"}
:::::: button {"id":"za-help-book","props":{"url":"entry:01m7p3g28ph31zyqzvh74hae61","size":"lg","label":"Afspraak maken","variant":"primary"}}
::::::

:::::: button {"id":"call-appointments","props":{"icon":"phone","size":"lg","variant":"secondary"},"bind":{"url":"tel:{globals.hospital.appointments_phone}","label":"Bel {globals.hospital.appointments_phone}"}}
::::::
:::::
::::
:::
