import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { siteConfig } from '@/lib/constants';

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Manipulación de Carga y Logística en Cartagena`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'manipulación de carga',
    'logística Cartagena',
    'cargue y descargue',
    'almacenamiento',
    'transporte de carga',
    'operador logístico',
    'estiba y desestiba',
    'consolidación de carga',
    'distribución',
    'Colombia',
    'Cartagena',
    'Bolívar',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Manipulación de Carga y Logística`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'verification-code',
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'es-CO': siteConfig.url,
    },
  },
  category: 'logistics',
};

// JSON-LD Structured Data
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  foundingDate: siteConfig.foundingDate,
  taxID: siteConfig.nit,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle 28 #22-176, Edificio Antonela, Apto 5A',
    addressLocality: siteConfig.contact.city,
    addressRegion: siteConfig.contact.region,
    postalCode: siteConfig.contact.postalCode,
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phoneRaw,
    contactType: 'customer service',
    availableLanguage: ['Spanish'],
    areaServed: 'CO',
  },
  sameAs: [
    siteConfig.links.facebook,
    siteConfig.links.instagram,
    siteConfig.links.linkedin,
  ],
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  image: `${siteConfig.url}/og-image.jpg`,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phoneRaw,
  email: siteConfig.contact.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle 28 #22-176, Edificio Antonela, Apto 5A',
    addressLocality: siteConfig.contact.city,
    addressRegion: siteConfig.contact.region,
    postalCode: siteConfig.contact.postalCode,
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '13:00',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: 'Cartagena',
    '@id': 'https://www.wikidata.org/wiki/Q73555',
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    geoRadius: '100000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Logística',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Manipulación de Carga',
          description: 'Cargue y descargue de mercancías con personal capacitado y equipos especializados.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Almacenamiento',
          description: 'Espacios seguros para el resguardo temporal o prolongado de mercancía.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Transporte y Distribución',
          description: 'Servicio de transporte terrestre confiable para distribución local y regional.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Logística Integral',
          description: 'Soluciones completas que integran almacenamiento, manipulación y distribución.',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
