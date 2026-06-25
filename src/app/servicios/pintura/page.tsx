import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import PageTransition from '@/components/shared/PageTransition';
import ServiceHero from '@/components/servicios/ServiceHero';
import ServiceDetails from '@/components/servicios/ServiceDetails';
import ServiceFAQ from '@/components/servicios/ServiceFAQ';
import ServiceGallery from '@/components/servicios/ServiceGallery';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = generateSEO({
  title: 'Interior & Exterior House Painting NYC - Professional Painters',
  description:
    'Expert interior and exterior painting for houses, apartments, offices, and commercial properties in New York City. Premium paint brands, flawless finishes, free color consultation. All 5 boroughs. Call +1 (929) 549-3683.',
  path: '/servicios/pintura',
  keywords: [
    'house painting NYC',
    'interior painting New York',
    'exterior painting NYC',
    'apartment painting New York',
    'office painting NYC',
    'commercial painting New York',
    'painters near me NYC',
    'painting contractor New York',
    'cabinet painting NYC',
    'wall painting service New York',
    'residential painters Queens',
    'Brooklyn house painter',
    'Manhattan painting company',
    'best painters NYC',
  ],
});

const serviceTypes = [
  {
    title: 'Residential Interior Painting',
    description:
      'We transform bedrooms, living rooms, kitchens and bathrooms with flawless finishes. Surface preparation, priming and high-durability paint application.',
  },
  {
    title: 'Exterior Painting',
    description:
      'Facades, moldings, doors and exterior windows. We use weather-resistant paints that protect and beautify your property.',
  },
  {
    title: 'Commercial Painting',
    description:
      'Offices, retail spaces and commercial areas. We work flexible hours to avoid disrupting your operations.',
  },
  {
    title: 'Special Finishes',
    description:
      'Decorative textures, accent walls, cabinet painting and molding restoration. Details that make a difference.',
  },
];

const checklist = [
  'Assessment of current surface condition',
  'Full protection of floors, furniture and non-paintable areas',
  'Crack, hole and imperfection repair',
  'Professional sanding and surface preparation',
  'Primer application when necessary',
  'Two or more coats of premium quality paint',
  'Clean cuts and precision on edges and moldings',
  'Complete cleanup of work area upon finishing',
  'Final inspection with the client',
  'Free touch-ups within 30 days',
];

const idealFor = [
  'Homeowners wanting to refresh their home\'s appearance',
  'Landlords preparing units between tenants',
  'Building managers with common areas',
  'Businesses needing to update their image',
  'Real estate agents preparing properties for sale',
  'Contractors needing a reliable painting crew',
];

const faqs = [
  {
    question: 'How much does it cost to paint an apartment in NYC?',
    answer:
      'The cost varies based on size, wall condition and finish type. A studio or one-bedroom can start from $800, while a 2-3 bedroom apartment can range between $1,500 and $3,000. We offer free and detailed quotes.',
  },
  {
    question: 'What type of paint do you use?',
    answer:
      'We work with premium brands like Benjamin Moore and Sherwin-Williams. We use low-VOC (volatile organic compounds) paints that are safer for interiors and offer better coverage and durability.',
  },
  {
    question: 'How long does it take to paint an apartment?',
    answer:
      'A standard 1-2 bedroom apartment is completed in 2-3 days. This includes preparation, priming, two coats of paint and cleanup. Larger apartments or those with special finishes may take 4-5 days.',
  },
  {
    question: 'Can you help me choose colors?',
    answer:
      'Yes, we offer complimentary color consultation. We help you select the ideal palette for your space considering lighting, size and the style you are looking for.',
  },
  {
    question: 'Do you prepare the walls before painting?',
    answer:
      'Always. Preparation is key to a professional result. We repair cracks, holes, sand uneven surfaces and apply primer where necessary. This is included in our service.',
  },
  {
    question: 'Do you offer a warranty on the work?',
    answer:
      'Yes, all our painting jobs include a satisfaction guarantee and free touch-ups within the first 30 days after project completion.',
  },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=80', alt: 'Interior wall painting' },
  { src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80', alt: 'Professional paint roller' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1000&q=80', alt: 'Paint color selection' },
  { src: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&w=1000&q=80', alt: 'Freshly painted room' },
];

export default function PinturaPage() {
  return (
    <PageTransition>
      <ServiceHero
        title="Professional interior and exterior painting in NYC"
        description="Flawless finishes that transform any space. We work with the best brands and professional techniques for lasting results."
        image="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1920&q=80"
      />
      <ServiceDetails
        label="Service Types"
        title="Professional painting for every project"
        description="From an accent wall to painting an entire building, we have the experience to do it right."
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
