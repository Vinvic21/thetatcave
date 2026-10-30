import { useOpenStatus } from '../utils/hours.js'

export default function OpenStatus() {
  const status = useOpenStatus()
  return (
    <p className="status">
      <span className={`status__dot${status?.isOpen ? ' is-open' : ''}`} aria-hidden="true" />
      <span>{status ? status.text : 'Open every day from 12 pm'}</span>
    </p>
  )
}
