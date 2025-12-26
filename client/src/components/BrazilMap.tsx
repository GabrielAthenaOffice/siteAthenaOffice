/*
  Design: Modernismo Corporativo Brasileiro
  Component: Interactive Brazil Map using Google Geo Charts
  Reference: vitroz/MapaInterativoJS
*/

import { useEffect, useRef, useState, useCallback } from "react";
import { useLocation } from "wouter";

interface Unit {
  id: string;
  city: string;
  state: string;
  stateCode: string;
  neighborhood: string;
}

const units: Unit[] = [
  // Norte
  { id: "manaus", city: "Manaus", state: "Amazonas", stateCode: "AM", neighborhood: "São Francisco" },
  { id: "belem", city: "Belém", state: "Pará", stateCode: "PA", neighborhood: "Batista Campos" },
  { id: "macapa", city: "Macapá", state: "Amapá", stateCode: "AP", neighborhood: "Buritizal" },
  { id: "boa-vista", city: "Boa Vista", state: "Roraima", stateCode: "RR", neighborhood: "Centro" },
  { id: "porto-velho", city: "Porto Velho", state: "Rondônia", stateCode: "RO", neighborhood: "Centro" },
  { id: "rio-branco", city: "Rio Branco", state: "Acre", stateCode: "AC", neighborhood: "Papouco" },
  { id: "palmas", city: "Palmas", state: "Tocantins", stateCode: "TO", neighborhood: "Plano Diretor Sul" },
  
  // Nordeste
  { id: "sao-luis", city: "São Luís", state: "Maranhão", stateCode: "MA", neighborhood: "Cohafuma" },
  { id: "teresina", city: "Teresina", state: "Piauí", stateCode: "PI", neighborhood: "Fátima" },
  { id: "fortaleza", city: "Fortaleza", state: "Ceará", stateCode: "CE", neighborhood: "Aldeota" },
  { id: "natal", city: "Natal", state: "Rio Grande do Norte", stateCode: "RN", neighborhood: "Lagoa Nova" },
  { id: "joao-pessoa", city: "João Pessoa", state: "Paraíba", stateCode: "PB", neighborhood: "Bessa" },
  { id: "recife", city: "Recife", state: "Pernambuco", stateCode: "PE", neighborhood: "Boa Viagem" },
  { id: "maceio", city: "Maceió", state: "Alagoas", stateCode: "AL", neighborhood: "Ponta Verde" },
  { id: "aracaju", city: "Aracaju", state: "Sergipe", stateCode: "SE", neighborhood: "13 de Julho" },
  { id: "salvador", city: "Salvador", state: "Bahia", stateCode: "BA", neighborhood: "Caminho das Árvores" },
  { id: "campina-grande", city: "Campina Grande", state: "Paraíba", stateCode: "PB", neighborhood: "Complexo Heron Marinho" },
  { id: "jaboatao", city: "Jaboatão dos Guararapes", state: "Pernambuco", stateCode: "PE", neighborhood: "Piedade" },
  
  // Centro-Oeste
  { id: "cuiaba", city: "Cuiabá", state: "Mato Grosso", stateCode: "MT", neighborhood: "Duque de Caxias" },
  { id: "goiania", city: "Goiânia", state: "Goiás", stateCode: "GO", neighborhood: "St. Oeste" },
  { id: "brasilia", city: "Brasília", state: "Distrito Federal", stateCode: "DF", neighborhood: "Asa Norte" },
  { id: "campo-grande", city: "Campo Grande", state: "Mato Grosso do Sul", stateCode: "MS", neighborhood: "Royal Park" },
  
  // Sudeste
  { id: "belo-horizonte", city: "Belo Horizonte", state: "Minas Gerais", stateCode: "MG", neighborhood: "Savassi" },
  { id: "vitoria", city: "Vitória", state: "Espírito Santo", stateCode: "ES", neighborhood: "Enseada do Suá" },
  { id: "rio-de-janeiro", city: "Rio de Janeiro", state: "Rio de Janeiro", stateCode: "RJ", neighborhood: "Barra da Tijuca" },
  { id: "sao-paulo", city: "São Paulo", state: "São Paulo", stateCode: "SP", neighborhood: "Av. Paulista" },
  
  // Sul
  { id: "curitiba", city: "Curitiba", state: "Paraná", stateCode: "PR", neighborhood: "Batel" },
  { id: "florianopolis", city: "Florianópolis", state: "Santa Catarina", stateCode: "SC", neighborhood: "Trindade" },
  { id: "porto-alegre", city: "Porto Alegre", state: "Rio Grande do Sul", stateCode: "RS", neighborhood: "Moinhos de Vento" },
];

// Group units by state code
const unitsByState: Record<string, Unit[]> = {};
units.forEach((unit) => {
  if (!unitsByState[unit.stateCode]) {
    unitsByState[unit.stateCode] = [];
  }
  unitsByState[unit.stateCode].push(unit);
});

