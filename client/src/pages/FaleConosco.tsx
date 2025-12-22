/*
  Design: Modernismo Corporativo Brasileiro
  Página: Fale Conosco
*/

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrazilMap from "@/components/BrazilMap";
import SEO from "@/components/SEO";

export default function FaleConosco() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "0800 0800 003",
      link: "tel:08000800003",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "comercial@athenaoffice.com.br",
      link: "mailto:comercial@athenaoffice.com.br",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 9h às 18h",
      link: null,
    },
    {
      icon: MapPin,
      title: "Unidades",
      content: "Presentes em todos os estados do Brasil",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Fale Conosco | Atendimento Athena Office"
        description="Entre em contato com a equipe da Athena Office. Tire suas dúvidas sobre nossos planos de escritório virtual e endereço fiscal."
        keywords="contato athena office, suporte escritório virtual, telefone athena office"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
              Fale Conosco
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar! Entre em contato conosco e descubra como a Athena Office 
              pode transformar a maneira como você faz negócios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
                    Envie sua Mensagem
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nome *
                        </label>
                        <Input placeholder="Seu nome completo" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          E-mail *
                        </label>
                        <Input type="email" placeholder="seu@email.com" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Telefone *
                        </label>
                        <Input type="tel" placeholder="(00) 00000-0000" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Empresa
                        </label>
                        <Input placeholder="Nome da empresa" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Assunto *
                      </label>
                      <Input placeholder="Sobre o que você gostaria de falar?" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mensagem *
                      </label>
                      <Textarea 
                        placeholder="Conte-nos mais detalhes sobre sua necessidade..." 
                        rows={6} 
                        required 
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-navy hover:bg-navy/90 text-white font-semibold"
                    >
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
                  Informações de Contato
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-2 hover:border-green transition-smooth">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-navy" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-navy mb-1" style={{ fontFamily: 'Montserrat' }}>
                              {info.title}
                            </h3>
                            {info.link ? (
                              <a 
                                href={info.link} 
                                className="text-muted-foreground hover:text-green transition-smooth"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.content}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/images/office-modern.webp"
                  alt="Escritório moderno Athena Office"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
              Nossas Unidades
            </h2>
            <p className="text-lg text-muted-foreground">
              Presentes em todos os estados brasileiros para melhor atendê-lo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <BrazilMap />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
