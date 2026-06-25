import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import PageTransition from '@/components/shared/PageTransition';
import CTASection from '@/components/home/CTASection';
import TestimoniosContent from './TestimoniosContent';

export const metadata: Metadata = generateSEO({
  title: 'Client Reviews & Testimonials - Cleaning Company NYC & Tri-State',
  description:
    'Read real reviews from 500+ satisfied clients. Tupay Cleaning is a top-rated residential and commercial cleaning company across New York and the tri-state area, with a 4.9-star rating from Manhattan and Brooklyn to Long Island, Westchester, New Jersey, Connecticut and The Hamptons.',
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
