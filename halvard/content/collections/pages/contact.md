---
id: 01m7nqftbvfcw2y4b3yr35fmr4
title: Contact
status: published
published_at: '2026-11-17T21:44:28+00:00'
position: 11
summary: 'Phone numbers, email and addresses, and a form for anything else.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"ct","class":"mx-auto max-w-wide px-gutter pt-blocks"}
:::: box {"id":"ct-cards","props":{"tag":"ul"},"class":"grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1"}
::::: box {"id":"ct-c-0","props":{"tag":"li"},"class":"tile scheme-emergency flex flex-col gap-2"}
:::::: icon {"id":"ct-c-0-i","props":{"icon":"siren"},"attrs":{"aria-hidden":"true"},"class":"size-8"}
::::::

:::::: heading {"id":"ct-c-0-h","props":{"text":"Emergencies","level":"2"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"ct-c-0-p","props":{"tag":"p","text":"Day and night"},"class":"text-[0.9375rem] text-muted"}
::::::

:::::: link {"id":"ct-c-0-a","props":{"url":"tel:112","label":"112"},"bind":{"url":"tel:{globals.hospital.emergency_number}","label":"globals.hospital.emergency_number"},"class":"mt-auto pt-2 text-xl font-semibold break-words"}
::::::
:::::

::::: box {"id":"ct-c-1","props":{"tag":"li"},"class":"tile scheme-mint flex flex-col gap-2"}
:::::: icon {"id":"ct-c-1-i","props":{"icon":"calendar-check"},"attrs":{"aria-hidden":"true"},"class":"size-8"}
::::::

:::::: heading {"id":"ct-c-1-h","props":{"text":"Appointments","level":"2"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"ct-c-1-p","props":{"tag":"p","text":"Monday to Friday, 8:00 to 18:00"},"class":"text-[0.9375rem] text-muted"}
::::::

:::::: link {"id":"ct-c-1-a","props":{"url":null,"label":null},"bind":{"url":"tel:{globals.hospital.appointments_phone}","label":"globals.hospital.appointments_phone"},"class":"mt-auto pt-2 text-xl font-semibold break-words"}
::::::
:::::

::::: box {"id":"ct-c-2","props":{"tag":"li"},"class":"tile scheme-sky flex flex-col gap-2"}
:::::: icon {"id":"ct-c-2-i","props":{"icon":"phone"},"attrs":{"aria-hidden":"true"},"class":"size-8"}
::::::

:::::: heading {"id":"ct-c-2-h","props":{"text":"Switchboard","level":"2"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"ct-c-2-p","props":{"tag":"p","text":"Day and night"},"class":"text-[0.9375rem] text-muted"}
::::::

:::::: link {"id":"ct-c-2-a","props":{"url":null,"label":null},"bind":{"url":"tel:{globals.hospital.phone}","label":"globals.hospital.phone"},"class":"mt-auto pt-2 text-xl font-semibold break-words"}
::::::
:::::

::::: box {"id":"ct-c-3","props":{"tag":"li"},"class":"tile scheme-lilac flex flex-col gap-2"}
:::::: icon {"id":"ct-c-3-i","props":{"icon":"envelope-simple"},"attrs":{"aria-hidden":"true"},"class":"size-8"}
::::::

:::::: heading {"id":"ct-c-3-h","props":{"text":"Email","level":"2"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"ct-c-3-p","props":{"tag":"p","text":"We reply within three working days"},"class":"text-[0.9375rem] text-muted"}
::::::

:::::: link {"id":"ct-c-3-a","props":{"url":null,"label":null},"bind":{"url":"mailto:{globals.hospital.email}","label":"globals.hospital.email"},"class":"mt-auto pt-2 text-xl font-semibold break-words"}
::::::
:::::
::::
:::

::: box {"id":"ct-more","props":{"tag":"section"},"attrs":{"aria-label":"Address and contact form"},"class":"mx-auto max-w-wide px-gutter grid grid-cols-12 gap-x-columns gap-y-12 pt-section"}
:::: box {"id":"ct-side","class":"col-span-4 flex flex-col items-start gap-4 max-lg:col-span-full"}
::::: heading {"id":"ct-side-title","props":{"text":"Visit us","level":"2"},"class":"text-3xl"}
:::::

::::: paragraph {"id":"ct-side-addr","props":{"tag":"p"},"bind":{"text":"globals.hospital.address"},"class":"whitespace-pre-line text-lg"}
:::::

::::: button {"id":"ct-side-loc","props":{"url":"entry:01m7nqftbvfcw2y4b3yr35fmr3","icon":"arrow-right","label":"All locations","variant":"secondary","icon_position":"end"}}
:::::

::::: box {"id":"ct-side-note","class":"mt-4 flex flex-col gap-2 border-t border-border pt-6"}
:::::: heading {"id":"ct-side-note-h","props":{"text":"Medical questions","level":"3"},"class":"text-lg"}
::::::

:::::: paragraph {"id":"ct-side-note-p","props":{"tag":"p","text":"Please don’t send medical questions by email or this form. Call the department that treats you: its number is on your appointment letter."},"class":"text-[0.9375rem] text-muted"}
::::::
:::::
::::

:::: box {"id":"ct-form","class":"card col-span-7 col-start-6 flex flex-col gap-3 p-[clamp(1.5rem,4vw,3rem)] max-lg:col-span-full max-lg:col-start-1"}
::::: heading {"id":"ct-form-title","props":{"text":"Send us a message","level":"2"},"class":"text-3xl"}
:::::

::::: paragraph {"id":"ct-form-p","props":{"tag":"p","text":"For questions, praise, complaints, or anything about this website."},"class":"text-muted"}
:::::

::::: forms/form {"id":"ct-form-block","props":{"form":"contact"},"class":"mt-4"}
:::::
::::
:::
