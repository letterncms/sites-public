# Halvard

A complete website for a hospital, to make your own. Halvard is a teaching hospital for a town and its valley: patients find the right care and the right doctor, read about conditions and treatments in plain words, prepare for an appointment, a stay or a visit, and know where to go in an emergency. The design is calm and clear, with one typeface, a lagoon blue for the brand, a soft colour for each area of care, and red kept for emergencies alone. It is built to WCAG 2.2 AA, in light and dark, and comes with an accessibility statement to adapt. Replace the words and pictures, and keep the rest.

## Install

```bash
composer require letterncms/halvard
php cms site:apply halvard --dry-run
php cms site:apply halvard
```

Or choose **Halvard** when you install (`php cms install --start-from=halvard`), or under Design → Sites.

## What it brings

- **Pages**: a home page with search and the tasks people come for, Care and specialties, Find a doctor, Conditions and treatments, the Emergency department, Patients and visitors with six pages of practical help (your appointment, your hospital stay, visiting, getting here, costs and your rights), News, Events and classes, Careers, Locations, About us, Contact, an accessibility statement and a privacy page.
- **Collections**: Specialties, thirteen departments with an icon, an area of care, a photo, a phone number, where to find them, opening hours and whether you need a referral; each page lists its team and the conditions it treats by itself. Doctors, twelve people with a photo, role, specialties, expertise, languages, consultation hours, training and whether they see new patients. Conditions and Treatments, nineteen topics explained for patients, as conditions, treatments or tests. News, six stories with a topic; Events, five classes and evenings that leave the site the day after; Vacancies, five jobs; Locations, three, with a link to directions.
- **Finding things**: the doctor finder, the specialties and the conditions filter and search on the page, and every page is in the site search.
- **Taxonomies**: Areas of Care, six, whose colour each specialty's card and title band take; and News Topics, four.
- **Forms**: ask for an appointment (with a referral letter to upload and the support someone needs), sign up for an event, apply for a job, and contact the hospital. They need the Forms plugin.
- **Templates**: Full Width, Page, Specialty, Doctor, Condition or Treatment, Story, Event, Vacancy, Location and 404.
- **Components**: the header with the emergency number, search and a full menu on phones, the footer, the page title, a help card and cards for specialties, doctors, stories and events, which change everywhere they are used; and, not synced, twelve sections to insert and edit freely: two heroes, quick links, steps, facts, a call to action, a photo with text, questions, contact tiles, a team, the latest news, upcoming events, and a whole landing page to start a page from.
- **Globals and menus**: the Hospital's phone numbers, emergency number, email, address, opening times, and a notice across the top of every page with its link; the main menu, the top bar, the footer and the legal links.
- **The styling**: a Tailwind CSS theme with colours for light and dark, Figtree, pill buttons, form fields, and colour schemes for sections and cards (`scheme-lagoon`, `scheme-surface`, `scheme-emergency`, and `scheme-mint`, `scheme-sky`, `scheme-lilac`, `scheme-peach`, `scheme-sun` and `scheme-rose` for the areas of care). Every block is styled with Tailwind classes.
- **Media**: 42 photographs, with their alt text.

## Needs

Lettern 0.52 or later, and the Forms plugin (`letterncms/forms`) for the forms. The font and photographs keep their own licences: see `NOTICE.md`.
