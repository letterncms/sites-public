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
:::: component {"id":"t-head","props":{"ref":"page-head"},"bind":{"values.title":"entry.title","values.lead":"entry.summary","values.label":"entry.topic.title","values.url":"entry.topic.url"}}
::::

:::: box {"id":"pr-wrap","class":"wrap pt-12 pb-section md:pt-16"}
::::: box {"id":"pr-grid","class":"lg:grid lg:grid-cols-12 lg:gap-x-16"}
:::::: box {"id":"pr-main","class":"min-w-0 lg:col-span-8"}
::::::: box {"id":"pr-panel","class":"flex flex-col gap-6 rounded-2xl bg-surface p-3 pb-6 sm:p-4 sm:pb-8"}
:::::::: box {"id":"pr-facts","props":{"tag":"dl"},"class":"facts"}
::::::::: component {"id":"pr-cost","props":{"ref":"fact","values":{"label":"Kostprijs"}},"bind":{"values.value":"entry.cost"}}
:::::::::

::::::::: component {"id":"pr-duration","props":{"ref":"fact","values":{"label":"Termijn"}},"bind":{"values.value":"entry.duration"}}
:::::::::

::::::::: component {"id":"pr-eligibility","props":{"ref":"fact","values":{"label":"Voor wie"}},"bind":{"values.value":"entry.eligibility"}}
:::::::::

::::::::: component {"id":"pr-channels","props":{"ref":"fact","values":{"label":"Hoe aanvragen"}},"bind":{"values.value":"entry.channels"}}
:::::::::
::::::::

:::::::: box {"id":"pr-bring-box","bind":{"visible":"entry.bring"},"class":"flex flex-col gap-3 px-3 pt-2 sm:px-4"}
::::::::: heading {"id":"pr-bring-h","props":{"level":"2","text":"Wat meebrengen?"},"class":"font-sans text-sm font-semibold text-muted"}
:::::::::

::::::::: repeat {"id":"pr-bring","props":{"source":"list","tag":"ul","path":"entry.bring"},"class":"flex flex-col gap-2"}
:::::::::: box {"id":"pr-bring-item","props":{"tag":"li"},"class":"flex gap-3"}
::::::::::: icon {"id":"pr-bring-icon","props":{"icon":"check"},"attrs":{"aria-hidden":"true"},"class":"mt-1 size-5 shrink-0 text-primary"}
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

::::::: box {"id":"pr-place","props":{"tag":"section"},"attrs":{"aria-labelledby":"#pr-place-h"},"bind":{"visible":"entry.place"},"class":"mt-14 flex flex-col gap-5"}
:::::::: heading {"id":"pr-place-h","props":{"level":"2","text":"Waar?"},"class":"text-2xl"}
::::::::

:::::::: box {"id":"pr-place-card","class":"card-line md:flex-row md:justify-between md:gap-10"}
::::::::: box {"id":"pr-place-text","class":"flex flex-col items-start gap-1"}
:::::::::: link {"id":"pr-place-link","bind":{"label":"entry.place.title","url":"entry.place.url"},"class":"mb-1 font-semibold text-foreground underline decoration-border underline-offset-4 hover:decoration-current"}
::::::::::

:::::::::: paragraph {"id":"pr-place-address","props":{"tag":"p"},"bind":{"text":"entry.place.address"},"class":"whitespace-pre-line text-base"}
::::::::::

:::::::::: link {"id":"pr-place-phone","bind":{"label":"entry.place.phone","url":"tel:{entry.place.phone}","visible":"entry.place.phone"},"class":"text-link text-base font-semibold"}
::::::::::
:::::::::

::::::::: box {"id":"pr-hours-box","class":"flex min-w-0 flex-col gap-2 text-sm md:w-80"}
:::::::::: paragraph {"id":"pr-hours-h","props":{"tag":"p","text":"Openingsuren"},"class":"text-sm font-semibold text-muted"}
::::::::::

:::::::::: component {"id":"pr-hours","props":{"ref":"hours"},"bind":{"values.hours":"entry.place.hours"}}
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
::::::: box {"id":"pr-aside-inner","behavior":{"module":"stick"},"class":"flex flex-col gap-10 stick"}
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
