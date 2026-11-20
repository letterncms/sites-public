// Geeft een kant die blijft staan haar hoogte mee (--stick-height): zo weet het stijlblad of ze op het scherm past.
// Zonder script blijft ze bovenaan staan, zoals een korte kant altijd doet.
export function mount(el, props, { signal }) {
  const update = () => el.style.setProperty('--stick-height', `${el.offsetHeight}px`)
  update()
  const observer = new ResizeObserver(update)
  observer.observe(el)
  signal.addEventListener('abort', () => observer.disconnect())
}
