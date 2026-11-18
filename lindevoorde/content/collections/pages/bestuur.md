---
id: 01m9a0k5yx2pg8xt1e1byb2jfm
title: Bestuur
status: published
position: 6
summary: 'Lindevoorde wordt bestuurd door een gemeenteraad van 29 leden en een college van burgemeester en schepenen.'
template: sectie
keywords: 'burgemeester, schepen, college, gemeenteraad, bestuur, politiek'
---

::: box {"id":"bs-col","props":{"tag":"section"},"attrs":{"aria-labelledby":"#bs-col-h"},"class":"wrap pb-section"}
:::: box {"id":"bs-col-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4"}
::::: box {"id":"bs-col-titles","class":"flex max-w-2xl flex-col gap-3"}
:::::: heading {"id":"bs-col-h","props":{"level":"2","text":"Het college van burgemeester en schepenen"},"class":"text-3xl"}
::::::

:::::: paragraph {"id":"bs-col-intro","props":{"tag":"p","text":"Het college bestuurt de stad van dag tot dag. Elk lid is bevoegd voor een deel van het stadswerk."},"class":"text-lg text-muted"}
::::::
:::::
::::

:::: box {"id":"bs-col-body","class":"mt-10"}
::::: repeat {"id":"bs-col-list","props":{"source":"entries","collection":"people","sort":"position","limit":50,"tag":"ul","where":[{"field":"role","op":"in","value":["Burgemeester","Schepen"]}]},"class":"grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}
:::::: box {"id":"bs-col-list-item","props":{"tag":"li"}}
::::::: component {"id":"bs-col-list-card","props":{"ref":"person-card"},"bind":{"values.name":"item.title","values.role":"item.role","values.portfolio":"item.portfolio","values.photo":"item.photo","values.url":"item.url"}}
:::::::
::::::
:::::
::::
:::

::: box {"id":"bs-take","props":{"tag":"section"},"attrs":{"aria-labelledby":"#bs-take-h"},"class":"scheme-soft"}
:::: box {"id":"bs-take-inner","class":"wrap py-section"}
::::: heading {"id":"bs-take-h","props":{"level":"2","text":"Volg en doe mee"},"class":"text-3xl"}
:::::

::::: box {"id":"bs-take-grid","class":"mt-10 grid gap-4 md:grid-cols-2"}
:::::: component {"id":"bs-card-1","props":{"ref":"product-card","values":{"title":"Gemeenteraad","summary":"Wanneer de raad vergadert, hoe je meekijkt, en de agenda’s en besluiten.","url":"/bestuur/gemeenteraad"}}}
::::::

:::::: component {"id":"bs-card-2","props":{"ref":"product-card","values":{"title":"Een vraag stellen op de gemeenteraad","summary":"Elke inwoner kan een vraag stellen of het woord vragen over een agendapunt.","url":"/product/een-vraag-stellen-op-de-gemeenteraad"}}}
::::::

:::::: component {"id":"bs-card-3","props":{"ref":"product-card","values":{"title":"Zo neemt de stad beslissingen","summary":"Wie beslist wat, en hoe je een beslissing volgt van plan tot uitvoering.","url":"/bestuur/zo-beslist-de-stad"}}}
::::::

:::::: component {"id":"bs-card-4","props":{"ref":"product-card","values":{"title":"Bekendmakingen","summary":"Besluitenlijsten, reglementen, openbare onderzoeken en verslagen.","url":"/bekendmakingen"}}}
::::::
:::::
::::
:::

::: box {"id":"bs-staff","props":{"tag":"section"},"attrs":{"aria-labelledby":"#bs-staff-h"},"class":"wrap py-section"}
:::: box {"id":"bs-staff-head","class":"flex flex-wrap items-end justify-between gap-x-10 gap-y-4"}
::::: box {"id":"bs-staff-titles","class":"flex max-w-2xl flex-col gap-3"}
:::::: heading {"id":"bs-staff-h","props":{"level":"2","text":"De stadsadministratie"},"class":"text-3xl"}
::::::
:::::
::::

:::: box {"id":"bs-staff-body","class":"mt-10"}
::::: repeat {"id":"bs-staff-list","props":{"source":"entries","collection":"people","sort":"position","limit":50,"tag":"ul","where":[{"field":"role","op":"=","value":"Algemeen directeur"}]},"class":"grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}
:::::: box {"id":"bs-staff-list-item","props":{"tag":"li"}}
::::::: component {"id":"bs-staff-list-card","props":{"ref":"person-card"},"bind":{"values.name":"item.title","values.role":"item.role","values.portfolio":"item.portfolio","values.photo":"item.photo","values.url":"item.url"}}
:::::::
::::::
:::::
::::
:::
