---
id: 01m7r7kxx94w8bp0aypjgz2c3y
title: 'Online aanvragen'
status: published
position: 13
summary: 'Vraag een document, een vergunning of een container aan zonder naar het stadhuis te komen. Binnen twee werkdagen hoor je van ons.'
template: pagina
keywords: 'online, aanvragen, aanvraag, formulier, attest, uittreksel, vergunning, digitaal loket, e-loket'
---

::: forms/form {"id":"av-form","props":{"form":"aanvraag"}}
:::

## Online te regelen

::: repeat {"id":"av-list","props":{"source":"entries","collection":"products","sort":"title","limit":100,"tag":"ul","where":[{"field":"online","op":"=","value":true}]},"class":"link-list"}
:::: box {"id":"av-item","props":{"tag":"li"}}
::::: link {"id":"av-link","bind":{"label":"item.title","url":"item.url"}}
:::::
::::
:::
