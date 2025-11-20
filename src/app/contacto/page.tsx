import type { Metadata } from 'next';
import { siteConfig, pageSeo } from '@/lib/constants';
import { ContactoContent } from './contacto-content';

export const metadata: Metadata = {
  title: pageSeo.contacto.title,
  description: pageSeo.contacto.description,
  keywords: pageSeo.contacto.keywords,
  openGraph: {
    title: `${pageSeo.contacto.title} | ${siteConfig.name}`,
    description: pageSeo.contacto.description,
    url: `${siteConfig.url}/contacto`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Contacto`,
      },
    ],
  },
  twitter: {
    title: `${pageSeo.contacto.title} | ${siteConfig.name}`,
    description: pageSeo.contacto.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/contacto`,
  },
};

// JSON-LD for Contact page
const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `${pageSeo.contacto.title} - ${siteConfig.name}`,
  description: pageSeo.contacto.description,
  url: `${siteConfig.url}/contacto`,
  mainEntity: {
    '@type': 'Organization',
    name: siteConfig.name,
    telephone: siteConfig.contact.phoneRaw,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle 28 #22-176, Edificio Antonela, Apto 5A',
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      postalCode: siteConfig.contact.postalCode,
      addressCountry: 'CO',
    },
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
      name: 'Contacto',
      item: `${siteConfig.url}/contacto`,
    },
  ],
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <ContactoContent />
    </>
  );
}
