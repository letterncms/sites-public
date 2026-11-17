---
id: 01m9a0jfghpbcabxxs6m98mhkh
title: 'Have your say'
status: published
position: 5
summary: 'Tell us what you think about plans for your street, your district and the city. Every response is read.'
template: landing
---

::: box {"id":"say-open","props":{"tag":"section"},"attrs":{"aria-labelledby":"#say-open-h"},"class":"wrap pb-14"}
:::: heading {"id":"say-open-h","props":{"level":"2","text":"Open now"},"class":"text-2xl"}
::::

:::: box {"id":"say-open-body","class":"mt-6"}
::::: repeat {"id":"say-open","props":{"source":"entries","collection":"consultations","sort":"-published_at","limit":50,"tag":"ul","where":[{"field":"state","op":"=","value":"Open"}],"empty":"There are no open consultations at the moment."},"class":"grid gap-4 md:grid-cols-2"}
:::::: box {"id":"say-open-item","props":{"tag":"li"},"class":"grid"}
::::::: component {"id":"say-open-card","props":{"ref":"consultation-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.state":"item.state","values.closes":"Closes {item.closes|date:j F Y}"}}
:::::::
::::::
:::::
::::
:::

::: box {"id":"say-closed","props":{"tag":"section"},"attrs":{"aria-labelledby":"#say-closed-h"},"class":"wrap pb-section"}
:::: heading {"id":"say-closed-h","props":{"level":"2","text":"Closed, and what we did"},"class":"text-2xl"}
::::

:::: box {"id":"say-closed-body","class":"mt-6"}
::::: repeat {"id":"say-closed","props":{"source":"entries","collection":"consultations","sort":"-published_at","limit":50,"tag":"ul","where":[{"field":"state","op":"!=","value":"Open"}],"empty":""},"class":"grid gap-4 md:grid-cols-2"}
:::::: box {"id":"say-closed-item","props":{"tag":"li"},"class":"grid"}
::::::: component {"id":"say-closed-card","props":{"ref":"consultation-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url","values.state":"item.state","values.closes":"Closed {item.closes|date:j F Y}"}}
:::::::
::::::
:::::
::::
:::
