---
id: 01m9a0y95xkgvp055a2q83mxxy
title: Kruimelpad
status: published
position: 0
category: Site
description: 'Home en de pagina’s boven deze, voor pagina’s in de paginaboom.'
---

::: box {"id":"bc","props":{"tag":"nav"},"label":"Kruimelpad","attrs":{"aria-label":"Kruimelpad"},"bind":{"visible":"entry.parent"}}
:::: repeat {"id":"bc-trail","props":{"source":"breadcrumbs","tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::: box {"id":"bc-home-item","props":{"tag":"li"},"bind":{"visible":"first"},"class":"flex items-center gap-2 after:text-muted after:content-['/'] last:after:hidden"}
:::::: link {"id":"bc-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::
:::::

::::: box {"id":"bc-item","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['/'] last:after:hidden"}
:::::: link {"id":"bc-link","bind":{"label":"item.title","url":"item.url"},"class":"text-link text-foreground"}
::::::
:::::
::::
:::

::: box {"id":"bc-top","props":{"tag":"nav"},"label":"Kruimelpad bovenaan","attrs":{"aria-label":"Kruimelpad"},"bind":{"hidden":"entry.parent"}}
:::: box {"id":"bc-top-list","props":{"tag":"ol"},"class":"flex text-sm"}
::::: box {"id":"bc-top-item","props":{"tag":"li"}}
:::::: link {"id":"bc-top-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::
:::::
::::
:::
