---
id: 01m9a0wgcv8yw429ra5s8v8vp0
title: Inspraak
status: published
position: 0
collections:
  - participation
description: 'Een inspraaktraject: of het open is en tot wanneer, het plan, en het formulier om te reageren.'
---

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: component {"id":"t-head","props":{"ref":"page-head","values":{"label":"Doe mee","url":"/doe-mee"}},"bind":{"values.title":"entry.title","values.lead":"entry.summary","values.tag":"entry.state","values.meta":"Inspraak tot {entry.closes|date:j F Y}"}}
::::

:::: box {"id":"in-wrap","class":"wrap pt-12 pb-section md:pt-16"}
::::: box {"id":"in-photo","bind":{"visible":"entry.cover"},"class":"photo"}
:::::: image {"id":"in-img","props":{"priority":true,"aspect":"16/9","sizes":"(min-width: 80rem) 76rem, 100vw"},"bind":{"image":"entry.cover"},"class":"aspect-[16/9] w-full object-cover"}
::::::
:::::

::::: outlet {"id":"in-outlet","props":{"wrap":true,"prose":true},"class":"mx-auto mt-14 max-w-prose"}
:::::

::::: box {"id":"in-foot","class":"mx-auto mt-14 max-w-prose border-t border-border pt-6"}
:::::: paragraph {"id":"in-updated","props":{"tag":"p"},"bind":{"text":"Laatst bijgewerkt op {entry.updated|date:j F Y}","visible":"entry.updated"},"class":"meta"}
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
