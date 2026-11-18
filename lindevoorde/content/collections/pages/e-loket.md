---
id: 01m9a04js052yav94vkj2kpw9c
title: E-loket
status: published
position: 13
summary: 'Vraag documenten en attesten online aan, dag en nacht. Je meldt je aan met je identiteitskaart of een digitale sleutel.'
template: sectie
keywords: 'e-loket, online, attest, uittreksel, aanmelden, digitaal loket'
---

::: box {"id":"el"}
:::: box {"id":"el-grid","class":"wrap grid gap-14 pb-section lg:grid-cols-12"}
::::: box {"id":"el-how","class":"flex flex-col gap-6 lg:col-span-5"}
:::::: heading {"id":"el-how-h","props":{"level":"2","text":"Zo werkt het"},"class":"text-2xl"}
::::::

:::::: list {"id":"el-steps","props":{"ordered":true,"items":["Kies hieronder wat je wil aanvragen.","Meld je aan met je identiteitskaart en kaartlezer, of met een digitale sleutel op je smartphone.","Vul het formulier in. Je gegevens staan er al in.","Je krijgt meteen een bevestiging per mail. De meeste documenten zitten binnen het uur in je mailbox."]},"class":"steps"}
::::::
:::::

::::: box {"id":"el-products","class":"flex flex-col gap-6 lg:col-span-7"}
:::::: heading {"id":"el-list-h","props":{"level":"2","text":"Online aan te vragen"},"class":"text-2xl"}
::::::

:::::: repeat {"id":"el-list","props":{"source":"entries","collection":"products","sort":"title","limit":100,"tag":"ul","where":[{"field":"online","op":"=","value":true}]},"class":"grid gap-4 sm:grid-cols-2"}
::::::: box {"id":"el-item","props":{"tag":"li"},"class":"grid"}
:::::::: component {"id":"el-card","props":{"ref":"product-card"},"bind":{"values.title":"item.title","values.summary":"item.summary","values.url":"item.url"}}
::::::::
:::::::
::::::
:::::
::::
:::
