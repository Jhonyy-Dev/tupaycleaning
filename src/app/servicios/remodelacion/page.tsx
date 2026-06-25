import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import PageTransition from '@/components/shared/PageTransition';
import ServiceHero from '@/components/servicios/ServiceHero';
import ServiceDetails from '@/components/servicios/ServiceDetails';
import ServiceFAQ from '@/components/servicios/ServiceFAQ';
import ServiceGallery from '@/components/servicios/ServiceGallery';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = generateSEO({
  title: 'Home Renovation & Remodeling NYC - Kitchen, Bathroom & Make-Ready',
  description:
    'Professional home renovation, kitchen remodeling, bathroom renovation, and property make-ready services in New York City. Smart renovations for houses, apartments, and rental units. Clear budgets, defined timelines. Call +1 (929) 549-3683.',
  path: '/servicios/remodelacion',
  keywords: [
    'home renovation NYC',
    'kitchen renovation New York',
    'bathroom remodel NYC',
    'apartment renovation New York',
    'home remodeling NYC',
    'property make ready New York',
    'rental unit renovation NYC',
    'Airbnb renovation New York',
    'flooring installation NYC',
    'renovation contractor New York',
    'Queens renovation company',
    'Brooklyn home remodeling',
    'Manhattan apartment renovation',
    'best renovation company NYC',
  ],
});

const serviceTypes = [
  {
    title: 'Kitchen Renovation',
    description:
      'Cabinet updates, countertops, backsplash and fixtures. We transform kitchens into functional and modern spaces within your budget.',
  },
  {
    title: 'Bathroom Renovation',
    description:
      'From fixture replacement to complete remodels. Tiles, vanities, lighting and plumbing with quality finishes.',
  },
  {
    title: 'Flooring & Finishes',
    description:
      'Installation and restoration of hardwood, luxury vinyl, laminate and tile flooring. Finishes that transform any space.',
  },
  {
    title: 'Make-Ready for Rental & Airbnb',
    description:
      'Comprehensive unit preparation: painting, cleaning, minor repairs and final touches. Your property ready to generate income.',
  },
];

const checklist = [
  'Complete property assessment and needs evaluation',
  'Detailed quote with materials and labor breakdown',
  'Clear schedule with start and delivery dates',
  'Controlled demolition and space preparation',
  'Minor electrical and plumbing work when needed',
  'Installation of new materials and finishes',
  'Painting and final details',
  'Complete post-construction cleanup',
  'Point-by-point quality inspection',
  'Final delivery with client walkthrough',
];

const idealFor = [
  'Property owners wanting to increase their property value',
  'Landlords preparing units to maximize rent',
  'Airbnb hosts looking to improve their ratings and reviews',
  'Property buyers needing updates before moving in',
  'Property managers with tenant turnover',
  'Small real estate investors in NYC',
];

const faqs = [
  {
    question: 'What types of renovations do you perform?',
    answer:
      'We specialize in small and medium renovations: kitchens, bathrooms, flooring, full painting and unit preparation. We do not perform major structural work, but we handle everything needed to transform and update a property.',
  },
  {
    question: 'How much does a kitchen renovation cost?',
    answer:
      'A basic kitchen update (cabinet painting, new backsplash, fixtures) can start from $3,000. A more complete renovation with new countertops and cabinets can range between $8,000 and $15,000 depending on materials.',
  },
  {
    question: 'How long does a make-ready take?',
    answer:
      'A standard make-ready (painting, deep cleaning, minor repairs) is completed in 3-5 days. Projects with bathroom or kitchen renovation can take 2-4 weeks depending on scope.',
  },
  {
    question: 'Do you handle the necessary permits?',
    answer:
      'For minor work that does not require DOB permits, we take care of everything. If your project requires special permits, we advise you and connect you with the right professionals.',
  },
  {
    question: 'Can you work within my limited budget?',
    answer:
      'Absolutely. We specialize in maximizing visual and functional impact within defined budgets. We advise you on where to invest for the best return.',
  },
  {
    question: 'Do you offer design or advisory services?',
    answer:
      'Yes, we include complimentary basic design advice. We help you choose materials, colors and layout to optimize your space. For more complex projects, we work with trusted designers.',
  },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80', alt: 'Modern remodeled kitchen' },
  { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80', alt: 'Renovated bathroom with modern finishes' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80', alt: 'Renovation work in progress' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80', alt: 'Interior renovation and remodeling' },
];

export default function RemodelacionPage() {
  return (
    <PageTransition>
      <ServiceHero
        title="Smart renovations and make-ready for your property"
        description="We transform properties with efficient renovations and comprehensive preparation. Clear budgets, defined timelines and results that exceed expectations."
        image="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1920&q=80"
      />
      <ServiceDetails
        label="Service Types"
        title="Renovations that add value"
        description="Every project is designed to maximize the value and functionality of your property."
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
