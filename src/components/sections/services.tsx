'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Building, FileText, Scale, Shield, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Derecho Corporativo',
    description: 'Asesoría integral en constitución de empresas, fusiones, adquisiciones y gobierno corporativo.',
    icon: Building,
    href: '/servicios/derecho-corporativo',
  },
  {
    title: 'Derecho Laboral',
    description: 'Representación en conflictos laborales, contratos y cumplimiento de normativas.',
    icon: Users,
    href: '/servicios/derecho-laboral',
  },
  {
    title: 'Derecho Fiscal',
    description: 'Planificación fiscal estratégica, defensa ante autoridades y cumplimiento tributario.',
    icon: FileText,
    href: '/servicios/derecho-fiscal',
  },
  {
    title: 'Litigio Civil',
    description: 'Representación en juicios civiles, mercantiles y resolución de controversias.',
    icon: Scale,
    href: '/servicios/litigio-civil',
  },
  {
    title: 'Propiedad Intelectual',
    description: 'Registro y protección de marcas, patentes, derechos de autor y secretos industriales.',
    icon: Shield,
    href: '/servicios/propiedad-intelectual',
  },
  {
    title: 'Derecho Inmobiliario',
    description: 'Contratos de compraventa, arrendamiento, fideicomisos y desarrollo inmobiliario.',
    icon: Briefcase,
    href: '/servicios/derecho-inmobiliario',
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
            Nuestras Áreas de Práctica
          </h2>
          <p className="text-lg text-muted-foreground">
            Contamos con especialistas en diversas áreas del derecho para
            brindarle una asesoría integral y personalizada.
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
