---
id: 01m9a0kxng0g5tarffsgcdd6v7
title: Consultation
status: published
position: 0
collections:
  - consultations
description: 'A consultation: whether it is open and until when, the plan, and the form to respond.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"cs-wrap","class":"wrap pt-6 pb-section"}
::::: box {"id":"cs-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
:::::: box {"id":"cs-crumbs-ol","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::::: box {"id":"cs-crumbs-li-home","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"cs-crumbs-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::::
:::::::

::::::: box {"id":"cs-crumbs-li0","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"cs-crumbs-l0","props":{"label":"Have your say","url":"/have-your-say"},"class":"text-link text-foreground"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"cs-title","class":"mt-8 flex max-w-prose flex-col gap-4"}
:::::: box {"id":"cs-meta","class":"flex flex-wrap items-center gap-3"}
::::::: paragraph {"id":"cs-state","props":{"tag":"span"},"bind":{"text":"entry.state"},"class":"state text-primary"}
:::::::

::::::: paragraph {"id":"cs-closes","props":{"tag":"span"},"bind":{"text":"Closes {entry.closes|date:j F Y}","visible":"entry.closes"},"class":"meta"}
:::::::
::::::

:::::: heading {"id":"cs-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::

:::::: paragraph {"id":"cs-title-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead"}
::::::
:::::

::::: box {"id":"cs-photo","bind":{"visible":"entry.cover"},"class":"photo mt-10"}
:::::: image {"id":"cs-img","props":{"priority":true,"aspect":"16/9"},"bind":{"image":"entry.cover"},"class":"aspect-[16/9] w-full object-cover"}
::::::
:::::

::::: outlet {"id":"cs-outlet","props":{"wrap":true,"prose":true},"class":"mt-10 max-w-prose"}
:::::

::::: box {"id":"cs-foot","class":"mt-12 max-w-prose border-t border-border pt-6"}
:::::: paragraph {"id":"cs-updated","props":{"tag":"p"},"bind":{"text":"Last updated {entry.updated|date:j F Y}","visible":"entry.updated"},"class":"meta"}
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
