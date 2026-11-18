---
id: 01m9a0nfj54rj8pbvnt0me93eb
title: Melding
status: published
position: 0
category: Site
description: 'Een melding bovenaan elke pagina zolang de melding aan staat: info, hinder of een noodsituatie.'
---

::: box {"id":"al","props":{"tag":"section"},"label":"Melding","attrs":{"aria-label":"Belangrijke melding"},"bind":{"visible":"globals.alert.show","state:warning":"globals.alert.tone|is:warning","state:urgent":"globals.alert.tone|is:urgent"},"class":"bg-info-soft text-foreground data-warning:bg-accent-soft data-warning:text-foreground data-urgent:bg-urgent data-urgent:text-white"}
:::: box {"id":"al-inner","class":"wrap-wide flex items-start gap-3 py-3 text-base"}
::::: icon {"id":"al-icon-info","props":{"icon":"info"},"class":"mt-0.5 size-6 shrink-0 in-data-warning:hidden in-data-urgent:hidden"}
:::::

::::: icon {"id":"al-icon-warning","props":{"icon":"warning-circle"},"class":"mt-0.5 hidden size-6 shrink-0 in-data-warning:block in-data-urgent:block"}
:::::

::::: box {"id":"al-text","class":"flex flex-wrap items-baseline gap-x-4 gap-y-1"}
:::::: paragraph {"id":"al-msg","props":{"tag":"span"},"bind":{"text":"globals.alert.message"},"class":"font-semibold"}
::::::

:::::: link {"id":"al-link","bind":{"label":"globals.alert.link.label","url":"globals.alert.link.url","visible":"globals.alert.link.url"},"class":"text-link font-semibold text-current"}
::::::
:::::
::::
:::
