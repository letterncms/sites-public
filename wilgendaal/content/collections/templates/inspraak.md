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
:::: box {"id":"in-head","class":"page-head"}
::::: box {"id":"in-head-inner","class":"wrap pb-12 md:pb-16"}
:::::: component {"id":"in-crumbs","props":{"ref":"crumbs","values":{"label":"Doe mee","url":"/doe-mee"}}}
::::::

:::::: box {"id":"in-title","class":"mt-8 flex max-w-4xl flex-col gap-5 md:mt-12"}
::::::: box {"id":"in-meta","class":"flex flex-wrap items-center gap-3"}
:::::::: paragraph {"id":"in-state","props":{"tag":"span"},"bind":{"text":"entry.state"},"class":"state text-primary"}
::::::::

:::::::: paragraph {"id":"in-closes","props":{"tag":"span"},"bind":{"text":"Reageren kan tot {entry.closes|date:j F Y}","visible":"entry.closes"},"class":"meta"}
::::::::
:::::::

::::::: heading {"id":"in-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
:::::::

::::::: paragraph {"id":"in-title-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead max-w-2xl text-muted"}
:::::::
::::::
:::::
::::

:::: box {"id":"in-wrap","class":"wrap pt-12 pb-section md:pt-16"}

::::: box {"id":"in-photo","bind":{"visible":"entry.cover"},"class":"frame"}
:::::: image {"id":"in-img","props":{"priority":true,"aspect":"16/9"},"bind":{"image":"entry.cover"},"class":"aspect-[16/9] w-full object-cover"}
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
