---
title: Openingsuren
status: published
position: 0
category: Lijsten
description: 'De openingsuren per dag, en erboven of het nu open is, in de tijd van Brussel. Kort toont alleen of het open is.'
props:
  -
    handle: hours
    type: table
    label: Openingsuren
    header: false
  -
    handle: compact
    type: toggle
    label: Kort
---

::: box {"id":"oh","label":"Openingsuren","behavior":{"module":"open-now"},"bind":{"state:compact":"props.compact"},"class":"flex flex-col gap-2"}
:::: box {"id":"oh-now","class":"hidden items-center gap-2.5 font-semibold in-data-known:flex"}
::::: box {"id":"oh-dot","attrs":{"aria-hidden":"true"},"class":"size-3 shrink-0 rounded-full bg-line in-data-open:bg-success in-data-open:shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-success)_22%,transparent)]"}
:::::

::::: paragraph {"id":"oh-status","props":{"tag":"p","text":"Openingsuren"},"attrs":{"data-status":"","aria-live":"polite"}}
:::::
::::

:::: repeat {"id":"oh-rows","props":{"source":"list","tag":"ul","path":"props.hours.rows"},"attrs":{"data-hours":""},"class":"flex flex-col in-data-compact:hidden"}
::::: box {"id":"oh-row","props":{"tag":"li"},"class":"flex justify-between gap-4 border-b border-border py-2 last:border-0"}
:::::: paragraph {"id":"oh-day","props":{"tag":"span"},"bind":{"text":"item.0"},"class":"font-semibold"}
::::::

:::::: paragraph {"id":"oh-time","props":{"tag":"span"},"bind":{"text":"item.1"},"class":"text-right"}
::::::
:::::
::::
:::
