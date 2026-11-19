# Wilgendaal

A complete website for a Flemish city or municipality to make its own, written in Dutch: Stad Wilgendaal, a fictional town of 38,400 people in the valley of the river Mere. It follows how Flemish local governments work and write: services in the Flemish product structure, life events that gather what to arrange in the right order, an online application form, decision lists and public inquiries as notices, the mayor and aldermen, the Sociaal Huis, and an accessibility statement following the Bestuursdecreet. Its identity is its own, in the manner of a well-made museum or city newspaper: black on white, large calm headings in Albert Sans, text in Atkinson Hyperlegible Next (made for readers with low vision), photographs given room, thin rules instead of boxes, and one warm brick orange. It is built for accessibility from the ground up: every page meets WCAG 2.2 at level AA in light and dark. Replace the city's name, words and pictures, and keep the rest.

## Install

```bash
composer require letterncms/wilgendaal
php cms site:apply wilgendaal --dry-run
php cms site:apply wilgendaal
```

Or choose **Wilgendaal** when you install (`php cms install --start-from=wilgendaal`), or under Design → Sites in the admin.

## What it brings

- **Pages**: a home page that opens on a photograph of willows on a square with “Welkom in Wilgendaal”, the question “Wat wil je vandaag regelen?”, a search field and the quick actions, then the most asked services, the life events with their photographs, every theme with what is in it, news, events and an orange band for the open participation rounds; Thema’s, with every service from A to Z by letter, searchable and filtered by theme; Levensmomenten; Nieuws; Activiteiten; Doe mee; Bestuur, with the city council and how decisions are made; Bekendmakingen; Contact, with every location on a map and whether it is open now; Iets melden; Afspraak maken; Online aanvragen; Zoeken; Over Wilgendaal; and the accessibility statement, privacy, cookies, complaints and a sitemap.
- **Collections**: Services (Diensten, 46, each with its cost, term, who it is for, how to apply, what to bring, an action button, where to go, an icon and the words people search for), Life events (6: moving, having a baby, living together or marrying, building, starting a business and a death, each with its steps and the services to arrange, in order), News (10, as news, press releases or road works), Events (8, listed until they are over, with date and time, venue, price, who it is for, booking and accessibility), Participation (3, open and closed, with the outcome), the board (the mayor, five aldermen and the chief executive), Locations (5 public buildings with opening hours, map position and accessibility) and Notices (10, each with a tagged PDF).
- **Taxonomies**: Thema’s, 10 categories with an icon, a photograph and a summary. Every theme has a page with its services, help and its news.
- **Templates**: Standaard, Pagina, Sectiepagina, Dienst, Thema, Levensmoment, Nieuwsbericht, Activiteit, Inspraak, Bestuurslid, Locatie, Bekendmaking and Niet gevonden.
- **Components**: the header, with the wordmark, three quick links, search and a menu button whose lines turn into a cross, transparent with white letters over a photograph and with a line under it once you scroll; the menu, which fills the screen with the main pages, every theme, search and the quick actions while only the wordmark and the menu button stay above it; the footer, with the social media channels; breadcrumbs that start with a house and end with the page you are on; the feedback question; and cards for services, life events, news, events, people, participation and notices, which change everywhere they are used.
- **Globals and menus**: the City, with its addresses, phone, email and opening hours; and the main, quick actions (Snel naar), footer, legal and social media menus.
- **Forms**: apply online, ask a question, report a problem with a photo, make an appointment, book a bulky waste collection, respond to a participation round, and page feedback.
- **Scripts**: `scrolled`, which tells the header the page is no longer at the top, and `open-now`, a small script that reads a location's own opening hours on the page and says whether it is open now, in Brussels time, on the contact page and every location.
- **The styling**: a Tailwind CSS theme in black and white with brick orange for planes and rules and a deep blue for what you can do (links that lead on, the menu button, buttons under the pointer), colours for light and dark that keep every text at a contrast of at least 4.5 to 1, Albert Sans and Atkinson Hyperlegible Next at their normal spacing, one type scale and spacing rhythm, square corners, thin rules (`rule-top`, `index-list` and `index-row` for lists that read like a register), numbered steps (`steps`), a search field as one box (`search-box`), photographs that grow when pointed at (`zoom`) and ease in as you scroll (`reveal`, not for who asks for less motion), Dutch hyphenation in headings, a clear focus line, buttons, form fields, and colour schemes for sections (`scheme-night`, `scheme-accent`, `scheme-soft`, `scheme-paper`, `scheme-photo`).
- **Media**: 31 photographs and 10 documents, with their Dutch alt text, and the city's icon.

## Needs

Lettern 0.53 or later, with the Forms plugin. The font and photographs keep their own licences: see `NOTICE.md`.
