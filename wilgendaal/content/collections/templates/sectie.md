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
:::: box {"id":"l-head","class":"page-head"}
::::: box {"id":"l-head-inner","class":"wrap pb-12 md:pb-16"}
:::::: component {"id":"l-crumbs","props":{"ref":"breadcrumbs"}}
::::::

:::::: box {"id":"l-title","class":"mt-8 flex max-w-5xl flex-col gap-5 md:mt-12"}
::::::: heading {"id":"l-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
:::::::

::::::: paragraph {"id":"l-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead max-w-2xl"}
:::::::
::::::
:::::
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
