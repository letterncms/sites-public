---
id: 01m7npd9ykcsvmvzmcvcrg02jp
title: Careers
status: published
published_at: '2026-11-17T21:25:37+00:00'
position: 8
summary: 'Work where your care counts. Find a vacancy in nursing, medicine, allied health or support.'
template: default
---

::: box {"id":"ca-hero","class":"mx-auto max-w-wide px-gutter grid grid-cols-12 items-center gap-x-columns gap-y-10 pt-10 max-md:pt-6"}
:::: box {"id":"ca-hero-text","class":"col-span-6 flex flex-col items-start gap-6 max-lg:col-span-full"}
::::: paragraph {"id":"ca-eyebrow","props":{"tag":"p","text":"Careers at Halvard"},"class":"eyebrow"}
:::::

::::: heading {"id":"ca-title","props":{"text":"Work where your care counts","level":"1"},"class":"text-6xl"}
:::::

::::: paragraph {"id":"ca-lede","props":{"tag":"p","text":"Nurses, doctors, therapists, technicians, cooks and porters: 1,900 colleagues who make a difference for the valley, every day and every night."},"class":"lede max-w-[32em]"}
:::::

::::: buttons {"id":"ca-hero-b"}
:::::: button {"id":"ca-hero-jobs","props":{"url":"#vacancies","icon":"arrow-down","size":"lg","label":"See our vacancies","variant":"primary","icon_position":"end"}}
::::::

:::::: button {"id":"ca-hero-open","props":{"url":"entry:01m7npd9xq4e22kezx4b3w3p8q","size":"lg","label":"Come to our open evening","variant":"secondary"}}
::::::
:::::
::::

:::: image {"id":"ca-hero-photo","props":{"image":["01m7nh50hmnbcddfdz22zhc14n"],"sizes":"(min-width: 64rem) 45vw, 100vw","aspect":"4/3","priority":true},"class":"col-span-6 overflow-hidden rounded-xl max-lg:col-span-full"}
::::
:::

::: box {"id":"ca-why","props":{"tag":"section"},"attrs":{"aria-labelledby":"#ca-why-title"},"class":"mx-auto max-w-wide px-gutter pt-section"}
:::: heading {"id":"ca-why-title","props":{"text":"Why people stay","level":"2"},"class":"mb-10"}
::::

:::: box {"id":"ca-why-list","props":{"tag":"ul"},"class":"grid grid-cols-3 gap-4 max-lg:grid-cols-1"}
::::: box {"id":"ca-why-0","props":{"tag":"li"},"class":"tile scheme-sky flex flex-col gap-3"}
:::::: icon {"id":"ca-why-0-i","props":{"icon":"graduation-cap"},"attrs":{"aria-hidden":"true"},"class":"size-9"}
::::::

:::::: heading {"id":"ca-why-0-h","props":{"text":"Keep learning","level":"3"}}
::::::

:::::: paragraph {"id":"ca-why-0-p","props":{"tag":"p","text":"Our academy offers more than 200 courses a year, and time in your rota to follow them."},"class":"text-muted"}
::::::
:::::

::::: box {"id":"ca-why-1","props":{"tag":"li"},"class":"tile scheme-mint flex flex-col gap-3"}
:::::: icon {"id":"ca-why-1-i","props":{"icon":"users-three"},"attrs":{"aria-hidden":"true"},"class":"size-9"}
::::::

:::::: heading {"id":"ca-why-1-h","props":{"text":"Teams that know each other","level":"3"}}
::::::

:::::: paragraph {"id":"ca-why-1-p","props":{"tag":"p","text":"Small, steady teams on every ward, with a buddy for your first three months."},"class":"text-muted"}
::::::
:::::

::::: box {"id":"ca-why-2","props":{"tag":"li"},"class":"tile scheme-peach flex flex-col gap-3"}
:::::: icon {"id":"ca-why-2-i","props":{"icon":"sun-horizon"},"attrs":{"aria-hidden":"true"},"class":"size-9"}
::::::

:::::: heading {"id":"ca-why-2-h","props":{"text":"Room for your life","level":"3"}}
::::::

:::::: paragraph {"id":"ca-why-2-p","props":{"tag":"p","text":"Self-rostering on most wards, help with childcare, and part-time work in every role."},"class":"text-muted"}
::::::
:::::
::::
:::

