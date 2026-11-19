// Of een gebouw nu open is, uit zijn eigen openingsuren op de pagina: een lijst met per dag de dag en de uren,
// zoals "Maandag" en "8.30 tot 12 uur en 13.30 tot 19 uur". Het blok toont "Nu open tot 12 uur" of
// "Gesloten, opent morgen om 8.30 uur", in de tijd van Brussel, en zet data-open zolang het open is.
// Zonder script blijft de tekst die er al stond.
const DAYS = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
const RANGE = /(\d{1,2})(?:[.:h](\d{2}))?\s*(?:tot|-|–)\s*(\d{1,2})(?:[.:h](\d{2}))?/g

const minutes = (h, m) => Number(h) * 60 + Number(m || 0)
const time = (total) => {
  const h = Math.floor(total / 60)
  const m = total % 60
  return m ? `${h}.${String(m).padStart(2, '0')} uur` : `${h} uur`
}

function week(el) {
  const days = {}
  for (const row of el.querySelectorAll('[data-hours] li')) {
    const [day, hours] = [...row.children].map((cell) => cell.textContent.trim().toLowerCase())
    const index = DAYS.indexOf(day)
    if (index < 0 || hours === undefined) continue
    days[index] = [...hours.matchAll(RANGE)].map((r) => [minutes(r[1], r[2]), minutes(r[3], r[4])])
  }
  return days
}

function now() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Brussels', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
      .formatToParts(new Date())
      .map((p) => [p.type, p.value]),
  )
  return { day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parts.weekday), at: minutes(parts.hour, parts.minute) }
}

function status(days, { day, at }) {
  const today = days[day] ?? []
  const open = today.find(([from, to]) => at >= from && at < to)
  if (open) return { open: true, text: `Nu open tot ${time(open[1])}` }
  const later = today.find(([from]) => from > at)
  if (later) return { open: false, text: `Gesloten, opent om ${time(later[0])}` }
  for (let ahead = 1; ahead <= 7; ahead++) {
    const next = days[(day + ahead) % 7]?.[0]
    if (next) return { open: false, text: `Gesloten, opent ${ahead === 1 ? 'morgen' : DAYS[(day + ahead) % 7]} om ${time(next[0])}` }
  }
  return null
}

export function mount(el, props, { signal }) {
  const days = week(el)
  const out = el.querySelector('[data-status]')
  if (!out || !Object.keys(days).length) return
  const update = () => {
    const result = status(days, now())
    if (!result) return
    out.textContent = result.text
    el.toggleAttribute('data-open', result.open)
    el.toggleAttribute('data-known', true)
  }
  update()
  const timer = setInterval(update, 60_000)
  signal.addEventListener('abort', () => clearInterval(timer))
}
