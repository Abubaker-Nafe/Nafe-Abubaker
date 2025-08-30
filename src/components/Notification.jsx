import { useEffect, useState } from 'react'

export default function Notification({ message, type = 'success', duration = 5000, onHide }) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (!message) return
    setShow(true)
    const t = setTimeout(() => {
      setShow(false)
      onHide?.()
    }, duration)
    return () => clearTimeout(t)
  }, [message, duration, onHide])

  if (!message) return null
  return (
    <div className={`notification ${type} ${show ? 'show' : ''}`} role="status" aria-live="polite">
      <span>{message}</span>
    </div>
  )
}
