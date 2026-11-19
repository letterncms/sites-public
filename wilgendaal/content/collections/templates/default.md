---
id: 01m9a0pgr3s4crrr3j3dvsbrah
title: Standaard
status: published
position: 0
description: 'De kop en de voet rond de eigen blokken van een pagina, van rand tot rand. Voor de startpagina en pagina’s uit secties.'
---

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: outlet {"id":"t-outlet"}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
