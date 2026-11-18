---
id: 01m7p3g28ph31zyqzvh74hae5r
title: 'Werken bij AZ Lindenhof'
status: published
published_at: '2026-11-18T02:14:19+01:00'
position: 11
summary: 'Zorg die telt, collega’s die je kent. Vind een job in de verpleging, als arts, therapeut of in een ondersteunende dienst.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"jb-why","props":{"tag":"section"},"attrs":{"aria-label":"Waarom bij ons"},"class":"mx-auto max-w-content px-gutter pt-blocks"}
:::: box {"id":"jb-why-list","props":{"tag":"ul"},"class":"grid grid-cols-3 gap-x-columns gap-y-8 max-md:grid-cols-1"}
::::: box {"id":"jb-w0","props":{"tag":"li"},"class":"flex flex-col gap-3 border-t-4 border-lime pt-5"}
:::::: icon {"id":"jb-w0-i","props":{"icon":"calendar-blank"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-primary"}
::::::

:::::: heading {"id":"jb-w0-h","props":{"text":"Je uurrooster vier weken vooraf","level":"2"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"jb-w0-p","props":{"tag":"p","text":"Je kent je diensten op tijd, en ruilen kan via de app."},"class":"text-muted"}
::::::
:::::

::::: box {"id":"jb-w1","props":{"tag":"li"},"class":"flex flex-col gap-3 border-t-4 border-lime pt-5"}
:::::: icon {"id":"jb-w1-i","props":{"icon":"graduation-cap"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-primary"}
::::::

:::::: heading {"id":"jb-w1-h","props":{"text":"Leren tijdens je werkuren","level":"2"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"jb-w1-p","props":{"tag":"p","text":"Onze eigen academie, en een meter of peter die je de eerste maanden begeleidt."},"class":"text-muted"}
::::::
:::::

::::: box {"id":"jb-w2","props":{"tag":"li"},"class":"flex flex-col gap-3 border-t-4 border-lime pt-5"}
:::::: icon {"id":"jb-w2-i","props":{"icon":"bicycle"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-primary"}
::::::

:::::: heading {"id":"jb-w2-h","props":{"text":"Meer dan je loon","level":"2"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"jb-w2-p","props":{"tag":"p","text":"Maaltijdcheques, een hospitalisatieverzekering, fietslease en kinderopvang op de campus."},"class":"text-muted"}
::::::
:::::
::::
:::

::: box {"id":"jb","props":{"tag":"section"},"attrs":{"aria-labelledby":"#jb-title"},"class":"mx-auto max-w-content px-gutter pt-section"}
:::: heading {"id":"jb-title","props":{"text":"Vacatures","level":"2"},"anchor":"vacatures","class":"rule mb-8"}
::::

:::: list-filter {"id":"jb-filter","props":{"status":":count van :total vacatures"}}
::::: box {"id":"jb-bar","class":"mb-10 flex flex-col gap-6 border-y border-border py-8"}
:::::: filter-search {"id":"jb-search","props":{"label":"Zoek een vacature","placeholder":"Bijvoorbeeld: verpleegkundige, MRI"},"class":"w-full max-w-xl [&_.cms-input]:h-13 [&_.cms-input]:text-lg"}
::::::

:::::: filter-choice {"id":"jb-field","props":{"look":"chips","facet":"field","label":"Domein","all_label":"Alle domeinen"}}
::::::
:::::

::::: repeat {"id":"jb-list","props":{"tag":"ul","sort":"-published_at","limit":100,"source":"entries","filter_by":"item.field","search_in":"item.title, item.department, item.summary","collection":"jobs"},"class":"flex flex-col border-t border-border"}
:::::: box {"id":"jb-job","class":"group relative flex items-center gap-6 border-b border-border py-6"}
::::::: box {"id":"jb-t","class":"flex flex-col gap-1"}
:::::::: paragraph {"id":"jb-dept","props":{"tag":"span"},"bind":{"text":"item.department"},"class":"text-sm font-semibold text-primary"}
::::::::

:::::::: link {"id":"jb-a","bind":{"url":"item.url"},"class":"text-xl font-bold text-foreground no-underline after:absolute after:inset-0 group-hover:text-primary group-hover:underline"}
::::::::: paragraph {"id":"jb-name","props":{"tag":"span"},"bind":{"text":"item.title"}}
:::::::::
::::::::

:::::::: box {"id":"jb-meta","class":"mt-1 flex flex-wrap gap-2"}
::::::::: paragraph {"id":"jb-hours","props":{"tag":"span"},"bind":{"text":"item.hours"},"class":"badge"}
:::::::::

::::::::: paragraph {"id":"jb-contract","props":{"tag":"span"},"bind":{"text":"item.contract"},"class":"badge"}
:::::::::
::::::::
:::::::

::::::: icon {"id":"jb-r","props":{"icon":"arrow-right"},"attrs":{"aria-hidden":"true"},"class":"ml-auto size-6 shrink-0 text-primary transition-transform group-hover:translate-x-1"}
:::::::
::::::
:::::

::::: filter-empty {"id":"jb-empty"}
:::::: box {"id":"jb-empty-in","class":"flex flex-col items-center gap-3 rounded-lg border border-dashed border-border px-6 py-16 text-center"}
::::::: icon {"id":"jb-empty-i","props":{"icon":"magnifying-glass"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-muted"}
:::::::

::::::: paragraph {"id":"jb-empty-t","props":{"tag":"p","text":"Geen vacature gevonden. Solliciteer spontaan: we laten je weten wanneer er een job voor jou vrijkomt."},"class":"text-lg text-muted max-w-[30em]"}
:::::::
::::::
:::::
::::
:::

::: box {"id":"jb-open","props":{"tag":"section"},"attrs":{"aria-labelledby":"#jb-open-title"},"class":"mx-auto max-w-content px-gutter pt-section"}
:::: box {"id":"jb-open-in","class":"scheme-tint leaf flex flex-wrap items-center justify-between gap-8 p-[clamp(1.75rem,4vw,3.5rem)]"}
::::: box {"id":"jb-open-text","class":"flex flex-col gap-3"}
:::::: heading {"id":"jb-open-title","props":{"text":"Niets voor jou bij?","level":"2"},"class":"text-3xl"}
::::::

:::::: paragraph {"id":"jb-open-p","props":{"tag":"p","text":"Solliciteer spontaan. We bewaren je kandidatuur een jaar en bellen je wanneer er een job vrijkomt die bij je past."},"class":"max-w-[36em] text-lg text-muted"}
::::::
:::::

::::: buttons {"id":"jb-open-buttons"}
:::::: button {"id":"jb-open-b","props":{"url":"entry:01m7p3g28ph31zyqzvh74hae5v","size":"lg","label":"Solliciteer spontaan","variant":"primary"}}
::::::
:::::
::::
:::
