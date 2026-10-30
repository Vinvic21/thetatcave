import { photos } from '../data/photos.js'

const tiles = [
  { photo: photos.wallSepia, className: 'shop__tile shop__tile--wide' },
  { photo: photos.interiorRedWall, className: 'shop__tile shop__tile--side' },
  { photo: photos.interiorFlag, className: 'shop__tile shop__tile--third' },
  { photo: photos.displayCase, className: 'shop__tile shop__tile--third' },
  { photo: photos.car, className: 'shop__tile shop__tile--third shop__tile--car' },
]

export default function Shop() {
  return (
    <section id="shop" className="section" aria-labelledby="shop-title">
      <div className="container">
        <h2 id="shop-title">Inside the shop</h2>
        <p className="section__intro">
          Red walls covered in framed art, a Chicago flag hanging over the work stations and a jewelry case by the door.
        </p>
        <div className="shop">
          {tiles.map(({ photo, className }) => (
            <figure key={photo.src} className={className}>
              <img src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
