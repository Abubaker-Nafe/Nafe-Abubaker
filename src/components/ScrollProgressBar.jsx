import { useEffect, useState } from 'react'

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const barMax = () => {
      const de = document.documentElement
      const b = document.body
      const docHeight = Math.max(
        de.scrollHeight, b.scrollHeight,
        de.offsetHeight, b.offsetHeight,
        de.clientHeight, b.clientHeight
      )
      return Math.max(0, docHeight - window.innerHeight)
    }

    const update = () => {
      const max = barMax()
      const pct = max ? (window.scrollY / max) * 100 : 0
      setWidth(pct)
    }

    update()
    const onScroll = () => requestAnimationFrame(update)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)
    window.addEventListener('load', update)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
      window.removeEventListener('load', update)
    }
  }, [])

  return <div id="scroll-progress" style={{ width: width + '%' }} aria-hidden="true" />
}
