---
id: 01m7p3g24e9v8cd0ywn1f9k53q
title: 'Komende activiteiten'
status: published
published_at: '2026-11-18T02:14:18+01:00'
position: 31
synced: false
category: Secties
description: 'Een titel en de volgende activiteiten, elk met de datum als kalenderblad. Wat voorbij is, verdwijnt vanzelf.'
keywords:
  - activiteiten
  - agenda
  - kalender
  - infosessies
---

::: box {"id":"ka","props":{"tag":"section"},"attrs":{"aria-labelledby":"#ka-title"},"class":"mx-auto max-w-content px-gutter pt-section"}
:::: box {"id":"ka-head","class":"mb-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-6"}
::::: box {"id":"ka-intro","class":"flex flex-col gap-4"}
:::::: heading {"id":"ka-title","props":{"text":"Activiteiten","level":"2"},"class":"rule"}
::::::
:::::

::::: button {"id":"ka-all","props":{"variant":"secondary","icon":"arrow-right","icon_position":"end","label":"Alle activiteiten","url":"entry:01m7p3g28ph31zyqzvh74hae5q"}}
:::::
::::

:::: repeat {"id":"ka-list","props":{"source":"entries","collection":"events","sort":"starts","limit":3,"where":[{"field":"starts","op":">","value":"{site.today}"}],"tag":"ul","empty":"Er staan nu geen activiteiten gepland."},"class":"grid grid-cols-3 gap-4 max-lg:grid-cols-1"}
::::: box {"id":"ka-item","props":{"tag":"li"}}
:::::: component {"id":"ka-card","props":{"ref":"event-card"},"bind":{"values.title":"item.title","values.day":"item.starts|date:j","values.month":"item.starts|date:M","values.when":"{item.starts|date:l j F}, {item.starts|date:G.i} uur","values.venue":"item.venue","values.audience":"item.audience","values.link":"item.url"}}
::::::
:::::
::::
:::
