import type { NavItem } from '@/types';

export const siteConfig = {
  name: 'Morelos & Asociados S.A.S.',
  shortName: 'Morelos & Asociados',
  description: 'Empresa especializada en manipulación de carga y soluciones logísticas integrales en Cartagena, Colombia. Servicios de cargue, descargue, almacenamiento y transporte.',
  url: 'https://morelosyasociados.com',
  ogImage: '/og-image.jpg',
  nit: '901438331-2',
  foundingDate: '2020',
  links: {
    facebook: 'https://facebook.com/morelosyasociados',
    instagram: 'https://instagram.com/morelosyasociados',
    linkedin: 'https://linkedin.com/company/morelosyasociados',
    whatsapp: 'https://wa.me/573002000114',
  },
  contact: {
    email: 'contacto@morelosyasociados.com',
    phone: '+57 300 200 0114',
    phoneRaw: '+573002000114',
    address: 'Calle 28 #22-176, Edificio Antonela, Apto 5A, Cartagena, Bolívar, Colombia',
    city: 'Cartagena',
    region: 'Bolívar',
    country: 'Colombia',
    postalCode: '130001',
  },
  geo: {
    latitude: 10.3910,
    longitude: -75.4794,
  },
  businessHours: {
    weekdays: '08:00-18:00',
    saturday: '08:00-13:00',
    sunday: 'Cerrado',
  },
};

// SEO metadata for individual pages
export const pageSeo = {
  home: {
    title: 'Manipulación de Carga y Logística en Cartagena',
    description: 'Morelos & Asociados S.A.S. - Empresa líder en manipulación de carga, almacenamiento y logística integral en Cartagena, Bolívar. Servicios de cargue, descargue y transporte.',
    keywords: [
      'manipulación de carga Cartagena',
      'logística Cartagena',
      'cargue y descargue',
      'almacenamiento',
      'transporte de carga Colombia',
      'operador logístico Cartagena',
      'estiba y desestiba',
      'consolidación de carga',
    ],
  },
  nosotros: {
    title: 'Sobre Nosotros',
    description: 'Conozca a Morelos & Asociados S.A.S., empresa de logística y manipulación de carga en Cartagena. Nuestra misión, visión, valores y equipo de profesionales.',
    keywords: [
      'empresa logística Cartagena',
      'equipo logístico',
      'operador portuario',
      'servicios logísticos Colombia',
      'manipulación de carga profesional',
    ],
  },
  servicios: {
    title: 'Servicios de Logística y Manipulación de Carga',
    description: 'Servicios de manipulación de carga, almacenamiento, transporte y logística integral en Cartagena. Cargue y descargue de contenedores, paletización y distribución.',
    keywords: [
      'servicios de carga',
      'almacenamiento Cartagena',
      'transporte de mercancías',
      'logística integral',
      'carga especializada',
      'cross-docking',
      'picking y packing',
    ],
  },
  contacto: {
    title: 'Contacto',
    description: 'Contáctenos para cotizar servicios de manipulación de carga y logística en Cartagena, Colombia. Atención personalizada y respuesta inmediata.',
    keywords: [
      'contacto logística Cartagena',
      'cotización carga',
      'servicios logísticos presupuesto',
      'operador logístico contacto',
    ],
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
