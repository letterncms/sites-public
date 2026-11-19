---
id: 01m9a04b25ygc7gjz9zcs1yxqd
title: Nieuwsbericht
status: published
position: 0
collections:
  - news
description: 'Een nieuwsbericht, persbericht of melding van werken: soort en datum, foto, het verhaal en meer nieuws.'
---

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: component {"id":"t-head","props":{"ref":"page-head","values":{"label":"Nieuws","url":"/nieuws"}},"bind":{"values.title":"entry.title","values.lead":"entry.summary","values.tag":"entry.kind","values.meta":"entry.date|date:j F Y"}}
::::

:::: box {"id":"nw-wrap","class":"wrap pt-12 pb-section md:pt-16"}
::::: box {"id":"nw-photo","bind":{"visible":"entry.cover"},"class":"photo"}
:::::: image {"id":"nw-img","props":{"priority":true,"aspect":"16/9","sizes":"(min-width: 80rem) 76rem, 100vw"},"bind":{"image":"entry.cover"},"class":"aspect-[16/9] w-full object-cover"}
::::::
:::::

::::: outlet {"id":"nw-outlet","props":{"wrap":true,"prose":true},"class":"mx-auto mt-14 max-w-prose"}
:::::

::::: box {"id":"nw-foot","class":"mx-auto mt-14 flex max-w-prose items-center gap-3 border-t border-border pt-6"}
:::::: link {"id":"nw-topic","bind":{"label":"entry.topic.title","url":"entry.topic.url","visible":"entry.topic"},"class":"tag"}
::::::
:::::
::::

:::: box {"id":"nw-more-section","props":{"tag":"section"},"class":"slab scheme-soft"}
::::: box {"id":"nw-more-inner","class":"wrap"}
:::::: component {"id":"nw-more-head","props":{"ref":"section-head","values":{"title":"Meer nieuws","label":"Al het nieuws","url":"/nieuws"}}}
::::::

:::::: repeat {"id":"nw-more","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"tag":"ul","skipCurrent":true},"class":"mt-10 grid gap-10 md:grid-cols-3"}
::::::: box {"id":"nw-more-item","props":{"tag":"li"}}
:::::::: component {"id":"nw-more-card","props":{"ref":"news-card"},"bind":{"values.title":"item.title","values.url":"item.url","values.image":"item.cover","values.kind":"item.kind","values.date":"item.date|date:j F Y"}}
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
