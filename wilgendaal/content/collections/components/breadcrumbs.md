---
id: 01m9a0y95xkgvp055a2q83mxxy
title: Kruimelpad
status: published
position: 0
category: Site
description: 'Home met een huisje, de pagina’s boven deze en de pagina zelf, die geen link is.'
---

::: box {"id":"bc","props":{"tag":"nav"},"label":"Kruimelpad","attrs":{"aria-label":"Kruimelpad"}}
:::: box {"id":"bc-list","class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::: box {"id":"bc-home","props":{"link":"/"},"class":"inline-flex items-center gap-1.5 font-semibold text-foreground no-underline hover:underline"}
:::::: icon {"id":"bc-home-icon","props":{"icon":"house"},"class":"size-4 shrink-0"}
::::::

:::::: paragraph {"id":"bc-home-label","props":{"tag":"span","text":"Home"}}
::::::
:::::

::::: repeat {"id":"bc-trail","props":{"source":"breadcrumbs","tag":"span"},"class":"contents"}
:::::: box {"id":"bc-step","props":{"tag":"span"},"class":"contents"}
::::::: icon {"id":"bc-sep","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5 shrink-0 text-muted"}
:::::::

::::::: link {"id":"bc-link","bind":{"label":"item.title","url":"item.url"},"class":"font-semibold text-foreground no-underline hover:underline"}
:::::::
::::::
:::::

::::: icon {"id":"bc-sep-last","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5 shrink-0 text-muted"}
:::::

::::: paragraph {"id":"bc-current","props":{"tag":"span"},"bind":{"text":"entry.title"},"attrs":{"aria-current":"page"},"class":"text-foreground"}
:::::
::::
:::
