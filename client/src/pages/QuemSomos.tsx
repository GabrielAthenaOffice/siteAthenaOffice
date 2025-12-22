/*
  Design: Modernismo Corporativo Brasileiro
  Página: Quem Somos
*/

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrazilMap from "@/components/BrazilMap";
import SEO from "@/components/SEO";

export default function QuemSomos() {
  const differentials = [
    "18 anos no mercado",
    "Presente nos 26 estados brasileiros e DF",
    "Não cobramos multa por rescisão contratual",
    "Apoio Contábil e Jurídico durante todo o processo da abertura da sua empresa",
    "Documentos para a abertura da sua empresa em 2h e abertura no mesmo dia",
    "Todo o processo é feito online e sem burocracia",
    "MELHOR PREÇO DO MERCADO!",
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Quem Somos | 18 Anos de Excelência em Escritório Virtual - Athena Office"
        description="Conheça a história da Athena Office, uma empresa pioneira em escritórios virtuais no Brasil, com foco em inovação, ética e suporte ao empreendedorismo."
        keywords="história athena office, escritório virtual brasil, pioneirismo negócios"
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
              Conheça um pouco de quem somos!
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
                Athena Office
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Bem-vindo à Athena Office, sua parceira ideal em soluções de escritório e escritório virtual. 
                  Fundada com o compromisso de oferecer produtos de alta qualidade e serviços excepcionais, 
                  a Athena Office se dedica a transformar o ambiente de trabalho em um espaço mais eficiente, 
                  organizado e produtivo.
                </p>
                <p>
                  Desde o nosso início, entendemos que a chave para um ambiente de trabalho bem-sucedido reside 
                  na combinação perfeita de produtos inovadores e um atendimento ao cliente inigualável. Foi com 
                  essa visão que a Athena Office foi criada. Nosso objetivo é simplificar a vida empresarial, 
                  oferecendo soluções abrangentes que atendam às mais variadas necessidades de um escritório moderno, 
                  incluindo o crescente mercado de escritórios virtuais.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="/images/partnership-professional.webp"
                alt="Profissional Athena Office"
                className="rounded-3xl shadow-xl w-full h-auto"
                loading="lazy"
              />
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
              Conheça todas as nossas unidades espalhadas pelo Brasil!
            </h2>
            <p className="text-lg text-muted-foreground">
              Clique em uma unidade no mapa e conheça mais.
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
