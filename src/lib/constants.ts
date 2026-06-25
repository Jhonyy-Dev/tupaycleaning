export const SITE_NAME = 'Maval House';
export const SITE_DESCRIPTION =
  'Maval House offers professional house cleaning, office cleaning, interior & exterior painting, and home renovation services in New York City. Serving Manhattan, Brooklyn, Queens, Bronx & Staten Island. Free quotes. Call +1 (929) 549-3683.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mavalhouse.com';

export const CONTACT = {
  phone: '+1 (929) 549-3683',
  phoneHref: 'tel:+19295493683',
  email: 'info@mavalhouse.com',
  whatsapp: 'https://wa.me/19295493683',
  address: 'Queens, New York, NY',
  hours: 'Monday to Saturday: 7:00 AM - 7:00 PM',
} as const;

export const SOCIAL = {
  instagram: 'https://instagram.com/mavalhouse',
  facebook: 'https://facebook.com/mavalhouse',
  google: 'https://g.page/mavalhouse',
} as const;

export const SERVICES = [
  {
    id: 'limpieza',
    title: 'Deep Cleaning',
    shortTitle: 'Cleaning',
    description:
      'Residential, commercial and post-construction deep cleaning. Guaranteed impeccable results.',
    href: '/servicios/limpieza',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pintura',
    title: 'Interior & Exterior Painting',
    shortTitle: 'Painting',
    description:
      'Professional painting with high-quality finishes. We transform any space with precision and detail.',
    href: '/servicios/pintura',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'remodelacion',
    title: 'Renovation & Make-Ready',
    shortTitle: 'Renovation',
    description:
      'Smart renovations and property preparation for rental or Airbnb. Clear budgets and defined timelines.',
    href: '/servicios/remodelacion',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Contact',
    description:
      'Write or call us. We cover all neighborhoods of New York and respond in less than 2 hours.',
  },
  {
    step: 2,
    title: 'Visit & Quote',
    description:
      'We visit your property, evaluate the work and provide you with a detailed quote at no obligation.',
  },
  {
    step: 3,
    title: 'Execution & Quality Control',
    description:
      'Our team performs the work with the highest standards. Final inspection before delivery.',
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    location: 'Upper West Side, Manhattan',
    service: 'Post-construction cleaning',
    text: 'We hired Maval House to clean our apartment after a complete renovation. The result was impeccable. Every corner was perfect and the team was extremely professional.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Mitchell',
    location: 'Park Slope, Brooklyn',
    service: 'Interior painting',
    text: 'I needed to paint my entire brownstone before renting it out. They finished on time and the quality of the finish exceeded my expectations. Highly recommended.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Carlos Gutierrez',
    location: 'Astoria, Queens',
    service: 'Kitchen renovation',
    text: 'They transformed my kitchen completely. From quote to delivery, everything was transparent and professional. Attention to detail is what sets them apart.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sarah Kim',
    location: 'Williamsburg, Brooklyn',
    service: 'Make-ready for Airbnb',
    text: 'They prepare my Airbnb properties regularly. Always punctual, always impeccable. It is a relief to have a trusted team for every turnover.',
    rating: 5,
  },
  {
    id: 5,
    name: 'David Fernandez',
    location: 'Jackson Heights, Queens',
    service: 'Deep cleaning',
    text: 'As a property manager of several buildings, I need a reliable and consistent service. Maval House always delivers. I recommend them without hesitation.',
    rating: 5,
  },
] as const;

export const PROJECTS = [
  {
    id: 1,
    title: 'Complete apartment renovation',
    type: 'Renovation',
    location: 'Chelsea, Manhattan',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Brownstone exterior painting',
    type: 'Painting',
    location: 'Park Slope, Brooklyn',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Post-construction cleaning',
    type: 'Cleaning',
    location: 'SoHo, Manhattan',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Make-ready for Airbnb',
    type: 'Renovation',
    location: 'Astoria, Queens',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Residential interior painting',
    type: 'Painting',
    location: 'Upper East Side, Manhattan',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Commercial deep cleaning',
    type: 'Cleaning',
    location: 'Midtown, Manhattan',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80',
  },
] as const;

export const WHY_US = [
  {
    title: 'Guaranteed Speed',
    description:
      'We meet agreed deadlines. Response in less than 2 hours and execution within stipulated times.',
  },
  {
    title: 'Superior Quality',
    description:
      'We use professional products and techniques. Each job undergoes quality inspection before delivery.',
  },
  {
    title: 'Trusted Team',
    description:
      'Verified professionals with experience and commitment. We treat every property as if it were our own.',
  },
  {
    title: 'Transparent Quotes',
    description:
      'No surprises. We provide a detailed and definitive quote before starting any work.',
  },
] as const;
