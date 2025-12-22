/*
  Design: Modernismo Corporativo Brasileiro
  Página: Por que Athena Office
*/

import { motion } from "framer-motion";
import { Building2, Calculator, FileText, Copyright, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

export default function PorQueAthena() {
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

  const advantages = [
    {
      id: "endereco",
      title: "Endereço Comercial e Fiscal",
      content: "Oferecemos um endereço prestigiado para ser utilizado em cartões de visita, websites, e como endereço fiscal para empresas, o que pode conferir maior credibilidade aos negócios. Tenha um endereço profissional em locais estratégicos sem os custos de um escritório físico.",
    },
    {
      id: "atendimento",
      title: "Atendimento Telefônico Personalizado",
      content: "Serviço de atendimento telefônico profissional em nome da sua empresa, garantindo que todas as chamadas sejam atendidas de forma cortês e eficiente, mesmo quando você não está disponível.",
    },
    {
      id: "salas",
      title: "Salas de Reunião",
      content: "Acesso a salas de reunião equipadas e profissionais sempre que necessário, permitindo receber clientes e parceiros em um ambiente adequado, sem a necessidade de manter um espaço físico permanente.",
    },
    {
      id: "correspondencias",
      title: "Recebimento de Correspondências",
      content: "Gestão completa do recebimento, triagem e encaminhamento de correspondências e documentos importantes, garantindo que nada se perca e tudo chegue até você de forma organizada.",
    },
    {
      id: "flexibilidade",
      title: "Flexibilidade e Economia",
      content: "Reduza significativamente os custos operacionais eliminando despesas com aluguel, contas de luz, água, internet e manutenção de um escritório físico. Tenha a flexibilidade de trabalhar de qualquer lugar mantendo uma presença profissional.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Por Que Escolher a Athena Office? | Vantagens e Diferenciais"
        description="Descubra as vantagens de ter um escritório virtual na Athena Office: economia, flexibilidade, atendimento personalizado e endereços de prestígio."
        keywords="vantagens escritório virtual, diferenciais athena office, economia empresa"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
                Conheça agora o porquê escolher o
              </h1>
              <h2 className="text-5xl md:text-6xl font-bold text-navy mb-8" style={{ fontFamily: 'Montserrat' }}>
                Athena Office
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Descubra agora as inúmeras vantagens do Athena.
              </p>
              <p className="text-base text-muted-foreground">
                O Athena Office é um escritório virtual que oferece uma série de serviços para profissionais 
                e empresas que precisam de um endereço comercial e outras facilidades sem a necessidade de 
                manter um escritório físico.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/images/hero-executive.webp"
                alt="Executivo profissional"
                className="rounded-3xl shadow-xl w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Accordion */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center" style={{ fontFamily: 'Montserrat' }}>
              Principais Vantagens
            </h2>
            <Accordion type="single" collapsible defaultValue="endereco" className="w-full">
              {advantages.map((advantage) => (
                <AccordionItem key={advantage.id} value={advantage.id} className="border-b-2">
                  <AccordionTrigger className="text-left text-lg font-semibold text-navy hover:text-green" style={{ fontFamily: 'Montserrat' }}>
                    {advantage.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pt-4">
                    {advantage.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
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
            <Button
              size="lg"
              className="bg-navy hover:bg-navy/90 text-white font-semibold"
            >
              FALE CONOSCO
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
