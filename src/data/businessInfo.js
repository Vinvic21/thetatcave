// Single source of truth for every business fact on the site.
// The page, the JSON-LD and the sitemap all read from this file.
// Facts come from the owner's Google Maps listing and the booking number supplied for this project.

export const business = {
  name: 'The Tat Cave',
  category: 'Tattoo and piercing shop',
  schemaType: 'TattooParlor',
  timeZone: 'America/Chicago',
  address: {
    street: '3629 N Harlem Ave',
    city: 'Chicago',
    region: 'IL',
    postalCode: '60634',
    country: 'US',
    landmark: 'Evris Plaza',
  },
  phone: { display: '(773) 725-2283', e164: '+17737252283' },
  whatsapp: { display: '+1 (315) 696-0147', number: '13156960147' },
  // Monday first. Times are 24-hour, shop local time.
  hours: [
    { day: 'Monday', opens: '12:00', closes: '22:00' },
    { day: 'Tuesday', opens: '12:00', closes: '22:00' },
    { day: 'Wednesday', opens: '12:00', closes: '22:00' },
    { day: 'Thursday', opens: '12:00', closes: '22:00' },
    { day: 'Friday', opens: '12:00', closes: '22:00' },
    { day: 'Saturday', opens: '12:00', closes: '22:00' },
    { day: 'Sunday', opens: '12:00', closes: '20:00' },
  ],
}

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.name} ${fullAddress}`
)}`
