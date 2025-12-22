/*
  Design: Modernismo Corporativo Brasileiro
  Página: Ação Social
*/

import { motion } from "framer-motion";
import { Heart, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function AcaoSocial() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cadastro enviado com sucesso! Nossa equipe analisará sua história em breve.");
  };

  const impacts = [
    {
      icon: Heart,
      title: "Apoio Social",
      description: "Oferecemos escritório virtual gratuito para quem enfrenta dificuldades financeiras reais.",
    },
    {
      icon: Users,
      title: "Instituições",
      description: "Suporte gratuito para ONGs e instituições sem fins lucrativos formalizarem suas atividades.",
    },
    {
      icon: ShieldCheck,
      title: "Formalização",
      description: "Facilitamos a abertura de CNPJ para impulsionar sonhos e transformar vidas através do empreendedorismo.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Ação Social Athena Office | Escritório Virtual Gratuito para Empreendedores e ONGs"
        description="A Athena Office oferece escritório virtual e endereço fiscal gratuito para empreendedores em dificuldade e instituições sem fins lucrativos. Saiba como se cadastrar e formalizar seu negócio."
        keywords="escritório virtual gratuito, apoio ao empreendedor social, formalização de ONGs gratuita, endereço fiscal gratuito para instituições, responsabilidade social Athena Office"
        ogImage="/images/social-entrepreneur.webp"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-green/20 text-navy text-sm font-bold mb-4">
                Precisa de um Endereço Fiscal?
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
                Nosso Compromisso Social
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Acreditamos que o sucesso empresarial deve caminhar junto com o impacto social positivo.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-semibold">
                  CONHECER PROJETO
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-green/10 rounded-full blur-3xl" />
              <img
                src="/images/social-entrepreneur.webp"
                alt="Empreendedor social apoiado pela Athena Office"
                className="rounded-3xl shadow-2xl w-full h-auto relative z-10"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
              Apoio Gratuito a Empreendedores e Instituições
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Com 18 anos de mercado e presença nacional, entendemos as dificuldades de formalização no Brasil. 
              Por isso, oferecemos locação de escritório virtual **gratuito** para quem mais precisa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impacts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-green transition-smooth">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-navy" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-green rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Montserrat' }}>
                Como solicitar seu Escritório Virtual Gratuito
              </h2>
              <p className="text-lg mb-6 text-white/90">
                Queremos saber como um escritório virtual gratuito fará a diferença na sua vida ou na sua instituição. 
                Descreva sua jornada, suas dificuldades e seus objetivos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-navy" />
                  </div>
                  <span>Análise criteriosa por nossa equipe</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-navy" />
                  </div>
                  <span>Foco em impacto social real</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-navy" />
                  </div>
                  <span>Transformando dificuldades em oportunidades</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white text-navy">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Montserrat' }}>
                    Cadastre-se para análise
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Nome completo" required />
                      <Input type="email" placeholder="E-mail" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Telefone (DDD + N°)" required />
                      <Input placeholder="Cidade/UF" required />
                    </div>
                    <Input placeholder="Endereço completo" required />
                    <Textarea 
                      placeholder="Descreva sua história e como o escritório virtual gratuito impulsionaria seus objetivos..." 
                      rows={5}
                      required
                    />
                    <Button className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-6">
                      ENVIAR CADASTRO
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" style={{ fontFamily: 'Montserrat' }}>
              Estamos aqui para caminhar ao seu lado.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transforme seu negócio com a Athena Office. Descubra como podemos ajudar sua empresa a crescer.
            </p>
            <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-semibold">
              FALE CONOSCO AGORA
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
