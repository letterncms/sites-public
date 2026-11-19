---
title: Paginakop
status: published
position: 0
category: Site
description: 'De kop van een pagina: een zacht grijs vlak onder de zwevende balk, met het kruimelpad, de titel en wat de pagina is. Met een foto staat die ernaast.'
props:
  -
    handle: title
    type: text
    label: Titel
    default: Paginatitel
  -
    handle: lead
    type: textarea
    label: 'Korte inhoud'
  -
    handle: eyebrow
    type: text
    label: Bovenschrift
  -
    handle: tag
    type: text
    label: Label
  -
    handle: meta
    type: text
    label: 'Datum of termijn'
  -
    handle: image
    type: media
    label: Foto
    max: 1
  -
    handle: aspect
    type: select
    label: 'Vorm van de foto'
    options:
      '3/2': Liggend
      '4/3': 'Bijna vierkant'
      '4/5': Staand
    default: '4/3'
  -
    handle: label
    type: text
    label: Overzicht
  -
    handle: url
    type: url
    label: 'Link naar het overzicht'
---

::: box {"id":"ph","label":"Paginakop","bind":{"state:photo":"props.image"},"class":"page-head"}
:::: box {"id":"ph-inner","class":"wrap pb-12 md:pb-16"}
::::: component {"id":"ph-crumbs","props":{"ref":"breadcrumbs"},"bind":{"values.current":"props.title","values.label":"props.label","values.url":"props.url"}}
:::::

::::: box {"id":"ph-body","class":"mt-8 grid items-end gap-10 md:mt-12 lg:grid-cols-12 lg:gap-16"}
:::::: box {"id":"ph-text","class":"flex max-w-4xl flex-col items-start gap-5 lg:col-span-9 lg:in-data-photo:col-span-7"}
::::::: box {"id":"ph-meta","class":"flex flex-wrap items-center gap-3 empty:hidden"}
:::::::: paragraph {"id":"ph-eyebrow","props":{"tag":"span"},"bind":{"text":"props.eyebrow","visible":"props.eyebrow"},"class":"eyebrow text-base"}
::::::::

:::::::: paragraph {"id":"ph-tag","props":{"tag":"span"},"bind":{"text":"props.tag","visible":"props.tag"},"class":"tag"}
::::::::

:::::::: paragraph {"id":"ph-date","props":{"tag":"span"},"bind":{"text":"props.meta","visible":"props.meta"},"class":"meta"}
::::::::
:::::::

::::::: heading {"id":"ph-title","props":{"level":"1"},"bind":{"text":"props.title"}}
:::::::

::::::: paragraph {"id":"ph-lead","props":{"tag":"p"},"bind":{"text":"props.lead","visible":"props.lead"},"class":"lead max-w-2xl"}
:::::::
::::::

:::::: box {"id":"ph-photo","bind":{"visible":"props.image","attr:data-aspect":"props.aspect"},"class":"photo w-full max-w-xl lg:col-span-5 lg:max-w-none data-[aspect='4/5']:max-w-sm data-[aspect='4/5']:lg:justify-self-end"}
::::::: image {"id":"ph-img","props":{"priority":true,"sizes":"(min-width: 64rem) 36vw, (min-width: 36rem) 36rem, 100vw"},"bind":{"image":"props.image","aspect":"props.aspect"},"class":"w-full object-cover"}
:::::::
::::::
:::::
::::
:::
