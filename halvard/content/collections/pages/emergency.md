---
id: 01m7npd9ykcsvmvzmcvcrg02jj
title: 'Emergency department'
status: published
published_at: '2026-11-17T21:25:37+00:00'
position: 4
summary: 'Open day and night, every day of the year. In a life-threatening emergency, call 112.'
template: default
---

::: box {"id":"er-hero","props":{"tag":"header"},"class":"scheme-emergency"}
:::: box {"id":"er-hero-in","class":"mx-auto grid max-w-wide grid-cols-12 items-center gap-x-columns gap-y-8 px-gutter py-14 max-md:py-10"}
::::: box {"id":"er-hero-text","class":"col-span-7 flex flex-col items-start gap-6 max-lg:col-span-full"}
:::::: box {"id":"er-badge","class":"inline-flex items-center gap-2 rounded-full bg-black/20 px-3.5 py-1.5 text-sm font-semibold"}
::::::: icon {"id":"er-badge-i","props":{"icon":"clock"},"attrs":{"aria-hidden":"true"},"class":"size-5"}
:::::::

::::::: paragraph {"id":"er-badge-t","props":{"tag":"span","text":"Open day and night"}}
:::::::
::::::

:::::: heading {"id":"er-title","props":{"text":"Emergency department","level":"1"},"class":"text-6xl"}
::::::

:::::: paragraph {"id":"er-lede","props":{"tag":"p","text":"For accidents and sudden, serious illness, every hour of every day. A nurse sees you within fifteen minutes of arriving."},"class":"max-w-[32em] text-xl leading-[1.5]"}
::::::

:::::: buttons {"id":"er-actions","class":"pt-2"}
::::::: button {"id":"er-call","props":{"url":"tel:112","icon":"phone","size":"lg","label":"Call 112","variant":"light"},"bind":{"url":"tel:{globals.hospital.emergency_number}","label":"Call {globals.hospital.emergency_number}"}}
:::::::

::::::: button {"id":"er-route","props":{"url":"#er-where","size":"lg","label":"Find the entrance","variant":"secondary"},"class":"border-white/50 text-white hover:border-white hover:bg-white/10"}
:::::::
::::::
:::::

::::: image {"id":"er-photo","props":{"image":["01m7nh50kv3enjtk7374m636bz"],"sizes":"(min-width: 64rem) 36vw, 100vw","aspect":"4/3","priority":true},"class":"col-span-5 overflow-hidden rounded-xl max-lg:hidden"}
:::::
::::
:::

::: box {"id":"er-when","props":{"tag":"section"},"attrs":{"aria-labelledby":"#er-when-title"},"class":"mx-auto max-w-wide px-gutter pt-section"}
:::: heading {"id":"er-when-title","props":{"text":"Where to go","level":"2"},"class":"mb-8"}
::::

:::: box {"id":"er-when-grid","props":{"tag":"ul"},"class":"grid grid-cols-3 gap-4 max-lg:grid-cols-1"}
::::: box {"id":"er-w-1","props":{"tag":"li"},"class":"tile scheme-emergency flex flex-col gap-3"}
:::::: icon {"id":"er-w-1-i","props":{"icon":"siren"},"attrs":{"aria-hidden":"true"},"class":"size-9"}
::::::

:::::: heading {"id":"er-w-1-h","props":{"text":"Call 112","level":"3"}}
::::::

:::::: paragraph {"id":"er-w-1-p","props":{"tag":"p","text":"When a life is in danger: chest pain, a stroke, severe bleeding, someone who is unconscious or can’t breathe."}}
::::::
:::::

::::: box {"id":"er-w-2","props":{"tag":"li"},"class":"tile scheme-peach flex flex-col gap-3"}
:::::: icon {"id":"er-w-2-i","props":{"icon":"first-aid"},"attrs":{"aria-hidden":"true"},"class":"size-9"}
::::::

:::::: heading {"id":"er-w-2-h","props":{"text":"Come to us","level":"3"}}
::::::

:::::: paragraph {"id":"er-w-2-p","props":{"tag":"p","text":"For injuries and illness that can’t wait until tomorrow, such as a broken bone, a deep cut or a high fever in a baby."},"class":"text-muted"}
::::::
:::::

::::: box {"id":"er-w-3","props":{"tag":"li"},"class":"tile scheme-sky flex flex-col gap-3"}
:::::: icon {"id":"er-w-3-i","props":{"icon":"phone-call"},"attrs":{"aria-hidden":"true"},"class":"size-9"}
::::::

