# The Tat Cave website

React + Vite website for **The Tat Cave**, a tattoo and piercing shop at 3629 N Harlem Ave, Chicago, IL 60634.
Built from the Google Maps listing details, the booking WhatsApp number and the photos supplied for this project.

## Run it

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # local development, usually http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Update business details

Everything factual lives in `src/data/businessInfo.js` (name, address, phone, WhatsApp number, hours).
The page, the structured data (JSON-LD) and the Google Maps link all read from that one file.
WhatsApp message wording is in `src/utils/whatsapp.js`. Photos and their alt text are in `src/data/photos.js`.

## Project structure

```
public/            favicon.svg, og-image.jpg
src/
  assets/photos/   the shop's photos as optimized WebP
  components/      Header, Hero, Services, Work (gallery + viewer), Shop, Visit, Booking, Footer, FloatingWhatsApp
  data/            businessInfo.js, photos.js
  pages/           HomePage.jsx
  styles/          global.css (tokens, buttons), sections.css
  utils/           hours.js (open/closed status), whatsapp.js (links and messages)
vite.config.js     builds JSON-LD, canonical tags, robots.txt and sitemap.xml
```

It is a single page with anchor links, so no router is needed and every link works on any host.

## WhatsApp booking

- Number: +1 (315) 696-0147 (`wa.me/13156960147`).
- A sticky green WhatsApp button sits at the bottom right on every screen.
- The Booking section has three ready-made messages and a message builder (tattoo, piercing or question, plus name, idea and preferred day). It shows the exact text and opens WhatsApp with it filled in.
- Nothing is sent until the visitor presses send in WhatsApp. There is no fake form.

## Deploy (Vercel or Cloudflare Pages)

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Environment variable | `SITE_URL` = the real https address, no trailing slash |

1. Push the project to GitHub and import it in Vercel or Cloudflare Pages.
2. Deploy once to get the live address (or connect the shop's own domain).
3. Set `SITE_URL` to that address and redeploy. This adds the canonical URL, `og:url`, `og:image`, the JSON-LD `url`, `sitemap.xml` and the sitemap line in `robots.txt`.
   Until `SITE_URL` is set, those are left out on purpose so no placeholder address is published. `localhost` and `example.*` values are rejected.
4. No client-side routing is used, so no rewrite rules are needed.

## After deploying: test the live site

- Open the live address over https on a phone and a laptop.
- Tap the phone number, the directions button and every WhatsApp button, and confirm the message appears in WhatsApp.
- Open `/robots.txt` and `/sitemap.xml`.
- Paste the address into Google's Rich Results Test and the Schema Markup Validator and check that the LocalBusiness data reads correctly.
- Run Lighthouse (Chrome DevTools) for performance and accessibility.

## Google Search Console

1. Go to search.google.com/search-console and add the live address as a property.
2. Verify ownership (DNS record, or the HTML tag method by adding the tag to `index.html`).
3. Submit `https://YOUR-ADDRESS/sitemap.xml`.

Submitting a sitemap or verifying Search Console does not guarantee anything about Google Maps.

## Using it as the Google Maps listing website

Add the live address to the shop's Google Business Profile (listing owner access required). The listing shows "Add website" at the moment.
The site is built to be a clear, honest, crawlable page for the right business, but Google decides what is accepted, and nothing here guarantees approval.
Only submit it if the shop owner has authorized this website as the shop's official site.

## Details to confirm with the owner before publishing

- **Photos**: confirm the shop owns or may use every photo, and that the people in the tattoo and piercing photos agreed to be shown.
- **Hours**: copied from Google Maps (Mon to Sat 12 to 10 pm, Sun 12 to 8 pm). Confirm they are current and ask about holiday hours.
- **Piercing types**: "ear, nose, belly and tragus" comes from the review topics on the listing and the ear photos. Confirm the full list of piercings offered.
- **Jewelry**: the copy says a jewelry case is in the shop and to ask about stock. Confirm that is how they sell jewelry.
- **Prices**: none are shown. The green car photo shows a "$20 body piercing" offer; confirm whether that offer is current before anyone relies on it.
- **Authorization**: confirm the owner approves this as the official website.
- **Email, social links**: none were supplied, so none are shown.
- **Ratings and reviews**: deliberately not shown, to avoid stale or copied review data.

## QA report

Checks performed in the build environment, which had no internet access:

| Check | Result |
| --- | --- |
| Syntax of every `.js` and `.jsx` file | Passed |
| Open/closed logic across five time scenarios in Chicago time, including the daylight saving change | Passed |
| WhatsApp link and message encoding (number, apostrophes, line breaks) | Passed |
| JSON-LD hours grouping (Mon to Sat 12:00 to 22:00, Sun 12:00 to 20:00) | Passed |
| Photo conversion to WebP, real image dimensions in the manifest | Passed |

**Not performed** (could not install dependencies without network access, so please run these on your computer):

- `npm install` and `npm run build`
- Browser check of layout at 375, 768, 1024 and 1440 px, and console errors
- Keyboard walkthrough, the photo viewer and the mobile menu
- Contrast measurement in a browser (colours were chosen against WCAG ratios by calculation)
- Deployed checks: https, redirects, robots.txt, sitemap.xml, structured data validation, Lighthouse

## Known limitations

- Dependency versions (Vite 5, React 18, `lucide-react` 0.460, Fontsource 5) were chosen from memory and not installed here. If `npm install` complains about one, adjust that version in `package.json`.
- No contact email exists on the site because none was supplied.
- The page is a client-rendered React app. A `<noscript>` block carries the name, address, phone and hours for visitors without JavaScript.
- Photo alt text was written from the images and should be checked by someone who knows the work.
