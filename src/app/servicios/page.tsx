'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Building, FileText, Gavel, Scale, Shield, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections/cta';

const services = [
  {
    title: 'Derecho Corporativo',
    description: 'Asesoría integral en constitución de empresas, fusiones, adquisiciones, joint ventures y gobierno corporativo.',
    icon: Building,
    features: [
      'Constitución de sociedades',
      'Fusiones y adquisiciones',
      'Due diligence',
      'Gobierno corporativo',
      'Contratos comerciales',
    ],
    href: '/servicios/derecho-corporativo',
  },
  {
    title: 'Derecho Laboral',
    description: 'Representación y asesoría en conflictos laborales, contratos colectivos y cumplimiento normativo.',
    icon: Users,
    features: [
      'Contratos individuales y colectivos',
      'Despidos y liquidaciones',
      'Juicios laborales',
      'Auditorías laborales',
      'Capacitación legal',
    ],
    href: '/servicios/derecho-laboral',
  },
  {
    title: 'Derecho Fiscal',
    description: 'Planificación fiscal estratégica, defensa ante autoridades y cumplimiento de obligaciones tributarias.',
    icon: FileText,
    features: [
      'Planeación fiscal',
      'Defensa fiscal',
      'Auditorías fiscales',
      'Comercio exterior',
      'Precios de transferencia',
    ],
    href: '/servicios/derecho-fiscal',
  },
  {
    title: 'Litigio Civil y Mercantil',
    description: 'Representación en juicios civiles y mercantiles, arbitraje y métodos alternos de solución de controversias.',
    icon: Gavel,
    features: [
      'Juicios ordinarios',
      'Juicios ejecutivos',
      'Arbitraje comercial',
      'Mediación',
      'Cobranza judicial',
    ],
    href: '/servicios/litigio-civil',
  },
  {
    title: 'Propiedad Intelectual',
    description: 'Registro y protección de marcas, patentes, derechos de autor y secretos industriales.',
    icon: Shield,
    features: [
      'Registro de marcas',
      'Patentes',
      'Derechos de autor',
      'Licenciamiento',
      'Litigio de PI',
    ],
    href: '/servicios/propiedad-intelectual',
  },
  {
    title: 'Derecho Inmobiliario',
    description: 'Contratos de compraventa, arrendamiento, fideicomisos y desarrollo inmobiliario.',
    icon: Briefcase,
    features: [
      'Compraventa inmobiliaria',
      'Arrendamientos',
      'Fideicomisos',
      'Desarrollo inmobiliario',
      'Due diligence',
    ],
    href: '/servicios/derecho-inmobiliario',
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-primary">Servicios</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ofrecemos una amplia gama de servicios legales especializados,
              adaptados a las necesidades específicas de cada cliente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={service.href}>
                        Más información
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