:::::: heading {"id":"er-w-3-h","props":{"text":"Call your GP first","level":"3"}}
::::::

:::::: paragraph {"id":"er-w-3-p","props":{"tag":"p","text":"For anything else, also in the evening and at weekends: your GP’s out-of-hours service helps you, or tells you to come."},"class":"text-muted"}
::::::
:::::
::::
:::

::: box {"id":"er-steps","props":{"tag":"section"},"attrs":{"aria-labelledby":"#er-steps-title"},"class":"mx-auto max-w-wide px-gutter pt-section"}
:::: box {"id":"er-steps-in","class":"scheme-surface grid grid-cols-12 gap-x-columns gap-y-10 rounded-xl p-[clamp(1.75rem,4vw,3.5rem)]"}
::::: box {"id":"er-steps-head","class":"col-span-5 flex flex-col gap-4 max-lg:col-span-full"}
:::::: heading {"id":"er-steps-title","props":{"text":"What happens when you arrive","level":"2"}}
::::::

:::::: paragraph {"id":"er-steps-p","props":{"tag":"p","text":"The sickest people are always seen first. If you have to wait, it is because someone needs help more urgently."},"class":"lede"}
::::::
:::::

::::: box {"id":"er-steps-list","props":{"tag":"ol"},"class":"col-span-6 col-start-7 flex flex-col gap-7 max-lg:col-span-full"}
:::::: box {"id":"er-s-0","props":{"tag":"li"},"class":"flex gap-5"}
::::::: paragraph {"id":"er-s-0-n","props":{"tag":"span","text":"1"},"attrs":{"aria-hidden":"true"},"class":"flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground"}
:::::::

::::::: box {"id":"er-s-0-t","class":"flex flex-col gap-1"}
:::::::: heading {"id":"er-s-0-h","props":{"text":"Check in","level":"3"},"class":"text-xl"}
::::::::

:::::::: paragraph {"id":"er-s-0-p","props":{"tag":"p","text":"At the desk, with your ID and insurance card. Bring your medicines or a list of them."},"class":"text-muted"}
::::::::
:::::::
::::::

:::::: box {"id":"er-s-1","props":{"tag":"li"},"class":"flex gap-5"}
::::::: paragraph {"id":"er-s-1-n","props":{"tag":"span","text":"2"},"attrs":{"aria-hidden":"true"},"class":"flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground"}
:::::::

::::::: box {"id":"er-s-1-t","class":"flex flex-col gap-1"}
:::::::: heading {"id":"er-s-1-h","props":{"text":"A nurse sees you","level":"3"},"class":"text-xl"}
::::::::

:::::::: paragraph {"id":"er-s-1-p","props":{"tag":"p","text":"Within fifteen minutes. The nurse asks what happened, checks your pulse and blood pressure, and decides how urgent your care is."},"class":"text-muted"}
::::::::
:::::::
::::::

:::::: box {"id":"er-s-2","props":{"tag":"li"},"class":"flex gap-5"}
::::::: paragraph {"id":"er-s-2-n","props":{"tag":"span","text":"3"},"attrs":{"aria-hidden":"true"},"class":"flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground"}
:::::::

::::::: box {"id":"er-s-2-t","class":"flex flex-col gap-1"}
:::::::: heading {"id":"er-s-2-h","props":{"text":"A doctor treats you","level":"3"},"class":"text-xl"}
::::::::

:::::::: paragraph {"id":"er-s-2-p","props":{"tag":"p","text":"You may need a scan or a blood test. We keep you up to date while you wait."},"class":"text-muted"}
::::::::
:::::::
::::::

:::::: box {"id":"er-s-3","props":{"tag":"li"},"class":"flex gap-5"}
::::::: paragraph {"id":"er-s-3-n","props":{"tag":"span","text":"4"},"attrs":{"aria-hidden":"true"},"class":"flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground"}
:::::::

::::::: box {"id":"er-s-3-t","class":"flex flex-col gap-1"}
:::::::: heading {"id":"er-s-3-h","props":{"text":"Home or a ward","level":"3"},"class":"text-xl"}
::::::::

