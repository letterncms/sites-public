---
id: 01m9a0yye6vcbbwzy6dmdk62mx
title: Dienst
status: published
position: 0
collections:
  - products
description: 'Een dienst: kostprijs, termijn, voor wie en hoe aanvragen, wat meebrengen, de knop om te starten, dan de details.'
---

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"pr-head","class":"page-head"}
::::: box {"id":"pr-head-inner","class":"wrap pb-12 md:pb-16"}
:::::: component {"id":"pr-crumbs","props":{"ref":"crumbs"},"bind":{"values.label":"entry.topic.title","values.url":"entry.topic.url"}}
::::::

:::::: box {"id":"pr-title","class":"mt-8 flex max-w-4xl flex-col items-start gap-5 md:mt-12"}
::::::: paragraph {"id":"pr-online","props":{"tag":"span","text":"Online aan te vragen"},"bind":{"visible":"entry.online"},"class":"tag"}
:::::::

::::::: heading {"id":"pr-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
:::::::

::::::: paragraph {"id":"pr-title-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead max-w-2xl text-muted"}
:::::::
::::::
:::::
::::

:::: box {"id":"pr-wrap","class":"wrap pt-12 pb-section md:pt-16"}
::::: box {"id":"pr-grid","class":"lg:grid lg:grid-cols-12 lg:gap-x-16"}
:::::: box {"id":"pr-main","class":"min-w-0 lg:col-span-8"}
::::::: box {"id":"pr-panel","class":"flex flex-col gap-6 rounded-2xl bg-surface p-3 pb-6 sm:p-4 sm:pb-8"}
:::::::: box {"id":"pr-facts","props":{"tag":"dl"},"class":"facts"}
::::::::: box {"id":"pr-f1","bind":{"visible":"entry.cost"}}
:::::::::: paragraph {"id":"pr-dt1","props":{"tag":"dt","text":"Kostprijs"}}
::::::::::

:::::::::: paragraph {"id":"pr-dd1","props":{"tag":"dd"},"bind":{"text":"entry.cost"}}
::::::::::
:::::::::

::::::::: box {"id":"pr-f2","bind":{"visible":"entry.duration"}}
:::::::::: paragraph {"id":"pr-dt2","props":{"tag":"dt","text":"Termijn"}}
::::::::::

:::::::::: paragraph {"id":"pr-dd2","props":{"tag":"dd"},"bind":{"text":"entry.duration"}}
::::::::::
:::::::::

::::::::: box {"id":"pr-f3","bind":{"visible":"entry.eligibility"}}
:::::::::: paragraph {"id":"pr-dt3","props":{"tag":"dt","text":"Voor wie"}}
::::::::::

:::::::::: paragraph {"id":"pr-dd3","props":{"tag":"dd"},"bind":{"text":"entry.eligibility"}}
::::::::::
:::::::::

::::::::: box {"id":"pr-f4","bind":{"visible":"entry.channels"}}
:::::::::: paragraph {"id":"pr-dt4","props":{"tag":"dt","text":"Hoe aanvragen"}}
::::::::::

:::::::::: paragraph {"id":"pr-dd4","props":{"tag":"dd"},"bind":{"text":"entry.channels"}}
::::::::::
:::::::::
::::::::

:::::::: box {"id":"pr-bring-box","bind":{"visible":"entry.bring"},"class":"flex flex-col gap-3 px-3 pt-2 sm:px-4"}
::::::::: heading {"id":"pr-bring-h","props":{"level":"2","text":"Wat meebrengen?"},"class":"font-sans text-sm font-semibold text-muted"}
:::::::::

::::::::: repeat {"id":"pr-bring","props":{"source":"list","tag":"ul","path":"entry.bring"},"class":"flex flex-col gap-2 text-lg"}
:::::::::: box {"id":"pr-bring-item","props":{"tag":"li"},"class":"flex gap-3"}
::::::::::: icon {"id":"pr-bring-icon","props":{"icon":"check"},"class":"mt-1 size-5 shrink-0 text-primary"}
:::::::::::

::::::::::: paragraph {"id":"pr-bring-text","props":{"tag":"span"},"bind":{"text":"item"}}
:::::::::::
::::::::::
:::::::::
::::::::

:::::::: button {"id":"pr-action","props":{"label":"Online aanvragen","url":"#","variant":"primary","icon":"arrow-right","icon_position":"end"},"bind":{"label":"entry.action_label|default:Online aanvragen","url":"entry.action.url","visible":"entry.action.url"},"class":"mx-3 self-start sm:mx-4"}
::::::::
:::::::

::::::: outlet {"id":"pr-outlet","props":{"wrap":true,"prose":true},"class":"mt-14"}
:::::::

::::::: box {"id":"pr-place","props":{"tag":"section"},"bind":{"visible":"entry.place"},"class":"mt-14 flex flex-col gap-5"}
:::::::: heading {"id":"pr-place-h","props":{"level":"2","text":"Waar?"},"class":"text-2xl"}
::::::::

:::::::: box {"id":"pr-place-card","class":"card-line md:flex-row md:justify-between md:gap-10"}
::::::::: box {"id":"pr-place-text","class":"flex flex-col items-start gap-1"}
:::::::::: link {"id":"pr-place-link","bind":{"label":"entry.place.title","url":"entry.place.url"},"class":"mb-1 text-lg font-semibold text-foreground underline decoration-border underline-offset-4 hover:text-primary hover:decoration-current"}
::::::::::

:::::::::: paragraph {"id":"pr-place-address","props":{"tag":"p"},"bind":{"text":"entry.place.address"},"class":"whitespace-pre-line text-base"}
::::::::::

:::::::::: link {"id":"pr-place-phone","bind":{"label":"entry.place.phone","url":"tel:{entry.place.phone}","visible":"entry.place.phone"},"class":"text-link text-base font-semibold"}
::::::::::
:::::::::

::::::::: box {"id":"pr-hours-box","class":"flex min-w-0 flex-col gap-2 md:w-80"}
:::::::::: paragraph {"id":"pr-hours-sum-text","props":{"tag":"p","text":"Openingsuren"},"class":"text-sm font-semibold text-muted"}
::::::::::

:::::::::: repeat {"id":"pr-hours","props":{"source":"list","tag":"ul","path":"entry.place.hours.rows"},"class":"flex flex-col"}
::::::::::: box {"id":"pr-hours-row","props":{"tag":"li"},"class":"flex justify-between gap-4 border-b border-border py-2 text-sm last:border-0"}
:::::::::::: paragraph {"id":"pr-hours-day","props":{"tag":"span"},"bind":{"text":"item.0"},"class":"font-semibold"}
::::::::::::

:::::::::::: paragraph {"id":"pr-hours-time","props":{"tag":"span"},"bind":{"text":"item.1"},"class":"text-right"}
::::::::::::
:::::::::::
::::::::::
:::::::::
::::::::
:::::::

::::::: box {"id":"pr-foot","class":"mt-14 border-t border-border pt-6"}
:::::::: paragraph {"id":"pr-updated","props":{"tag":"p"},"bind":{"text":"Laatst bijgewerkt op {entry.updated|date:j F Y}","visible":"entry.updated"},"class":"meta"}
::::::::
:::::::
::::::

:::::: box {"id":"pr-aside","props":{"tag":"aside"},"attrs":{"aria-label":"Hulp en meer over dit thema"},"class":"lg:col-span-4 max-lg:mt-16"}
::::::: box {"id":"pr-aside-inner","class":"flex flex-col gap-10 lg:sticky lg:top-28"}
:::::::: box {"id":"pr-toc","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#pr-toc-h"},"class":"flex flex-col gap-3"}
::::::::: heading {"id":"pr-toc-h","props":{"level":"2","text":"Op deze pagina"},"class":"font-sans text-sm font-semibold text-muted"}
:::::::::

