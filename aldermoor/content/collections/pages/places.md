---
id: 01m9a0kd9208sn5cwkfy2cpbpa
title: 'Places to visit'
status: published
position: 10
summary: 'City Hall, the service points and the city’s public buildings: addresses, opening hours and accessibility.'
template: landing
---

::: box {"id":"pv","class":"wrap pb-section"}
:::: repeat {"id":"pv-list","props":{"source":"entries","collection":"places","sort":"title","limit":50,"tag":"ul"},"class":"grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3"}
::::: box {"id":"pv-item","props":{"tag":"li"}}
:::::: box {"id":"pv-card","bind":{"link":"item.url"},"class":"group flex flex-col gap-4 text-foreground no-underline"}
::::::: box {"id":"pv-photo","class":"photo"}
:::::::: image {"id":"pv-img","props":{"aspect":"3/2"},"bind":{"image":"item.photo"},"class":"aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"}
::::::::
:::::::

::::::: box {"id":"pv-body","class":"flex flex-col gap-2"}
:::::::: heading {"id":"pv-title","props":{"level":"2"},"bind":{"text":"item.title"},"class":"text-2xl text-primary group-hover:underline"}
::::::::

:::::::: paragraph {"id":"pv-address","props":{"tag":"p"},"bind":{"text":"item.address"},"class":"text-base font-bold whitespace-pre-line"}
::::::::

:::::::: paragraph {"id":"pv-summary","props":{"tag":"p"},"bind":{"text":"item.summary"},"class":"text-base text-muted"}
::::::::
:::::::
::::::
:::::
::::
:::
