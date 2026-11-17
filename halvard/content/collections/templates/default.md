---
id: 01m7npd9yyj7xb7jex3zmz2gyw
title: 'Full Width'
status: published
published_at: '2026-11-17T21:25:37+00:00'
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
