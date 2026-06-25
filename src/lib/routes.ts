export const ROUTES = {
  home: '/',
  servicios: {
    limpieza: '/servicios/limpieza',
    pintura: '/servicios/pintura',
    remodelacion: '/servicios/remodelacion',
  },
  nosotros: '/nosotros',
  proceso: '/proceso',
  testimonios: '/testimonios',
  contacto: '/contacto',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: ROUTES.home },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Deep Cleaning', href: ROUTES.servicios.limpieza },
      { label: 'Painting', href: ROUTES.servicios.pintura },
      { label: 'Renovation', href: ROUTES.servicios.remodelacion },
    ],
  },
  { label: 'About Us', href: ROUTES.nosotros },
  { label: 'Process', href: ROUTES.proceso },
  { label: 'Testimonials', href: ROUTES.testimonios },
  { label: 'Contact', href: ROUTES.contacto },
] as const;
