'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Package, Warehouse, Truck, Settings, Shield, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Manipulación de Carga',
    description: 'Cargue y descargue de mercancías con personal capacitado y equipos especializados para garantizar la integridad de su producto.',
    icon: Package,
    href: '/servicios/manipulacion-de-carga',
  },
  {
    title: 'Almacenamiento',
    description: 'Espacios seguros y organizados para el resguardo temporal o prolongado de su mercancía con control de inventario.',
    icon: Warehouse,
    href: '/servicios/almacenamiento',
  },
  {
    title: 'Transporte y Distribución',
    description: 'Servicio de transporte terrestre confiable para la distribución de su carga a nivel local y regional.',
    icon: Truck,
    href: '/servicios/transporte-distribucion',
  },
  {
    title: 'Logística Integral',
    description: 'Soluciones completas que integran almacenamiento, manipulación y distribución para optimizar su cadena de suministro.',
    icon: Settings,
    href: '/servicios/logistica-integral',
  },
  {
    title: 'Carga Especializada',
    description: 'Manejo de mercancías que requieren cuidados especiales: frágiles, sobredimensionadas o de alto valor.',
    icon: Shield,
    href: '/servicios/carga-especializada',
  },
  {
    title: 'Servicios Express',
    description: 'Atención prioritaria para operaciones urgentes con tiempos de respuesta reducidos.',
    icon: Clock,
    href: '/servicios/servicios-express',
  },
];

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Animation variants for each card item
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export function ServicesSection() {
  // Use a ref to track the container element
  const containerRef = useRef<HTMLDivElement>(null);

  // useInView hook provides reliable viewport detection that properly resets on navigation
  // The 'once: true' option ensures the animation only plays once per mount
  // 'margin' option triggers the animation slightly before the element is fully in view
  const isInView = useInView(containerRef, {
    once: true,
    margin: '-50px 0px -50px 0px'
  });

  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Nuestros Servicios Logísticos
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            Ofrecemos soluciones integrales en manipulación de carga y logística
            para optimizar sus operaciones y reducir costos.
          </motion.p>
        </div>

        {/*
          Using ref + useInView + animate pattern instead of whileInView
          This ensures proper animation reset on client-side navigation
        */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              // Adding custom delay based on index ensures correct stagger order
              // even if there are any edge cases with the parent stagger
              custom={index}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <Link
                    href={service.href}
                    className="text-sm font-medium text-primary hover:underline inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    aria-label={`Conocer más sobre ${service.title}`}
                  >
                    Conocer más
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/servicios">
              Ver todos los servicios
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
