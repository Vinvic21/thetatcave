// Photo manifest. Every file lives in src/assets/photos and is imported so Vite hashes and bundles it.
// Width and height are the real pixel sizes, used to reserve space and avoid layout shift.

import exterior from '../assets/photos/exterior.webp'
import interiorFlag from '../assets/photos/interior-flag.webp'
import tattooChainlink from '../assets/photos/tattoo-chainlink.webp'
import tattooBat from '../assets/photos/tattoo-bat.webp'
import car from '../assets/photos/car.webp'
import tattooPencil from '../assets/photos/tattoo-pencil.webp'
import piercingGold from '../assets/photos/piercing-gold.webp'
import tattooAstronaut from '../assets/photos/tattoo-astronaut.webp'
import piercingSilver from '../assets/photos/piercing-silver.webp'
import tattooBack from '../assets/photos/tattoo-back.webp'
import tattooRose from '../assets/photos/tattoo-rose.webp'
import tattooAngel from '../assets/photos/tattoo-angel.webp'
import tattooSkull from '../assets/photos/tattoo-skull.webp'
import displayCase from '../assets/photos/display-case.webp'
import interiorRedWall from '../assets/photos/interior-red-wall.webp'
import wallSepia from '../assets/photos/wall-sepia.webp'

export const photos = {
  exterior: { src: exterior, width: 1087, height: 618, alt: "The Tat Cave storefront: brick building with a large white TATTOO sign above a green awning and Tat Cave lettering on the window" },
  interiorFlag: { src: interiorFlag, width: 676, height: 770, alt: "Inside the shop: a Chicago flag hangs from the ceiling above the work stations, with red walls covered in framed art behind" },
  tattooChainlink: { src: tattooChainlink, width: 676, height: 770, alt: "Black and grey tattoo of a woman with clown-style face paint holding a spade playing card, seen through a chain-link fence, on a thigh" },
  tattooBat: { src: tattooBat, width: 676, height: 770, alt: "Black bat tattoo with a stitched seam down the middle and a needle and thread trailing below" },
  car: { src: car, width: 1085, height: 632, alt: "Green Tat Cave Tattoo promotional car wrapped in skulls, snakes and roses, parked outside a brick storefront" },
  tattooPencil: { src: tattooPencil, width: 687, height: 659, alt: "Colour tattoo of a yellow pencil on a forearm, with the skin appearing to tear around it" },
  piercingGold: { src: piercingGold, width: 687, height: 659, alt: "Ear with a gold hoop, a gold fish charm hoop, a crystal stud and a silver cuff on the upper ear" },
  tattooAstronaut: { src: tattooAstronaut, width: 687, height: 659, alt: "Black and grey tattoo of an astronaut lounging on a crescent moon, on a shoulder blade" },
  piercingSilver: { src: piercingSilver, width: 539, height: 649, alt: "Ear with several piercings and silver jewelry, including a skull stud in the lobe" },
  tattooBack: { src: tattooBack, width: 693, height: 747, alt: "Full back tattoo in black and grey with a large cross, an om symbol, a lotus, cherry blossoms, a seated Buddha and pagodas" },
  tattooRose: { src: tattooRose, width: 693, height: 747, alt: "Black and grey tattoo of a rose with a memorial banner, on an upper arm" },
  tattooAngel: { src: tattooAngel, width: 563, height: 747, alt: "Black and grey tattoo of an armored angel with a shield, on a forearm" },
  tattooSkull: { src: tattooSkull, width: 693, height: 747, alt: "Forearm tattoo of a skull between two red roses" },
  displayCase: { src: displayCase, width: 693, height: 747, alt: "Glass jewelry display case by the shop door, topped with a Tat Cave sign" },
  interiorRedWall: { src: interiorRedWall, width: 693, height: 747, alt: "Red wall covered in framed art and collectibles above two tattoo chairs" },
  wallSepia: { src: wallSepia, width: 1152, height: 750, alt: "Sepia photo of a shop wall with a neon KIDD sign, a large Superman-style emblem, trophies and shelves of tattoo ink bottles" },
}

// Order shown in the Recent work gallery.
export const workPhotos = [
  photos.tattooChainlink,
  photos.tattooBack,
  photos.tattooRose,
  photos.tattooAstronaut,
  photos.piercingGold,
  photos.tattooAngel,
  photos.tattooPencil,
  photos.piercingSilver,
  photos.tattooSkull,
  photos.tattooBat,
]
