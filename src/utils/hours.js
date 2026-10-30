import { useEffect, useState } from 'react'
import { business } from '../data/businessInfo.js'

function toMinutes(time) {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

export function formatTime(time) {
  const [h, m] = time.split(':').map(Number)
  const suffix = h >= 12 ? 'pm' : 'am'
  const hour = h % 12 || 12
  return m ? `${hour}:${String(m).padStart(2, '0')} ${suffix}` : `${hour} ${suffix}`
}

export function formatRange(entry) {
  return `${formatTime(entry.opens)} to ${formatTime(entry.closes)}`
}

// Day and time in the shop's own time zone, so visitors anywhere see the right status.
export function getShopNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: business.timeZone,
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (type) => parts.find((p) => p.type === type)?.value
  return { day: get('weekday'), minutes: Number(get('hour')) * 60 + Number(get('minute')) }
}

export function getOpenStatus(date = new Date()) {
  const { day, minutes } = getShopNow(date)
  const index = business.hours.findIndex((h) => h.day === day)
  if (index === -1) return null
  const today = business.hours[index]
  if (minutes >= toMinutes(today.opens) && minutes < toMinutes(today.closes)) {
    return { isOpen: true, day, text: `Open now until ${formatTime(today.closes)}` }
  }
  if (minutes < toMinutes(today.opens)) {
    return { isOpen: false, day, text: `Closed now. Opens today at ${formatTime(today.opens)}` }
  }
  const next = business.hours[(index + 1) % business.hours.length]
  return { isOpen: false, day, text: `Closed now. Opens tomorrow at ${formatTime(next.opens)}` }
}

// Starts empty on the first render, then fills in after mount and refreshes every minute.
export function useOpenStatus() {
  const [status, setStatus] = useState(null)
  useEffect(() => {
    const update = () => setStatus(getOpenStatus())
    update()
    const id = setInterval(update, 60000)
    return () => clearInterval(id)
  }, [])
  return status
}
