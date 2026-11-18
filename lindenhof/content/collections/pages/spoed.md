---
id: 01m7p2kg02mca2s304fb0a4xnb
title: Spoedgevallen
status: published
published_at: '2026-11-18T01:58:43+01:00'
position: 4
summary: 'Dag en nacht open, elke dag van het jaar. Bij levensgevaar bel je 112.'
template: default
---

::: box {"id":"sp-hero","props":{"tag":"header"},"class":"scheme-emergency"}
:::: box {"id":"sp-hero-in","class":"mx-auto grid max-w-content grid-cols-12 items-center gap-x-columns gap-y-8 px-gutter py-12 max-md:py-9"}
::::: box {"id":"sp-hero-text","class":"col-span-7 flex flex-col items-start gap-6 max-lg:col-span-full"}
:::::: box {"id":"sp-crumbs","props":{"tag":"nav"},"attrs":{"aria-label":"Kruimelpad"},"class":"flex items-center gap-2 text-sm"}
::::::: link {"id":"sp-home","props":{"url":"/","label":"Home"},"class":"text-white underline-offset-2 hover:underline"}
:::::::

::::::: icon {"id":"sp-sep","props":{"icon":"caret-right"},"attrs":{"aria-hidden":"true"},"class":"size-3.5"}
:::::::

::::::: paragraph {"id":"sp-here","props":{"tag":"span","text":"Spoedgevallen"},"attrs":{"aria-current":"page"}}
:::::::
::::::

:::::: box {"id":"sp-badge","class":"inline-flex items-center gap-2 rounded-md bg-black/20 px-3 py-1.5 text-sm font-semibold"}
::::::: icon {"id":"sp-badge-i","props":{"icon":"clock"},"attrs":{"aria-hidden":"true"},"class":"size-5"}
:::::::

::::::: paragraph {"id":"sp-badge-t","props":{"tag":"span","text":"Dag en nacht open"}}
:::::::
::::::

:::::: heading {"id":"sp-title","props":{"text":"Spoedgevallen","level":"1"},"class":"text-6xl"}
::::::

:::::: paragraph {"id":"sp-lede","props":{"tag":"p","text":"Voor ongevallen en plotse, ernstige ziekte. Binnen het kwartier na je aankomst schat een verpleegkundige in hoe dringend je zorg is."},"class":"max-w-[32em] text-xl leading-[1.5]"}
::::::

:::::: buttons {"id":"sp-actions","class":"pt-2"}
::::::: button {"id":"sp-call","props":{"url":"tel:112","icon":"phone","size":"lg","label":"Bel 112","variant":"light"},"bind":{"url":"tel:{globals.hospital.emergency_number}","label":"Bel {globals.hospital.emergency_number}"}}
:::::::

::::::: button {"id":"sp-route","props":{"url":"#sp-in","size":"lg","label":"Waar is de ingang?","variant":"secondary"},"class":"border-white/60 text-white hover:border-white hover:bg-white/10"}
:::::::
::::::
:::::

::::: image {"id":"sp-photo","props":{"image":["01m7nh50kv3enjtk7374m636bz"],"sizes":"(min-width: 64rem) 34vw, 100vw","aspect":"4/3","priority":true},"class":"leaf col-span-5 max-lg:hidden"}
:::::
::::
:::

::: box {"id":"sp-when","props":{"tag":"section"},"attrs":{"aria-labelledby":"#sp-when-title"},"class":"mx-auto max-w-content px-gutter pt-section"}
:::: heading {"id":"sp-when-title","props":{"text":"Waar moet je naartoe?","level":"2"},"class":"rule mb-8"}
::::

:::: box {"id":"sp-when-list","props":{"tag":"ul"},"class":"grid grid-cols-3 gap-4 max-lg:grid-cols-1"}
::::: box {"id":"sp-w1","props":{"tag":"li"},"class":"scheme-emergency leaf-sm flex flex-col gap-3 p-7"}
:::::: icon {"id":"sp-w1-i","props":{"icon":"siren"},"attrs":{"aria-hidden":"true"},"class":"size-8"}
::::::

:::::: heading {"id":"sp-w1-h","props":{"text":"Bel 112","level":"3"},"class":"text-2xl"}
::::::

:::::: paragraph {"id":"sp-w1-p","props":{"tag":"p","text":"Bij levensgevaar: pijn op de borst, een beroerte, hevig bloedverlies, iemand die bewusteloos is of niet goed ademt."},"class":"text-[0.9375rem] leading-normal"}
::::::

