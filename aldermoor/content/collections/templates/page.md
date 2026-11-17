---
id: 01m9a0n6xjef945q3ssncbp5f0
title: Page
status: published
position: 0
description: 'A page of text: its title and summary, then the content at a comfortable reading width.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"p-wrap","class":"wrap pt-6 pb-section"}
::::: component {"id":"p-crumbs","props":{"ref":"breadcrumbs"}}
:::::

::::: box {"id":"p-title","class":"mt-8 flex max-w-prose flex-col gap-4"}
:::::: heading {"id":"p-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::

:::::: paragraph {"id":"p-title-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead"}
::::::
:::::

::::: outlet {"id":"p-outlet","props":{"wrap":true,"prose":true},"class":"mt-10 max-w-prose"}
:::::

::::: box {"id":"p-foot","class":"mt-12 max-w-prose border-t border-border pt-6"}
:::::: paragraph {"id":"p-updated","props":{"tag":"p"},"bind":{"text":"Last updated {entry.updated|date:j F Y}","visible":"entry.updated"},"class":"meta"}
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
