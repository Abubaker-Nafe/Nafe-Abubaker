import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.pageYOffset > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={goTop}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white shadow-lg transition ${show ? '' : 'hidden'}`}
    >
      <i className="fas fa-arrow-up" />
    </button>
  )
}
