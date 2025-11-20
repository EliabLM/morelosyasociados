import type { Metadata } from 'next';
import { siteConfig, pageSeo } from '@/lib/constants';
import { ServiciosContent } from './servicios-content';

export const metadata: Metadata = {
  title: pageSeo.servicios.title,
  description: pageSeo.servicios.description,
  keywords: pageSeo.servicios.keywords,
  openGraph: {
    title: `${pageSeo.servicios.title} | ${siteConfig.name}`,
    description: pageSeo.servicios.description,
    url: `${siteConfig.url}/servicios`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Servicios de Logística`,
      },
    ],
  },
  twitter: {
    title: `${pageSeo.servicios.title} | ${siteConfig.name}`,
    description: pageSeo.servicios.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/servicios`,
  },
};

// BreadcrumbList for navigation
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: siteConfig.url,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Servicios',
      item: `${siteConfig.url}/servicios`,
    },
  ],
};

// JSON-LD for Services page with detailed service information
const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Servicios de Logística y Manipulación de Carga',
  description: pageSeo.servicios.description,
  url: `${siteConfig.url}/servicios`,
  numberOfItems: 6,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Manipulación de Carga',
        description: 'Cargue y descargue de mercancías con personal capacitado y equipos especializados para garantizar la integridad de su producto.',
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        areaServed: {
          '@type': 'City',
          name: 'Cartagena',
        },
        serviceType: 'Cargo Handling',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Almacenamiento',
        description: 'Espacios seguros y organizados para el resguardo temporal o prolongado de su mercancía con control de inventario.',
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        areaServed: {
          '@type': 'City',
          name: 'Cartagena',
        },
        serviceType: 'Warehousing',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Transporte y Distribución',
        description: 'Servicio de transporte terrestre confiable para la distribución de su carga a nivel local y regional.',
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        areaServed: {
          '@type': 'City',
          name: 'Cartagena',
        },
        serviceType: 'Transportation',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Logística Integral',
        description: 'Soluciones completas que integran almacenamiento, manipulación y distribución para optimizar su cadena de suministro.',
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        areaServed: {
          '@type': 'City',
          name: 'Cartagena',
        },
        serviceType: 'Logistics',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'Carga Especializada',
        description: 'Manejo de mercancías que requieren cuidados especiales: frágiles, sobredimensionadas o de alto valor.',
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        areaServed: {
          '@type': 'City',
          name: 'Cartagena',
        },
        serviceType: 'Specialized Cargo',
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Service',
        name: 'Servicios Express',
        description: 'Atención prioritaria para operaciones urgentes con tiempos de respuesta reducidos.',
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        areaServed: {
          '@type': 'City',
          name: 'Cartagena',
        },
        serviceType: 'Express Services',
      },
    },
  ],
};

export default function ServiciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd),
        }}
      />
      <ServiciosContent />
    </>
  );
}
