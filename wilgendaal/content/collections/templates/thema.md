---
id: 01m9a0gttq07trfafwsf19sh2y
title: Thema
status: published
position: 0
collections:
  - topics
description: 'Een thema: de titel met wat je er meteen kan regelen en een foto, alle diensten met hun uitleg, het nieuws, wie je kan vragen, en de andere thema’s.'
---

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: component {"id":"t-head","props":{"ref":"page-head","values":{"label":"Thema’s","url":"/themas","aspect":"3/2"}},"bind":{"values.title":"entry.title","values.lead":"entry.summary","values.image":"entry.photo"}}
::::

:::: box {"id":"th-want-nav","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#th-want-h"},"class":"wrap flex flex-wrap items-center gap-x-4 gap-y-3 pt-10"}
::::: heading {"id":"th-want-h","props":{"level":"2","text":"Ik wil"},"class":"eyebrow font-sans"}
:::::

::::: repeat {"id":"th-want","props":{"source":"entries","collection":"products","sort":"-featured","limit":4,"tag":"ul","where":[{"field":"topic","op":"contains","value":"{entry.id}"}]},"class":"flex flex-wrap gap-2"}
:::::: box {"id":"th-want-item","props":{"tag":"li"}}
::::::: component {"id":"th-want-pill","props":{"ref":"pill"},"bind":{"values.label":"item.title","values.url":"item.url"}}
:::::::
::::::
:::::
::::

:::: box {"id":"th-list","props":{"tag":"section"},"class":"wrap pt-14 pb-section lg:pt-16"}
::::: component {"id":"th-list-head","props":{"ref":"section-head","values":{"title":"Dit regel je bij de stad","label":"Alles van A tot Z","url":"/themas#alles-van-a-tot-z"}}}
:::::

::::: repeat {"id":"th-products","props":{"source":"entries","collection":"products","sort":"title","limit":100,"tag":"ul","where":[{"field":"topic","op":"contains","value":"{entry.id}"}],"empty":"Er staat nog niets in dit thema."},"class":"mt-10 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3"}
:::::: box {"id":"th-card-item","props":{"tag":"li"},"class":"grid"}
::::::: component {"id":"th-card","props":{"ref":"product-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.online":"item.online"}}
:::::::
::::::
:::::
::::

:::: box {"id":"th-more","props":{"tag":"section"}}
::::: box {"id":"th-more-grid","class":"wrap grid gap-14 pb-section lg:grid-cols-12"}
:::::: box {"id":"th-news-col","class":"lg:col-span-7"}
::::::: component {"id":"th-news-head","props":{"ref":"section-head","values":{"title":"Nieuws","label":"Al het nieuws","url":"/nieuws"}}}
:::::::

::::::: repeat {"id":"th-news","props":{"source":"entries","collection":"news","sort":"-published_at","limit":3,"tag":"ul","where":[{"field":"topic","op":"contains","value":"{entry.id}"}],"empty":"Er is nu geen nieuws over dit thema. Het laatste nieuws van de stad staat bij Nieuws."},"class":"mt-10 flex flex-col gap-2.5"}
:::::::: box {"id":"th-news-item","props":{"tag":"li"}}
::::::::: component {"id":"th-news-row","props":{"ref":"news-row"},"bind":{"values.title":"item.title","values.url":"item.url","values.image":"item.cover","values.kind":"item.kind","values.date":"item.date|date:j F Y"}}
:::::::::
::::::::
:::::::
::::::

:::::: box {"id":"th-help-col","class":"lg:col-span-4 lg:col-start-9"}
::::::: component {"id":"th-help","props":{"ref":"help-panel","values":{"title":"Vragen over dit thema?","text":"Bel, mail of kom langs in het stadhuis. Je kan ook een afspraak maken."}}}
:::::::
::::::
:::::
::::

:::: box {"id":"th-others-section","props":{"tag":"section"},"class":"slab scheme-soft"}
::::: box {"id":"th-others-inner","class":"wrap"}
:::::: component {"id":"th-others-head","props":{"ref":"section-head","values":{"title":"Andere thema’s"}}}
::::::

:::::: repeat {"id":"th-others","props":{"source":"entries","collection":"topics","sort":"position","limit":20,"tag":"ul","skipCurrent":true},"class":"mt-8 flex flex-wrap gap-3"}
::::::: box {"id":"th-others-item","props":{"tag":"li"}}
:::::::: component {"id":"th-others-pill","props":{"ref":"pill"},"bind":{"values.label":"item.title","values.url":"item.url","values.icon":"item.icon"}}
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
