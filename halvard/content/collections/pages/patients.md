---
id: 01m7nkejakn16aqnk5d5ryx9ke
title: 'Patients and visitors'
status: published
published_at: '2026-11-17T20:33:52+00:00'
position: 5
summary: 'Everything you need for an appointment, a stay or a visit.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"pv","class":"mx-auto max-w-wide px-gutter pt-blocks"}
:::: repeat {"id":"pv-list","props":{"of":"entry","tag":"ul","source":"children"},"class":"grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1"}
::::: box {"id":"pv-item","props":{"tag":"li"}}
:::::: link {"id":"pv-a","bind":{"url":"item.url"},"class":"card-link group flex h-full flex-col gap-3 p-6"}
::::::: heading {"id":"pv-title","props":{"level":"2"},"bind":{"text":"item.title"},"class":"text-xl group-hover:text-primary"}
:::::::

::::::: paragraph {"id":"pv-summary","props":{"tag":"span"},"bind":{"text":"item.summary"},"class":"text-[0.9375rem] leading-[1.5] text-muted"}
:::::::

::::::: icon {"id":"pv-arrow","props":{"icon":"arrow-right"},"attrs":{"aria-hidden":"true"},"class":"mt-auto size-5 text-primary transition-transform group-hover:translate-x-0.5"}
:::::::
::::::
:::::
::::
:::

::: box {"id":"pv-bring","props":{"tag":"section"},"attrs":{"aria-labelledby":"#pv-bring-title"},"class":"mx-auto max-w-wide px-gutter pt-section"}
:::: box {"id":"pv-bring-in","class":"scheme-surface grid grid-cols-12 items-center gap-x-columns gap-y-8 rounded-xl p-[clamp(1.75rem,4vw,3.5rem)]"}
::::: box {"id":"pv-bring-text","class":"col-span-5 flex flex-col gap-4 max-lg:col-span-full"}
:::::: paragraph {"id":"pv-bring-eyebrow","props":{"tag":"p","text":"Before every visit"},"class":"eyebrow"}
::::::

:::::: heading {"id":"pv-bring-title","props":{"text":"What to bring","level":"2"}}
::::::

:::::: paragraph {"id":"pv-bring-p","props":{"tag":"p","text":"With these with you, checking in takes a minute."},"class":"lede"}
::::::
:::::

::::: box {"id":"pv-bring-list","props":{"tag":"ul"},"class":"col-span-7 grid grid-cols-2 gap-3 max-lg:col-span-full max-md:grid-cols-1"}
:::::: box {"id":"pv-b-0","props":{"tag":"li"},"class":"flex items-start gap-4 rounded-lg bg-background p-5"}
::::::: icon {"id":"pv-b-0-i","props":{"icon":"identification-card"},"attrs":{"aria-hidden":"true"},"class":"size-7 shrink-0 text-primary"}
:::::::

::::::: box {"id":"pv-b-0-t","class":"flex flex-col gap-0.5"}
:::::::: paragraph {"id":"pv-b-0-h","props":{"tag":"p","text":"Your ID"},"class":"font-semibold"}
::::::::

:::::::: paragraph {"id":"pv-b-0-p","props":{"tag":"p","text":"A passport, identity card or driving licence."},"class":"text-[0.9375rem] text-muted"}
::::::::
:::::::
::::::

:::::: box {"id":"pv-b-1","props":{"tag":"li"},"class":"flex items-start gap-4 rounded-lg bg-background p-5"}
::::::: icon {"id":"pv-b-1-i","props":{"icon":"credit-card"},"attrs":{"aria-hidden":"true"},"class":"size-7 shrink-0 text-primary"}
:::::::

::::::: box {"id":"pv-b-1-t","class":"flex flex-col gap-0.5"}
:::::::: paragraph {"id":"pv-b-1-h","props":{"tag":"p","text":"Your insurance card"},"class":"font-semibold"}
::::::::

:::::::: paragraph {"id":"pv-b-1-p","props":{"tag":"p","text":"Or your European Health Insurance Card."},"class":"text-[0.9375rem] text-muted"}
::::::::
:::::::
::::::

:::::: box {"id":"pv-b-2","props":{"tag":"li"},"class":"flex items-start gap-4 rounded-lg bg-background p-5"}
::::::: icon {"id":"pv-b-2-i","props":{"icon":"file-text"},"attrs":{"aria-hidden":"true"},"class":"size-7 shrink-0 text-primary"}
:::::::

::::::: box {"id":"pv-b-2-t","class":"flex flex-col gap-0.5"}
:::::::: paragraph {"id":"pv-b-2-h","props":{"tag":"p","text":"Your referral letter"},"class":"font-semibold"}
::::::::

:::::::: paragraph {"id":"pv-b-2-p","props":{"tag":"p","text":"If your specialty needs one."},"class":"text-[0.9375rem] text-muted"}
::::::::
:::::::
::::::

:::::: box {"id":"pv-b-3","props":{"tag":"li"},"class":"flex items-start gap-4 rounded-lg bg-background p-5"}
::::::: icon {"id":"pv-b-3-i","props":{"icon":"pill"},"attrs":{"aria-hidden":"true"},"class":"size-7 shrink-0 text-primary"}
:::::::

::::::: box {"id":"pv-b-3-t","class":"flex flex-col gap-0.5"}
:::::::: paragraph {"id":"pv-b-3-h","props":{"tag":"p","text":"A list of your medicines"},"class":"font-semibold"}
::::::::

:::::::: paragraph {"id":"pv-b-3-p","props":{"tag":"p","text":"Or the medicines themselves, in their boxes."},"class":"text-[0.9375rem] text-muted"}
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"pv-help","props":{"tag":"section"},"attrs":{"aria-labelledby":"#pv-help-title"},"class":"mx-auto max-w-wide px-gutter pt-section"}
:::: box {"id":"pv-help-in","class":"scheme-mint flex flex-wrap items-center justify-between gap-8 rounded-xl p-[clamp(1.75rem,4vw,3.5rem)]"}
::::: box {"id":"pv-help-text","class":"flex flex-col gap-3"}
:::::: heading {"id":"pv-help-title","props":{"text":"Need help finding your way?","level":"2"},"class":"text-3xl"}
::::::

:::::: paragraph {"id":"pv-help-p","props":{"tag":"p","text":"Volunteers in the main hall can walk with you to your appointment. Ask at reception, or call us before you come."},"class":"text-lg text-muted max-w-[36em]"}
::::::
:::::

::::: buttons {"id":"pv-help-buttons"}
:::::: button {"id":"pv-help-here","props":{"url":"entry:01m7nkejakn16aqnk5d5ryx9kt","size":"lg","label":"Getting here","variant":"primary"}}
::::::

:::::: button {"id":"pv-help-contact","props":{"url":"entry:01m7nkejakn16aqnk5d5ryx9km","size":"lg","label":"Contact us","variant":"secondary"}}
::::::
:::::
::::
:::
