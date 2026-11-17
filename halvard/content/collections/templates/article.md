---
id: 01m7nqftc5hn7vgmwpr8886w9x
title: Story
status: published
published_at: '2026-11-17T21:44:28+00:00'
position: 6
description: 'A news story: its topic and date, title and summary, a wide photo, the story in a reading column, and the latest stories after it.'
collections:
  - news
---

::: component {"id":"ar-header","props":{"ref":"header"}}
:::

::: box {"id":"ar-main","props":{"tag":"main"},"label":"Main","anchor":"main"}
:::: box {"id":"ar-article","props":{"tag":"article"}}
::::: box {"id":"ar-head","props":{"tag":"header"},"class":"mx-auto flex max-w-[52rem] flex-col items-start gap-5 px-gutter pt-10 pb-10"}
:::::: box {"id":"ar-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
::::::: box {"id":"ar-crumbs-list","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted"}
:::::::: box {"id":"ar-crumb-home","props":{"tag":"li"},"class":"flex items-center gap-2"}
::::::::: link {"id":"ar-crumb-home-a","props":{"label":"Home","url":"/"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
:::::::::

::::::::: icon {"id":"ar-crumb-sep1","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
:::::::::
::::::::

:::::::: box {"id":"ar-crumb-up","props":{"tag":"li"},"class":"flex items-center gap-2"}
::::::::: link {"id":"ar-crumb-up-a","props":{"label":"News","url":"entry:01m7nqftbvfcw2y4b3yr35fmqz"},"class":"text-muted no-underline hover:text-foreground hover:underline"}
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"ar-meta","class":"meta flex items-center gap-2"}
::::::: paragraph {"id":"ar-topic","props":{"tag":"span"},"bind":{"text":"entry.topic.title","visible":"entry.topic"},"class":"font-semibold text-primary"}
:::::::

::::::: paragraph {"id":"ar-dot","props":{"text":"·","tag":"span"},"attrs":{"aria-hidden":"true"},"bind":{"visible":"entry.topic"}}
:::::::

::::::: paragraph {"id":"ar-date","props":{"tag":"time"},"bind":{"text":"entry.date|date:j F Y"}}
:::::::
::::::

:::::: heading {"id":"ar-title","props":{"level":"1"},"bind":{"text":"entry.title"},"class":"text-5xl"}
::::::

:::::: paragraph {"id":"ar-summary","props":{"tag":"p"},"bind":{"text":"entry.summary"},"class":"lede"}
::::::
:::::

::::: image {"id":"ar-cover","props":{"aspect":"16/9","priority":true,"sizes":"(min-width: 80rem) 80rem, 100vw"},"bind":{"image":"entry.cover","visible":"entry.cover"},"class":"mx-auto max-w-content px-gutter max-md:px-0 [&_img]:rounded-xl max-md:[&_img]:rounded-none"}
:::::

::::: outlet {"id":"ar-body","props":{"wrap":true,"prose":true},"class":"mx-auto max-w-[calc(var(--container-prose)+2*var(--spacing-gutter))] px-gutter pt-blocks"}
:::::

::::: box {"id":"ar-related","bind":{"visible":"entry.specialties"},"class":"mx-auto mt-10 flex max-w-[calc(var(--container-prose)+2*var(--spacing-gutter))] flex-col gap-3 px-gutter"}
:::::: paragraph {"id":"ar-related-l","props":{"text":"Related care","tag":"p"},"class":"text-sm font-semibold text-muted"}
::::::

:::::: repeat {"id":"ar-related-list","props":{"source":"list","path":"entry.specialties","tag":"ul"},"class":"flex flex-wrap gap-2"}
::::::: box {"id":"ar-rel","props":{"tag":"li"}}
:::::::: link {"id":"ar-rel-a","bind":{"label":"item.title","url":"item.url"},"class":"chip-outline"}
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"ar-more","props":{"tag":"aside"},"attrs":{"aria-labelledby":"#ar-more-title"},"class":"mx-auto mt-section max-w-wide border-t border-border px-gutter pt-blocks"}
::::: box {"id":"ar-more-head","class":"mb-8 flex flex-wrap items-end justify-between gap-4"}
:::::: heading {"id":"ar-more-title","props":{"text":"More news","level":"2"},"class":"text-3xl"}
::::::

:::::: button {"id":"ar-more-all","props":{"variant":"link","icon":"arrow-right","icon_position":"end","label":"All news","url":"entry:01m7nqftbvfcw2y4b3yr35fmqz"}}
::::::
:::::

::::: repeat {"id":"ar-more-list","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"skipCurrent":true,"tag":"ul"},"class":"grid grid-cols-3 gap-columns max-lg:grid-cols-2 max-md:grid-cols-1"}
:::::: box {"id":"ar-more-item","props":{"tag":"li"}}
::::::: component {"id":"ar-more-card","props":{"ref":"news-card"},"bind":{"values.title":"item.title","values.image":"item.cover","values.link":"item.url","values.date":"item.date|date:j F Y","values.topic":"item.topic.title"}}
:::::::
::::::
:::::
::::
:::

::: component {"id":"ar-footer","props":{"ref":"footer"}}
:::
