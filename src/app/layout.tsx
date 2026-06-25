import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';
import { generateLocalBusinessSchema } from '@/lib/seo';
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
    default: `${SITE_NAME} | House Cleaning, Painting & Renovation Services NYC`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    'house cleaning NYC', 'office cleaning New York', 'deep cleaning service NYC',
    'house painting New York', 'interior painting NYC', 'exterior painting NYC',
    'home renovation NYC', 'apartment renovation New York', 'cleaning company NYC',
    'painting contractor New York', 'kitchen renovation NYC', 'bathroom remodel NYC',
    'commercial cleaning NYC', 'Airbnb cleaning New York', 'move out cleaning NYC',
    'post construction cleaning', 'property make ready NYC', 'home remodeling New York',
    'Queens cleaning', 'Brooklyn cleaning', 'Manhattan cleaning', 'Bronx painting',
  ],
  openGraph: {
    title: `${SITE_NAME} | Professional Cleaning, Painting & Renovation in NYC`,
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

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
