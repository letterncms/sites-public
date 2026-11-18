---
id: 01m7p3g291ay24bfsfkwnmh9fm
title: Pagina
status: published
published_at: '2026-11-18T02:14:20+01:00'
position: 2
description: 'Een titelband met de weg terug, dan de pagina in een leeskolom naast de andere pagina’s van de rubriek en wie je kunt bellen.'
collections:
  - pages
---

::: component {"id":"p-header","props":{"ref":"header"}}
:::

::: box {"id":"p-main","props":{"tag":"main"},"label":"Inhoud","anchor":"main"}
:::: component {"id":"p-head","props":{"ref":"page-title"}}
::::

:::: box {"id":"p-layout","class":"mx-auto grid max-w-content grid-cols-12 gap-x-columns gap-y-12 px-gutter pt-blocks"}
::::: outlet {"id":"p-body","props":{"wrap":true,"prose":true},"class":"col-span-8 row-start-1 max-lg:col-span-full"}
:::::

::::: box {"id":"p-aside","props":{"tag":"aside"},"attrs":{"aria-label":"In deze rubriek"},"class":"col-span-4 row-start-1 flex flex-col gap-8 self-start lg:sticky lg:top-32 max-lg:col-span-full max-lg:row-start-auto"}
:::::: box {"id":"p-section","props":{"tag":"nav"},"attrs":{"aria-label":"In deze rubriek"},"bind":{"visible":"entry.root.children"},"class":"border-t-4 border-primary pt-4"}
::::::: link {"id":"p-section-t","bind":{"label":"entry.root.title","url":"entry.root.url"},"class":"block text-sm font-semibold text-muted no-underline hover:text-foreground"}
:::::::

::::::: repeat {"id":"p-section-list","props":{"source":"children","of":"root","tag":"ul"},"class":"mt-3 flex flex-col"}
:::::::: box {"id":"p-section-item","props":{"tag":"li"}}
::::::::: link {"id":"p-section-a","bind":{"label":"item.title","url":"item.url","state:current":"item.current","attr:aria-current":"item.current|is:true"},"class":"block border-l-3 border-border px-4 py-2 font-medium text-foreground no-underline hover:border-primary/60 hover:bg-surface data-current:border-primary data-current:bg-tint data-current:text-primary"}
:::::::::
::::::::
:::::::
::::::

:::::: component {"id":"p-help","props":{"ref":"help-card"}}
::::::
:::::
::::
:::

::: component {"id":"p-footer","props":{"ref":"footer"}}
:::
