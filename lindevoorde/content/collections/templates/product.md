---
id: 01m9a0yye6vcbbwzy6dmdk62mx
title: Product
status: published
position: 0
collections:
  - products
description: 'Een product: kostprijs, termijn, voor wie en hoe aanvragen, wat meebrengen, de knop om te starten, dan de details.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"pr-wrap","class":"wrap pt-8 pb-section"}
::::: box {"id":"pr-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Kruimelpad"}}
:::::: box {"id":"pr-crumbs-ol","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::::: box {"id":"pr-crumbs-li-home","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['/'] last:after:hidden"}
:::::::: link {"id":"pr-crumbs-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::::
:::::::

::::::: box {"id":"pr-crumbs-li0","props":{"tag":"li"},"bind":{"visible":"entry.topic"},"class":"flex items-center gap-2 after:text-muted after:content-['/'] last:after:hidden"}
:::::::: link {"id":"pr-crumbs-l0","bind":{"label":"entry.topic.title","url":"entry.topic.url"},"class":"text-link text-foreground"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"pr-grid","class":"lg:grid lg:grid-cols-12 lg:gap-x-16"}
:::::: box {"id":"pr-main","class":"min-w-0 lg:col-span-8"}
::::::: box {"id":"pr-title","class":"mt-10 flex flex-col items-start gap-5"}
:::::::: paragraph {"id":"pr-online","props":{"tag":"span","text":"Online aan te vragen"},"bind":{"visible":"entry.online"},"class":"tag-accent"}
::::::::

:::::::: heading {"id":"pr-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::::

:::::::: paragraph {"id":"pr-title-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead max-w-2xl text-muted"}
::::::::
:::::::

::::::: box {"id":"pr-panel","class":"panel mt-10 flex flex-col gap-8"}
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

:::::::: box {"id":"pr-bring-box","bind":{"visible":"entry.bring"},"class":"flex flex-col gap-3 border-t border-border pt-6"}
::::::::: heading {"id":"pr-bring-h","props":{"level":"2","text":"Wat meebrengen?"},"class":"text-base font-semibold text-muted"}
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

:::::::: button {"id":"pr-action","props":{"label":"Online aanvragen","url":"#","variant":"primary","size":"lg","icon":"arrow-right","icon_position":"end"},"bind":{"label":"entry.action_label|default:Online aanvragen","url":"entry.action.url","visible":"entry.action.url"},"class":"self-start"}
::::::::
:::::::

::::::: outlet {"id":"pr-outlet","props":{"wrap":true,"prose":true},"class":"mt-14"}
:::::::

::::::: box {"id":"pr-place","props":{"tag":"section"},"bind":{"visible":"entry.place"},"class":"mt-14 flex flex-col gap-5"}
:::::::: heading {"id":"pr-place-h","props":{"level":"2","text":"Waar?"},"class":"text-2xl"}
::::::::

:::::::: box {"id":"pr-place-card","class":"card-line md:flex-row md:justify-between md:gap-10"}
::::::::: box {"id":"pr-place-text","class":"flex flex-col items-start gap-1"}
:::::::::: link {"id":"pr-place-link","bind":{"label":"entry.place.title","url":"entry.place.url"},"class":"text-link text-xl font-semibold text-primary"}
::::::::::

:::::::::: paragraph {"id":"pr-place-address","props":{"tag":"p"},"bind":{"text":"entry.place.address"},"class":"whitespace-pre-line text-base"}
::::::::::

:::::::::: link {"id":"pr-place-phone","bind":{"label":"entry.place.phone","url":"tel:{entry.place.phone}","visible":"entry.place.phone"},"class":"text-link text-base font-semibold"}
::::::::::
:::::::::

::::::::: box {"id":"pr-hours-box","props":{"tag":"details"},"class":"min-w-0 md:w-80"}
:::::::::: box {"id":"pr-hours-sum","props":{"tag":"summary"},"class":"cursor-pointer font-semibold text-primary"}
::::::::::: paragraph {"id":"pr-hours-sum-text","props":{"tag":"span","text":"Openingsuren"}}
:::::::::::
::::::::::

:::::::::: repeat {"id":"pr-hours","props":{"source":"list","tag":"ul","path":"entry.place.hours.rows"},"class":"flex flex-col"}
::::::::::: box {"id":"pr-hours-row","props":{"tag":"li"},"class":"flex justify-between gap-4 border-b border-border py-2 text-base last:border-0"}
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

:::::: box {"id":"pr-aside","props":{"tag":"aside"},"attrs":{"aria-label":"Hulp en verwante producten"},"class":"lg:col-span-4 max-lg:mt-16"}
::::::: box {"id":"pr-aside-inner","class":"flex flex-col gap-10 lg:sticky lg:top-8"}
:::::::: box {"id":"pr-toc","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#pr-toc-h"},"class":"flex flex-col gap-3"}
::::::::: heading {"id":"pr-toc-h","props":{"level":"2","text":"Op deze pagina"},"class":"text-sm font-semibold text-muted"}
:::::::::

::::::::: repeat {"id":"pr-toc-list","props":{"source":"headings","tag":"ul","depth":2},"class":"flex flex-col"}
:::::::::: box {"id":"pr-toc-item","props":{"tag":"li"}}
::::::::::: link {"id":"pr-toc-link","bind":{"label":"item.text","url":"item.url"},"class":"block border-l-2 border-border py-1.5 pl-4 text-base text-foreground no-underline hover:border-primary hover:text-primary"}
:::::::::::
::::::::::
:::::::::
::::::::

:::::::: box {"id":"pr-help","class":"panel flex flex-col items-start gap-3 p-7 md:p-7"}
::::::::: heading {"id":"pr-help-h","props":{"level":"2","text":"Hulp nodig?"},"class":"text-xl"}
:::::::::

::::::::: paragraph {"id":"pr-help-text","props":{"tag":"p","text":"Bel ons of stel je vraag online. We helpen je graag verder."},"class":"text-base text-muted"}
:::::::::

::::::::: link {"id":"pr-help-phone","bind":{"label":"globals.city.phone","url":"tel:{globals.city.phone_link}"},"class":"text-link text-xl font-semibold text-primary"}
:::::::::

::::::::: link {"id":"pr-help-contact","props":{"label":"Stel je vraag","url":"/contact"},"class":"arrow-link"}
:::::::::
::::::::

:::::::: box {"id":"pr-rel","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#pr-rel-h"},"class":"flex flex-col gap-3"}
::::::::: heading {"id":"pr-rel-h","props":{"level":"2","text":"Ook nuttig"},"class":"text-sm font-semibold text-muted"}
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
