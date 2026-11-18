---
id: 01m9a0gttq07trfafwsf19sh2y
title: Thema
status: published
position: 0
collections:
  - topics
description: 'Een thema: alle producten erin, en het nieuws erover.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"th-head"}
::::: box {"id":"th-head-inner","class":"wrap grid items-end gap-12 pt-8 pb-14 lg:grid-cols-12"}
:::::: box {"id":"th-text","class":"lg:col-span-6"}
::::::: box {"id":"th-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Kruimelpad"}}
:::::::: box {"id":"th-crumbs-ol","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::::::: box {"id":"th-crumbs-li-home","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['/'] last:after:hidden"}
:::::::::: link {"id":"th-crumbs-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::::::
:::::::::

::::::::: box {"id":"th-crumbs-li0","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['/'] last:after:hidden"}
:::::::::: link {"id":"th-crumbs-l0","props":{"label":"Thema’s","url":"/themas"},"class":"text-link text-foreground"}
::::::::::
:::::::::
::::::::
:::::::

::::::: box {"id":"th-title","class":"mt-10 flex max-w-xl flex-col items-start gap-5"}
:::::::: icon {"id":"th-icon","bind":{"icon":"entry.icon"},"class":"icon-chip size-16 p-4"}
::::::::

:::::::: heading {"id":"th-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::::

:::::::: paragraph {"id":"th-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead text-muted"}
::::::::
:::::::
::::::

:::::: box {"id":"th-photo","bind":{"visible":"entry.photo"},"class":"frame max-lg:hidden lg:col-span-6"}
::::::: image {"id":"th-img","props":{"priority":true,"aspect":"4/3","sizes":"(min-width: 64rem) 40vw, 100vw"},"bind":{"image":"entry.photo"},"class":"aspect-[4/3] w-full object-cover"}
:::::::
::::::
:::::
::::

:::: box {"id":"th-list","props":{"tag":"section"},"attrs":{"aria-labelledby":"#th-list-h"},"class":"scheme-soft"}
::::: box {"id":"th-list-inner","class":"wrap py-section"}
:::::: heading {"id":"th-list-h","props":{"level":"2"},"bind":{"text":"Alles over {entry.title|lower}"},"class":"text-2xl"}
::::::

:::::: repeat {"id":"th-products","props":{"source":"entries","collection":"products","sort":"title","limit":100,"tag":"ul","where":[{"field":"topic","op":"contains","value":"{entry.id}"}],"empty":"Er zijn nog geen producten in dit thema."},"class":"mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3"}
::::::: box {"id":"th-card-item","props":{"tag":"li"},"class":"grid"}
:::::::: component {"id":"th-card","props":{"ref":"product-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url"}}
::::::::
:::::::
::::::
:::::
::::

:::: box {"id":"th-news-section","props":{"tag":"section"},"attrs":{"aria-labelledby":"#th-news-h"},"class":"wrap py-section"}
::::: box {"id":"th-news-head","class":"flex flex-wrap items-end justify-between gap-4"}
:::::: heading {"id":"th-news-h","props":{"level":"2"},"bind":{"text":"Nieuws over {entry.title|lower}"},"class":"text-2xl"}
::::::

:::::: link {"id":"th-news-all","props":{"label":"Al het nieuws","url":"/nieuws"},"class":"arrow-link"}
::::::
:::::

::::: repeat {"id":"th-news","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"tag":"ul","where":[{"field":"topic","op":"contains","value":"{entry.id}"}],"empty":"Er is nu geen nieuws over dit thema."},"class":"mt-8 grid gap-10 md:grid-cols-3"}
:::::: box {"id":"th-news-item","props":{"tag":"li"}}
::::::: component {"id":"th-news-card","props":{"ref":"news-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.image":"item.cover","values.kind":"item.kind","values.date":"item.date|date:j F Y"}}
:::::::
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
