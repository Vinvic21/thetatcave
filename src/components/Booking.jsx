import { useMemo, useState } from 'react'
import { business } from '../data/businessInfo.js'
import { buildMessage, presetMessages, whatsappUrl } from '../utils/whatsapp.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

const choices = [
  { value: 'tattoo', label: 'Tattoo' },
  { value: 'piercing', label: 'Piercing' },
  { value: 'question', label: 'Question' },
]

const presets = [
  { label: 'Book a tattoo', text: presetMessages.tattoo },
  { label: 'Book a piercing', text: presetMessages.piercing },
  { label: 'Ask a question', text: presetMessages.question },
]

export default function Booking() {
  const [form, setForm] = useState({ service: 'tattoo', name: '', details: '', day: '' })
  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  const message = useMemo(() => buildMessage(form), [form])
  const detailsLabel =
    form.service === 'tattoo' ? 'Describe your tattoo idea and where you want it'
    : form.service === 'piercing' ? 'Which piercing do you want?'
    : 'What would you like to ask?'

  return (
    <section id="book" className="section on-red" aria-labelledby="book-title">
      <div className="container booking">
        <div className="booking__intro">
          <h2 id="book-title">Book on WhatsApp</h2>
          <p>
            Pick a ready-made message or write your own. WhatsApp opens with the text ready, and nothing is sent until you press send.
          </p>
          <p className="booking__number">WhatsApp number: <strong>{business.whatsapp.display}</strong></p>
          <ul className="booking__presets">
            {presets.map((p) => (
              <li key={p.label}>
                <a className="btn btn--wa" href={whatsappUrl(p.text)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={22} />
                  {p.label}
                  <span className="sr-only"> (opens WhatsApp in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="builder">
          <h3>Write your own message</h3>
          <fieldset className="builder__choices">
            <legend>What is it about?</legend>
            {choices.map((c) => (
              <label key={c.value} className="chip">
                <input type="radio" name="service" value={c.value} checked={form.service === c.value} onChange={update('service')} />
                <span>{c.label}</span>
              </label>
            ))}
          </fieldset>

          <div className="field">
            <label htmlFor="b-name">Your name (optional)</label>
            <input id="b-name" type="text" autoComplete="given-name" maxLength={60} value={form.name} onChange={update('name')} />
          </div>
          <div className="field">
            <label htmlFor="b-details">{detailsLabel}</label>
            <textarea id="b-details" rows={4} maxLength={500} value={form.details} onChange={update('details')} />
          </div>
          <div className="field">
            <label htmlFor="b-day">Day you would like to come in (optional)</label>
            <input id="b-day" type="text" maxLength={80} placeholder="For example, Saturday afternoon" value={form.day} onChange={update('day')} />
          </div>

          <p className="builder__label" id="preview-label">Your message</p>
          <p className="preview" aria-labelledby="preview-label" aria-live="polite">{message}</p>

          <a className="btn btn--wa" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={22} />
            Open WhatsApp with this message
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <p className="builder__note">If WhatsApp is not installed, WhatsApp Web opens instead.</p>
        </div>
      </div>
    </section>
  )
}