// State codes with units
const statesWithUnits = Object.keys(unitsByState);

// Import shared Google types
import "@/types/google.d.ts";
import type { GoogleCharts } from "@/types/google.d.ts";

// Access google charts via type assertion
const getGoogleCharts = (): GoogleCharts | undefined => {
  const win = window as { google?: GoogleCharts };
  return win.google;
};

interface BrazilMapProps {
  className?: string;
  onUnitClick?: (unit: Unit) => void;
}

export default function BrazilMap({ className, onUnitClick }: BrazilMapProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [, navigate] = useLocation();

  const handleStateClick = useCallback((stateCode: string) => {
    const stateUnits = unitsByState[stateCode];
    if (stateUnits && stateUnits.length > 0) {
      setSelectedState(stateCode);
      if (onUnitClick) {
        onUnitClick(stateUnits[0]);
      } else {
        navigate("/escritorio-virtual");
      }
    }
  }, [onUnitClick, navigate]);

  const drawChart = useCallback(() => {
    const google = getGoogleCharts();
    if (!google?.visualization || !chartRef.current) return;

    // Prepare data with state names and unit counts
    const chartData: (string | number | null)[][] = [
      ["Estado", "Unidades"],
    ];

    // All Brazilian states
    const allStates = [
      ["BR-AC", "Acre"],
      ["BR-AL", "Alagoas"],
      ["BR-AP", "Amapá"],
      ["BR-AM", "Amazonas"],
      ["BR-BA", "Bahia"],
      ["BR-CE", "Ceará"],
      ["BR-DF", "Distrito Federal"],
      ["BR-ES", "Espírito Santo"],
      ["BR-GO", "Goiás"],
      ["BR-MA", "Maranhão"],
      ["BR-MT", "Mato Grosso"],
      ["BR-MS", "Mato Grosso do Sul"],
      ["BR-MG", "Minas Gerais"],
      ["BR-PA", "Pará"],
      ["BR-PB", "Paraíba"],
      ["BR-PR", "Paraná"],
      ["BR-PE", "Pernambuco"],
      ["BR-PI", "Piauí"],
      ["BR-RJ", "Rio de Janeiro"],
      ["BR-RN", "Rio Grande do Norte"],
      ["BR-RS", "Rio Grande do Sul"],
      ["BR-RO", "Rondônia"],
      ["BR-RR", "Roraima"],
      ["BR-SC", "Santa Catarina"],
      ["BR-SP", "São Paulo"],
      ["BR-SE", "Sergipe"],
      ["BR-TO", "Tocantins"],
    ];

    allStates.forEach(([code, _name]) => {
      const stateCode = code.replace("BR-", "");
      const unitCount = unitsByState[stateCode]?.length || 0;
      chartData.push([code, unitCount]);
    });

    const data = google.visualization.arrayToDataTable(chartData);

    const options = {
      region: "BR",
      resolution: "provinces",
      colorAxis: {
        colors: ["#e5e7eb", "#1e3a5f"], // Gray to Navy
        minValue: 0,
        maxValue: 3,
      },
      backgroundColor: "transparent",
      datalessRegionColor: "#e5e7eb",
      defaultColor: "#e5e7eb",
      legend: "none",
      tooltip: {
        trigger: "focus",
        isHtml: true,
      },
      keepAspectRatio: true,
    };

    const chart = new google.visualization.GeoChart(chartRef.current);
    
    // Add click event listener
    google.visualization.events.addListener(chart, "regionClick", (e: { region: string }) => {
      const stateCode = e.region.replace("BR-", "");
      handleStateClick(stateCode);
    });

    chart.draw(data, options);
  }, [handleStateClick]);

  useEffect(() => {
    // Load Google Charts
    const loadGoogleCharts = () => {
      const google = getGoogleCharts();
      if (google?.charts) {
        google.charts.load("current", {
          packages: ["geochart"],
        });
        google.charts.setOnLoadCallback(() => {
          setIsLoaded(true);
        });
        return;
      }

      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.async = true;
      script.onload = () => {
        const g = getGoogleCharts();
        g?.charts.load("current", {
          packages: ["geochart"],
        });
        g?.charts.setOnLoadCallback(() => {
          setIsLoaded(true);
        });
      };
      document.head.appendChild(script);
    };

    loadGoogleCharts();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      drawChart();
      
      // Redraw on resize
      const handleResize = () => {
        drawChart();
      };
      
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isLoaded, drawChart]);
  

  return (
    <div className={`relative w-full ${className || ""}`}>
      {/* Map Container */}
      <div
        ref={chartRef}
        className="w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
        style={{ cursor: "pointer" }}
      />

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-navy border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-500">Carregando mapa...</p>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: "#1e3a5f" }} />
          <span className="text-gray-600">Estados com unidades</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gray-200" />
          <span className="text-gray-600">Em breve</span>
        </div>
      </div>
    </div>
  );
}
