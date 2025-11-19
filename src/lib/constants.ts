import type { NavItem } from '@/types';

export const siteConfig = {
  name: 'Morelos & Asociados S.A.S.',
  description: 'Empresa especializada en manipulación de carga y soluciones logísticas integrales en Colombia.',
  url: 'https://morelosyasociados.com',
  ogImage: '/og-image.jpg',
  nit: '901438331-2',
  links: {
    facebook: 'https://facebook.com/morelosyasociados',
    instagram: 'https://instagram.com/morelosyasociados',
    linkedin: 'https://linkedin.com/company/morelosyasociados',
    whatsapp: 'https://wa.me/573002000114',
  },
  contact: {
    email: 'contacto@morelosyasociados.com',
    phone: '+57 300 200 0114',
    address: 'Calle 28 #22-176, Edificio Antonela, Apto 5A, Cartagena, Bolívar, Colombia',
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
    { title: 'Manipulación de Carga', href: '/servicios/manipulacion-de-carga' },
    { title: 'Almacenamiento', href: '/servicios/almacenamiento' },
    { title: 'Transporte y Distribución', href: '/servicios/transporte-distribucion' },
    { title: 'Logística Integral', href: '/servicios/logistica-integral' },
  ],
  company: [
    { title: 'Sobre Nosotros', href: '/nosotros' },
    { title: 'Nuestro Equipo', href: '/nosotros#equipo' },
    { title: 'Testimonios', href: '/nosotros#testimonios' },
    { title: 'Blog', href: '/blog' },
  ],
  legal: [
    { title: 'Política de Privacidad', href: '/privacidad' },
    { title: 'Términos y Condiciones', href: '/terminos' },
  ],
};
