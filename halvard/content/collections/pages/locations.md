---
id: 01m7nkejakn16aqnk5d5ryx9kk
title: Locations
status: published
published_at: '2026-11-17T20:33:52+00:00'
position: 10
summary: 'Our main campus and the two centres where we see patients closer to home.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"ll","class":"mx-auto max-w-wide px-gutter pt-blocks"}
:::: repeat {"id":"ll-list","props":{"tag":"ul","sort":"position","limit":20,"source":"entries","collection":"locations"},"class":"grid grid-cols-3 gap-x-columns gap-y-12 max-lg:grid-cols-2 max-md:grid-cols-1"}
::::: box {"id":"ll-item","props":{"tag":"li"}}
:::::: box {"id":"ll-card","props":{"tag":"article"},"class":"group relative flex h-full flex-col gap-3"}
::::::: image {"id":"ll-photo","props":{"alt":"","sizes":"(min-width: 64rem) 28rem, 100vw","aspect":"3/2"},"bind":{"image":"item.cover","visible":"item.cover"},"class":"overflow-hidden rounded-lg"}
:::::::

::::::: link {"id":"ll-a","bind":{"url":"item.url"},"class":"text-foreground no-underline after:absolute after:inset-0 hover:text-primary"}
:::::::: heading {"id":"ll-title","props":{"level":"2"},"bind":{"text":"item.title"},"class":"text-2xl"}
::::::::
:::::::

::::::: paragraph {"id":"ll-summary","props":{"tag":"p"},"bind":{"text":"item.summary"},"class":"text-muted"}
:::::::

::::::: box {"id":"ll-addr","class":"mt-auto flex items-start gap-2 pt-2"}
:::::::: icon {"id":"ll-addr-i","props":{"icon":"map-pin"},"attrs":{"aria-hidden":"true"},"class":"mt-0.5 size-5 shrink-0 text-primary"}
::::::::

:::::::: paragraph {"id":"ll-addr-t","props":{"tag":"p"},"bind":{"text":"item.address"},"class":"whitespace-pre-line"}
::::::::
:::::::
::::::
:::::
::::
:::
