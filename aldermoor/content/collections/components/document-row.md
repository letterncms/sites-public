---
id: 01m9a0kpmp71dq1j3zaxr2p0cd
title: 'Document Row'
status: published
position: 0
category: Cards
description: 'A document in a list: its title, kind and date.'
props:
  -
    handle: title
    type: text
    label: Title
    default: 'Annual report 2025'
  -
    handle: meta
    type: text
    label: 'Kind and Date'
    default: 'Report · 3 March 2026'
  -
    handle: url
    type: url
    label: Link
---

::: box {"id":"dr","bind":{"link":"props.url"},"class":"group flex items-start gap-4 py-5 text-foreground no-underline hover:[&_h3]:text-primary hover:[&_h3]:underline"}
:::: icon {"id":"dr-icon","props":{"icon":"file-text"},"class":"mt-1 size-7 shrink-0 text-primary"}
::::

:::: box {"id":"dr-body","class":"flex flex-col gap-1"}
::::: heading {"id":"dr-title","props":{"level":"3"},"bind":{"text":"props.title"},"class":"text-lg"}
:::::

::::: paragraph {"id":"dr-meta","props":{"tag":"p"},"bind":{"text":"props.meta"},"class":"meta"}
:::::
::::
:::
