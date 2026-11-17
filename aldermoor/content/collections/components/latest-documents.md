---
id: 01m9a0rd5tsda369m1cc7tp5bm
title: 'Latest Documents'
status: published
position: 0
category: Lists
description: 'The four newest documents, from the Documents collection.'
synced: false
keywords:
  - publications
  - reports
  - pdf
---

::: box {"id":"lx-ld","props":{"tag":"section"},"attrs":{"aria-labelledby":"#lx-ld-h"},"class":"wrap py-14"}
:::: box {"id":"lx-ld-head","class":"flex flex-wrap items-end justify-between gap-4"}
::::: heading {"id":"lx-ld-h","props":{"level":"2","text":"Latest documents"},"class":"text-2xl"}
:::::

::::: link {"id":"lx-ld-all","props":{"label":"All documents","url":"/documents"},"class":"text-link font-bold"}
:::::
::::

:::: repeat {"id":"lx-ld-list","props":{"source":"entries","collection":"documents","sort":"-published_at","limit":4,"tag":"ul"},"class":"mt-6 flex flex-col border-t border-border"}
::::: box {"id":"lx-ld-item","props":{"tag":"li"},"class":"border-b border-border"}
:::::: component {"id":"lx-ld-row","props":{"ref":"document-row"},"bind":{"values.title":"item.title","values.url":"item.url","values.meta":"{item.kind} · {item.date|date:j F Y}"}}
::::::
:::::
::::
:::
