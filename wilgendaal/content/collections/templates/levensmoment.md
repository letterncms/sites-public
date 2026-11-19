---
title: Levensmoment
status: published
position: 0
collections:
  - moments
description: 'Een levensmoment: een lichte kop met een foto, de stappen, en ernaast wat je bij de stad regelt.'
---

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"lm-head","class":"page-head"}
::::: box {"id":"lm-crumbs-wrap","class":"wrap-wide"}
:::::: component {"id":"lm-crumbs","props":{"ref":"crumbs","values":{"label":"Levensmomenten","url":"/levensmomenten"}}}
::::::
:::::

::::: box {"id":"lm-head-inner","class":"wrap-wide grid items-end gap-10 pt-8 pb-12 lg:grid-cols-12 lg:gap-16 lg:pt-12 lg:pb-16"}
:::::: box {"id":"lm-head-text","class":"flex flex-col items-start gap-5 lg:col-span-7"}
::::::: heading {"id":"lm-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
:::::::

::::::: paragraph {"id":"lm-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead max-w-xl"}
:::::::

::::::

:::::: box {"id":"lm-photo","bind":{"visible":"entry.photo"},"class":"photo lg:col-span-5"}
::::::: image {"id":"lm-img","props":{"priority":true,"aspect":"4/3","sizes":"(min-width: 64rem) 36vw, 100vw"},"bind":{"image":"entry.photo"},"class":"aspect-[4/3] w-full object-cover"}
:::::::
::::::
:::::
::::

:::: box {"id":"lm-body","class":"wrap-wide grid gap-16 py-16 lg:grid-cols-12 lg:py-20"}
::::: outlet {"id":"lm-outlet","props":{"wrap":true,"prose":true},"class":"min-w-0 lg:col-span-7"}
:::::

::::: box {"id":"lm-aside","props":{"tag":"aside"},"attrs":{"aria-labelledby":"#lm-todo-h"},"class":"lg:col-span-5"}
:::::: box {"id":"lm-aside-inner","class":"flex flex-col gap-5 lg:sticky lg:top-28"}
::::::: heading {"id":"lm-todo-h","props":{"level":"2","text":"Dit regel je bij de stad"},"class":"text-2xl"}
:::::::

::::::: repeat {"id":"lm-todo","props":{"source":"list","tag":"ol","path":"entry.products"},"class":"flex flex-col gap-2"}
:::::::: box {"id":"lm-todo-item","props":{"tag":"li"}}
::::::::: box {"id":"lm-todo-card","bind":{"link":"item.url"},"class":"group card flex-row items-start gap-4 p-5"}
:::::::::: paragraph {"id":"lm-todo-n","props":{"tag":"span"},"bind":{"text":"{index}"},"attrs":{"aria-hidden":"true"},"class":"stone size-8 bg-foreground font-display text-sm font-medium text-background tabular-nums"}
::::::::::

:::::::::: box {"id":"lm-todo-text","class":"flex min-w-0 flex-col gap-1"}
::::::::::: paragraph {"id":"lm-todo-title","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"text-lg font-semibold group-hover:underline"}
:::::::::::

::::::::::: paragraph {"id":"lm-todo-summary","props":{"tag":"span"},"bind":{"text":"item.summary"},"class":"line-clamp-2 text-base text-muted"}
:::::::::::

::::::::::: paragraph {"id":"lm-todo-online","props":{"tag":"span","text":"Online te regelen"},"bind":{"visible":"item.online"},"class":"tag mt-1"}
:::::::::::
::::::::::
:::::::::
::::::::
:::::::

::::::: component {"id":"lm-help","props":{"ref":"help-panel","values":{"title":"Liever samen bekijken?","label":"Afspraak maken","url":"/afspraak"}}}
:::::::
::::::
:::::
::::

:::: box {"id":"lm-more","props":{"tag":"section"},"attrs":{"aria-labelledby":"#lm-more-h"},"class":"slab scheme-soft"}
::::: box {"id":"lm-more-inner","class":"wrap-wide py-16"}
:::::: heading {"id":"lm-more-h","props":{"level":"2","text":"Andere levensmomenten"},"class":"text-2xl"}
::::::

:::::: repeat {"id":"lm-more-list","props":{"source":"entries","collection":"moments","sort":"position","limit":8,"tag":"ul","skipCurrent":true},"class":"mt-6 flex flex-wrap gap-3"}
::::::: box {"id":"lm-more-item","props":{"tag":"li"}}
:::::::: box {"id":"lm-more-link","bind":{"link":"item.url"},"class":"flex min-h-11 items-center gap-3 rounded-full bg-background py-2.5 pr-5 pl-3.5 font-semibold text-foreground no-underline transition-colors hover:bg-blue hover:text-white"}
::::::::: icon {"id":"lm-more-icon","bind":{"icon":"item.icon"},"class":"size-5 shrink-0"}
:::::::::

::::::::: paragraph {"id":"lm-more-title","props":{"tag":"span"},"bind":{"text":"item.title"}}
:::::::::
::::::::
:::::::
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
