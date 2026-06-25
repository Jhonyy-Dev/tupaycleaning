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
    : `${SITE_NAME} | House Cleaning, Painting & Renovation Services in New York City`;
  const url = `${SITE_URL}${path}`;

  const defaultKeywords = [
    'house cleaning NYC',
    'office cleaning New York',
    'deep cleaning service NYC',
    'house painting New York',
    'interior painting NYC',
    'exterior painting New York',
    'home renovation NYC',
    'apartment renovation New York',
    'commercial cleaning NYC',
    'residential cleaning New York',
    'move out cleaning NYC',
    'post construction cleaning',
    'office painting NYC',
    'kitchen renovation New York',
    'bathroom renovation NYC',
    'property make ready NYC',
    'Airbnb cleaning NYC',
    'landlord cleaning service New York',
    'home remodeling NYC',
    'cleaning company near me',
    'painting contractor NYC',
    'renovation contractor New York',
    'Queens cleaning service',
    'Brooklyn house cleaning',
    'Manhattan cleaning service',
    'Bronx house painting',
    'Staten Island renovation',
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
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    description:
      'Professional house cleaning, painting and renovation services in New York City. Serving all five boroughs: Manhattan, Brooklyn, Queens, Bronx and Staten Island.',
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Queens',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.006,
    },
    areaServed: [
      { '@type': 'City', name: 'New York', sameAs: 'https://en.wikipedia.org/wiki/New_York_City' },
      { '@type': 'Borough', name: 'Manhattan' },
      { '@type': 'Borough', name: 'Brooklyn' },
      { '@type': 'Borough', name: 'Queens' },
      { '@type': 'Borough', name: 'Bronx' },
      { '@type': 'Borough', name: 'Staten Island' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00',
    },
    priceRange: '$$',
    image: `${SITE_URL}/images/logo.webp`,
    sameAs: [
      'https://instagram.com/mavalhouse',
      'https://facebook.com/mavalhouse',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
    },
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
              itemOffered: { '@type': 'Service', name: 'Deep House Cleaning NYC', description: 'Professional deep cleaning for houses, apartments and condos in New York City' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Office Cleaning NYC', description: 'Commercial office and workspace cleaning services in New York' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Post-Construction Cleaning', description: 'Post-construction and renovation cleanup services in NYC' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Move-Out Cleaning NYC', description: 'Move-in and move-out cleaning services for NYC apartments' },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Airbnb Cleaning NYC', description: 'Short-term rental turnover cleaning for Airbnb hosts in New York' },
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
        addressLocality: 'Queens',
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
