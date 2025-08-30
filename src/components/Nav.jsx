import { useState } from 'react'
import useTheme from '../hooks/useTheme'
import { smoothScrollToId } from '../smoothScroll'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { isDark, toggle } = useTheme()

  const handleLink = (e, id) => {
    e.preventDefault()
    setOpen(false)
    smoothScrollToId(id)
  }

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-primary">N.A<span className="text-secondary">.</span></a>
          </div>

          <div className="hidden md:flex space-x-8">
            {['home','about','skills','projects','education','contact'].map(s => (
              <a key={s} href={'#'+s} onClick={(e)=>handleLink(e,'#'+s)} className="nav-link text-gray-600 hover:text-primary capitalize">{s}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div
              className={`theme-toggle ${isDark ? 'dark' : ''}`}
              id="theme-toggle"
              aria-label="Toggle dark mode"
              onClick={toggle}
              role="button"
              tabIndex={0}
            >
              <div className="theme-toggle-slider">
                <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'}`} />
              </div>
            </div>

            <a href="#contact" onClick={(e)=>handleLink(e,'#contact')} className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:opacity-90 transition">Contact Me</a>
          </div>

          <button aria-label="Toggle navigation" className="md:hidden text-gray-600" onClick={()=>setOpen(o=>!o)}>
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`mobile-menu md:hidden bg-white ${open ? 'active' : ''}`}>
        <div className="px-4 py-5 flex flex-col space-y-4">
          {['home','about','skills','projects','education','contact'].map(s => (
            <a key={s} href={'#'+s} onClick={(e)=>handleLink(e,'#'+s)} className="nav-link text-gray-600 hover:text-primary capitalize">{s}</a>
          ))}

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <span className="text-gray-600">Dark Mode</span>
            <div
              className={`theme-toggle ${isDark ? 'dark' : ''}`}
              id="mobile-theme-toggle"
              aria-label="Toggle dark mode"
              onClick={toggle}
              role="button"
              tabIndex={0}
            >
              <div className="theme-toggle-slider">
                <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'}`}></i>
              </div>
            </div>
          </div>

          <a href="#contact" onClick={(e)=>handleLink(e,'#contact')} className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium text-center">Contact Me</a>
        </div>
      </div>
    </nav>
  )
}
