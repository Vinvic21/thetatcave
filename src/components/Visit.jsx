import { useEffect, useState } from 'react'
import { MapPin, Phone } from 'lucide-react'
import { business, mapsUrl } from '../data/businessInfo.js'
import { formatRange, getShopNow } from '../utils/hours.js'
import StarMark from './StarMark.jsx'

export default function Visit() {
  const [today, setToday] = useState(null)
  useEffect(() => setToday(getShopNow().day), [])
  const { address } = business

  return (
    <section id="visit" className="section section--paper-dark" aria-labelledby="visit-title">
      <div className="container visit">
        <div>
          <h2 id="visit-title">Find us on Harlem Avenue</h2>
          <address className="visit__address">
            <strong>{business.name}</strong><br />
            {address.street}<br />
            {address.city}, {address.region} {address.postalCode}
          </address>
          <p>Located in {address.landmark}.</p>
          <div className="visit__actions">
            <a className="btn btn--ink" href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin size={20} aria-hidden="true" />
              Get directions
              <span className="sr-only"> (opens Google Maps in a new tab)</span>
            </a>
            <a className="btn btn--paper" href={`tel:${business.phone.e164}`}>
              <Phone size={20} aria-hidden="true" />
              Call {business.phone.display}
            </a>
          </div>
        </div>

        <div className="hours">
          <table>
            <caption>Opening hours</caption>
            <tbody>
              {business.hours.map((h) => (
                <tr key={h.day} className={today === h.day ? 'is-today' : undefined}>
                  <th scope="row">
                    {today === h.day && <StarMark size={16} />}
                    {h.day}
                    {today === h.day && <span className="hours__today"> (today)</span>}
                  </th>
                  <td>{formatRange(h)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="hours__note">Hours are the ones listed on Google Maps. Message us if you are unsure about a holiday.</p>
        </div>
      </div>
    </section>
  )
}
