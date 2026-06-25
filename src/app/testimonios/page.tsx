import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import PageTransition from '@/components/shared/PageTransition';
import CTASection from '@/components/home/CTASection';
import TestimoniosContent from './TestimoniosContent';

export const metadata: Metadata = generateSEO({
  title: 'Client Reviews & Testimonials - Cleaning, Painting & Renovation NYC',
  description:
    'Read real reviews from 500+ satisfied clients. Maval House is the top-rated cleaning, painting and renovation company in New York City with a 4.9-star rating across Manhattan, Brooklyn, Queens, Bronx & Staten Island.',
  path: '/testimonios',
  keywords: [
    'cleaning service reviews NYC',
    'painting company reviews New York',
    'renovation reviews NYC',
    'best rated cleaning NYC',
    'top painters New York',
  ],
});

export default function TestimoniosPage() {
  return (
    <PageTransition>
      <TestimoniosContent />
      <CTASection />
    </PageTransition>
  );
}
