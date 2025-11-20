'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Package, Warehouse, Truck, Settings, Shield, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections/cta';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const services = [
  {
    title: 'Manipulación de Carga',
    description: 'Cargue y descargue de mercancías con personal capacitado y equipos especializados para garantizar la integridad de su producto.',
    icon: Package,
    features: [
      'Cargue y descargue de contenedores',
      'Estiba y desestiba',
      'Consolidación de carga',
      'Desconsolidación',
      'Paletización',
    ],
    href: '/servicios/manipulacion-de-carga',
  },
  {
    title: 'Almacenamiento',
    description: 'Espacios seguros y organizados para el resguardo temporal o prolongado de su mercancía con control de inventario.',
    icon: Warehouse,
    features: [
      'Bodegaje general',
      'Almacenamiento temporal',
      'Control de inventarios',
      'Picking y packing',
      'Cross-docking',
    ],
    href: '/servicios/almacenamiento',
  },
  {
    title: 'Transporte y Distribución',
    description: 'Servicio de transporte terrestre confiable para la distribución de su carga a nivel local y regional.',
    icon: Truck,
    features: [
      'Transporte urbano',
      'Distribución regional',
      'Entregas programadas',
      'Rutas optimizadas',
      'Seguimiento en tiempo real',
    ],
    href: '/servicios/transporte-distribucion',
  },
  {
    title: 'Logística Integral',
    description: 'Soluciones completas que integran almacenamiento, manipulación y distribución para optimizar su cadena de suministro.',
    icon: Settings,
    features: [
      'Gestión de cadena de suministro',
      'Coordinación multimodal',
      'Planificación logística',
      'Optimización de costos',
      'Reportes personalizados',
    ],
    href: '/servicios/logistica-integral',
  },
  {
    title: 'Carga Especializada',
    description: 'Manejo de mercancías que requieren cuidados especiales: frágiles, sobredimensionadas o de alto valor.',
    icon: Shield,
    features: [
      'Carga frágil',
      'Carga sobredimensionada',
      'Mercancía de alto valor',
      'Equipos especializados',
      'Personal certificado',
    ],
    href: '/servicios/carga-especializada',
  },
  {
    title: 'Servicios Express',
    description: 'Atención prioritaria para operaciones urgentes con tiempos de respuesta reducidos.',
    icon: Clock,
    features: [
      'Respuesta inmediata',
      'Disponibilidad 24/7',
      'Prioridad en operaciones',
      'Entregas mismo día',
      'Coordinación urgente',
    ],
    href: '/servicios/servicios-express',
  },
];

export function ServiciosContent() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(servicesRef, {
    once: true,
    margin: '-50px 0px -50px 0px'
  });

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
              Ofrecemos una amplia gama de servicios logísticos especializados,
              adaptados a las necesidades específicas de cada cliente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            ref={servicesRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
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
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
