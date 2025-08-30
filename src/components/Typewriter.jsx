import { useEffect, useState } from 'react'

export default function Typewriter({ words = [], typingSpeed = 80, pause = 1500 }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (words.length === 0) return
    if (subIndex === words[index].length + 1 && !reverse) {
      // pause at end
      const t = setTimeout(() => setReverse(true), pause)
      return () => clearTimeout(t)
    }
    if (subIndex === 0 && reverse) {
      // move to next word
      setReverse(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((s) => s + (reverse ? -1 : 1))
    }, reverse ? typingSpeed / 2 : typingSpeed)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words, typingSpeed, pause])

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <span className="typewriter" aria-live="polite">
      {words.length ? words[index].slice(0, subIndex) : ''}
      <span className={`caret ${blink ? 'blink' : ''}`} aria-hidden="true">|</span>
    </span>
  )
}
