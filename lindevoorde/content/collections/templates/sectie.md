---
id: 01m9a0mxvadbykx2cpcc8qwfwv
title: Sectiepagina
status: published
position: 0
description: 'Een titel en korte inhoud, dan secties over de volle breedte: voor lijsten en overzichten.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"l-head","class":"wrap pt-8 pb-12 md:pb-16"}
::::: component {"id":"l-crumbs","props":{"ref":"breadcrumbs"}}
:::::

::::: box {"id":"l-title","class":"mt-10 flex max-w-3xl flex-col gap-5"}
:::::: heading {"id":"l-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::

:::::: paragraph {"id":"l-title-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead max-w-2xl text-muted"}
::::::
:::::
::::

:::: outlet {"id":"l-outlet"}
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
