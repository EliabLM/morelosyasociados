'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros Servicios Logísticos
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos soluciones integrales en manipulación de carga y logística
            para optimizar sus operaciones y reducir costos.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <Link
                    href={service.href}
                    className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                  >
                    Conocer más
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/servicios">
              Ver todos los servicios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
