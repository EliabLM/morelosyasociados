'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  {
    value: '25+',
    label: 'Años de Experiencia',
    icon: Clock,
  },
  {
    value: '500+',
    label: 'Clientes Satisfechos',
    icon: Users,
  },
  {
    value: '98%',
    label: 'Casos Exitosos',
    icon: Award,
  },
];

export function AboutPreviewSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Comprometidos con la{' '}
              <span className="text-primary">Excelencia Legal</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              En Morelos & Asociados, nos distinguimos por nuestro compromiso
              con la calidad y la atención personalizada. Cada caso es único y
              merece una estrategia legal diseñada específicamente para alcanzar
              los mejores resultados.
            </p>

            <p className="text-muted-foreground">
              Nuestro equipo de abogados combina años de experiencia con un
              enfoque innovador, manteniéndonos a la vanguardia de las
              prácticas legales modernas mientras preservamos los valores
              tradicionales de la profesión.
            </p>

            <Button size="lg" asChild>
              <Link href="/nosotros">
                Conocer más sobre nosotros
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-card border shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
