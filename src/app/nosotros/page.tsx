import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import PageTransition from '@/components/shared/PageTransition';
import CTASection from '@/components/home/CTASection';
import NosotrosContent from './NosotrosContent';

export const metadata: Metadata = generateSEO({
  title: 'About Us - Trusted Cleaning Company in NYC & the Tri-State Area',
  description:
    'Meet the Tupay Cleaning team — years of experience delivering premium residential, home and commercial cleaning across NYC and the tri-state area. 500+ completed projects and a 98% client satisfaction rate.',
  path: '/nosotros',
  keywords: [
    'trusted cleaning company NYC',
    'residential cleaners New York',
    'commercial cleaning team tri-state',
    'about Tupay Cleaning',
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
