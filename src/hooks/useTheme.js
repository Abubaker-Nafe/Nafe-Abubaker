import { useEffect, useState } from 'react'

export default function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return (localStorage.getItem('theme') || 'light') === 'dark'
  })

  useEffect(() => {
    const html = document.documentElement
    if (isDark) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return { isDark, toggle: () => setIsDark(v => !v) }
}
