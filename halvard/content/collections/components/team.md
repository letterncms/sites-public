---
id: 01m7npd9x8g8e4hhhdejz1f4ks
title: Team
status: published
published_at: '2026-11-17T21:25:36+00:00'
position: 30
synced: false
category: People
description: 'A heading and the doctors who see new patients, as cards linked to their profiles. Change the list’s conditions to show one specialty’s team.'
keywords:
  - doctors
  - people
  - staff
  - profiles
---

::: box {"id":"tm","props":{"tag":"section"},"class":"mx-auto max-w-wide px-gutter pt-section"}
:::: box {"id":"tm-head","class":"mb-8 flex flex-wrap items-end justify-between gap-4"}
::::: heading {"id":"tm-title","props":{"text":"Our team","level":"2"},"class":"text-3xl"}
:::::

::::: button {"id":"tm-all","props":{"label":"Find a doctor","url":"entry:01m7npd9ykcsvmvzmcvcrg02jg","variant":"link","icon":"arrow-right","icon_position":"end"}}
:::::
::::

:::: repeat {"id":"tm-list","props":{"source":"entries","collection":"doctors","sort":"family_name","limit":8,"where":[{"field":"new_patients","op":"=","value":true}],"tag":"ul"},"class":"grid grid-cols-4 gap-columns max-lg:grid-cols-3 max-md:grid-cols-2"}
::::: box {"id":"tm-item","props":{"tag":"li"}}
:::::: component {"id":"tm-card","props":{"ref":"doctor-card"},"bind":{"values.name":"{item.honorific} {item.title}","values.role":"item.role","values.photo":"item.photo","values.link":"item.url","values.new_patients":"item.new_patients"}}
::::::
:::::
::::
:::
