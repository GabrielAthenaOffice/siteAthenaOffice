/**
 * Unidades da Athena Office
 * 
 * Para alterar os preços ou informações de uma unidade, localize-a pelo slug (ex: "rio-de-janeiro")
 * e altere os valores dentro do objeto correspondente.
 */

export interface UnitPlan {
  price: string;
  name: string;
  features: string[];
  contractUrl: string;
}

export interface UnitData {
  slug: string;
  city: string;
  state: string;
  neighborhood: string;
  address: string;
  mapUrl: string;
  plans: {
    basic: UnitPlan;
    premium: UnitPlan;
  };
}

// Preços padrão para facilitar a replicação
const DEFAULT_BASIC_PRICE = "35,00";
const DEFAULT_PREMIUM_PRICE = "59,00";

const DEFAULT_FEATURES_BASIC = [
  "Endereço comercial",
  "Endereço fiscal",
  "Recebimento de Correspondências",
];

const DEFAULT_FEATURES_PREMIUM = [
  "Endereço comercial",
  "Endereço fiscal",
  "Recebimento de Correspondências",
  "Com ou sem Inscrição Estadual",
];

export const unitsData: Record<string, UnitData> = {
  "rio-de-janeiro": {
    slug: "rio-de-janeiro",
    city: "Rio de Janeiro",
    state: "RJ",
    neighborhood: "Barra da Tijuca",
    address: "Av. Ayrton Senna, Condomínio Mail & Stay Neolink, Barra da Tijuca - RJ - Zona Oeste",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.3!2d-43.3586!3d-22.9897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2f5d7e7d5b%3A0x1234567890abcdef!2sAv.%20Ayrton%20Senna%2C%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: "35,00",
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: "59,00",
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "sao-paulo": {
    slug: "sao-paulo",
    city: "São Paulo",
    state: "SP",
    neighborhood: "Av. Paulista",
    address: "Av. Paulista, São Paulo - SP",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1!2d-46.6544!3d-23.5614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da563e67%3A0x1234567890abcdef!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: "35,00",
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: "59,00",
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "belo-horizonte": {
    slug: "belo-horizonte",
    city: "Belo Horizonte",
    state: "MG",
    neighborhood: "Savassi",
    address: "Savassi, Belo Horizonte - MG",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9!2d-43.9344!3d-19.9384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU2JzE4LjIiUyA0M8KwNTYnMDMuOCJX!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: "35,00",
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: "80,00",
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "vitoria": {
    slug: "vitoria",
    city: "Vitória",
    state: "ES",
    neighborhood: "Enseada do Suá",
    address: "Enseada do Suá, Vitória - ES",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.5!2d-40.2914!3d-20.3154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE4JzU1LjQiUyA0MMKwMTcnMjkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: "58,00",
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: "89,00",
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "curitiba": {
    slug: "curitiba",
    city: "Curitiba",
    state: "PR",
    neighborhood: "Batel",
    address: "Batel, Curitiba - PR",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1!2d-49.2844!3d-25.4414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI2JzI5LjAiUyA0OcKwMTcnMDMuOCJX!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "florianopolis": {
    slug: "florianopolis",
    city: "Florianópolis",
    state: "SC",
    neighborhood: "Trindade",
    address: "Trindade, Florianópolis - SC",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.1!2d-48.5244!3d-27.5914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzI5LjAiUyA0OMKwMzEnMjcuOCJX!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "porto-alegre": {
    slug: "porto-alegre",
    city: "Porto Alegre",
    state: "RS",
    neighborhood: "Moinhos de Vento",
    address: "Moinhos de Vento, Porto Alegre - RS",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1!2d-51.2044!3d-30.0314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAxJzUyLjQiUyA1McKwMTInMTUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "aracaju": {
    slug: "aracaju",
    city: "Aracaju",
    state: "SE",
    neighborhood: "13 de Julho",
    address: "13 de Julho, Aracaju - SE",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.1!2d-37.0544!3d-10.9314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU1JzUzLjQiUyAzN8KwMDMnMTUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "campina-grande": {
    slug: "campina-grande",
    city: "Campina Grande",
    state: "PB",
    neighborhood: "Complexo Heron Marinho",
    address: "Complexo Heron Marinho, Campina Grande - PB",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1!2d-35.8844!3d-7.2214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTMnMTcuMCJTIDM1wrA1MycwMy44Ilc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "fortaleza": {
    slug: "fortaleza",
    city: "Fortaleza",
    state: "CE",
    neighborhood: "Aldeota",
    address: "Aldeota, Fortaleza - CE",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.1!2d-38.4944!3d-3.7314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDMnNTMuNCJTIDM4wrAyOScwMy44Ilc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "jaboatao": {
    slug: "jaboatao",
    city: "Jaboatão dos Guararapes",
    state: "PE",
    neighborhood: "Piedade",
    address: "Piedade, Jaboatão dos Guararapes - PE",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.1!2d-34.9144!3d-8.1714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTAnMTcuMCJTIDM0wrA1NCc1MS44Ilc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "joao-pessoa": {
    slug: "joao-pessoa",
    city: "João Pessoa",
    state: "PB",
    neighborhood: "Bessa",
    address: "Bessa, João Pessoa - PB",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1!2d-34.8344!3d-7.0914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDUnMjkuMCJTIDM0wrA1MCcwMy44Ilc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "maceio": {
    slug: "maceio",
    city: "Maceió",
    state: "AL",
    neighborhood: "Ponta Verde",
    address: "Ponta Verde, Maceió - AL",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.1!2d-35.7044!3d-9.6614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzknNDEuMCJTIDM1wrA0MicxNS44Ilc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "natal": {
    slug: "natal",
    city: "Natal",
    state: "RN",
    neighborhood: "Lagoa Nova",
    address: "Lagoa Nova, Natal - RN",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.1!2d-35.2144!3d-5.8214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDknMTcuMCJTIDM1wrAxMic1MS44Ilc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "recife": {
    slug: "recife",
    city: "Recife",
    state: "PE",
    neighborhood: "Boa Viagem",
    address: "Boa Viagem, Recife - PE",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.1!2d-34.8944!3d-8.1214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDcnMTcuMCJTIDM0wrA1Myc0MC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "salvador": {
    slug: "salvador",
    city: "Salvador",
    state: "BA",
    neighborhood: "Caminho das Árvores",
    address: "Caminho das Árvores, Salvador - BA",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1!2d-38.4544!3d-12.9814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzUzLjQiUyAzOMKwMjcnMTUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "sao-luis": {
    slug: "sao-luis",
    city: "São Luís",
    state: "MA",
    neighborhood: "Cohafuma",
    address: "Cohafuma, São Luís - MA",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.1!2d-44.2544!3d-2.5114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMzAnNDEuMCJTIDQ0wrAxNScxNS44Ilc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "teresina": {
    slug: "teresina",
    city: "Teresina",
    state: "PI",
    neighborhood: "Fátima",
    address: "Fátima, Teresina - PI",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.1!2d-42.7944!3d-5.0914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDUnMjkuMCJTIDQywrA0Nyc0MC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "brasilia": {
    slug: "brasilia",
    city: "Brasília",
    state: "DF",
    neighborhood: "Asa Norte",
    address: "Asa Norte, Brasília - DF",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.1!2d-47.8844!3d-15.7914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ3JzI5LjAiUyA0N8KwNTMnMDMuOCJX!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "campo-grande": {
    slug: "campo-grande",
    city: "Campo Grande",
    state: "MS",
    neighborhood: "Royal Park",
    address: "Royal Park, Campo Grande - MS",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.1!2d-54.6144!3d-20.4614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI3JzQxLjAiUyA1NMKwMzYnNTEuOCJX!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "cuiaba": {
    slug: "cuiaba",
    city: "Cuiabá",
    state: "MT",
    neighborhood: "Duque de Caxias",
    address: "Duque de Caxias, Cuiabá - MT",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.1!2d-56.0944!3d-15.5914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM1JzI5LjAiUyA1NlcwNSc0MC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "goiania": {
    slug: "goiania",
    city: "Goiânia",
    state: "GO",
    neighborhood: "St. Oeste",
    address: "St. Oeste, Goiânia - GO",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.1!2d-49.2544!3d-16.6814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQwJzUzLjQiUyA0OcKwMTUnMTUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "belem": {
    slug: "belem",
    city: "Belém",
    state: "PA",
    neighborhood: "Batista Campos",
    address: "Batista Campos, Belém - PA",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.1!2d-48.4844!3d-1.4514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjcnMDUuMCJTIDQ4wrAyOScwMy44Ilc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "boa-vista": {
    slug: "boa-vista",
    city: "Boa Vista",
    state: "RR",
    neighborhood: "Centro",
    address: "Centro, Boa Vista - RR",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.1!2d-60.6744!3d2.8214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNDknMTcuMCJOIDYwwrA0MCcwMy44Ilc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "macapa": {
    slug: "macapa",
    city: "Macapá",
    state: "AP",
    neighborhood: "Buritizal",
    address: "Buritizal, Macapá - AP",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1!2d-51.0644!3d0.0314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDEnNTIuNCJOIDUxwrAwMyc1MS44Ilc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "manaus": {
    slug: "manaus",
    city: "Manaus",
    state: "AM",
    neighborhood: "São Francisco",
    address: "São Francisco, Manaus - AM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.1!2d-60.0244!3d-3.1314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDcnNTIuNCJTIDYwwrAwMScxNS44Ilc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "palmas": {
    slug: "palmas",
    city: "Palmas",
    state: "TO",
    neighborhood: "Plano Diretor Sul",
    address: "Plano Diretor Sul, Palmas - TO",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.1!2d-48.3344!3d-10.2114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDEyJzQxLjAiUyA0OMKwMjAnMDMuOCJX!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "porto-velho": {
    slug: "porto-velho",
    city: "Porto Velho",
    state: "RO",
    neighborhood: "Centro",
    address: "Centro, Porto Velho - RO",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.1!2d-63.9044!3d-8.7614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDUnNDEuMCJTIDYzwrA1NCc1MS44Ilc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
  "rio-branco": {
    slug: "rio-branco",
    city: "Rio Branco",
    state: "AC",
    neighborhood: "Papouco",
    address: "Papouco, Rio Branco - AC",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1!2d-67.8144!3d-9.9714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTgnMTcuMCJTIDY3wrA0OCcwMy44Ilc!5e0!3m2!1spt-BR!2sbr!4v1703300000000!5m2!1spt-BR!2sbr",
    plans: {
      basic: {
        price: DEFAULT_BASIC_PRICE,
        name: "Endereço Comercial",
        features: DEFAULT_FEATURES_BASIC,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=369885a933470525b48208a1f3f2acbc/",
      },
      premium: {
        price: DEFAULT_PREMIUM_PRICE,
        name: "Endereço Fiscal",
        features: DEFAULT_FEATURES_PREMIUM,
        contractUrl: "https://athena.conexa.app/index.php?r=contratacaoOnline&token=2e666ab0bca32657cd9d928eb2f059c5/",
      },
    },
  },
};
