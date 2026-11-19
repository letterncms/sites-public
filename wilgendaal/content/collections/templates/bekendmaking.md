---
id: 01m9a0yrakeeasa6xyxdpd3vce
title: Bekendmaking
status: published
position: 0
collections:
  - notices
description: 'Een bekendmaking: soort en datum, het document om te downloaden en de toelichting.'
---

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"bm-wrap","class":"wrap pt-8 pb-section"}
::::: component {"id":"bm-crumbs","props":{"ref":"crumbs","values":{"label":"Bekendmakingen","url":"/bekendmakingen"}}}
:::::

::::: box {"id":"bm-title","class":"mt-10 flex max-w-3xl flex-col gap-5"}
:::::: box {"id":"bm-meta","class":"flex flex-wrap items-center gap-3"}
::::::: paragraph {"id":"bm-kind","props":{"tag":"span"},"bind":{"text":"entry.kind"},"class":"tag"}
:::::::

::::::: paragraph {"id":"bm-date","props":{"tag":"time"},"bind":{"text":"Bekendgemaakt op {entry.date|date:j F Y}"},"class":"meta"}
:::::::
::::::

:::::: heading {"id":"bm-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::

:::::: paragraph {"id":"bm-title-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead max-w-2xl text-muted"}
::::::
:::::

::::: box {"id":"bm-download","bind":{"visible":"entry.file"},"class":"mt-10 flex max-w-prose flex-col gap-3"}
:::::: file {"id":"bm-file","bind":{"file":"entry.file"},"class":" border-[1.5px] border-border bg-raised p-5 text-foreground no-underline transition-colors hover:border-primary"}
::::::

:::::: paragraph {"id":"bm-formats","props":{"tag":"p"},"bind":{"text":"entry.format_note|default:Deze pdf is toegankelijk voor schermlezers. Heb je hem nodig in grote letters, braille of eenvoudige taal? Mail info@wilgendaal.example of bel 09 000 00 00."},"class":"meta"}
::::::
:::::

::::: outlet {"id":"bm-outlet","props":{"wrap":true,"prose":true},"class":"mt-12 max-w-prose"}
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
