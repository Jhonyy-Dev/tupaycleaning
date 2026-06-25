import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import PageTransition from '@/components/shared/PageTransition';
import ServiceHero from '@/components/servicios/ServiceHero';
import ServiceDetails from '@/components/servicios/ServiceDetails';
import ServiceFAQ from '@/components/servicios/ServiceFAQ';
import ServiceGallery from '@/components/servicios/ServiceGallery';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = generateSEO({
  title: 'House & Office Deep Cleaning Services NYC - Residential & Commercial',
  description:
    'Professional deep cleaning for houses, apartments, offices, and commercial spaces in New York City. Post-construction cleanup, move-out cleaning, Airbnb turnover. Serving all 5 boroughs. Free estimates — call +1 (929) 549-3683.',
  path: '/servicios/limpieza',
  keywords: [
    'deep cleaning service NYC',
    'house cleaning New York',
    'office cleaning NYC',
    'commercial cleaning New York',
    'move out cleaning NYC',
    'post construction cleaning New York',
    'Airbnb cleaning NYC',
    'apartment cleaning service NYC',
    'residential cleaners near me New York',
    'cleaning company Queens',
    'cleaning service Brooklyn',
    'Manhattan cleaning company',
    'best house cleaners NYC',
  ],
});

const serviceTypes = [
  {
    title: 'Residential Deep Cleaning',
    description:
      'Thorough cleaning of apartments and houses. We cover every corner, from kitchens and bathrooms to windows and floors. Ideal for periodic deep cleaning.',
  },
  {
    title: 'Commercial Cleaning',
    description:
      'Office spaces, retail locations and building common areas. We keep your workspace impeccable and professional.',
  },
  {
    title: 'Post-Construction Cleaning',
    description:
      'Removal of dust, debris and marks after renovations or construction. We leave the space ready to inhabit or show.',
  },
  {
    title: 'Move-In/Move-Out Cleaning',
    description:
      'Complete cleaning when moving in or out of a property. We ensure the space is in optimal conditions for the next tenant.',
  },
];

const checklist = [
  'Deep kitchen cleaning: appliances, cabinets, surfaces',
  'Complete disinfection of bathrooms and toilets',
  'Interior window and frame cleaning',
  'Vacuuming and mopping of all floors',
  'Baseboards, moldings and detail cleaning',
  'Dust removal from all surfaces',
  'Closets and storage space cleaning',
  'High-touch point disinfection',
  'Trash collection and disposal',
  'Final quality inspection before delivery',
];

const idealFor = [
  'Property owners needing periodic deep cleaning',
  'Landlords preparing units for new tenants',
  'Contractors finishing a construction or renovation',
  'Airbnb hosts between guests',
  'Property and building managers',
  'Families before or after moving',
];

const faqs = [
  {
    question: 'How long does a deep cleaning take?',
    answer:
      'It depends on the space size. A standard 1-2 bedroom apartment takes 3-5 hours. Larger spaces or post-construction cleanings may take a full day. We always provide a precise estimate before starting.',
  },
  {
    question: 'What cleaning products do you use?',
    answer:
      'We use high-quality professional products, many of them eco-friendly and safe for pets and children. If you have specific preferences or allergies, we can adapt the products to your needs.',
  },
  {
    question: 'Do I need to be present during the cleaning?',
    answer:
      'It is not necessary. Many of our clients provide us access and we work while they are away. We send you photos of the results and confirmation when we finish.',
  },
  {
    question: 'Do you offer recurring cleaning services?',
    answer:
      'Yes, we offer weekly, bi-weekly and monthly plans with preferential rates. It is the best way to keep your property always impeccable.',
  },
  {
    question: 'What if I am not satisfied with the result?',
    answer:
      'We have a guaranteed satisfaction policy. If something does not meet your expectations, we return to correct it at no additional cost within 24 hours.',
  },
  {
    question: 'Do you cover all neighborhoods in New York?',
    answer:
      'Yes, we operate in all five boroughs: Manhattan, Brooklyn, Queens, Bronx and Staten Island. We also cover nearby areas in New Jersey and Long Island upon consultation.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'You can fill out our contact form, call us or write us on WhatsApp. We respond in less than 2 hours with an initial estimate. For a definitive quote, we perform a free visit to your property.',
  },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80', alt: 'Professional surface cleaning' },
  { src: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1000&q=80', alt: 'Cleaning team in action' },
  { src: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1000&q=80', alt: 'Deep cleaning results' },
  { src: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=1000&q=80', alt: 'Spotless space after cleaning' },
];

export default function LimpiezaPage() {
  return (
    <PageTransition>
      <ServiceHero
        title="Deep cleaning and post-construction in NYC"
        description="Professional cleaning services for residential and commercial properties. Impeccable results that exceed expectations, with high-quality products and a trusted team."
        image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80"
      />
      <ServiceDetails
        label="Service types"
        title="Cleaning solutions for every need"
        description="We adapt our service to the property type and level of cleaning you need."
        types={serviceTypes}
        checklist={checklist}
        idealFor={idealFor}
      />
      <ServiceGallery images={galleryImages} />
      <ServiceFAQ faqs={faqs} />
      <CTASection />
    </PageTransition>
  );
}
