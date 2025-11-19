'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/constants';

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesita Soluciones Logísticas?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Contáctenos hoy para una cotización personalizada. Nuestro equipo
            está listo para optimizar sus operaciones de carga y distribución
            de manera eficiente y segura.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/contacto">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                {siteConfig.contact.phone}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
