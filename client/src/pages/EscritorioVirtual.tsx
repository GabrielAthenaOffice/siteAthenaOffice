/*
  Design: Modernismo Corporativo Brasileiro
  Página: Escritório Virtual - Todas as Unidades
*/

import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "wouter";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

interface Unit {
  neighborhood: string;
  city: string;
}

// Map of cities to their URL slugs (only implemented pages)
const citySlugMap: Record<string, string> = {
  "Rio de Janeiro": "rio-de-janeiro",
};

export default function EscritorioVirtual() {
  const [activeRegion, setActiveRegion] = useState("sudeste");
  const [, navigate] = useLocation();

  const units = {
    sudeste: [
      { neighborhood: "Savassi", city: "Belo Horizonte" },
      { neighborhood: "Barra da Tijuca", city: "Rio de Janeiro" },
      { neighborhood: "Av. Paulista", city: "São Paulo" },
      { neighborhood: "Enseada do Suá", city: "Vitória" },
    ],
    sul: [
      { neighborhood: "Batel", city: "Curitiba" },
      { neighborhood: "Trindade", city: "Florianópolis" },
      { neighborhood: "Moinhos de Vento", city: "Porto Alegre" },
    ],
    nordeste: [
      { neighborhood: "13 de Julho", city: "Aracaju" },
      { neighborhood: "Complexo Heron Marinho", city: "Campina Grande" },
      { neighborhood: "Aldeota", city: "Fortaleza" },
      { neighborhood: "Piedade", city: "Jaboatão dos Guararapes" },
      { neighborhood: "Bessa", city: "João Pessoa" },
      { neighborhood: "Ponta Verde", city: "Maceió" },
      { neighborhood: "Lagoa Nova", city: "Natal" },
      { neighborhood: "Boa Viagem", city: "Recife" },
      { neighborhood: "Caminho das Árvores", city: "Salvador" },
      { neighborhood: "Cohafuma", city: "São Luís" },
      { neighborhood: "Fátima", city: "Teresina" },
    ],
    centrooeste: [
      { neighborhood: "Asa Norte", city: "Brasília" },
      { neighborhood: "Royal Park", city: "Campo Grande" },
      { neighborhood: "Duque de Caxias", city: "Cuiabá" },
      { neighborhood: "St. Oeste", city: "Goiânia" },
    ],
    norte: [
      { neighborhood: "Batista Campos", city: "Belém" },
      { neighborhood: "Centro", city: "Boa Vista" },
      { neighborhood: "Buritizal", city: "Macapá" },
      { neighborhood: "São Francisco", city: "Manaus" },
      { neighborhood: "Plano Diretor Sul", city: "Palmas" },
      { neighborhood: "Centro", city: "Porto Velho" },
      { neighborhood: "Papouco", city: "Rio Branco" },
    ],
  };

  const regions = [
    { id: "sudeste", label: "Sudeste" },
    { id: "sul", label: "Sul" },
    { id: "nordeste", label: "Nordeste" },
    { id: "centrooeste", label: "Centro-Oeste" },
    { id: "norte", label: "Norte" },
  ];

  const handleViewPlans = (unit: Unit) => {
    const slug = citySlugMap[unit.city];
    if (slug) {
      navigate(`/escritorio-virtual/${slug}`);
    } else {
      // For units without dedicated pages yet, show contact info
      alert(`Para informações sobre a unidade ${unit.city}, entre em contato: 0800 0800 003`);
    }
  };

  const UnitCard = ({ unit }: { unit: Unit }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="h-full hover:shadow-lg transition-smooth border-2 hover:border-green">
        <CardContent className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-navy" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{unit.neighborhood}</p>
              <h3 className="text-xl font-bold text-navy" style={{ fontFamily: 'Montserrat' }}>
                {unit.city}
              </h3>
            </div>
          </div>
          <Button 
            onClick={() => handleViewPlans(unit)}
            className="w-full bg-navy hover:bg-navy/90 text-white font-semibold"
          >
            VER PLANOS
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      <SEO 
        title="Unidades de Escritório Virtual em Todo o Brasil | Athena Office"
        description="Encontre a unidade da Athena Office mais próxima de você. Estamos presentes em todos os estados brasileiros com endereços prestigiados para sua empresa."
        keywords="unidades escritório virtual, endereço fiscal capitais, escritório virtual estados"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4" style={{ fontFamily: 'Montserrat' }}>
              Conheça agora todas as nossas
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold text-navy mb-8" style={{ fontFamily: 'Montserrat' }}>
              Unidades
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-20 bg-navy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
              Acesso Rápido por Região
            </h2>
          </motion.div>

          <Tabs value={activeRegion} onValueChange={setActiveRegion} className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 gap-2 bg-transparent mb-12">
              {regions.map((region) => (
                <TabsTrigger
                  key={region.id}
                  value={region.id}
                  className="bg-white/10 text-white data-[state=active]:bg-green data-[state=active]:text-navy font-semibold py-3"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  {region.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(units).map(([regionId, regionUnits]) => (
              <TabsContent key={regionId} value={regionId} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                  {regionUnits.map((unit, index) => (
                    <UnitCard key={index} unit={unit} />
                  ))}
                </div>

                {/* Not Found CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
                    Não encontrou a cidade desejada?
                  </h3>
                  <p className="text-white/80 mb-6">
                    Entre em contato conosco e obtenha mais informações.
                  </p>
                  <Button className="bg-green hover:bg-green/90 text-navy font-semibold">
                    SAIBA MAIS
                  </Button>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
