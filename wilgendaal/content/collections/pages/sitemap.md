---
id: 01m9a041vap69fw62g1nnax3ab
title: Sitemap
status: published
position: 20
summary: 'Alle pagina’s en diensten van deze website.'
template: sectie
---

::: box {"id":"sm","class":"wrap pb-section"}
:::: box {"id":"sm-grid","class":"grid gap-12 lg:grid-cols-3"}
::::: box {"id":"sm-pages-section","props":{"tag":"section"},"attrs":{"aria-labelledby":"#sm-pages-h"}}
:::::: heading {"id":"sm-pages-h","props":{"level":"2","text":"Pagina’s"},"class":"text-2xl"}
::::::

:::::: repeat {"id":"sm-pages","props":{"source":"entries","collection":"pages","sort":"position","limit":100,"tag":"ul","parent":"top"},"class":"mt-4 flex flex-col gap-3"}
::::::: box {"id":"sm-page-item","props":{"tag":"li"}}
:::::::: link {"id":"sm-page-link","bind":{"label":"item.title","url":"item.url"},"class":"text-link font-semibold"}
::::::::

:::::::: repeat {"id":"sm-sub","props":{"source":"children","tag":"ul","of":"item"},"class":"mt-2 flex flex-col gap-1.5 border-l-2 border-border pl-4 text-base"}
::::::::: box {"id":"sm-sub-item","props":{"tag":"li"}}
:::::::::: link {"id":"sm-sub-link","bind":{"label":"item.title","url":"item.url"},"class":"text-link"}
::::::::::
:::::::::
::::::::
:::::::
::::::
:::::

::::: box {"id":"sm-products-section","props":{"tag":"section"},"attrs":{"aria-labelledby":"#sm-products-h"},"class":"lg:col-span-2"}
:::::: heading {"id":"sm-products-h","props":{"level":"2","text":"Diensten per thema"},"class":"text-2xl"}
::::::

:::::: repeat {"id":"sm-topics","props":{"source":"entries","collection":"topics","sort":"position","limit":50,"tag":"ul","as":"topic"},"class":"mt-4 flex flex-col gap-5"}
::::::: box {"id":"sm-topic-item","props":{"tag":"li"}}
:::::::: link {"id":"sm-topic-link","bind":{"label":"topic.title","url":"topic.url"},"class":"text-link font-semibold"}
::::::::

:::::::: repeat {"id":"sm-products-list","props":{"source":"entries","collection":"products","sort":"title","limit":100,"tag":"ul","where":[{"field":"topic","op":"contains","value":"{topic.id}"}]},"class":"mt-2 flex flex-col gap-1.5 border-l-2 border-border pl-4 text-base"}
::::::::: box {"id":"sm-product-item","props":{"tag":"li"}}
:::::::::: link {"id":"sm-product-link","bind":{"label":"item.title","url":"item.url"},"class":"text-link"}
::::::::::
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::
