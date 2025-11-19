import type { NavItem } from '@/types';

export const siteConfig = {
  name: 'Morelos & Asociados',
  description: 'Firma de abogados profesionales comprometidos con la excelencia legal y el servicio personalizado.',
  url: 'https://morelosyasociados.com',
  ogImage: '/og-image.jpg',
  links: {
    facebook: 'https://facebook.com/morelosyasociados',
    instagram: 'https://instagram.com/morelosyasociados',
    linkedin: 'https://linkedin.com/company/morelosyasociados',
    whatsapp: 'https://wa.me/521234567890',
  },
  contact: {
    email: 'contacto@morelosyasociados.com',
    phone: '+52 (55) 1234-5678',
    address: 'Av. Paseo de la Reforma 250, Piso 10, Col. Juárez, CDMX, México',
  },
};

export const mainNav: NavItem[] = [
  {
    title: 'Inicio',
    href: '/',
  },
  {
    title: 'Nosotros',
    href: '/nosotros',
  },
  {
    title: 'Servicios',
    href: '/servicios',
  },
  {
    title: 'Contacto',
    href: '/contacto',
  },
];

export const footerNav = {
  services: [
    { title: 'Derecho Corporativo', href: '/servicios/derecho-corporativo' },
    { title: 'Derecho Laboral', href: '/servicios/derecho-laboral' },
    { title: 'Derecho Fiscal', href: '/servicios/derecho-fiscal' },
    { title: 'Litigio Civil', href: '/servicios/litigio-civil' },
  ],
  company: [
    { title: 'Sobre Nosotros', href: '/nosotros' },
    { title: 'Nuestro Equipo', href: '/nosotros#equipo' },
    { title: 'Testimonios', href: '/nosotros#testimonios' },
    { title: 'Blog', href: '/blog' },
  ],
  legal: [
    { title: 'Aviso de Privacidad', href: '/privacidad' },
    { title: 'Términos y Condiciones', href: '/terminos' },
  ],
};
