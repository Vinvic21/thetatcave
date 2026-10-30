import { business, fullAddress } from '../data/businessInfo.js'
import { whatsappUrl, presetMessages } from '../utils/whatsapp.js'

export default function Footer() {
  return (
    <footer className="site-footer on-ink">
      <div className="stripes" aria-hidden="true" />
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__name">{business.name}</p>
          <p>{business.category}</p>
          <address>
            {fullAddress}<br />
            <a href={`tel:${business.phone.e164}`}>{business.phone.display}</a>
          </address>
        </div>
        <nav aria-label="Footer">
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Recent work</a></li>
            <li><a href="#shop">Inside the shop</a></li>
            <li><a href="#visit">Hours and directions</a></li>
            <li>
              <a href={whatsappUrl(presetMessages.default)} target="_blank" rel="noopener noreferrer">
                WhatsApp {business.whatsapp.display}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container site-footer__legal">
        <p>© {new Date().getFullYear()} {business.name}</p>
      </div>
    </footer>
  )
}