::: box {"id":"ca-jobs","props":{"tag":"section"},"attrs":{"aria-labelledby":"#ca-jobs-title"},"class":"mx-auto max-w-wide px-gutter pt-section"}
:::: heading {"id":"ca-jobs-title","props":{"text":"Vacancies","level":"2"},"anchor":"vacancies","class":"mb-8"}
::::

:::: list-filter {"id":"ca-filter","props":{"status":":count of :total vacancies"}}
::::: box {"id":"ca-bar","class":"mb-8 flex flex-col gap-5 rounded-lg bg-surface p-6 max-md:p-4"}
:::::: filter-search {"id":"ca-search","props":{"label":"Search vacancies","placeholder":"For example: nurse, MRI"},"class":"w-full max-w-md [&_.cms-input]:h-12 [&_.cms-input]:rounded-full [&_.cms-input]:px-5"}
::::::

:::::: filter-choice {"id":"ca-field","props":{"look":"chips","facet":"field","label":"Job family","all_label":"All"}}
::::::
:::::

::::: repeat {"id":"ca-list","props":{"tag":"ul","sort":"-published_at","limit":100,"source":"entries","filter_by":"item.field","search_in":"item.title, item.department, item.summary","collection":"jobs"},"class":"flex flex-col border-t border-border"}
:::::: box {"id":"ca-job","props":{"tag":"li"}}
::::::: link {"id":"ca-job-a","bind":{"url":"item.url"},"class":"group flex items-center gap-6 border-b border-border py-6 no-underline"}
:::::::: box {"id":"ca-job-text","class":"flex flex-col gap-1"}
::::::::: paragraph {"id":"ca-job-dept","props":{"tag":"span"},"bind":{"text":"item.department"},"class":"text-sm font-semibold text-primary"}
:::::::::

::::::::: paragraph {"id":"ca-job-title","props":{"tag":"span"},"bind":{"text":"item.title"},"class":"text-xl font-semibold tracking-snug text-foreground group-hover:text-primary"}
:::::::::

::::::::: paragraph {"id":"ca-job-meta","props":{"tag":"span"},"bind":{"text":"{item.hours} · {item.contract} · {item.salary}"},"class":"text-[0.9375rem] text-muted"}
:::::::::
::::::::

:::::::: icon {"id":"ca-job-arrow","props":{"icon":"arrow-right"},"attrs":{"aria-hidden":"true"},"class":"ml-auto size-6 shrink-0 text-muted transition-transform group-hover:translate-x-0.5"}
::::::::
:::::::
::::::
:::::

::::: filter-empty {"id":"ca-empty"}
:::::: box {"id":"ca-empty-in","class":"flex flex-col items-center gap-3 rounded-lg border border-dashed border-border px-6 py-16 text-center"}
::::::: icon {"id":"ca-empty-i","props":{"icon":"magnifying-glass"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-muted"}
:::::::

::::::: paragraph {"id":"ca-empty-t","props":{"tag":"p","text":"No vacancy matches your search right now. Send us an open application instead."},"class":"text-lg text-muted"}
:::::::
::::::
:::::
::::
:::

::: box {"id":"ca-open","props":{"tag":"section"},"attrs":{"aria-labelledby":"#ca-open-title"},"class":"mx-auto max-w-wide px-gutter pt-section"}
:::: box {"id":"ca-open-in","class":"scheme-lilac flex flex-wrap items-center justify-between gap-8 rounded-xl p-[clamp(1.75rem,4vw,3.5rem)]"}
::::: box {"id":"ca-open-text","class":"flex flex-col gap-3"}
:::::: heading {"id":"ca-open-title","props":{"text":"Nothing for you yet?","level":"2"},"class":"text-3xl"}
::::::

:::::: paragraph {"id":"ca-open-p","props":{"tag":"p","text":"Send us an open application, and we will let you know when a job comes up that fits you."},"class":"text-lg text-muted max-w-[36em]"}
::::::
:::::

::::: buttons {"id":"ca-open-buttons"}
:::::: button {"id":"ca-open-b","props":{"url":"entry:01m7npd9ykcsvmvzmcvcrg02js","size":"lg","label":"Send an open application","variant":"primary"}}
::::::
:::::
::::
:::
