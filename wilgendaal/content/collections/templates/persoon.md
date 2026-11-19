---
id: 01m9a07vy86b4nh8tgtgsmzc6m
title: Bestuurslid
status: published
position: 0
collections:
  - people
description: 'Een bestuurslid: foto, functie, bevoegdheden en hoe je hem of haar bereikt.'
---

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: component {"id":"t-head","props":{"ref":"page-head","values":{"label":"Bestuur","url":"/bestuur","aspect":"4/5"}},"bind":{"values.title":"entry.title","values.lead":"entry.summary","values.eyebrow":"entry.role","values.image":"entry.photo"}}
::::

:::: box {"id":"pe-wrap","class":"wrap pt-12 pb-section md:pt-16"}
::::: box {"id":"pe-main","class":"max-w-3xl"}
:::::: box {"id":"pe-facts","props":{"tag":"dl"},"class":"facts rounded-2xl bg-surface p-3 sm:p-4"}
::::::: component {"id":"pe-portfolio","props":{"ref":"fact","values":{"label":"Bevoegd voor"}},"bind":{"values.value":"entry.portfolio"}}
:::::::

::::::: component {"id":"pe-since","props":{"ref":"fact","values":{"label":"In functie sinds"}},"bind":{"values.value":"entry.since"}}
:::::::

::::::: component {"id":"pe-email","props":{"ref":"fact","values":{"label":"E-mail"}},"bind":{"values.value":"entry.email","values.url":"mailto:{entry.email}"}}
:::::::

::::::: component {"id":"pe-phone","props":{"ref":"fact","values":{"label":"Telefoon"}},"bind":{"values.value":"entry.phone","values.url":"tel:{entry.phone}"}}
:::::::
::::::

:::::: outlet {"id":"pe-outlet","props":{"wrap":true,"prose":true},"class":"mt-10"}
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
