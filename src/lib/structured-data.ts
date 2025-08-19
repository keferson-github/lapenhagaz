// Dados estruturados JSON-LD para SEO

export interface OrganizationData {
  '@context'?: string;
  '@type'?: string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    '@type'?: string;
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  contactPoint?: {
    '@type'?: string;
    telephone: string;
    contactType: string;
    availableLanguage: string;
  }[];
  sameAs?: string[];
}

export interface ProductData {
  '@context'?: string;
  '@type'?: string;
  name: string;
  description: string;
  image: string;
  brand: string | { '@type'?: string; name: string };
  category: string;
  offers?: {
    '@type'?: string;
    price?: string;
    priceCurrency?: string;
    availability: string;
    seller: string | { '@type'?: string; name: string };
  };
}

export interface ServiceData {
  '@context'?: string;
  '@type'?: string;
  name: string;
  description: string;
  provider: string | { '@type'?: string; name: string };
  serviceType: string;
  areaServed: string | { '@type'?: string; name: string };
}

// Dados da organização Lapenhagáz
export const getLapenhagázOrganization = (): OrganizationData => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lapenhagáz',
  url: 'https://lapenhagaz.com.br',
  logo: 'https://lapenhagaz.com.br/images/Lapenhagaz_logo-transparent.png',
  description: 'Fornecimento de gás GLP das melhores marcas e água mineral de qualidade superior. Entrega rápida e segura para residências e empresas.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
    addressRegion: 'SP'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+55-11-98388-0542',
      contactType: 'customer service',
      availableLanguage: 'Portuguese'
    },
    {
      '@type': 'ContactPoint',
      telephone: '+55-11-98388-0596',
      contactType: 'sales',
      availableLanguage: 'Portuguese'
    }
  ],
  sameAs: []
});

// Dados estruturados para produtos de gás GLP
export const getGasProducts = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Botijão de Gás P13',
    description: 'Botijão de gás GLP P13 para uso residencial, seguro e eficiente.',
    image: 'https://lapenhagaz.com.br/images/img-cilindro-de-gas-p13.webp',
    brand: {
      '@type': 'Brand',
      name: 'Lapenhagáz'
    },
    category: 'Gás GLP',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL',
      seller: {
        '@type': 'Organization',
        name: 'Lapenhagáz'
      }
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Botijão de Gás P2',
    description: 'Botijão de gás GLP P2 portátil, ideal para camping e uso externo.',
    image: 'https://lapenhagaz.com.br/images/img-cilindro-de-gas-p2.webp',
    brand: {
      '@type': 'Brand',
      name: 'Lapenhagáz'
    },
    category: 'Gás GLP',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL',
      seller: {
        '@type': 'Organization',
        name: 'Lapenhagáz'
      }
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Botijão de Gás P5',
    description: 'Botijão de gás GLP P5 para uso doméstico, prático e seguro.',
    image: 'https://lapenhagaz.com.br/images/img-cilindro-de-gas-p5.webp',
    brand: {
      '@type': 'Brand',
      name: 'Lapenhagáz'
    },
    category: 'Gás GLP',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL',
      seller: {
        '@type': 'Organization',
        name: 'Lapenhagáz'
      }
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Botijão de Gás P20',
    description: 'Botijão de gás GLP P20 para uso comercial, maior capacidade.',
    image: 'https://lapenhagaz.com.br/images/img-cilindro-de-gas-p20.webp',
    brand: {
      '@type': 'Brand',
      name: 'Lapenhagáz'
    },
    category: 'Gás GLP',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL',
      seller: {
        '@type': 'Organization',
        name: 'Lapenhagáz'
      }
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Botijão de Gás P45',
    description: 'Botijão de gás GLP P45 para uso industrial, alta capacidade.',
    image: 'https://lapenhagaz.com.br/images/img-cilindro-de-gas-p45.webp',
    brand: {
      '@type': 'Brand',
      name: 'Lapenhagáz'
    },
    category: 'Gás GLP',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL',
      seller: {
        '@type': 'Organization',
        name: 'Lapenhagáz'
      }
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Botijão de Gás P90',
    description: 'Botijão de gás GLP P90 para grandes volumes, uso industrial.',
    image: 'https://lapenhagaz.com.br/images/img-cilindro-de-gas-p90.webp',
    brand: {
      '@type': 'Brand',
      name: 'Lapenhagáz'
    },
    category: 'Gás GLP',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL',
      seller: {
        '@type': 'Organization',
        name: 'Lapenhagáz'
      }
    }
  }
];

// Dados estruturados para água mineral
export const getWaterProducts = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Galão de Água Mineral 20L',
    description: 'Água mineral natural de qualidade superior em galão de 20 litros.',
    image: 'https://lapenhagaz.com.br/images/galao-agua-mineral-20l.webp',
    brand: {
      '@type': 'Brand',
      name: 'Lapenhagáz'
    },
    category: 'Água Mineral',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL',
      seller: {
        '@type': 'Organization',
        name: 'Lapenhagáz'
      }
    }
  }
];

// Dados estruturados para serviços
export const getLapenhagázServices = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Entrega de Gás GLP',
    description: 'Serviço de entrega rápida e segura de botijões de gás GLP para residências e empresas.',
    provider: {
      '@type': 'Organization',
      name: 'Lapenhagáz'
    },
    serviceType: 'Entrega de Gás',
    areaServed: {
      '@type': 'State',
      name: 'São Paulo'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fornecimento de Água Mineral',
    description: 'Fornecimento de água mineral de qualidade superior em galões de 20 litros.',
    provider: {
      '@type': 'Organization',
      name: 'Lapenhagáz'
    },
    serviceType: 'Fornecimento de Água',
    areaServed: {
      '@type': 'State',
      name: 'São Paulo'
    }
  }
];

// Função para combinar todos os dados estruturados
export const getAllStructuredData = () => {
  return {
    organization: getLapenhagázOrganization(),
    gasProducts: getGasProducts(),
    waterProducts: getWaterProducts(),
    services: getLapenhagázServices()
  };
};

// Função para gerar dados estruturados da página inicial
export const getHomePageStructuredData = () => {
  const organization = getLapenhagázOrganization();
  const services = getLapenhagázServices();
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      ...services,
      {
        '@type': 'WebSite',
        '@id': 'https://lapenhagaz.com.br/#website',
        url: 'https://lapenhagaz.com.br/',
        name: 'Lapenhagáz',
        description: 'Fornecimento de gás GLP das melhores marcas e água mineral de qualidade superior.',
        publisher: {
          '@id': 'https://lapenhagaz.com.br/#organization'
        },
        inLanguage: 'pt-BR'
      }
    ]
  };
};