---
id: 01m9a0jnjk3qkzsgmvtw7dbbsm
title: Document
status: published
position: 0
collections:
  - documents
description: 'A document: its kind and date, the file to download and what it is about.'
---

::: component {"id":"t-alert","props":{"ref":"alert"}}
:::

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: box {"id":"dc-wrap","class":"wrap pt-6 pb-section"}
::::: box {"id":"dc-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Breadcrumb"}}
:::::: box {"id":"dc-crumbs-ol","props":{"tag":"ol"},"class":"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"}
::::::: box {"id":"dc-crumbs-li-home","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"dc-crumbs-home","props":{"label":"Home","url":"/"},"class":"text-link text-foreground"}
::::::::
:::::::

::::::: box {"id":"dc-crumbs-li0","props":{"tag":"li"},"class":"flex items-center gap-2 after:text-muted after:content-['›'] last:after:hidden"}
:::::::: link {"id":"dc-crumbs-l0","props":{"label":"Documents","url":"/documents"},"class":"text-link text-foreground"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"dc-title","class":"mt-8 flex max-w-prose flex-col gap-4"}
:::::: box {"id":"dc-meta","class":"flex flex-wrap items-center gap-3"}
::::::: paragraph {"id":"dc-kind","props":{"tag":"span"},"bind":{"text":"entry.kind"},"class":"tag"}
:::::::

::::::: paragraph {"id":"dc-date","props":{"tag":"time"},"bind":{"text":"Published {entry.date|date:j F Y}"},"class":"meta"}
:::::::
::::::

:::::: heading {"id":"dc-title-h1","props":{"level":"1"},"bind":{"text":"entry.title"}}
::::::

:::::: paragraph {"id":"dc-title-lead","props":{"tag":"p"},"bind":{"text":"entry.summary","visible":"entry.summary"},"class":"lead"}
::::::
:::::

::::: box {"id":"dc-download","bind":{"visible":"entry.file"},"class":"mt-8 flex max-w-prose flex-col gap-3"}
:::::: file {"id":"dc-file","bind":{"file":"entry.file"},"class":"rounded-xl border-2 border-border bg-raised p-5 text-foreground no-underline transition-colors hover:border-primary"}
::::::

:::::: paragraph {"id":"dc-formats","props":{"tag":"p"},"bind":{"text":"entry.format_note|default:This PDF is tagged for screen readers. Need it in large print, Braille, audio or Easy Read? Email info@aldermoor.example or call 01632 960000."},"class":"meta"}
::::::
:::::

::::: outlet {"id":"dc-outlet","props":{"wrap":true,"prose":true},"class":"mt-10 max-w-prose"}
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
