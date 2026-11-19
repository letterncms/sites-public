---
title: Feit
status: published
position: 0
category: Lijsten
description: 'Eén feit in een lijst: wat het is en de waarde, eventueel met een icoon of als link. In een lijst met de stijl facts staat het als tegel, met details onder elkaar, elk met zijn icoon.'
props:
  -
    handle: label
    type: text
    label: Wat
    default: Kostprijs
  -
    handle: value
    type: textarea
    label: Waarde
    default: 'Gratis'
  -
    handle: url
    type: url
    label: Link
  -
    handle: icon
    type: text
    label: Icoon
---

::: box {"id":"fa","label":"Feit","bind":{"visible":"props.value"},"class":"fact"}
:::: box {"id":"fa-dt","props":{"tag":"dt"}}
::::: icon {"id":"fa-icon","bind":{"icon":"props.icon","visible":"props.icon"},"attrs":{"aria-hidden":"true"}}
:::::

::::: paragraph {"id":"fa-label","props":{"tag":"span"},"bind":{"text":"props.label"}}
:::::
::::

:::: paragraph {"id":"fa-value","props":{"tag":"dd"},"bind":{"text":"props.value","hidden":"props.url"}}
::::

:::: box {"id":"fa-link-dd","props":{"tag":"dd"},"bind":{"visible":"props.url"}}
::::: link {"id":"fa-link","bind":{"label":"props.value","url":"props.url"},"class":"text-link break-all"}
:::::
::::
:::
