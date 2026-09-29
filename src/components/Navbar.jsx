import { useEffect, useRef, useState } from 'react'
import navLinks from '../data/nav'
import { useActiveSection } from '../hooks/useActiveSection'
import { initNavScroll } from '../animations/scrollAnimations'

export default function Navbar() {
  const navRef = useRef(null)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(['hero', 'work', 'services', 'about', 'contact'])

  useEffect(() => {
    return initNavScroll(navRef.current)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header ref={navRef} className={`nav${open ? ' is-open' : ''}`}>
      <div className="wrap nav-shell">
        <div className="nav-inner">
          <a className="logo" href="#hero" onClick={close}>
            <span className="logo-mark" aria-label="Nimra Ali">NA</span>
            <span className="logo-copy">
              <span className="logo-name">Nimra Ali</span>
            </span>
          </a>

          <nav id="mobile-nav" aria-label="Primary">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className={`nav-link${active === link.id ? ' is-active' : ''}`}
                    href={link.href}
                    onClick={close}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a className="btn btn-primary nav-cta" href="#contact" onClick={close}>
              Start a Project
            </a>
          </div>

          <button
            className={`menu-toggle${open ? ' is-open' : ''}`}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
