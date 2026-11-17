---
id: 01m9a0aavkvfvrs8dyf07rctme
title: 'Contact us'
status: published
position: 12
summary: 'Call, write or visit us. Most questions are answered within 5 working days.'
template: landing
keywords: 'phone, email, address, opening hours, contact centre'
---

::: box {"id":"ct-top","class":"wrap pb-section"}
:::: box {"id":"ct-cards","class":"grid gap-4 md:grid-cols-3"}
::::: box {"id":"ct-1","class":"card-flat"}
:::::: icon {"id":"ct-1-icon","props":{"icon":"phone"},"class":"size-8 text-primary"}
::::::

:::::: heading {"id":"ct-1-h","props":{"level":"2","text":"Call"},"class":"text-xl"}
::::::

:::::: link {"id":"ct-1-phone","bind":{"label":"globals.city.phone","url":"tel:{globals.city.phone_link}"},"class":"text-link text-2xl font-bold text-primary"}
::::::

:::::: paragraph {"id":"ct-1-hours","props":{"tag":"p"},"bind":{"text":"globals.city.phone_hours"},"class":"text-base text-muted"}
::::::

:::::: paragraph {"id":"ct-1-relay","props":{"tag":"p","text":"Deaf, hard of hearing or speech impaired? Use the relay service of your phone provider, or send a text to 07700 900000."},"class":"text-base"}
::::::
:::::

::::: box {"id":"ct-2","class":"card-flat"}
:::::: icon {"id":"ct-2-icon","props":{"icon":"envelope-simple"},"class":"size-8 text-primary"}
::::::

:::::: heading {"id":"ct-2-h","props":{"level":"2","text":"Write"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"ct-2-text","props":{"tag":"p","text":"Use the form on this page, or email us. We reply within 5 working days."},"class":"text-base"}
::::::

:::::: link {"id":"ct-2-email","bind":{"label":"globals.city.email","url":"mailto:{globals.city.email}"},"class":"text-link font-bold text-primary break-all"}
::::::

:::::: paragraph {"id":"ct-2-postal","props":{"tag":"p"},"bind":{"text":"globals.city.postal"},"class":"whitespace-pre-line text-base text-muted"}
::::::
:::::

::::: box {"id":"ct-3","class":"card-flat"}
:::::: icon {"id":"ct-3-icon","props":{"icon":"buildings"},"class":"size-8 text-primary"}
::::::

:::::: heading {"id":"ct-3-h","props":{"level":"2","text":"Visit"},"class":"text-xl"}
::::::

:::::: paragraph {"id":"ct-3-address","props":{"tag":"p"},"bind":{"text":"globals.city.address"},"class":"whitespace-pre-line text-base"}
::::::

:::::: paragraph {"id":"ct-3-hours","props":{"tag":"p"},"bind":{"text":"globals.city.hours"},"class":"whitespace-pre-line text-base text-muted"}
::::::

:::::: link {"id":"ct-3-link","props":{"label":"Make an appointment","url":"/make-an-appointment"},"class":"text-link mt-auto font-bold"}
::::::
:::::
::::

:::: box {"id":"ct-alert","class":"alert alert-danger mt-8"}
::::: icon {"id":"ct-alert-icon","props":{"icon":"warning"},"class":"mt-0.5 size-6 shrink-0"}
:::::

::::: paragraph {"id":"ct-alert-text","props":{"tag":"p","text":"In an emergency, when a life is in danger, call 112. Not urgent but need the police? Call 01632 960999."},"class":"font-bold"}
:::::
::::
:::

::: box {"id":"ct-form-section","props":{"tag":"section"},"attrs":{"aria-labelledby":"#ct-form-h"},"class":"border-t border-border bg-surface"}
:::: box {"id":"ct-form-grid","class":"wrap grid gap-10 py-section lg:grid-cols-12"}
::::: box {"id":"ct-form-intro","class":"flex flex-col gap-4 lg:col-span-4"}
:::::: heading {"id":"ct-form-h","props":{"level":"2","text":"Ask a question"}}
::::::

:::::: paragraph {"id":"ct-form-text","props":{"tag":"p","text":"For anything that isn’t urgent. To report a problem in the street, use the <a href=\"/report-a-problem\">report a problem form</a>: it goes straight to the right team."},"class":"text-lg"}
::::::
:::::

::::: box {"id":"ct-form-wrap","class":"lg:col-span-7 lg:col-start-6"}
:::::: forms/form {"id":"ct-form","props":{"form":"contact"}}
::::::
:::::
::::
:::
