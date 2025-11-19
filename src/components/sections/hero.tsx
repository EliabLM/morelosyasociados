'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-secondary/10 text-secondary-foreground">
              <Package className="mr-2 h-4 w-4" />
              Soluciones Logísticas en Cartagena
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Manipulación de Carga{' '}
              <span className="text-primary">Profesional</span> y Confiable
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Somos una empresa especializada en manipulación de carga y soluciones
              logísticas integrales, comprometidos con la eficiencia y seguridad de su mercancía.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contacto">
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/servicios">
                  Conocer Servicios
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
              <div className="w-full h-full rounded-xl bg-card shadow-2xl flex items-center justify-center">
                <Package className="h-32 w-32 text-primary/50" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