:::::: link {"id":"sp-w1-a","props":{"url":"tel:112","label":"Bel 112"},"class":"mt-auto text-xl font-bold"}
::::::
:::::

::::: box {"id":"sp-w2","props":{"tag":"li"},"class":"scheme-sand leaf-sm flex flex-col gap-3 p-7"}
:::::: icon {"id":"sp-w2-i","props":{"icon":"first-aid"},"attrs":{"aria-hidden":"true"},"class":"size-8"}
::::::

:::::: heading {"id":"sp-w2-h","props":{"text":"Kom naar spoed","level":"3"},"class":"text-2xl"}
::::::

:::::: paragraph {"id":"sp-w2-p","props":{"tag":"p","text":"Voor letsels en ziekte die niet tot morgen kunnen wachten, zoals een breuk, een diepe snijwonde of hoge koorts bij een baby."},"class":"text-[0.9375rem] leading-normal"}
::::::
:::::

::::: box {"id":"sp-w3","props":{"tag":"li"},"class":"scheme-tint leaf-sm flex flex-col gap-3 p-7"}
:::::: icon {"id":"sp-w3-i","props":{"icon":"phone-call"},"attrs":{"aria-hidden":"true"},"class":"size-8"}
::::::

:::::: heading {"id":"sp-w3-h","props":{"text":"Bel eerst 1733","level":"3"},"class":"text-2xl"}
::::::

:::::: paragraph {"id":"sp-w3-p","props":{"tag":"p","text":"Voor wat niet levensbedreigend is, ’s avonds, ’s nachts en in het weekend. De huisarts van wacht helpt je of zegt je waar je naartoe moet."},"class":"text-[0.9375rem] leading-normal"}
::::::

:::::: link {"id":"sp-w3-a","props":{"url":"tel:1733","label":"Bel 1733"},"class":"mt-auto text-xl font-bold"}
::::::
:::::
::::
:::

::: box {"id":"sp-steps","props":{"tag":"section"},"attrs":{"aria-labelledby":"#sp-steps-title"},"class":"mx-auto max-w-content px-gutter pt-section"}
:::: box {"id":"sp-steps-in","class":"grid grid-cols-12 gap-x-columns gap-y-10"}
::::: box {"id":"sp-steps-text","class":"col-span-5 flex flex-col gap-5 max-lg:col-span-full"}
:::::: heading {"id":"sp-steps-title","props":{"text":"Wat gebeurt er op spoed?","level":"2"},"class":"rule"}
::::::

:::::: paragraph {"id":"sp-steps-p","props":{"tag":"p","text":"Wie het ziekst is, wordt eerst geholpen. Wachten kan dus soms lang duren, ook als de wachtzaal leeg lijkt: ambulances komen langs een andere ingang."},"class":"lede"}
::::::
:::::

::::: box {"id":"sp-steps-list","props":{"tag":"ol"},"class":"col-span-6 col-start-7 flex flex-col gap-6 max-lg:col-span-full"}
:::::: box {"id":"sp-s1","props":{"tag":"li"},"class":"flex gap-5"}
::::::: paragraph {"id":"sp-s1-n","props":{"tag":"span","text":"1"},"attrs":{"aria-hidden":"true"},"class":"flex size-10 shrink-0 items-center justify-center rounded-md bg-primary font-bold text-primary-foreground"}
:::::::

::::::: box {"id":"sp-s1-t","class":"flex flex-col gap-1"}
:::::::: heading {"id":"sp-s1-h","props":{"text":"Inschrijven","level":"3"},"class":"text-xl"}
::::::::

:::::::: paragraph {"id":"sp-s1-p","props":{"tag":"p","text":"Aan het onthaal met je eID. Breng je geneesmiddelen of de lijst ervan mee."},"class":"text-muted"}
::::::::
:::::::
::::::

:::::: box {"id":"sp-s2","props":{"tag":"li"},"class":"flex gap-5"}
::::::: paragraph {"id":"sp-s2-n","props":{"tag":"span","text":"2"},"attrs":{"aria-hidden":"true"},"class":"flex size-10 shrink-0 items-center justify-center rounded-md bg-primary font-bold text-primary-foreground"}
:::::::

::::::: box {"id":"sp-s2-t","class":"flex flex-col gap-1"}
:::::::: heading {"id":"sp-s2-h","props":{"text":"Triage","level":"3"},"class":"text-xl"}
::::::::

