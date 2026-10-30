import { whatsappUrl, presetMessages } from '../utils/whatsapp.js'
import StarMark from './StarMark.jsx'

const services = [
  {
    title: 'Tattoos',
    text: 'Bring an idea, a reference photo or a placement and talk it through with us on WhatsApp before you come in.',
    cta: 'Ask about a tattoo',
    message: presetMessages.tattoo,
  },
  {
    title: 'Body piercing',
    text: 'Ear, nose, belly and tragus piercings, with jewelry to choose from in the shop.',
    cta: 'Ask about a piercing',
    message: presetMessages.piercing,
  },
  {
    title: 'Piercing jewelry',
    text: 'A display case of studs, hoops and barbells sits by the door. Ask what is in stock before you visit.',
    cta: 'Ask about jewelry',
    message: 'Hi The Tat Cave, I have a question about jewelry: ',
  },
]

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title">Tattoos, piercings and jewelry</h2>
        <p className="section__intro">Message us on WhatsApp for current pricing.</p>
        <ul className="menu">
          {services.map((s) => (
            <li key={s.title} className="menu__row">
              <h3><span className="menu__star"><StarMark size={22} /></span>{s.title}</h3>
              <p>{s.text}</p>
              <a className="menu__link" href={whatsappUrl(s.message)} target="_blank" rel="noopener noreferrer">
                {s.cta}
                <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
