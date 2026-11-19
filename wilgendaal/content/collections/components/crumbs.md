---
title: 'Kruimelpad naar een overzicht'
status: published
position: 0
category: Site
description: 'Home met een huisje, een overzichtspagina en de pagina zelf, die geen link is: voor diensten, thema’s en andere items buiten de paginaboom.'
props:
  -
    handle: label
    type: text
    label: Overzicht
  -
    handle: url
    type: url
    label: Link
---

::: box {"id":"cr","props":{"tag":"nav"},"label":"Kruimelpad","attrs":{"aria-label":"Kruimelpad"}}
:::: box {"id":"cr-list","class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::: box {"id":"cr-home","props":{"link":"/"},"class":"inline-flex items-center gap-1.5 font-semibold text-foreground no-underline hover:underline"}
:::::: icon {"id":"cr-home-icon","props":{"icon":"house"},"class":"size-4 shrink-0"}
::::::

:::::: paragraph {"id":"cr-home-label","props":{"tag":"span","text":"Home"}}
::::::
:::::

::::: box {"id":"cr-step","props":{"tag":"span"},"bind":{"visible":"props.label"},"class":"contents"}
:::::: icon {"id":"cr-sep","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5 shrink-0 text-muted"}
::::::

:::::: link {"id":"cr-link","bind":{"label":"props.label","url":"props.url"},"class":"font-semibold text-foreground no-underline hover:underline"}
::::::
:::::

::::: icon {"id":"cr-sep-last","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5 shrink-0 text-muted"}
:::::

::::: paragraph {"id":"cr-current","props":{"tag":"span"},"bind":{"text":"entry.title"},"attrs":{"aria-current":"page"},"class":"text-foreground"}
:::::
::::
:::
