import type { Metadata } from 'next';
import { siteConfig, pageSeo } from '@/lib/constants';
import { NosotrosContent } from './nosotros-content';

export const metadata: Metadata = {
  title: pageSeo.nosotros.title,
  description: pageSeo.nosotros.description,
  keywords: pageSeo.nosotros.keywords,
  openGraph: {
    title: `${pageSeo.nosotros.title} | ${siteConfig.name}`,
    description: pageSeo.nosotros.description,
    url: `${siteConfig.url}/nosotros`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Sobre Nosotros`,
      },
    ],
  },
  twitter: {
    title: `${pageSeo.nosotros.title} | ${siteConfig.name}`,
    description: pageSeo.nosotros.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/nosotros`,
  },
};

// JSON-LD for About page
const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: `${pageSeo.nosotros.title} - ${siteConfig.name}`,
  description: pageSeo.nosotros.description,
  url: `${siteConfig.url}/nosotros`,
  mainEntity: {
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
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
      name: 'Nosotros',
      item: `${siteConfig.url}/nosotros`,
    },
  ],
};

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <NosotrosContent />
    </>
  );
}
