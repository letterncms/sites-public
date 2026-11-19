// Zet data-scrolled op de kop zodra de pagina niet meer bovenaan staat: dan krijgt de kop een lijn eronder, en op
// een foto een witte achtergrond. Zonder script blijft de kop zoals hij bovenaan is.
export function mount(el, props, { signal }) {
  const update = () => el.toggleAttribute('data-scrolled', window.scrollY > 8)
  update()
  window.addEventListener('scroll', update, { passive: true, signal })
}
