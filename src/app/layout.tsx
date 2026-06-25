import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from '@/lib/seo';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GrainOverlay from '@/components/shared/GrainOverlay';
import ScrollProgress from '@/components/shared/ScrollProgress';
import FloatingButtons from '@/components/shared/FloatingButtons';
import MapSection from '@/components/shared/MapSection';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Residential & Commercial Cleaning in NYC & the Tri-State Area`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    'house cleaning NYC', 'residential cleaning New York', 'commercial cleaning NYC',
    'office cleaning New York', 'deep cleaning service NYC', 'maid service NYC',
    'apartment cleaning NYC', 'move out cleaning NYC', 'move in cleaning New York',
    'post construction cleaning NYC', 'Airbnb cleaning NYC', 'recurring cleaning service NYC',
    'house cleaning Manhattan', 'house cleaning Brooklyn', 'house cleaning Queens',
    'house cleaning Bronx', 'house cleaning Staten Island', 'cleaning service Long Island',
    'cleaning service Westchester', 'house cleaning White Plains', 'commercial cleaning New Jersey',
    'cleaning service Connecticut', 'house cleaning The Hamptons', 'cleaning company near me',
    'best cleaning service NYC', 'home cleaning tri-state area',
  ],
  openGraph: {
    title: `${SITE_NAME} | Premium Residential & Commercial Cleaning in NYC & the Tri-State Area`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/images/logo.webp',
    apple: '/images/logo.webp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
  other: {
    'geo.region': 'US-NY',
    'geo.placename': 'New York',
    'geo.position': '40.7128;-74.0060',
    'ICBM': '40.7128, -74.0060',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <GrainOverlay />
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <MapSection />
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
