import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { business, fullAddress } from './src/data/businessInfo.js'

// Reads SITE_URL (from .env or the hosting dashboard). Only a real https address is accepted,
// so localhost or preview-style placeholders never end up in canonical tags or the sitemap.
function resolveSiteUrl(raw) {
  const value = (raw || '').trim().replace(/\/+$/, '')
  if (!value) return ''
  if (!/^https:\/\//i.test(value) || /localhost|127\.0\.0\.1|example\.(com|org|net)/i.test(value)) {
    console.warn(`[seo] SITE_URL "${value}" is not a real https address, so it was ignored.`)
    return ''
  }
  return value
}

function groupHours() {
  const groups = []
  for (const h of business.hours) {
    const found = groups.find((g) => g.opens === h.opens && g.closes === h.closes)
    if (found) found.dayOfWeek.push(h.day)
    else groups.push({ '@type': 'OpeningHoursSpecification', dayOfWeek: [h.day], opens: h.opens, closes: h.closes })
  }
  return groups
}

function seoPlugin(siteUrl) {
  const homeUrl = siteUrl ? `${siteUrl}/` : ''

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': business.schemaType,
    name: business.name,
    telephone: business.phone.e164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    openingHoursSpecification: groupHours(),
    ...(siteUrl ? { url: homeUrl, image: `${siteUrl}/og-image.jpg` } : {}),
  }

  return {
    name: 'tat-cave-seo',
    transformIndexHtml() {
      const tags = [
        { tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(jsonLd), injectTo: 'head' },
      ]
      if (siteUrl) {
        tags.push(
          { tag: 'link', attrs: { rel: 'canonical', href: homeUrl }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: homeUrl }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image', content: `${siteUrl}/og-image.jpg` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image:alt', content: `${business.name} storefront at ${fullAddress}` }, injectTo: 'head' },
          { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' }, injectTo: 'head' },
        )
      }
      return tags
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml\n` : ''}`,
      })
      if (siteUrl) {
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${homeUrl}</loc>\n  </url>\n</urlset>\n`,
        })
      }
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return { plugins: [react(), seoPlugin(resolveSiteUrl(env.SITE_URL))] }
})
