---
id: 01m9a0mxvadbykx2cpcc8qwfwv
title: Sectiepagina
status: published
position: 0
description: 'Een grijze kop met de titel en de korte inhoud, dan secties over de volle breedte: voor lijsten en overzichten.'
---

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: component {"id":"t-head","props":{"ref":"page-head"},"bind":{"values.title":"entry.title","values.lead":"entry.summary"}}
::::

:::: box {"id":"l-body","class":"pt-12 md:pt-16"}
::::: outlet {"id":"l-outlet"}
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
