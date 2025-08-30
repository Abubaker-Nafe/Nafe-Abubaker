export function smoothScrollToId(id, offset = 80) {
  const el = document.querySelector(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}