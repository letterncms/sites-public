---
id: 01m9a0m0ktyk55tmdq2nkbxt0c
title: 'Doe mee'
status: published
position: 5
summary: 'Zeg wat je vindt van plannen voor je straat, je wijk en de stad. We lezen elke reactie.'
template: sectie
keywords: 'inspraak, participatie, bevraging, raadpleging, mening'
---

::: box {"id":"dm-open","props":{"tag":"section"},"attrs":{"aria-labelledby":"#dm-open-h"},"class":"wrap pb-16"}
:::: heading {"id":"dm-open-h","props":{"level":"2","text":"Nu open"},"class":"text-2xl"}
::::

:::: box {"id":"dm-open-body","class":"mt-6"}
::::: repeat {"id":"dm-open","props":{"source":"entries","collection":"participation","sort":"-published_at","limit":50,"tag":"ul","where":[{"field":"state","op":"=","value":"Open"}],"empty":"Er lopen nu geen inspraaktrajecten."},"class":"grid gap-2.5 md:grid-cols-2"}
:::::: box {"id":"dm-open-item","props":{"tag":"li"},"class":"grid"}
::::::: component {"id":"dm-open-card","props":{"ref":"participation-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.state":"item.state","values.closes":"Tot {item.closes|date:j F Y}"}}
:::::::
::::::
:::::
::::
:::

::: box {"id":"dm-closed","props":{"tag":"section"},"attrs":{"aria-labelledby":"#dm-closed-h"},"class":"wrap pb-section"}
:::: heading {"id":"dm-closed-h","props":{"level":"2","text":"Afgesloten, en wat we ermee deden"},"class":"text-2xl"}
::::

:::: box {"id":"dm-closed-body","class":"mt-6"}
::::: repeat {"id":"dm-closed","props":{"source":"entries","collection":"participation","sort":"-published_at","limit":50,"tag":"ul","where":[{"field":"state","op":"!=","value":"Open"}],"empty":""},"class":"grid gap-2.5 md:grid-cols-2"}
:::::: box {"id":"dm-closed-item","props":{"tag":"li"},"class":"grid"}
::::::: component {"id":"dm-closed-card","props":{"ref":"participation-card","values":{"action":"Lees wat we ermee deden"}},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.state":"item.state","values.closes":"Gesloten op {item.closes|date:j F Y}"}}
:::::::
::::::
:::::
::::
:::
