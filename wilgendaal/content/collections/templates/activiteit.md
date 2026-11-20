---
id: 01m9a0xw2b816b6k9pj3ey4xhd
title: Activiteit
status: published
position: 0
collections:
  - events
description: 'Een activiteit: foto en beschrijving, met datum, uur, locatie, prijs en inschrijven ernaast.'
---

::: component {"id":"t-header","props":{"ref":"header"}}
:::

::: box {"id":"t-main","props":{"tag":"main"},"anchor":"main"}
:::: component {"id":"t-head","props":{"ref":"page-head","values":{"label":"Activiteiten","url":"/activiteiten"}},"bind":{"values.title":"entry.title","values.lead":"entry.summary"}}
::::

:::: box {"id":"ev-wrap","class":"wrap pt-12 pb-section md:pt-16"}
::::: box {"id":"ev-grid","class":"flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-16"}
:::::: box {"id":"ev-main","class":"min-w-0 lg:col-span-8"}
::::::: box {"id":"ev-photo","bind":{"visible":"entry.cover"},"class":"photo"}
:::::::: image {"id":"ev-img","props":{"priority":true,"aspect":"3/2","sizes":"(min-width: 64rem) 58vw, 100vw"},"bind":{"image":"entry.cover"},"class":"aspect-[3/2] w-full object-cover"}
::::::::
:::::::

::::::: outlet {"id":"ev-outlet","props":{"wrap":true,"prose":true},"class":"mt-12"}
:::::::

::::::: box {"id":"ev-access-box","props":{"tag":"section"},"attrs":{"aria-labelledby":"#ev-access-h"},"bind":{"visible":"entry.access"},"class":"panel mt-12 flex flex-col gap-3"}
:::::::: heading {"id":"ev-access-h","props":{"level":"2","text":"Toegankelijkheid"},"class":"text-2xl"}
::::::::

:::::::: paragraph {"id":"ev-access","props":{"tag":"p"},"bind":{"text":"entry.access"},"class":"whitespace-pre-line"}
::::::::
:::::::
::::::

:::::: box {"id":"ev-aside","props":{"tag":"aside"},"attrs":{"aria-label":"Praktisch"},"class":"lg:col-span-4 max-lg:order-first max-lg:mb-10"}
::::::: box {"id":"ev-card","behavior":{"module":"stick"},"class":"panel flex flex-col gap-8 p-8 md:p-8 stick"}
:::::::: box {"id":"ev-details","props":{"tag":"dl"},"class":"details"}
::::::::: component {"id":"ev-date","props":{"ref":"fact","values":{"label":"Datum","icon":"calendar-blank"}},"bind":{"values.value":"{entry.when.start|date:l j F Y}","visible":"entry.when"}}
:::::::::

::::::::: component {"id":"ev-time","props":{"ref":"fact","values":{"label":"Uur","icon":"clock"}},"bind":{"values.value":"van {entry.when.start|date:G.i} tot {entry.when.end|date:G.i} uur","visible":"entry.when"}}
:::::::::

::::::::: component {"id":"ev-venue","props":{"ref":"fact","values":{"label":"Waar","icon":"map-pin"}},"bind":{"values.value":"{entry.venue}\n{entry.address}","visible":"entry.venue"}}
:::::::::

::::::::: component {"id":"ev-price","props":{"ref":"fact","values":{"label":"Prijs","icon":"ticket"}},"bind":{"values.value":"entry.price"}}
:::::::::

::::::::: component {"id":"ev-audience","props":{"ref":"fact","values":{"label":"Voor wie","icon":"users-three"}},"bind":{"values.value":"entry.audience"}}
:::::::::
::::::::

:::::::: button {"id":"ev-book","props":{"label":"Inschrijven","url":"#","variant":"primary","icon":"arrow-right","icon_position":"end"},"bind":{"label":"entry.booking.label|default:Inschrijven","url":"entry.booking.url","visible":"entry.booking.url"},"class":"w-full"}
::::::::
:::::::
::::::
:::::
::::

:::: component {"id":"t-fb","props":{"ref":"feedback"}}
::::
:::

::: component {"id":"t-footer","props":{"ref":"footer"}}
:::
