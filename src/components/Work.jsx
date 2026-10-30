import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { workPhotos } from '../data/photos.js'

export default function Work() {
  const [current, setCurrent] = useState(null)
  const dialogRef = useRef(null)
  const count = workPhotos.length

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (current !== null && !dialog.open) dialog.showModal()
    if (current === null && dialog.open) dialog.close()
  }, [current])

  const step = (dir) => setCurrent((i) => (i + dir + count) % count)
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') step(1)
    if (e.key === 'ArrowLeft') step(-1)
  }
  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) setCurrent(null)
  }
  const photo = current !== null ? workPhotos[current] : null

  return (
    <section id="work" className="section section--ink on-ink" aria-labelledby="work-title">
      <div className="container">
        <h2 id="work-title">Recent work</h2>
        <p className="section__intro">A selection of tattoos and piercings from the shop. Select a photo to see it larger.</p>

        <ul className="work">
          {workPhotos.map((p, i) => (
            <li key={p.src} className="work__cell">
              <button type="button" className="work__item" aria-haspopup="dialog" onClick={() => setCurrent(i)}>
                <img src={p.src} width={p.width} height={p.height} alt={p.alt} loading="lazy" decoding="async" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Photo viewer"
        onClose={() => setCurrent(null)}
        onClick={onBackdropClick}
        onKeyDown={onKeyDown}
      >
        {photo && (
          <div className="lightbox__body">
            <img src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} />
            <div className="lightbox__bar">
              <p aria-live="polite">{current + 1} of {count}</p>
              <div className="lightbox__buttons">
                <button type="button" onClick={() => step(-1)} aria-label="Previous photo"><ChevronLeft size={24} aria-hidden="true" /></button>
                <button type="button" onClick={() => step(1)} aria-label="Next photo"><ChevronRight size={24} aria-hidden="true" /></button>
                <button type="button" onClick={() => setCurrent(null)} aria-label="Close photo viewer"><X size={24} aria-hidden="true" /></button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