:::::::: paragraph {"id":"er-s-3-p","props":{"tag":"p","text":"Most people go home the same day, with a letter for their GP. Some stay with us for more care."},"class":"text-muted"}
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"er-where","props":{"tag":"section"},"attrs":{"aria-labelledby":"#er-where-title"},"anchor":"er-where","class":"mx-auto max-w-wide px-gutter grid grid-cols-12 items-center gap-x-columns gap-y-10 pt-section"}
:::: box {"id":"er-where-text","class":"col-span-5 flex flex-col items-start gap-5 max-lg:col-span-full"}
::::: heading {"id":"er-where-title","props":{"text":"Where to find us","level":"2"}}
:::::

::::: paragraph {"id":"er-where-p","props":{"tag":"p","text":"The emergency department has its own entrance, E, on Linden Avenue, beside car park P2. Follow the red signs. Drop-off spaces are right by the door."},"class":"text-lg text-muted"}
:::::

::::: box {"id":"er-where-list","props":{"tag":"ul"},"class":"flex flex-col gap-3"}
:::::: box {"id":"er-wl-1","props":{"tag":"li"},"class":"flex items-start gap-3"}
::::::: icon {"id":"er-wl-1-i","props":{"icon":"map-pin"},"attrs":{"aria-hidden":"true"},"class":"mt-0.5 size-5 shrink-0 text-primary"}
:::::::

::::::: paragraph {"id":"er-wl-1-t","props":{"tag":"p","text":"Entrance E, 40 Linden Avenue, Elmsworth"}}
:::::::
::::::

:::::: box {"id":"er-wl-2","props":{"tag":"li"},"class":"flex items-start gap-3"}
::::::: icon {"id":"er-wl-2-i","props":{"icon":"car"},"attrs":{"aria-hidden":"true"},"class":"mt-0.5 size-5 shrink-0 text-primary"}
:::::::

::::::: paragraph {"id":"er-wl-2-t","props":{"tag":"p","text":"Car park P2, free for the first 30 minutes"}}
:::::::
::::::

:::::: box {"id":"er-wl-3","props":{"tag":"li"},"class":"flex items-start gap-3"}
::::::: icon {"id":"er-wl-3-i","props":{"icon":"wheelchair"},"attrs":{"aria-hidden":"true"},"class":"mt-0.5 size-5 shrink-0 text-primary"}
:::::::

::::::: paragraph {"id":"er-wl-3-t","props":{"tag":"p","text":"Wheelchairs by the door, and step-free all the way"}}
:::::::
::::::

:::::: box {"id":"er-wl-4","props":{"tag":"li"},"class":"flex items-start gap-3"}
::::::: icon {"id":"er-wl-4-i","props":{"icon":"baby"},"attrs":{"aria-hidden":"true"},"class":"mt-0.5 size-5 shrink-0 text-primary"}
:::::::

::::::: paragraph {"id":"er-wl-4-t","props":{"tag":"p","text":"Children are seen in their own waiting room and treatment rooms"}}
:::::::
::::::
:::::

::::: button {"id":"er-where-loc","props":{"url":"entry:01m7npd9y2j5hvc0g6gdm7zr55","icon":"arrow-right","label":"Directions and parking","variant":"secondary","icon_position":"end"}}
:::::
::::

:::: image {"id":"er-where-photo","props":{"image":["01m7nh50h4enm4rb4twd1h9f1e"],"sizes":"(min-width: 64rem) 50vw, 100vw","aspect":"3/2"},"class":"col-span-6 col-start-7 overflow-hidden rounded-xl max-lg:col-span-full"}
::::
:::

::: box {"id":"er-faq","props":{"tag":"section"},"attrs":{"aria-labelledby":"#er-faq-title"},"class":"mx-auto max-w-wide px-gutter max-w-content pt-section"}
:::: heading {"id":"er-faq-title","props":{"text":"Questions","level":"2"},"class":"mb-6"}
::::

:::: accordion {"id":"er-faq-list","props":{"faq":true,"look":"cards","items":[{"answer":"Yes, one person can stay with you. Children can always have both parents with them.","question":"Can someone come with me?"},{"answer":"Ask the nurse first: you may need an anaesthetic or a test for which you must have an empty stomach.","question":"Can I eat or drink while I wait?"},{"answer":"Your ID, your insurance card, your medicines or a list of them, and your phone and charger.","question":"What should I bring?"},{"answer":"Yes. We call an interpreter by phone or video, day and night, free of charge.","question":"I don’t speak English well. Can you help?"}]}}
::::
:::
