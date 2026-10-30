import { MapPin, Phone } from 'lucide-react'
import { business, fullAddress } from '../data/businessInfo.js'
import { photos } from '../data/photos.js'
import { whatsappUrl, presetMessages } from '../utils/whatsapp.js'
import OpenStatus from './OpenStatus.jsx'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero on-red" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1 id="hero-title">Tattoos and piercings on North Harlem Avenue</h1>
          <p className="hero__lead">
            {business.name} is a tattoo and piercing shop at {business.address.street} in {business.address.city}, open every day.
            Message us on WhatsApp to ask about booking.
          </p>
          <div className="hero__actions">
            <a className="btn btn--wa" href={whatsappUrl(presetMessages.default)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={22} />
              Book on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a className="btn btn--paper" href="#work">See recent work</a>
          </div>
          <ul className="hero__facts">
            <li><MapPin size={20} aria-hidden="true" /><span>{fullAddress}</span></li>
            <li>
              <Phone size={20} aria-hidden="true" />
              <a href={`tel:${business.phone.e164}`}>{business.phone.display}</a>
            </li>
          </ul>
        </div>

        <figure className="hero__photo">
          <img
            src={photos.exterior.src}
            width={photos.exterior.width}
            height={photos.exterior.height}
            alt={photos.exterior.alt}
            fetchpriority="high"
          />
          <div className="hero__badge"><OpenStatus /></div>
        </figure>
      </div>
    </section>
  )
}
