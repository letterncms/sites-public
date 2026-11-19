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
:::: component {"id":"t-head","props":{"ref":"page-head"},"bind":{"values.title":"entry.title","values.lead":"entry.summary"}}
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
