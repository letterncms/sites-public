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
:::: component {"id":"t-head","props":{"ref":"page-head","values":{"label":"Levensmomenten","url":"/levensmomenten","aspect":"4/3"}},"bind":{"values.title":"entry.title","values.lead":"entry.summary","values.image":"entry.photo"}}
::::

:::: box {"id":"lm-body","class":"wrap grid gap-16 pt-14 pb-section lg:grid-cols-12 lg:pt-16"}
::::: outlet {"id":"lm-outlet","props":{"wrap":true,"prose":true},"class":"min-w-0 lg:col-span-7"}
:::::

::::: box {"id":"lm-aside","props":{"tag":"aside"},"attrs":{"aria-labelledby":"#lm-todo-h"},"class":"lg:col-span-5"}
:::::: box {"id":"lm-aside-inner","class":"flex flex-col gap-5 lg:sticky lg:top-28"}
::::::: heading {"id":"lm-todo-h","props":{"level":"2","text":"Dit regel je bij de stad"},"class":"text-2xl"}
:::::::

::::::: repeat {"id":"lm-todo","props":{"source":"list","tag":"ol","path":"entry.products"},"class":"flex flex-col gap-2"}
:::::::: box {"id":"lm-todo-item","props":{"tag":"li"}}
::::::::: component {"id":"lm-todo-card","props":{"ref":"product-card"},"bind":{"values.number":"{index}","values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.online":"item.online"}}
:::::::::
::::::::
:::::::

::::::: component {"id":"lm-help","props":{"ref":"help-panel","values":{"title":"Liever samen bekijken?","label":"Afspraak maken","url":"/afspraak"}}}
:::::::
::::::
:::::
::::

:::: box {"id":"lm-more","props":{"tag":"section"},"class":"slab scheme-soft"}
::::: box {"id":"lm-more-inner","class":"wrap"}
:::::: component {"id":"lm-more-head","props":{"ref":"section-head","values":{"title":"Andere levensmomenten","label":"Alle levensmomenten","url":"/levensmomenten"}}}
::::::

:::::: repeat {"id":"lm-more-list","props":{"source":"entries","collection":"moments","sort":"position","limit":8,"tag":"ul","skipCurrent":true},"class":"mt-8 flex flex-wrap gap-3"}
::::::: box {"id":"lm-more-item","props":{"tag":"li"}}
:::::::: component {"id":"lm-more-pill","props":{"ref":"pill"},"bind":{"values.label":"item.title","values.url":"item.url","values.icon":"item.icon"}}
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
