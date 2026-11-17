---
id: 01m9a03znzhddzyd6rhyvdggb7
title: Footer
status: published
position: 0
category: Site
description: 'The city’s address and contact details, the services by topic, the about links and what to do in an emergency.'
---

::: box {"id":"ft","props":{"tag":"footer"},"label":"Footer","class":"scheme-night"}
:::: box {"id":"ft-grid","class":"wrap-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8"}
::::: box {"id":"ft-city","class":"flex flex-col gap-5 lg:col-span-4"}
:::::: component {"id":"ft-logo","props":{"ref":"logo"}}
::::::

:::::: paragraph {"id":"ft-address","props":{"tag":"p"},"bind":{"text":"globals.city.address"},"class":"whitespace-pre-line text-base"}
::::::

:::::: box {"id":"ft-contact","class":"flex flex-col items-start gap-1 text-base"}
::::::: link {"id":"ft-phone","bind":{"label":"globals.city.phone","url":"tel:{globals.city.phone_link}"},"class":"text-link font-bold text-current"}
:::::::

::::::: link {"id":"ft-email","bind":{"label":"globals.city.email","url":"mailto:{globals.city.email}"},"class":"text-link font-bold text-current"}
:::::::

::::::: paragraph {"id":"ft-phone-hours","props":{"tag":"p"},"bind":{"text":"globals.city.phone_hours"},"class":"text-sm text-muted"}
:::::::
::::::
:::::

::::: box {"id":"ft-services","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#ft-services-title"},"class":"flex flex-col gap-4 lg:col-span-3"}
:::::: heading {"id":"ft-services-title","props":{"level":"2","text":"Services"},"class":"text-base font-bold text-white"}
::::::

:::::: repeat {"id":"ft-topics","props":{"source":"entries","collection":"topics","sort":"position","limit":12,"tag":"ul"},"class":"flex flex-col gap-2.5"}
::::::: box {"id":"ft-topic","props":{"tag":"li"}}
:::::::: link {"id":"ft-topic-link","bind":{"label":"item.title","url":"item.url"},"class":"quiet-link text-base text-current"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"ft-about","props":{"tag":"nav"},"attrs":{"aria-labelledby":"#ft-about-title"},"class":"flex flex-col gap-4 lg:col-span-2"}
:::::: heading {"id":"ft-about-title","props":{"level":"2","text":"The city"},"class":"text-base font-bold text-white"}
::::::

:::::: repeat {"id":"ft-menu","props":{"source":"menu","tag":"ul","menu":"footer"},"class":"flex flex-col gap-2.5"}
::::::: box {"id":"ft-menu-item","props":{"tag":"li"}}
:::::::: link {"id":"ft-menu-link","bind":{"label":"item.label","url":"item.url"},"class":"quiet-link text-base text-current"}
::::::::
:::::::
::::::
:::::

::::: box {"id":"ft-emergency-box","class":"flex flex-col items-start gap-3 self-start rounded-xl border border-border p-6 lg:col-span-3"}
:::::: heading {"id":"ft-emergency-title","props":{"level":"2","text":"In an emergency"},"class":"text-base font-bold text-white"}
::::::

:::::: paragraph {"id":"ft-emergency","props":{"tag":"p"},"bind":{"text":"Call {globals.city.emergency} for the police, the fire service or an ambulance when a life is in danger."},"class":"text-base"}
::::::

:::::: paragraph {"id":"ft-report-text","props":{"tag":"p","text":"For a problem in the street that is not an emergency, such as a broken light, tell us online."},"class":"text-base text-muted"}
::::::

:::::: button {"id":"ft-report","props":{"label":"Report a Problem","url":"/report-a-problem","variant":"sun","size":"sm"}}
::::::
:::::
::::

:::: box {"id":"ft-bottom-wrap","class":"border-t border-border"}
::::: box {"id":"ft-bottom","class":"wrap-wide flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between"}
:::::: box {"id":"ft-legal","props":{"tag":"nav"},"attrs":{"aria-label":"About this website"}}
::::::: repeat {"id":"ft-legal-list","props":{"source":"menu","tag":"ul","menu":"legal"},"class":"flex flex-wrap gap-x-6 gap-y-2"}
:::::::: box {"id":"ft-legal-item","props":{"tag":"li"}}
::::::::: link {"id":"ft-legal-link","bind":{"label":"item.label","url":"item.url"},"class":"quiet-link text-current"}
:::::::::
::::::::
:::::::
::::::

:::::: paragraph {"id":"ft-copy","props":{"tag":"p"},"bind":{"text":"© {site.year} {globals.city.name}"}}
::::::
:::::
::::
:::
