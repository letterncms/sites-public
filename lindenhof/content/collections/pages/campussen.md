---
id: 01m7p2kg02mca2s304fb0a4xne
title: 'Onze campussen'
status: published
published_at: '2026-11-18T01:58:43+01:00'
position: 7
summary: 'Onze hoofdcampus en twee campussen waar we je dichter bij huis zien.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"cp","class":"mx-auto max-w-content px-gutter pt-blocks"}
:::: repeat {"id":"cp-list","props":{"tag":"ul","sort":"position","limit":20,"source":"entries","collection":"locations"},"class":"flex flex-col gap-12"}
::::: box {"id":"cp-item","props":{"tag":"li"},"class":"grid grid-cols-12 items-center gap-x-columns gap-y-6 border-b border-border pb-12 last:border-0"}
:::::: image {"id":"cp-photo","props":{"alt":"","sizes":"(min-width: 64rem) 30rem, 100vw","aspect":"3/2"},"bind":{"image":"item.cover"},"class":"leaf col-span-5 max-lg:col-span-full"}
::::::

:::::: box {"id":"cp-text","class":"col-span-7 flex flex-col items-start gap-4 max-lg:col-span-full"}
::::::: link {"id":"cp-a","bind":{"url":"item.url"},"class":"text-foreground no-underline hover:text-primary hover:underline"}
:::::::: heading {"id":"cp-title","props":{"level":"2"},"bind":{"text":"item.title"},"class":"text-3xl"}
::::::::
:::::::

::::::: paragraph {"id":"cp-sum","props":{"tag":"p"},"bind":{"text":"item.summary"},"class":"text-lg text-muted"}
:::::::

::::::: box {"id":"cp-facts","props":{"tag":"dl"},"class":"grid grid-cols-2 gap-x-columns gap-y-4 border-t border-border pt-5 max-sm:grid-cols-1"}
:::::::: box {"id":"cp-f1"}
::::::::: paragraph {"id":"cp-f1-l","props":{"tag":"dt","text":"Adres"},"class":"text-sm font-semibold text-muted"}
:::::::::

::::::::: paragraph {"id":"cp-f1-v","props":{"tag":"dd"},"bind":{"text":"item.address"},"class":"whitespace-pre-line"}
:::::::::
::::::::

:::::::: box {"id":"cp-f2"}
::::::::: paragraph {"id":"cp-f2-l","props":{"tag":"dt","text":"Telefoon"},"class":"text-sm font-semibold text-muted"}
:::::::::

::::::::: box {"id":"cp-f2-v","props":{"tag":"dd"}}
:::::::::: link {"id":"cp-f2-a","bind":{"url":"tel:{item.phone}","label":"item.phone"}}
::::::::::
:::::::::
::::::::

:::::::: box {"id":"cp-f3","class":"col-span-full"}
::::::::: paragraph {"id":"cp-f3-l","props":{"tag":"dt","text":"Open"},"class":"text-sm font-semibold text-muted"}
:::::::::

::::::::: paragraph {"id":"cp-f3-v","props":{"tag":"dd"},"bind":{"text":"item.hours"},"class":"whitespace-pre-line"}
:::::::::
::::::::
:::::::

::::::: button {"id":"cp-more","props":{"icon":"arrow-right","variant":"secondary","icon_position":"end"},"bind":{"url":"item.url","label":"Naar {item.title}"}}
:::::::
::::::
:::::
::::
:::