::::::::: repeat {"id":"pr-toc-list","props":{"source":"headings","tag":"ul","depth":2},"class":"flex flex-col"}
:::::::::: box {"id":"pr-toc-item","props":{"tag":"li"}}
::::::::::: link {"id":"pr-toc-link","bind":{"label":"item.text","url":"item.url"},"class":"block border-l-2 border-border py-1.5 pl-4 text-base text-foreground no-underline hover:border-primary hover:text-primary"}
:::::::::::
::::::::::
:::::::::
::::::::

:::::::: component {"id":"pr-help","props":{"ref":"help-panel"}}
::::::::

:::::::: box {"id":"pr-rel","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#pr-rel-h"},"class":"flex flex-col gap-3"}
::::::::: heading {"id":"pr-rel-h","props":{"level":"2","text":"Ook nuttig"},"class":"font-sans text-sm font-semibold text-muted"}
:::::::::

::::::::: repeat {"id":"pr-rel-list","props":{"source":"entries","collection":"products","sort":"title","limit":5,"tag":"ul","where":[{"field":"topic","op":"contains","value":"{entry.topic.id}"}],"skipCurrent":true},"class":"link-list"}
:::::::::: box {"id":"pr-rel-item","props":{"tag":"li"}}
::::::::::: link {"id":"pr-rel-link","bind":{"label":"item.title","url":"item.url"}}
:::::::::::
::::::::::
:::::::::

::::::::: link {"id":"pr-rel-all","bind":{"label":"Alles over {entry.topic.title|lower}","url":"entry.topic.url"},"class":"arrow-link"}
:::::::::
::::::::
:::::::
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
