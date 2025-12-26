/*
  Design: Modernismo Corporativo Brasileiro
  Página: Escritório Virtual - Unidade Dinâmica
*/

import { motion } from "framer-motion";
import { Check, MapPin, FileText, Mail, CreditCard, Send, Signature, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useParams, useLocation } from "wouter";
import { unitsData } from "@/data/unitsData";
import NotFound from "./NotFound";

const differentials = [
  "18 anos no mercado",
  "Presente nos 26 estados brasileiros e DF",
  "Não cobramos multa por rescisão contratual",
  "Apoio Contábil e Jurídico durante todo o processo da abertura da sua empresa",
  "Documentos para a abertura da sua empresa em 2h e abertura no mesmo dia",
  "Todo o processo é feito online e sem burocracia",
  "MELHOR PREÇO DO MERCADO!",
];

const documentation = [
  "IPTU, para abertura ou mudança de CNPJ",
  "Comprovante de domicílio da empresa ou PJ",
  "Certidão do Corpo de Bombeiros",
  "Autorização da Prefeitura para uso comercial, Habite-se",
];

const contractingSteps = [
  {
    step: 1,
    icon: CreditCard,
    title: "Clique e faça o seu cadastro",
    description: "Escolha o plano desejado e inicie o cadastro",
  },
  {
    step: 2,
    icon: Send,
    title: "Escolha a forma e realize o pagamento",
    description: "Pague via cartão, boleto ou PIX",
  },
  {
    step: 3,
    icon: Mail,
    title: "Envie o comprovante",
    description: "Caso não seja cartão, envie o comprovante via WhatsApp para agilizar",
  },
  {
    step: 4,
    icon: Signature,
    title: "Assine o contrato digitalmente",
    description: "Após confirmação, enviaremos o contrato por e-mail",
  },
  {
    step: 5,
    icon: Clock,
    title: "Receba sua documentação em até 2h",
    description: "Após assinatura, entregamos tudo rapidamente",
  },
];

