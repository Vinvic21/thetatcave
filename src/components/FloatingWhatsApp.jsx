import { whatsappUrl, presetMessages } from '../utils/whatsapp.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export default function FloatingWhatsApp() {
  return (
    <a
      className="fab"
      href={whatsappUrl(presetMessages.default)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp (opens in a new tab)"
    >
      <WhatsAppIcon size={30} />
      <span className="fab__label" aria-hidden="true">Book on WhatsApp</span>
    </a>
  )
}