:::::::: paragraph {"id":"sp-s2-p","props":{"tag":"p","text":"Een verpleegkundige meet je bloeddruk en temperatuur en vraagt wat er scheelt. Zo bepalen we hoe dringend het is."},"class":"text-muted"}
::::::::
:::::::
::::::

:::::: box {"id":"sp-s3","props":{"tag":"li"},"class":"flex gap-5"}
::::::: paragraph {"id":"sp-s3-n","props":{"tag":"span","text":"3"},"attrs":{"aria-hidden":"true"},"class":"flex size-10 shrink-0 items-center justify-center rounded-md bg-primary font-bold text-primary-foreground"}
:::::::

::::::: box {"id":"sp-s3-t","class":"flex flex-col gap-1"}
:::::::: heading {"id":"sp-s3-h","props":{"text":"Onderzoek en behandeling","level":"3"},"class":"text-xl"}
::::::::

:::::::: paragraph {"id":"sp-s3-p","props":{"tag":"p","text":"Een urgentiearts onderzoekt je. Soms zijn bloedonderzoek of een scan nodig."},"class":"text-muted"}
::::::::
:::::::
::::::

:::::: box {"id":"sp-s4","props":{"tag":"li"},"class":"flex gap-5"}
::::::: paragraph {"id":"sp-s4-n","props":{"tag":"span","text":"4"},"attrs":{"aria-hidden":"true"},"class":"flex size-10 shrink-0 items-center justify-center rounded-md bg-primary font-bold text-primary-foreground"}
:::::::

::::::: box {"id":"sp-s4-t","class":"flex flex-col gap-1"}
:::::::: heading {"id":"sp-s4-h","props":{"text":"Naar huis of opname","level":"3"},"class":"text-xl"}
::::::::

:::::::: paragraph {"id":"sp-s4-p","props":{"tag":"p","text":"Je gaat naar huis met een verslag voor je huisarts, of je wordt opgenomen."},"class":"text-muted"}
::::::::
:::::::
::::::
:::::
::::
:::

::: box {"id":"sp-in","props":{"tag":"section"},"attrs":{"aria-labelledby":"#sp-in-h"},"anchor":"sp-in","class":"mx-auto max-w-content px-gutter pt-blocks"}
:::: box {"id":"sp-in-in","class":"card flex gap-5"}
::::: icon {"id":"sp-in-i","props":{"icon":"map-pin"},"attrs":{"aria-hidden":"true"},"class":"size-8 shrink-0 text-primary"}
:::::

::::: box {"id":"sp-in-t","class":"flex flex-col gap-2"}
:::::: heading {"id":"sp-in-h","props":{"text":"De ingang van spoed","level":"2"},"class":"text-2xl"}
::::::

:::::: paragraph {"id":"sp-in-p","props":{"tag":"p","text":"Campus Lindenhof, ingang E, Lindenlaan 40, 2860 Meerhove. Je kunt kort parkeren op de kiss-and-ride-plaatsen vlak voor de deur; zet je wagen daarna in parking P1."}}
::::::
:::::
::::
:::

::: box {"id":"sp-kids","props":{"tag":"section"},"attrs":{"aria-labelledby":"#sp-kids-title"},"class":"mx-auto max-w-content px-gutter pt-section"}
:::: box {"id":"sp-kids-in","class":"scheme-sand leaf flex flex-wrap items-center justify-between gap-8 p-[clamp(1.75rem,4vw,3.5rem)]"}
::::: box {"id":"sp-kids-text","class":"flex flex-col gap-3"}
:::::: heading {"id":"sp-kids-title","props":{"text":"Met een kind naar spoed?","level":"2"},"class":"text-3xl"}
::::::

:::::: paragraph {"id":"sp-kids-p","props":{"tag":"p","text":"Kinderen tot 16 jaar worden opgevangen door een kinderarts van wacht. Breng het boekje van Kind en Gezin of de vaccinatiekaart mee, en een knuffel."},"class":"max-w-[36em] text-lg text-muted"}
::::::
:::::

::::: buttons {"id":"sp-kids-buttons"}
:::::: button {"id":"sp-kids-b","props":{"url":"entry:01m7p2kg0a20artnnx4k7y4b59","icon":"arrow-right","size":"lg","label":"Kindergeneeskunde","variant":"secondary","icon_position":"end"}}
::::::
:::::
::::
:::
