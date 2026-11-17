---
id: 01m7npd9ykcsvmvzmcvcrg02jn
title: 'Events and classes'
status: published
published_at: '2026-11-17T21:25:37+00:00'
position: 7
summary: 'Classes for parents-to-be, information evenings for patients and families, and symposia for professionals.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"el","class":"mx-auto max-w-wide px-gutter pt-blocks"}
:::: repeat {"id":"el-list","props":{"tag":"ul","sort":"starts","empty":"No events are planned right now. Have a look again soon.","limit":50,"where":[{"op":">","field":"starts","value":"{site.today}"}],"source":"entries","collection":"events"},"class":"mx-auto flex max-w-content flex-col gap-4"}
::::: box {"id":"el-item","props":{"tag":"li"}}
:::::: box {"id":"el-card","props":{"tag":"article"},"class":"card-link relative grid grid-cols-[16rem_1fr] items-center gap-8 p-5 max-md:grid-cols-1"}
::::::: image {"id":"el-photo","props":{"alt":"","sizes":"(min-width: 64rem) 16rem, 100vw","aspect":"4/3"},"bind":{"image":"item.cover","visible":"item.cover"},"class":"overflow-hidden rounded-md max-md:hidden"}
:::::::

::::::: box {"id":"el-text","class":"flex flex-col items-start gap-2"}
:::::::: paragraph {"id":"el-for","props":{"tag":"p"},"bind":{"text":"item.audience"},"class":"text-sm font-semibold text-primary"}
::::::::

:::::::: link {"id":"el-a","bind":{"url":"item.url"},"class":"text-foreground no-underline after:absolute after:inset-0 hover:text-primary"}
::::::::: heading {"id":"el-title","props":{"level":"2"},"bind":{"text":"item.title"},"class":"text-2xl"}
:::::::::
::::::::

:::::::: paragraph {"id":"el-summary","props":{"tag":"p"},"bind":{"text":"item.summary"},"class":"text-muted"}
::::::::

:::::::: box {"id":"el-meta","class":"mt-1 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]"}
::::::::: box {"id":"el-m-date","class":"flex items-center gap-2"}
:::::::::: icon {"id":"el-m-date-i","props":{"icon":"calendar"},"attrs":{"aria-hidden":"true"},"class":"size-4.5 text-primary"}
::::::::::

:::::::::: paragraph {"id":"el-m-date-t","props":{"tag":"span"},"bind":{"text":"item.starts|date:l j F, H:i"}}
::::::::::
:::::::::

::::::::: box {"id":"el-m-where","class":"flex items-center gap-2"}
:::::::::: icon {"id":"el-m-where-i","props":{"icon":"map-pin"},"attrs":{"aria-hidden":"true"},"class":"size-4.5 text-primary"}
::::::::::

:::::::::: paragraph {"id":"el-m-where-t","props":{"tag":"span"},"bind":{"text":"item.venue"}}
::::::::::
:::::::::
::::::::
:::::::
::::::
:::::
::::
:::
