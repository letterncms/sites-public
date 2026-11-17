---
id: 01m9a0qkfm4cne4whv24t9r7xv
title: 'Section Page'
status: published
position: 0
description: 'A title and summary, then sections that run the full width: for lists and overview pages.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"l-head","class":"wrap pt-6 pb-10 md:pb-14"}
::::: component {"id":"l-crumbs","props":{"ref":"breadcrumbs"}}
:::::

::::: box {"id":"l-title","class":"mt-8 flex max-w-prose flex-col gap-4"}
:::::: heading {"id":"l-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::

:::::: paragraph {"id":"l-title-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead"}
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
