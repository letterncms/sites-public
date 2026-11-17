---
id: 01m7npd9x8g8e4hhhdejz1f4kv
title: 'Upcoming Events'
status: published
published_at: '2026-11-17T21:25:36+00:00'
position: 32
synced: false
category: Lists
description: 'A heading and the next events, each with its date as a calendar leaf.'
keywords:
  - events
  - classes
  - agenda
  - calendar
---

::: box {"id":"ue","props":{"tag":"section"},"class":"mx-auto max-w-wide px-gutter pt-section"}
:::: box {"id":"ue-head","class":"mb-8 flex flex-wrap items-end justify-between gap-4"}
::::: heading {"id":"ue-title","props":{"text":"Events and classes","level":"2"},"class":"text-3xl"}
:::::

::::: button {"id":"ue-all","props":{"label":"All events","url":"entry:01m7npd9ykcsvmvzmcvcrg02jn","variant":"link","icon":"arrow-right","icon_position":"end"}}
:::::
::::

:::: repeat {"id":"ue-list","props":{"source":"entries","collection":"events","sort":"starts","limit":3,"where":[{"field":"starts","op":">","value":"{site.today}"}],"tag":"ul","empty":"No events planned right now."},"class":"grid grid-cols-3 gap-4 max-lg:grid-cols-1"}
::::: box {"id":"ue-item","props":{"tag":"li"}}
:::::: component {"id":"ue-card","props":{"ref":"event-card"},"bind":{"values.title":"item.title","values.day":"item.starts|date:j","values.month":"item.starts|date:M","values.when":"item.starts|date:l H:i","values.venue":"item.venue","values.audience":"item.audience","values.link":"item.url"}}
::::::
:::::
::::
:::
