---
id: 01m9a01cjnkecsqqz8e5snj049
title: Pagina
status: published
position: 0
description: 'Een tekstpagina: een grijze kop met de titel en de korte inhoud, dan de tekst op een comfortabele leesbreedte.'
---

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"p-head","class":"page-head"}
::::: box {"id":"p-head-inner","class":"wrap pb-12 md:pb-16"}
:::::: component {"id":"p-crumbs","props":{"ref":"breadcrumbs"}}
::::::

:::::: box {"id":"p-title","class":"mt-8 flex max-w-5xl flex-col gap-5 md:mt-12"}
::::::: heading {"id":"p-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
:::::::

::::::: paragraph {"id":"p-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead max-w-2xl"}
:::::::
::::::
:::::
::::

:::: box {"id":"p-wrap","class":"wrap pb-section"}

::::: outlet {"id":"p-outlet","props":{"wrap":true,"prose":true},"class":"mt-12 max-w-prose"}
:::::

::::: box {"id":"p-foot","class":"mt-14 max-w-prose border-t border-border pt-6"}
:::::: paragraph {"id":"p-updated","props":{"tag":"p"},"bind":{"text":"Laatst bijgewerkt op {entry.updated|date:j F Y}","visible":"entry.updated"},"class":"meta"}
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
