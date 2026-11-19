---
id: 01m9a0m0ktyk55tmdq2nkbxt0c
title: 'Doe mee'
status: published
position: 5
summary: 'Zeg wat je vindt van plannen voor je straat, je wijk en de stad. We lezen elke reactie.'
template: sectie
keywords: 'inspraak, participatie, bevraging, raadpleging, mening'
---

::: box {"id":"dm-open","props":{"tag":"section"},"class":"wrap pb-16"}
:::: component {"id":"dm-open-head","props":{"ref":"section-head","values":{"title":"Nu open"}}}
::::

:::: repeat {"id":"dm-open-list","props":{"source":"entries","collection":"participation","sort":"-published_at","limit":50,"tag":"ul","where":[{"field":"state","op":"=","value":"Open"}],"empty":"Er lopen nu geen inspraaktrajecten."},"class":"mt-10 grid gap-2.5 md:grid-cols-2"}
::::: box {"id":"dm-open-item","props":{"tag":"li"},"class":"grid"}
:::::: component {"id":"dm-open-card","props":{"ref":"participation-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.state":"item.state","values.closes":"Tot {item.closes|date:j F Y}"}}
::::::
:::::
::::
:::

::: box {"id":"dm-closed","props":{"tag":"section"},"class":"wrap pb-section"}
:::: component {"id":"dm-closed-head","props":{"ref":"section-head","values":{"title":"Afgesloten, en wat we ermee deden"}}}
::::

:::: repeat {"id":"dm-closed-list","props":{"source":"entries","collection":"participation","sort":"-published_at","limit":50,"tag":"ul","where":[{"field":"state","op":"!=","value":"Open"}],"empty":""},"class":"mt-10 grid gap-2.5 md:grid-cols-2"}
::::: box {"id":"dm-closed-item","props":{"tag":"li"},"class":"grid"}
:::::: component {"id":"dm-closed-card","props":{"ref":"participation-card","values":{"action":"Lees wat we ermee deden"}},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.state":"item.state","values.closes":"Gesloten op {item.closes|date:j F Y}"}}
::::::
:::::
::::
:::
