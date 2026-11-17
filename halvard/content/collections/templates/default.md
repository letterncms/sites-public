---
id: 01m7nnfjp9xe6pjmmfm8q9am9p
title: 'Full Width'
status: published
published_at: '2026-11-17T21:09:23+00:00'
position: 1
description: 'Header, footer and the page’s own sections in between, edge to edge. For the home page and pages built from sections.'
---

::: component {"id":"d-header","props":{"ref":"header"}}
:::

::: box {"id":"d-main","props":{"tag":"main"},"label":"Main","anchor":"main"}
:::: outlet {"id":"d-content"}
::::
:::

::: component {"id":"d-footer","props":{"ref":"footer"}}
:::
