---
id: 01m7p3g28ph31zyqzvh74hae5z
title: Zoeken
status: published
published_at: '2026-11-18T02:14:20+01:00'
position: 30
summary: 'Zoek in het zorgaanbod, de zorgverleners, ziekten en behandelingen, nieuws en praktische informatie.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"zk","class":"mx-auto max-w-content px-gutter pt-blocks"}
:::: search-field {"id":"zk-field","props":{"size":"lg","label":"Zoek op de website","placeholder":"Zoek een arts, dienst, ziekte of onderzoek","button_label":"Zoeken","results_page":"entry:01m7p3g28ph31zyqzvh74hae5z"},"class":"mb-10 max-w-2xl"}
::::

:::: search-results {"id":"zk-results","props":{"one":"1 resultaat voor “{query}”","many":"{count} resultaten voor “{query}”","none":"Niets gevonden voor “{query}”. Probeer een ander woord, of bel ons.","no_query":"Typ wat je zoekt, zoals een dienst, een arts of een klacht.","all_label":"Alles","no_script":"Zoeken werkt met JavaScript. Gebruik anders het menu.","more_label":"Toon meer resultaten","filters_label":"Filter de resultaten"}}
::::
:::
