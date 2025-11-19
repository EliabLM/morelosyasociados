'use client';

import { motion } from 'framer-motion';
import { Award, Package, Target, Users, Linkedin, Mail, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CTASection } from '@/components/sections/cta';

const values = [
  {
    title: 'Eficiencia',
    description: 'Optimizamos cada operación para entregar resultados en el menor tiempo posible.',
    icon: Award,
  },
  {
    title: 'Seguridad',
    description: 'Garantizamos la integridad de su carga con los más altos estándares de manejo.',
    icon: Shield,
  },
  {
    title: 'Compromiso',
    description: 'Nos dedicamos completamente a satisfacer las necesidades logísticas de cada cliente.',
    icon: Target,
  },
  {
    title: 'Confiabilidad',
    description: 'Cumplimos con cada entrega, respetando tiempos y condiciones acordadas.',
    icon: Package,
  },
];

const team = [
  {
    name: 'Roberto Morelos',
    role: 'Gerente General',
    specialty: 'Operaciones y Logística',
    bio: 'Fundador de la empresa con amplia experiencia en el sector logístico portuario de Cartagena.',
    email: 'rmorelos@morelosyasociados.com',
    linkedin: '#',
  },
  {
    name: 'María Fernández',
    role: 'Coordinadora de Operaciones',
    specialty: 'Manipulación de Carga',
    bio: 'Especialista en coordinación de equipos operativos y optimización de procesos de cargue y descargue.',
    email: 'mfernandez@morelosyasociados.com',
    linkedin: '#',
  },
  {
    name: 'Carlos Ramírez',
    role: 'Jefe de Almacén',
    specialty: 'Gestión de Inventarios',
    bio: 'Experto en control de inventarios y administración de espacios de almacenamiento.',
    email: 'cramirez@morelosyasociados.com',
    linkedin: '#',
  },
  {
    name: 'Ana García',
    role: 'Coordinadora Comercial',
    specialty: 'Atención al Cliente',
    bio: 'Encargada de la relación con clientes y desarrollo de nuevas oportunidades de negocio.',
    email: 'agarcia@morelosyasociados.com',
    linkedin: '#',
  },
];

export default function NosotrosPage() {
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
              Sobre <span className="text-primary">Nosotros</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Somos una empresa de logística y manipulación de carga con sede en
              Cartagena, comprometidos con brindar soluciones eficientes y un
              servicio personalizado a cada uno de nuestros clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">Nuestra Misión</h2>
              <p className="text-muted-foreground">
                Proporcionar servicios de manipulación de carga y logística de
                la más alta calidad, fundamentados en la eficiencia operativa,
                el conocimiento especializado y el compromiso inquebrantable con
                la seguridad de la mercancía de nuestros clientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">Nuestra Visión</h2>
              <p className="text-muted-foreground">
                Ser reconocidos como la empresa líder en servicios logísticos en
                Cartagena y la región Caribe, destacando por nuestra excelencia
                operativa, innovación en procesos y el impacto positivo en la
                cadena de suministro de nuestros clientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground">
              Los principios que guían nuestras operaciones y definen
              nuestra relación con cada cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-muted-foreground">
              Un equipo de profesionales altamente capacitados y comprometidos con la
              excelencia operativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Users className="h-12 w-12 text-primary/50" />
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-xl font-semibold">{member.name}</h3>
                          <p className="text-primary font-medium">{member.role}</p>
                          <p className="text-sm text-muted-foreground">
                            {member.specialty}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {member.bio}
                        </p>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" asChild>
                            <a href={`mailto:${member.email}`}>
                              <Mail className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button variant="ghost" size="icon" asChild>
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div id="testimonios">
        <TestimonialsSection />
      </div>
      <CTASection />
    </>
  );
}
