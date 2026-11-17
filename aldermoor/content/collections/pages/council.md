---
id: 01m9a0tt7zanmvdkmf7z55t7k4
title: 'The council'
status: published
position: 6
summary: 'Aldermoor is run by a city council of 39 councillors, elected every four years. The mayor and four deputy mayors form the executive, which runs the city day to day.'
template: landing
keywords: 'mayor, aldermen, councillors, democracy, city council, executive'
---

::: box {"id":"co-exec","props":{"tag":"section"},"attrs":{"aria-labelledby":"#co-exec-h"},"class":"wrap pb-section"}
:::: box {"id":"co-exec-head","class":"flex flex-wrap items-end justify-between gap-x-8 gap-y-3"}
::::: box {"id":"co-exec-titles","class":"flex max-w-prose flex-col gap-2"}
:::::: heading {"id":"co-exec-h","props":{"level":"2","text":"The mayor and the executive"}}
::::::

:::::: paragraph {"id":"co-exec-intro","props":{"tag":"p","text":"Each member of the executive is responsible for a part of the city’s work."},"class":"text-lg text-muted"}
::::::
:::::
::::

:::: box {"id":"co-exec-body","class":"mt-8"}
::::: repeat {"id":"co-exec-list","props":{"source":"entries","collection":"people","sort":"position","limit":50,"tag":"ul","where":[{"field":"role","op":"in","value":["Mayor","Deputy mayor"]}]},"class":"grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"}
:::::: box {"id":"co-exec-list-item","props":{"tag":"li"}}
::::::: component {"id":"co-exec-list-card","props":{"ref":"person-card"},"bind":{"values.name":"item.title","values.role":"item.role","values.portfolio":"item.portfolio","values.photo":"item.photo","values.url":"item.url"}}
:::::::
::::::
:::::
::::
:::

::: box {"id":"co-take","props":{"tag":"section"},"attrs":{"aria-labelledby":"#co-take-h"},"class":"bg-surface"}
:::: box {"id":"co-take-inner","class":"wrap py-section"}
::::: heading {"id":"co-take-h","props":{"level":"2","text":"Take part"}}
:::::

::::: box {"id":"co-take-grid","class":"mt-8 grid gap-4 md:grid-cols-2"}
:::::: component {"id":"co-card-1","props":{"ref":"service-card","values":{"title":"Council meetings","summary":"When the council meets, how to watch, and the agendas and minutes.","url":"/council/meetings"}}}
::::::

:::::: component {"id":"co-card-2","props":{"ref":"service-card","values":{"title":"Find your councillor","summary":"The 39 councillors for the six districts, and how to reach them.","url":"/council/councillors"}}}
::::::

:::::: component {"id":"co-card-3","props":{"ref":"service-card","values":{"title":"Ask a question at a council meeting","summary":"Any resident can ask the council a question or speak about a plan.","url":"/services/ask-a-question-at-a-council-meeting"}}}
::::::

:::::: component {"id":"co-card-4","props":{"ref":"service-card","values":{"title":"How decisions are made","summary":"Who decides what, and how you can follow a decision from plan to outcome.","url":"/council/how-decisions-are-made"}}}
::::::
:::::
::::
:::

::: box {"id":"co-staff","props":{"tag":"section"},"attrs":{"aria-labelledby":"#co-staff-h"},"class":"wrap py-section"}
:::: box {"id":"co-staff-head","class":"flex flex-wrap items-end justify-between gap-x-8 gap-y-3"}
::::: box {"id":"co-staff-titles","class":"flex max-w-prose flex-col gap-2"}
:::::: heading {"id":"co-staff-h","props":{"level":"2","text":"Running the city’s services"}}
::::::
:::::
::::

:::: box {"id":"co-staff-body","class":"mt-8"}
::::: repeat {"id":"co-staff-list","props":{"source":"entries","collection":"people","sort":"position","limit":50,"tag":"ul","where":[{"field":"role","op":"=","value":"Chief executive"}]},"class":"grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}
:::::: box {"id":"co-staff-list-item","props":{"tag":"li"}}
::::::: component {"id":"co-staff-list-card","props":{"ref":"person-card"},"bind":{"values.name":"item.title","values.role":"item.role","values.portfolio":"item.portfolio","values.photo":"item.photo","values.url":"item.url"}}
:::::::
::::::
:::::
::::
:::
