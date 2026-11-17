---
id: 01m9a0ma6q28exg96g98148bj4
title: Alert
status: published
position: 0
category: Site
description: 'The message at the top of every page while the Alert global is switched on: a notice, a disruption or an emergency.'
---

::: box {"id":"al","props":{"tag":"section"},"label":"Alert","attrs":{"aria-label":"Service alert"},"bind":{"visible":"globals.alert.show","state:warning":"globals.alert.tone|is:warning","state:urgent":"globals.alert.tone|is:urgent"},"class":"border-b-4 border-info bg-info-soft text-foreground data-warning:border-warning data-warning:bg-warning-soft data-urgent:border-urgent data-urgent:bg-urgent data-urgent:text-white"}
:::: box {"id":"al-inner","class":"wrap flex items-start gap-3 py-3 text-base"}
::::: icon {"id":"al-icon-info","props":{"icon":"info"},"class":"mt-0.5 size-6 shrink-0 in-data-warning:hidden in-data-urgent:hidden"}
:::::

::::: icon {"id":"al-icon-warning","props":{"icon":"warning"},"class":"mt-0.5 hidden size-6 shrink-0 in-data-warning:block in-data-urgent:block"}
:::::

::::: box {"id":"al-text","class":"flex flex-wrap items-baseline gap-x-4 gap-y-1"}
:::::: paragraph {"id":"al-msg","props":{"tag":"span"},"bind":{"text":"globals.alert.message"},"class":"font-bold"}
::::::

:::::: link {"id":"al-link","bind":{"label":"globals.alert.link.label","url":"globals.alert.link.url","visible":"globals.alert.link.url"},"class":"text-link font-bold text-current"}
::::::
:::::
::::
:::
