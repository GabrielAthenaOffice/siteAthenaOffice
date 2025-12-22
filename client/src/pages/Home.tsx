/*
  Design: Modernismo Corporativo Brasileiro
  - Seções com formas orgânicas e diagonais
  - Animações suaves ao scroll
  - Tipografia Montserrat + Inter
*/

import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Check, Phone, Mail, MapPin, Building2, Calculator, FileText, Copyright, ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import BrazilMap from "@/components/BrazilMap";
import SEO from "@/components/SEO";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Building2,
      title: "Escritório Virtual",
      description: "Escritório Virtual, endereço fiscal e comercial em todos os estados do Brasil.",
    },
    {
      icon: Calculator,
      title: "Planejamento Tributário",
      description: "Realizamos estudo do melhor regime tributário, localização de domicílio fiscal com melhores benefícios fiscais, e créditos tributários a receber.",
    },
    {
      icon: FileText,
      title: "Abertura de Empresa",
      description: "Realizamos a abertura, transferência de endereço fiscal e encerramento de empresas.",
    },
    {
      icon: Copyright,
      title: "Registro de Marca e Patente",
      description: "Garanta que a sua marca esteja registrada e não tenha problemas com uso indevido de marca.",
    },
    {
      icon: ShoppingCart,
      title: "Compra e Venda de Empresas",
      description: "Serviço de avaliação e estudo de viabilidade jurídica, contábil da compra e venda de quotas sociais de empresas, CNPJ/Pessoa jurídica em todo Brasil.",
    },
  ];

  const differentials = [
    "18 anos no mercado",
    "Presente nos 26 estados brasileiros e DF",
    "Não cobramos multa por rescisão contratual",
    "Apoio Contábil e Jurídico durante todo o processo da abertura da sua empresa",
    "Documentos para a abertura da sua empresa em 2h e abertura no mesmo dia",
    "Todo o processo é feito online e sem burocracia",
    "MELHOR PREÇO DO MERCADO!",
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Athena Office | Escritório Virtual e Endereço Fiscal em Todo o Brasil"
        description="A Athena Office oferece soluções completas de escritório virtual, endereço fiscal e comercial em todas as capitais do Brasil. 18 anos de experiência e credibilidade."
        keywords="escritório virtual, endereço fiscal, endereço comercial, coworking, athena office"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-white to-gray-50">
        {/* Organic shape background */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-navy opacity-5 rounded-bl-[100px]"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-sm font-semibold text-green mb-4" style={{ fontFamily: 'Montserrat' }}>
                Escritório Virtual:
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight" style={{ fontFamily: 'Montserrat' }}>
                Endereço Fiscal, Formalização e Legalização de Empresas.
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Descubra como a Athena Office pode transformar a maneira como você faz negócios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-navy hover:bg-navy/90 text-white font-semibold"
                  onClick={() => document.getElementById('unidades')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  CONHECER UNIDADES
                </Button>
                <a href="tel:08000800003">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-green text-navy hover:bg-green hover:text-white font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    0800 0800 003
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
src="/images/hero-executive.webp"
                alt="Executivo profissional"
                className="rounded-3xl shadow-2xl w-full h-auto relative z-10"
                loading="lazy"
              />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green rounded-full opacity-20 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Units Map Section */}
      <section id="unidades" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
                Conheça todas as nossas unidades espalhadas pelo Brasil!
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Clique em um estado no mapa e conheça mais sobre nossas unidades. Estamos presentes nas principais capitais do país, oferecendo endereço fiscal e escritório virtual para sua empresa.
              </p>
              <Button
                size="lg"
                className="bg-navy hover:bg-navy/90 text-white font-semibold"
                onClick={() => navigate("/escritorio-virtual")}
              >
                VER TODAS AS UNIDADES
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <BrazilMap />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <AnimatedCounter end={3853} label="Empresas Abertas" />
            <AnimatedCounter end={18} label="Anos de Experiência" />
            <AnimatedCounter end={29} label="Unidades no Brasil" />
            <AnimatedCounter end={5} suffix=" min" label="Para Envio de documentos" />
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-20 bg-navy text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Montserrat' }}>
              Nossos 7 Diferenciais do Mercado
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 mb-6"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-navy" />
                </div>
                <p className="text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
src="/images/inclusive-workspace.webp"
                  alt="Espaço de trabalho inclusivo"
                  className="rounded-3xl shadow-xl w-full h-auto"
                  loading="lazy"
                />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
                Seu Escritório Virtual, Seu Sucesso Real
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Oferecemos endereços fiscais e escritórios virtuais em locais estratégicos, proporcionando credibilidade e praticidade para sua empresa.
              </p>
              <Button
                size="lg"
                className="bg-navy hover:bg-navy/90 text-white font-semibold"
                onClick={() => document.getElementById('unidades')?.scrollIntoView({ behavior: 'smooth' })}
              >
                CONHECER UNIDADES
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground">
              Conheça agora o que podemos fazer por você e sua empresa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-smooth border-2 hover:border-green">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-navy" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: 'Montserrat' }}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat' }}>
                Contadores
              </h2>
              <p className="text-lg mb-8">
                Seja um parceiro, receba renda passiva, indique nossos planos de Escritório Virtual.
              </p>
              <Button
                size="lg"
                className="bg-white text-navy hover:bg-green hover:text-white font-semibold transition-smooth"
              >
                Quero ser parceiro
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
src="/images/partnership-professional.webp"
                  alt="Profissional parceira"
                  className="rounded-3xl shadow-xl w-full h-auto max-h-[400px] object-cover"
                  loading="lazy"
                />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Action Section */}
      <section id="acao-social" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
src="/images/social-entrepreneur.webp"
                  alt="Empreendedor social"
                  className="rounded-3xl shadow-xl w-full h-auto max-h-[400px] object-cover"
                  loading="lazy"
                />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="text-sm font-semibold text-green mb-4" style={{ fontFamily: 'Montserrat' }}>
                Precisa de um Endereço Fiscal?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
                Nosso Compromisso Social
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Somos uma empresa com 18 anos de mercado, 29 unidades nas principais capitais do Brasil. Acreditamos na nossa responsabilidade social, portanto, entendendo as dificuldades relativo ao custo que existe para abertura de empresa/CNPJ em nosso país, oferecemos nossos serviços de locação de escritório virtual, excepcionalmente, gratuito, para aqueles que enfrentam dificuldades financeiras e para algumas instituições sem fins lucrativos, sujeito à análise por nossa equipe.
              </p>
              <p className="text-base text-muted-foreground">
                Queremos saber o porquê esse serviço fará a diferença na sua vida, ou na de terceiros. Entre em contato e conte sua história.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
              Comece Hoje Mesmo!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Transforme seu negócio com a Athena Office. Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer.
            </p>
            
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Nome" required />
                    <Input type="email" placeholder="E-mail" required />
                  </div>
                  <Input type="tel" placeholder="Telefone" required />
                  <Textarea placeholder="Mensagem" rows={5} required />
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
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/558000800003"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-smooth"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      <Footer />
    </div>
  );
}
