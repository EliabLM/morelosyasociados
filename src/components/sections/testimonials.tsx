'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    company: 'Importadora del Caribe S.A.S.',
    role: 'Gerente de Operaciones',
    content: 'El equipo de Morelos & Asociados ha sido fundamental para nuestras operaciones portuarias. Su profesionalismo en la manipulación de carga y tiempos de respuesta son excepcionales.',
    rating: 5,
  },
  {
    name: 'María García',
    company: 'Distribuidora Costa Norte',
    role: 'Directora Logística',
    content: 'Gracias a su servicio de almacenamiento y distribución, hemos optimizado nuestra cadena de suministro significativamente. Totalmente recomendados.',
    rating: 5,
  },
  {
    name: 'Roberto Hernández',
    company: 'Comercializadora Bolívar',
    role: 'Gerente General',
    content: 'Su atención al manejo de carga especializada ha sido impecable. Siempre disponibles y con soluciones efectivas para nuestras necesidades logísticas.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            La satisfacción de nuestros clientes es nuestra mejor carta de
            presentación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center space-x-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
