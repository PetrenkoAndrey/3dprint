import { business } from '../../config/contact.ts'
import { SITE } from '../../config/site.ts'

function buildGraph() {
  const localBusiness = {
    '@type': 'LocalBusiness',
    name: business.name,
    image: [SITE.ogImage],
    url: SITE.canonicalUrl,
    telephone: business.phonesE164[0],
    email: business.email,
    description: SITE.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.streetAddress,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      addressCountry: business.addressCountry,
    },
    areaServed: {
      '@type': 'Country',
      name: SITE.areaServedName,
    },
    priceRange: '₴₴',
    sameAs: [
      'https://www.instagram.com/andrey_petrenko27/',
      'https://t.me/andrey_petrenko27',
    ],
  }

  const webSite = {
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.canonicalUrl,
    inLanguage: [...SITE.inLanguages],
    publisher: { '@id': `${SITE.canonicalUrl}#business` },
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@id': `${SITE.canonicalUrl}#business`, ...localBusiness },
      webSite,
    ],
  }
}

export function JsonLd() {
  const json = JSON.stringify(buildGraph())
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  )
}
