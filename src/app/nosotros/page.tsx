import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import PageTransition from '@/components/shared/PageTransition';
import CTASection from '@/components/home/CTASection';
import NosotrosContent from './NosotrosContent';

export const metadata: Metadata = generateSEO({
  title: 'About Us - Trusted Cleaning & Renovation Team in NYC',
  description:
    'Meet the Maval House team — over 6 years of experience providing professional house cleaning, painting, and renovation services across all 5 NYC boroughs. 500+ completed projects, 98% satisfaction rate.',
  path: '/nosotros',
  keywords: [
    'trusted cleaning company NYC',
    'experienced painters New York',
    'reliable renovation team NYC',
    'about Maval House',
  ],
});

export default function NosotrosPage() {
  return (
    <PageTransition>
      <NosotrosContent />
      <CTASection />
    </PageTransition>
  );
}
