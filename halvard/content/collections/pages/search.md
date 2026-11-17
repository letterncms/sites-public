---
id: 01m7npd9ykcsvmvzmcvcrg02jw
title: Search
status: published
published_at: '2026-11-17T21:25:37+00:00'
position: 14
summary: 'Search care, doctors, conditions, news and practical information.'
template: default
---

::: component {"id":"title","props":{"ref":"page-title"}}
:::

::: box {"id":"se","class":"mx-auto max-w-wide px-gutter pt-blocks"}
:::: search-field {"id":"se-field","props":{"size":"lg","label":"Search this website","placeholder":"For example: knee, visiting hours, Dr Mehta","button_label":"Search","button_style":"primary","results_page":"entry:01m7npd9ykcsvmvzmcvcrg02jw"},"class":"mb-10 max-w-2xl"}
::::

:::: search-results {"id":"se-results","props":{"none":"Nothing found for “{query}”. Try another word, or call us.","no_query":"Type what you are looking for: a condition, a specialty, a doctor’s name or a question.","per_page":10,"all_label":"Everything","no_script":"Search needs JavaScript. Use the menu, or call us and we will help you find your way.","more_label":"Show more results","show_filters":true,"filters_label":"Show results of one kind","heading_level":"2"},"class":"max-w-content"}
::::
:::
