---
title: Cijfer
status: published
position: 0
category: Tekst
description: 'Een groot cijfer onder een lijn, met in een zin waarover het gaat.'
props:
  -
    handle: number
    type: text
    label: Cijfer
    default: '38.400'
  -
    handle: label
    type: text
    label: Waarover
    default: inwoners
---

::: box {"id":"st","class":"flex flex-col gap-2 border-t-2 border-primary pt-5"}
:::: paragraph {"id":"st-number","props":{"tag":"p"},"bind":{"text":"props.number"},"class":"text-4xl font-semibold text-primary"}
::::

:::: paragraph {"id":"st-label","props":{"tag":"p"},"bind":{"text":"props.label"},"class":"text-base"}
::::
:::
