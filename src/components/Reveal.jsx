import { useEffect, useRef } from 'react'

export default function Reveal({ children, rootMargin = '0px 0px -10% 0px', className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) el.classList.add('reveal-show')
      })
    }, { threshold: 0.05, rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref} className={`reveal ${className}`}>{children}</div>
  )
}
