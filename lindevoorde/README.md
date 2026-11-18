# Lindevoorde

A complete website for a Flemish city or municipality to make its own, written in Dutch: Stad Lindevoorde, a fictional town of 38,400 people on the river Voorde. It follows how Flemish local governments work and write: products and services in the Flemish product structure, an e-loket, decision lists and public inquiries as notices, the mayor and aldermen, the Sociaal Huis, and an accessibility statement following the Bestuursdecreet. It is built for accessibility from the ground up: every page meets WCAG 2.2 at level AA in light and dark. Replace the city's name, words and pictures, and keep the rest.

## Install

```bash
composer require letterncms/lindevoorde
php cms site:apply lindevoorde --dry-run
php cms site:apply lindevoorde
```

Or choose **Lindevoorde** when you install (`php cms install --start-from=lindevoorde`), or under Design → Sites in the admin.

## What it brings

- **Pages**: a home page that starts with search and the top tasks; Thema’s, with every product from A to Z by letter, searchable and filtered by theme; Nieuws; Activiteiten; Doe mee; Bestuur, with the city council and how decisions are made; Bekendmakingen; Contact, with every location on a map; Iets melden; Afspraak maken; E-loket; Zoeken; Over Lindevoorde; and the accessibility statement, privacy, cookies, complaints and a sitemap.
- **Collections**: Products (36, each with its cost, term, who it is for, how to apply, what to bring, an action button, where to go, an icon and the words people search for), News (10, as news, press releases or road works), Events (8, listed until they are over, with date and time, venue, price, who it is for, booking and accessibility), Participation (3, open and closed, with the outcome), the board (the mayor, five aldermen and the chief executive), Locations (5 public buildings with opening hours, map position and accessibility) and Notices (10, each with a tagged PDF).
- **Taxonomies**: Thema’s, 10 categories with an icon and a photograph. Every theme has a page with its products and its news.
- **Templates**: Standaard, Pagina, Sectiepagina, Product, Thema, Nieuwsbericht, Activiteit, Inspraak, Bestuurslid, Locatie, Bekendmaking and Niet gevonden.
- **Components**: the header with a service bar (help and sign in), the main menu with a themes panel, search and the e-loket, and a menu on phones; the footer; the alert bar; breadcrumbs; the feedback question; and cards for products, news, events, people, participation and notices, which change everywhere they are used.
- **Globals and menus**: the City, with its addresses, phone, email, emergency number and opening hours; the Alert, a message at the top of every page in three tones while it is switched on; and the main, footer and legal menus.
- **Forms**: ask a question, report a problem with a photo, make an appointment, book a bulky waste collection, respond to a participation round, and page feedback.
- **The styling**: a Tailwind CSS theme in city blue with a brick-red accent, colours for light and dark that keep every text at a contrast of at least 4.5 to 1, Instrument Sans, crisp shapes with small corners, photographs on a ledge of brick (`frame`), the stepped gable of the city's houses as a motif (`gable`), a clear focus line, buttons, form fields, and colour schemes for sections (`scheme-night`, `scheme-soft`, `scheme-accent`, `scheme-paper`, `scheme-photo`).
- **Media**: 30 photographs and 10 documents, with their Dutch alt text, and the city's icon.

## Needs

Lettern 0.53 or later, with the Forms plugin. The font and photographs keep their own licences: see `NOTICE.md`.