export default function EscritorioVirtualUnit() {
  const params = useParams();
  const slug = params.slug;
  const unitData = slug ? unitsData[slug] : null;

  if (!unitData) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen">
      <SEO
        title={`Escritório Virtual ${unitData.city} | ${unitData.neighborhood} | Athena Office`}
        description={`Escritório virtual, endereço fiscal, endereço virtual, endereço comercial para abertura, transferência de CNPJ, empresa, PJ em ${unitData.city}, ${unitData.neighborhood}, ${unitData.state} na Athena Office.`}
        keywords={`escritório virtual ${unitData.city}, endereço fiscal ${unitData.neighborhood}, endereço comercial ${unitData.state}`}
      />
      <Header />

      {/* Hero Title Banner */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-navy text-lg mb-2" style={{ fontFamily: 'Montserrat' }}>
              Athena Office Unidade
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy" style={{ fontFamily: 'Montserrat' }}>
              {unitData.city}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
                Escritório Virtual
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Procurando um Endereço Fiscal, comercial ou Caixa Postal para abertura ou transferência de empresa, CNPJ, pessoa jurídica ou PJ em{" "}
                <span className="text-navy font-semibold underline">{unitData.city}/{unitData.state}</span> ?
              </p>

              {/* Price Box */}
              <div className="mb-8">
                <p className="text-navy font-semibold mb-3" style={{ fontFamily: 'Montserrat' }}>
                  Planos a partir de:
                </p>
                <div className="inline-block bg-navy text-white px-4 py-2 rounded">
                  <span className="text-2xl font-bold" style={{ fontFamily: 'Montserrat' }}>
                    R${unitData.plans.basic.price}
                  </span>
                  <span className="text-sm ml-1 opacity-90">Mensal</span>
                </div>
              </div>

              {/* Services List */}
              <div className="space-y-3">
                {unitData.plans.basic.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-navy flex-shrink-0" />
                    <p className="text-navy">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 aspect-[4/3] flex items-center justify-center">
                {unitData.imageUrl ? (
                  <img 
                    src={unitData.imageUrl} 
                    alt={`Unidade ${unitData.city}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-10 h-10 text-navy" />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Imagem da unidade {unitData.city}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Address */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
                Localização:
              </h2>
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-navy flex-shrink-0 mt-1" />
                <p className="text-lg text-navy font-bold leading-relaxed max-w-md" style={{ fontFamily: 'Montserrat' }}>
                  {unitData.address}
                </p>
              </div>
            </motion.div>

            {/* Right Column - Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <iframe
                  src={unitData.mapUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa da unidade ${unitData.city}`}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Montserrat' }}>
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

      {/* Documentation Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-navy mb-16" style={{ fontFamily: 'Montserrat' }}>
              Documentação enviada de forma imediata:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {documentation.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="mb-6 transform group-hover:scale-110 transition-smooth">
                    <FileText className="w-12 h-12 text-navy stroke-[1.5]" />
                  </div>
                  <p className="text-navy font-medium leading-relaxed max-w-[200px]">
                    {doc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
              Nossos Planos
            </h2>
            <p className="text-lg text-muted-foreground">
              Conheça agora nossos planos para essa localização.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan - Dark Theme */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="h-full bg-[#1a1b41] text-white border-none shadow-xl rounded-2xl overflow-hidden flex flex-col">
                <CardContent className="p-10 flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Montserrat' }}>
                      {unitData.plans.basic.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">R${unitData.plans.basic.price}</span>
                      <span className="text-sm opacity-80">Mensal</span>
                    </div>
                    <div className="h-[1px] w-full bg-white/20 mt-6"></div>
                  </div>
                  
                  <div className="space-y-4 mb-10 flex-grow">
                    {unitData.plans.basic.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-white flex-shrink-0" />
                        <p className="text-sm font-medium">{feature}</p>
                      </div>
                    ))}
                    <div className="flex items-center gap-3">
                      <X className="w-5 h-5 text-white flex-shrink-0" />
                      <p className="text-sm font-medium">Endereço fiscal</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="w-5 h-5 text-white flex-shrink-0" />
                      <p className="text-sm font-medium">Recebimento de Correspondências</p>
                    </div>
                  </div>

                  <a href={unitData.plans.basic.contractUrl} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <Button className="w-full bg-white text-[#1a1b41] hover:bg-gray-100 font-bold py-6 rounded-lg text-xs uppercase tracking-wider">
                      CONTRATAR {unitData.plans.basic.name.toUpperCase()}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Premium Plan - Light Theme */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="h-full bg-white text-navy border border-navy rounded-2xl overflow-hidden shadow-xl flex flex-col">
                <CardContent className="p-10 flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Montserrat' }}>
                      {unitData.plans.premium.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">R${unitData.plans.premium.price}</span>
                      <span className="text-sm text-muted-foreground">Mensal</span>
                    </div>
                    <div className="h-[1px] w-full bg-navy mt-6"></div>
                  </div>
                  
                  <div className="space-y-4 mb-10 flex-grow">
                    {unitData.plans.premium.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-navy flex-shrink-0" />
                        <p className="text-sm font-medium">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <a href={unitData.plans.premium.contractUrl} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <Button className="w-full bg-[#1a1b41] text-white hover:bg-[#1a1b41]/90 font-bold py-6 rounded-lg text-xs uppercase tracking-wider">
                      CONTRATAR {unitData.plans.premium.name.toUpperCase()}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contracting Process Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy" style={{ fontFamily: 'Montserrat' }}>
              Processo de Contratação
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {contractingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-green/20 transition-smooth">
                  <step.icon className="w-10 h-10 text-green" />
                </div>
                <div className="text-2xl font-bold text-green mb-3" style={{ fontFamily: 'Montserrat' }}>
                  {step.step}
                </div>
                <h3 className="font-bold text-navy mb-3 text-sm uppercase tracking-wide" style={{ fontFamily: 'Montserrat' }}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
