import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { business } from '../data/businessInfo.js'
import { whatsappUrl, presetMessages } from '../utils/whatsapp.js'
import StarMark from './StarMark.jsx'
import WhatsAppIcon from './WhatsAppIcon.jsx'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#shop', label: 'The shop' },
  { href: '#visit', label: 'Visit' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand__star"><StarMark size={22} /></span>
          <span>{business.name}</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Main">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
            <li className="site-nav__cta">
              <a
                className="btn btn--wa btn--small"
                href={whatsappUrl(presetMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={20} />
                Book on WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="stripes" aria-hidden="true" />
    </header>
  )
}
