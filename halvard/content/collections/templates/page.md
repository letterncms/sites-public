---
id: 01m7nqftc5hn7vgmwpr8886w9s
title: Page
status: published
published_at: '2026-11-17T21:44:28+00:00'
position: 2
description: 'A title band with the way back, then the page in a reading column beside the other pages of its section, what is on this page and who to call.'
collections:
  - pages
---

::: component {"id":"p-header","props":{"ref":"header"}}
:::

::: box {"id":"p-main","props":{"tag":"main"},"label":"Main","anchor":"main"}
:::: component {"id":"p-head","props":{"ref":"page-title"}}
::::

:::: box {"id":"p-layout","label":"Layout","class":"mx-auto grid max-w-wide grid-cols-12 gap-x-columns gap-y-12 px-gutter pt-blocks"}
::::: box {"id":"p-aside","props":{"tag":"aside"},"label":"Sidebar","class":"col-span-4 col-start-9 row-start-1 flex flex-col gap-8 self-start lg:sticky lg:top-32 max-lg:col-span-full max-lg:row-start-auto xl:col-span-3 xl:col-start-10"}
:::::: box {"id":"p-section","props":{"tag":"nav"},"label":"In this section","attrs":{"aria-labelledby":"#p-section-title"},"bind":{"visible":"entry.root.children"},"class":"card p-5"}
::::::: link {"id":"p-section-title","bind":{"label":"entry.root.title","url":"entry.root.url"},"class":"block text-sm font-semibold text-muted no-underline hover:text-foreground"}
:::::::

::::::: repeat {"id":"p-section-list","props":{"source":"children","of":"root","tag":"ul"},"class":"mt-3 flex flex-col gap-0.5"}
:::::::: box {"id":"p-section-item","props":{"tag":"li"}}
::::::::: link {"id":"p-section-link","bind":{"label":"item.title","url":"item.url","state:current":"item.current","attr:aria-current":"item.current|is:true"},"class":"-mx-2 block rounded-sm px-2 py-1.5 font-medium text-foreground no-underline hover:bg-surface data-current:bg-surface data-current:text-primary"}
:::::::::
::::::::
:::::::
::::::

:::::: component {"id":"p-help","props":{"ref":"help-card"}}
::::::
:::::

::::: outlet {"id":"p-body","props":{"wrap":true,"prose":true},"class":"col-span-7 row-start-1 max-lg:col-span-full"}
:::::
::::
:::

::: component {"id":"p-footer","props":{"ref":"footer"}}
:::
