# Aldermoor

A complete website for a city or local council to make its own: Aldermoor, a fictional city of 214,000 people. It puts residents’ tasks first, with search on every page, services grouped by topic and from A to Z, a results page for search, and each service saying what it costs, how long it takes, who can use it and where to start. It is built for accessibility from the ground up: every page meets WCAG 2.2 at level AA in light and dark, it is set in Atkinson Hyperlegible Next, a typeface drawn for readers with low vision, its words are written in plain language, and it ships with an accessibility statement in the European Union’s model format. Replace the city’s name, words and pictures, and keep the rest.

## Install

```bash
composer require letterncms/aldermoor
php cms site:apply aldermoor --dry-run
php cms site:apply aldermoor
```

Or choose **Aldermoor** when you install (`php cms install --start-from=aldermoor`), or under Design → Sites in the admin.

## What it brings

- **Pages**: a home page that starts with search and the most requested services; Services, with topics and an A to Z by letter that filters by topic and searches as you type; News; Events; Have your say; The council, with how decisions are made, council meetings and councillors by district; Places to visit; Documents; Contact us; Report a problem; Make an appointment; Search; About Aldermoor; an accessibility statement, privacy, cookies, complaints and a sitemap.
- **Collections**: Services (33, each with its cost, how long it takes, who can use it, how to apply, a button to start, where to go and words people search for), News (10, as news, press releases or works and closures), Events (8, listed until they are over, with date and time, venue, price, who it is for, booking and accessibility), Consultations (3, open and closed, with the outcome), People (the mayor, four deputy mayors, the chief executive and a councillor), Places (5 public buildings with opening hours, map position and accessibility) and Documents (8, each with a tagged PDF).
- **Taxonomies**: Topics, 12 categories with an icon and a photograph. Every topic has a page with its services and its news.
- **Templates**: Default, Page, Section Page, Service, Topic, News Article, Event, Consultation, Person, Place, Document and Not Found.
- **Components**: the header with the official-website strip, search and a menu on phones; the footer; the alert bar; breadcrumbs; the page feedback question; cards for services, news, events, people, consultations and documents, which change everywhere they are used; and, not synced, 12 sections to insert and edit freely (heroes with search or a photo, step by step, at a glance, notices, common questions, numbers, a timeline, link tiles, a call to action, contact options, latest documents) and two whole pages (a project page and a campaign page).
- **Globals and menus**: the City, with its name, addresses, phone, email, emergency number and opening hours; the Alert, a message at the top of every page in three tones while it is switched on; and the main, utility, footer and legal menus.
- **Forms**: ask a question, report a problem with a photo, make an appointment, book a bulky waste collection, respond to a consultation, and page feedback.
- **The styling**: a Tailwind CSS theme with colours for light and dark that keep every text at a contrast of at least 4.5 to 1, Atkinson Hyperlegible Next, a clear focus line on everything you can reach by keyboard, buttons, form fields, and colour schemes for sections (`scheme-night`, `scheme-soft`, `scheme-sun`, `scheme-paper`, and `scheme-photo` for words over a photograph).
- **Media**: 31 photographs and 8 documents, with their alt text, and the city’s icon.

## Needs

Lettern 0.53 or later, with the Forms plugin. The font and photographs keep their own licences: see `NOTICE.md`.
