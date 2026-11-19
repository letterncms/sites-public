# AZ Lindenhof

A complete website for a Flemish hospital, in Dutch, to make your own. AZ Lindenhof is a general hospital with three campuses: patients search for care, a care provider or a condition from the first screen, prepare for a consultation, a day admission or a stay step by step, know what it costs and what their rights are, and know where to go in an emergency (112, the GP on call at 1733, or the emergency department). It speaks the way Belgian hospitals do: eID and the check-in kiosk, the referral letter, route numbers, health insurance funds and the maximum bill, the ombudsman, visiting hours per ward and a portal for your records. The design is calm and its own: a warm serif for headings beside a clear grotesk for reading, leaf green on pale linden tints with a lime accent, pill buttons, cards and photos in the shape of a leaf, and red kept for emergencies alone. It is built to WCAG 2.2 AA, which covers EN 301 549 and the European Accessibility Act, in light and dark, and comes with an accessibility statement to adapt. Replace the words and pictures, and keep the rest.

## Install

```bash
composer require letterncms/lindenhof
php cms site:apply lindenhof --dry-run
php cms site:apply lindenhof
```

Or choose **AZ Lindenhof** when you install (`php cms install --start-from=lindenhof`), or under Design → Sites. The site is in Dutch: make Dutch the site's main language when you install, so its pages have no language in their address.

## What it brings

- **Pages**: a home page that starts with the question “Waarmee kunnen we je helpen?”, a search field, the most searched pages and four tasks; the care on offer from A to Z, a finder for care providers, conditions, tests and treatments from A to Z, the emergency department, Appointment and admission with six pages (making an appointment, your consultation, day admission, admission, costs and bills, rights and the ombudsman), Visiting with visiting hours, route and parking and a greeting card to send, the campuses, About us, News, Activities, Jobs, Support us, GPs and referrers, Contact, My records, an accessibility statement, a privacy page and a search page.
- **Collections**: Care (Zorgaanbod), fourteen departments, centres and clinics, each with an icon, a care area, a photo, a phone number, where to find them, opening hours, whether you need a referral and whether you can book online; each page lists its team, its conditions and its own headings by itself. Care providers, twelve doctors, midwives and therapists with a title (dr., prof. dr.), photo, role, profession, departments, expertise, languages, consultations, training and whether they take new patients. Conditions and treatments, sixteen topics explained for patients. News, six stories with a theme; Activities, six information sessions, courses, tours and symposia, of which the site lists only those still to come; Vacancies, six jobs; Campuses, three, each on a map with a link to directions, and all three on one map on the campuses page.
- **Finding things**: a search page with results by kind, a search field on the home page and a search button in the header, and keywords on departments and conditions so everyday words find them (“hart” finds Cardiology). The care, the care providers and the conditions also filter and search on the page, with letters to jump to.
- **Taxonomies**: Care areas, seven; and News themes, four.
- **Forms**: ask for an appointment (with a referral letter to upload and the support someone needs, such as a Flemish Sign Language interpreter), sign up for an activity, apply for a job, send a greeting card to a patient, and contact the hospital. They need the Forms plugin.
- **Templates**: Full width, Page, Department, Care provider, Condition or treatment, Story, Activity, Vacancy, Campus and 404.
- **Components**: the header with the notice, the emergency number, a menu with panels, search and My records, and a full menu on phones; the footer, the page title, a help card and cards for care providers, stories and activities, which change everywhere they are used; and, not synced, twelve sections to insert and edit freely: a hero with a photo, quick links, steps, figures, a call to action, a photo with text, questions, contact tiles, a team, the latest news, upcoming activities and a whole landing page.
- **Globals and menus**: the hospital's phone numbers, emergency number, email, address, opening times, its patient portal, and a notice across the top of every page with its link; the main menu with its four panels, the top bar, the footer and the legal links.
- **The styling**: a Tailwind CSS theme with colours for light and dark, Fraunces for headings and Schibsted Grotesk for text, pill buttons, form fields, colour schemes for sections (`scheme-forest`, `scheme-tint`, `scheme-surface`, `scheme-sand`, `scheme-emergency`) and the leaf shape (`leaf`, `leaf-sm`, `leaf-media`). Every block is styled with Tailwind classes.
- **Media**: 41 photographs with their alt text in Dutch, and the hospital's leaf as the favicon.

## Needs

Lettern 0.53 or later, and the Forms plugin (`letterncms/forms`) for the forms. The font and photographs keep their own licences: see `NOTICE.md`.
