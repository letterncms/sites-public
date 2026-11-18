---
id: 01m7p3g291ay24bfsfkwnmh9fk
title: 'Volle breedte'
status: published
published_at: '2026-11-18T02:14:20+01:00'
position: 1
description: 'Kop, voet en de eigen secties van de pagina ertussen. Voor de startpagina en pagina’s uit secties.'
---

::: component {"id":"d-header","props":{"ref":"header"}}
:::

::: box {"id":"d-main","props":{"tag":"main"},"label":"Inhoud","anchor":"main"}
:::: outlet {"id":"d-content"}
::::
:::

::: component {"id":"d-footer","props":{"ref":"footer"}}
:::
