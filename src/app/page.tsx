import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { AboutPreviewSection } from '@/components/sections/about-preview';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CTASection } from '@/components/sections/cta';
import { siteConfig, pageSeo } from '@/lib/constants';

export const metadata: Metadata = {
  title: pageSeo.home.title,
  description: pageSeo.home.description,
  keywords: pageSeo.home.keywords,
  openGraph: {
    title: `${pageSeo.home.title} | ${siteConfig.name}`,
    description: pageSeo.home.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Manipulación de Carga en Cartagena`,
      },
    ],
  },
  twitter: {
    title: `${pageSeo.home.title} | ${siteConfig.name}`,
    description: pageSeo.home.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
