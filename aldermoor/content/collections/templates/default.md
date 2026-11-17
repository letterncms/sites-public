---
id: 01m9a08pmawvhky5d0dqahjzzm
title: Default
status: published
position: 0
description: 'The header and footer around the page’s own blocks, edge to edge. For the home page and pages built from sections.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: outlet {"id":"t-outlet"}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
