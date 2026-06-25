import { SITE_NAME, SITE_URL, CONTACT } from './constants';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
}

export function generateSEO({
  title = '',
  description = '',
  path = '',
  image = '/images/og-default.jpg',
  keywords = [],
}: SEOProps = {}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME} - NYC`
    : `${SITE_NAME} | Residential & Commercial Cleaning in NYC & the Tri-State Area`;
  const url = `${SITE_URL}${path}`;

  const defaultKeywords = [
    'house cleaning NYC',
    'house cleaning New York',
    'residential cleaning NYC',
    'home cleaning service New York',
    'commercial cleaning NYC',
    'office cleaning New York',
    'deep cleaning service NYC',
    'maid service NYC',
    'apartment cleaning NYC',
    'move out cleaning NYC',
    'move in cleaning New York',
    'post construction cleaning NYC',
    'Airbnb cleaning NYC',
    'recurring cleaning service New York',
    'cleaning company near me',
    'best cleaning service NYC',
    'house cleaning Manhattan',
    'house cleaning Brooklyn',
    'house cleaning Queens',
    'house cleaning Bronx',
    'house cleaning Staten Island',
    'cleaning service Long Island',
    'cleaning service Westchester',
    'house cleaning White Plains',
    'commercial cleaning New Jersey',
    'cleaning service Connecticut',
    'house cleaning The Hamptons',
    'home cleaning tri-state area',
    SITE_NAME,
  ];

  const allKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    icons: {
      icon: '/images/logo.webp',
      apple: '/images/logo.webp',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${SITE_URL}${image}`],
    },
    other: {
      'geo.region': 'US-NY',
      'geo.placename': 'New York',
      'geo.position': '40.7128;-74.0060',
      'ICBM': '40.7128, -74.0060',
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    description:
      'Premium residential, home and commercial cleaning company serving New York City and the tri-state area: Manhattan, Brooklyn, Queens, the Bronx, Staten Island, Long Island, Westchester (White Plains), New Jersey, Connecticut and The Hamptons.',
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.006,
    },
    areaServed: [
      { '@type': 'City', name: 'New York City', sameAs: 'https://en.wikipedia.org/wiki/New_York_City' },
      { '@type': 'AdministrativeArea', name: 'Manhattan' },
      { '@type': 'AdministrativeArea', name: 'Brooklyn' },
      { '@type': 'AdministrativeArea', name: 'Queens' },
      { '@type': 'AdministrativeArea', name: 'The Bronx' },
      { '@type': 'AdministrativeArea', name: 'Staten Island' },
      { '@type': 'AdministrativeArea', name: 'Long Island' },
      { '@type': 'AdministrativeArea', name: 'Westchester County' },
      { '@type': 'City', name: 'White Plains' },
      { '@type': 'AdministrativeArea', name: 'New Jersey' },
      { '@type': 'AdministrativeArea', name: 'Fairfield County, Connecticut' },
      { '@type': 'Place', name: 'The Hamptons' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00',
    },
    priceRange: '$$',
    image: `${SITE_URL}/images/logo.webp`,
    logo: `${SITE_URL}/images/logo.webp`,
    sameAs: [
      'https://instagram.com/tupaycleaning',
      'https://facebook.com/tupaycleaning',
      'https://g.page/tupaycleaning',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Maria Rodriguez' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'We hired Tupay Cleaning to clean our apartment after a complete renovation. The result was impeccable. Every corner was perfect and the team was extremely professional.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'David Fernandez' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'As a property manager of several buildings, I need a reliable and consistent service. Tupay Cleaning always delivers. I recommend them without hesitation.',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cleaning, Painting & Renovation Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Cleaning Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Residential House Cleaning NYC', description: 'Professional home and apartment cleaning across New York City and the tri-state area' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Commercial & Office Cleaning NYC', description: 'Commercial, office and workspace cleaning services in New York and the tri-state area' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Deep Cleaning NYC', description: 'Detailed deep cleaning for houses, apartments and condos in New York City' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Recurring Maid Service NYC', description: 'Weekly, bi-weekly and monthly recurring cleaning plans in New York' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Move-In / Move-Out Cleaning NYC', description: 'Move-in and move-out cleaning services for NYC apartments and homes' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Post-Construction Cleaning NYC', description: 'Post-construction and renovation cleanup services in NYC' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Airbnb Turnover Cleaning NYC', description: 'Short-term rental turnover cleaning for Airbnb hosts in New York' },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Painting Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Interior House Painting NYC', description: 'Professional interior painting for homes and apartments in New York City' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Exterior House Painting NYC', description: 'Exterior painting and facade restoration in New York' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Office Painting NYC', description: 'Commercial office and retail space painting in New York City' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Cabinet Painting NYC', description: 'Kitchen and bathroom cabinet painting and refinishing in NYC' },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Renovation Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Kitchen Renovation NYC', description: 'Modern kitchen remodeling and renovation in New York City' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Bathroom Renovation NYC', description: 'Bathroom remodeling and renovation services in NYC' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Home Remodeling NYC', description: 'Complete home remodeling and renovation in New York' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Property Make-Ready NYC', description: 'Rental unit preparation and make-ready services for landlords in NYC' },
            },
          ],
        },
      ],
    },
  };
}

export function generateServiceSchema(name: string, description: string, areaServed: string = 'New York City') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      telephone: CONTACT.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'New York',
        addressRegion: 'NY',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: areaServed,
    },
    serviceType: name,
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.webp`,
    image: `${SITE_URL}/images/logo.webp`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    description:
      'Premium residential, home and commercial cleaning company serving New York City and the tri-state area.',
    areaServed: 'New York City and the Tri-State Area',
    sameAs: [
      'https://instagram.com/tupaycleaning',
      'https://facebook.com/tupaycleaning',
      'https://g.page/tupaycleaning',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT.phone,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish'],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      'Premium residential, home and commercial cleaning across New York City and the tri-state area.',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
  };
}
