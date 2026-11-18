---
id: 01m7p3g24e9v8cd0ywn1f9k53n
title: Team
status: published
published_at: '2026-11-18T02:14:18+01:00'
position: 29
synced: false
category: Secties
description: 'Een titel en de zorgverleners die nieuwe patiënten aannemen, als kaarten met foto.'
keywords:
  - team
  - artsen
  - zorgverleners
  - mensen
---

::: box {"id":"tm","props":{"tag":"section"},"attrs":{"aria-labelledby":"#tm-title"},"class":"mx-auto max-w-content px-gutter pt-section"}
:::: box {"id":"tm-head","class":"mb-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-6"}
::::: box {"id":"tm-intro","class":"flex flex-col gap-4"}
:::::: heading {"id":"tm-title","props":{"text":"Ons team","level":"2"},"class":"rule"}
::::::
:::::

::::: button {"id":"tm-all","props":{"variant":"secondary","icon":"arrow-right","icon_position":"end","label":"Zoek een zorgverlener","url":"entry:01m7p3g28ph31zyqzvh74hae5f"}}
:::::
::::

:::: repeat {"id":"tm-list","props":{"source":"entries","collection":"doctors","sort":"family_name","limit":8,"where":[{"field":"new_patients","op":"=","value":true}],"tag":"ul"},"class":"grid grid-cols-4 gap-columns max-lg:grid-cols-3 max-md:grid-cols-2"}
::::: box {"id":"tm-item","props":{"tag":"li"}}
:::::: component {"id":"tm-card","props":{"ref":"doctor-card"},"bind":{"values.name":"{item.honorific} {item.title}","values.role":"item.role","values.photo":"item.photo","values.link":"item.url","values.new_patients":"item.new_patients"}}
::::::
:::::
::::
:::
