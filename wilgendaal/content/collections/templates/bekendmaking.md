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
:::: component {"id":"t-head","props":{"ref":"page-head","values":{"label":"Bekendmakingen","url":"/bekendmakingen"}},"bind":{"values.title":"entry.title","values.lead":"entry.summary","values.tag":"entry.kind","values.meta":"Bekendgemaakt op {entry.date|date:j F Y}"}}
::::

:::: box {"id":"bm-wrap","class":"wrap pt-12 pb-section md:pt-16"}
::::: box {"id":"bm-download","bind":{"visible":"entry.file"},"class":"flex max-w-prose flex-col gap-3"}
:::::: file {"id":"bm-file","bind":{"file":"entry.file"},"class":"rounded-xl bg-surface p-5 text-foreground no-underline transition-colors hover:bg-[color-mix(in_srgb,var(--color-foreground)_8%,var(--color-surface))]"}
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
