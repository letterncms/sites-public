---
id: 01m7npd9x8g8e4hhhdejz1f4kw
title: 'Landing Page'
status: published
published_at: '2026-11-17T21:25:36+00:00'
position: 33
synced: false
category: Pages
description: 'A whole page to start from: a hero with a photo, quick links, a photo with text, questions and a call to action.'
keywords:
  - page
  - department
  - start
---

::: box {"id":"lp-hero","props":{"tag":"section"},"class":"mx-auto grid max-w-wide grid-cols-12 items-center gap-x-columns gap-y-10 px-gutter pt-10"}
:::: box {"id":"lp-hero-text","class":"col-span-6 flex flex-col items-start gap-6 max-lg:col-span-full"}
::::: paragraph {"id":"lp-eyebrow","props":{"text":"Our care","tag":"p"},"class":"eyebrow"}
:::::

::::: heading {"id":"lp-title","props":{"text":"A title for your page","level":"1"},"class":"text-6xl"}
:::::

::::: paragraph {"id":"lp-lede","props":{"text":"One or two sentences that say who this page is for and what they can do here.","tag":"p"},"class":"lede max-w-[30em]"}
:::::

::::: buttons {"id":"lp-buttons"}
:::::: button {"id":"lp-primary","props":{"label":"Make an appointment","url":"entry:01m7npd9ykcsvmvzmcvcrg02jx","variant":"primary","size":"lg"}}
::::::
:::::
::::

:::: image {"id":"lp-photo","props":{"image":["01m7nh50jfbgjskgxdmde8vw7r"],"aspect":"4/3","priority":true,"sizes":"(min-width: 64rem) 45vw, 100vw"},"class":"col-span-6 overflow-hidden rounded-xl max-lg:col-span-full"}
::::
:::

::: box {"id":"lp-feature","props":{"tag":"section"},"class":"mx-auto max-w-wide px-gutter pt-section"}
:::: box {"id":"lp-feature-in","class":"grid grid-cols-12 gap-x-columns gap-y-10"}
::::: box {"id":"lp-feature-text","class":"col-span-5 flex flex-col gap-4 max-lg:col-span-full"}
:::::: heading {"id":"lp-feature-title","props":{"text":"What we offer","level":"2"}}
::::::

:::::: paragraph {"id":"lp-feature-p","props":{"text":"Tell people what you do, for whom, and what makes your care different.","tag":"p"},"class":"text-lg text-muted"}
::::::
:::::

::::: box {"id":"lp-feature-list","props":{"tag":"ul"},"class":"col-span-7 grid grid-cols-3 gap-x-columns gap-y-8 max-lg:col-span-full max-md:grid-cols-1"}
:::::: box {"id":"lp-f-0","props":{"tag":"li"},"class":"flex flex-col gap-3 border-t border-border pt-6"}
::::::: icon {"id":"lp-f-0-i","props":{"icon":"stethoscope"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-primary"}
:::::::

::::::: heading {"id":"lp-f-0-h","props":{"text":"First appointment","level":"3"},"class":"text-xl"}
:::::::

::::::: paragraph {"id":"lp-f-0-p","props":{"text":"What happens at the first visit.","tag":"p"},"class":"text-muted"}
:::::::
::::::

:::::: box {"id":"lp-f-1","props":{"tag":"li"},"class":"flex flex-col gap-3 border-t border-border pt-6"}
::::::: icon {"id":"lp-f-1-i","props":{"icon":"users-three"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-primary"}
:::::::

::::::: heading {"id":"lp-f-1-h","props":{"text":"One team","level":"3"},"class":"text-xl"}
:::::::

::::::: paragraph {"id":"lp-f-1-p","props":{"text":"Who people will meet.","tag":"p"},"class":"text-muted"}
:::::::
::::::

:::::: box {"id":"lp-f-2","props":{"tag":"li"},"class":"flex flex-col gap-3 border-t border-border pt-6"}
::::::: icon {"id":"lp-f-2-i","props":{"icon":"house"},"attrs":{"aria-hidden":"true"},"class":"size-8 text-primary"}
:::::::

::::::: heading {"id":"lp-f-2-h","props":{"text":"Back home","level":"3"},"class":"text-xl"}
:::::::

::::::: paragraph {"id":"lp-f-2-p","props":{"text":"The care that continues at home.","tag":"p"},"class":"text-muted"}
:::::::
::::::
:::::
::::
:::

::: box {"id":"lp-cta","props":{"tag":"section"},"class":"mx-auto max-w-wide px-gutter pt-section"}
:::: box {"id":"lp-cta-in","class":"scheme-sky flex flex-wrap items-center justify-between gap-8 rounded-xl p-[clamp(1.75rem,4vw,3.5rem)]"}
::::: box {"id":"lp-cta-text","class":"flex flex-col gap-3"}
:::::: heading {"id":"lp-cta-title","props":{"text":"Questions?","level":"2"},"class":"text-3xl"}
::::::

:::::: paragraph {"id":"lp-cta-p","props":{"text":"Call our appointments line, Monday to Friday from 8:00 to 18:00.","tag":"p"},"class":"text-lg text-muted"}
::::::
:::::

::::: button {"id":"lp-cta-call","props":{"variant":"primary","size":"lg","icon":"phone"},"bind":{"label":"Call {globals.hospital.appointments_phone}","url":"tel:{globals.hospital.appointments_phone}"}}
:::::
::::
:::
