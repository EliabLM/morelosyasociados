'use client';

import { motion } from 'framer-motion';
import { Award, Clock, Target, Users, Linkedin, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CTASection } from '@/components/sections/cta';

const values = [
  {
    title: 'Excelencia',
    description: 'Buscamos la perfección en cada caso, aplicando los más altos estándares profesionales.',
    icon: Award,
  },
  {
    title: 'Compromiso',
    description: 'Nos dedicamos completamente a defender los intereses de nuestros clientes.',
    icon: Target,
  },
  {
    title: 'Integridad',
    description: 'Actuamos con ética y transparencia en todas nuestras relaciones profesionales.',
    icon: Users,
  },
  {
    title: 'Experiencia',
    description: 'Más de 25 años de trayectoria nos respaldan en cada asesoría legal.',
    icon: Clock,
  },
];

const team = [
  {
    name: 'Lic. Roberto Morelos',
    role: 'Socio Fundador',
    specialty: 'Derecho Corporativo y Mercantil',
    bio: 'Con más de 30 años de experiencia, ha liderado transacciones corporativas de alto perfil y asesorado a empresas Fortune 500.',
    email: 'rmorelos@morelosyasociados.com',
    linkedin: '#',
  },
  {
    name: 'Lic. María Fernández',
    role: 'Socia',
    specialty: 'Derecho Laboral',
    bio: 'Especialista en relaciones laborales y litigio laboral, con amplia experiencia en restructuraciones empresariales.',
    email: 'mfernandez@morelosyasociados.com',
    linkedin: '#',
  },
  {
    name: 'Lic. Carlos Ramírez',
    role: 'Socio',
    specialty: 'Derecho Fiscal',
    bio: 'Experto en planificación fiscal y defensa ante autoridades tributarias, con especialidad en comercio internacional.',
    email: 'cramirez@morelosyasociados.com',
    linkedin: '#',
  },
  {
    name: 'Lic. Ana García',
    role: 'Asociada Senior',
    specialty: 'Litigio Civil y Mercantil',
    bio: 'Litigante destacada con alto índice de éxito en juicios civiles y mercantiles complejos.',
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
              Somos una firma de abogados con más de 25 años de experiencia,
              comprometidos con brindar soluciones legales de excelencia y un
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
                Proporcionar servicios legales de la más alta calidad,
                fundamentados en la ética profesional, el conocimiento
                especializado y el compromiso inquebrantable con los intereses
                de nuestros clientes, contribuyendo a su éxito y seguridad
                jurídica.
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
                Ser reconocidos como la firma de abogados líder en México,
                destacando por nuestra excelencia profesional, innovación en la
                práctica legal y el impacto positivo en la comunidad empresarial
                y social del país.
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
              Los principios que guían nuestra práctica profesional y definen
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
              Un equipo de abogados altamente calificados y comprometidos con la
              excelencia profesional.
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
