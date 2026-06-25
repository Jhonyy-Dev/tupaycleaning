import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import PageTransition from '@/components/shared/PageTransition';
import CTASection from '@/components/home/CTASection';
import ProcesoContent from './ProcesoContent';

export const metadata: Metadata = generateSEO({
  title: 'Our Process - How We Clean, Paint & Renovate Your Property in NYC',
  description:
    'Discover our proven 6-step process for house cleaning, painting and renovation projects in New York City. From free consultation to final walkthrough — transparent pricing, guaranteed results.',
  path: '/proceso',
  keywords: [
    'how cleaning service works NYC',
    'painting process New York',
    'renovation steps NYC',
    'free property evaluation NYC',
  ],
});

export default function ProcesoPage() {
  return (
    <PageTransition>
      <ProcesoContent />
      <CTASection />
    </PageTransition>
  );
}
