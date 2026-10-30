import { business } from '../data/businessInfo.js'

export function whatsappUrl(text) {
  return `https://wa.me/${business.whatsapp.number}?text=${encodeURIComponent(text)}`
}

export const presetMessages = {
  default: 'Hi The Tat Cave, I’d like to book an appointment.',
  tattoo: 'Hi The Tat Cave, I’d like to book a tattoo. Here’s my idea: ',
  piercing: 'Hi The Tat Cave, I’d like to book a piercing. The piercing I want: ',
  question: 'Hi The Tat Cave, I have a question: ',
}

export function buildMessage({ service, name, details, day }) {
  const lines = []
  if (service === 'tattoo') lines.push('Hi The Tat Cave, I’d like to book a tattoo.')
  else if (service === 'piercing') lines.push('Hi The Tat Cave, I’d like to book a piercing.')
  else lines.push('Hi The Tat Cave, I have a question about booking.')

  if (name.trim()) lines.push(`My name is ${name.trim()}.`)
  if (details.trim()) {
    const label = service === 'tattoo' ? 'My idea' : service === 'piercing' ? 'The piercing I want' : 'My question'
    lines.push(`${label}: ${details.trim()}`)
  }
  if (day.trim()) lines.push(`I’d like to come in: ${day.trim()}.`)
  if (service !== 'question') lines.push('What times do you have available?')
  return lines.join('\n')
}
