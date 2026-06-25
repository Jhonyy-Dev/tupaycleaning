import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import PageTransition from '@/components/shared/PageTransition';
import ContactoContent from './ContactoContent';

export const metadata: Metadata = generateSEO({
  title: 'Contact Us - Free Quote for Cleaning, Painting & Renovation NYC',
  description:
    'Request a free no-obligation quote for house cleaning, office cleaning, painting or renovation services in New York City. We respond in less than 2 hours. Call +1 (929) 549-3683 or WhatsApp us.',
  path: '/contacto',
  keywords: [
    'free cleaning quote NYC',
    'free painting estimate New York',
    'renovation quote NYC',
    'contact cleaning company NYC',
    'hire painters New York',
  ],
});

export default function ContactoPage() {
  return (
    <PageTransition>
      <ContactoContent />
    </PageTransition>
  );
}
