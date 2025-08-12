import TraditionalCarousel from "./TraditionalCarousel";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Energia Limpa para sua Casa",
      subtitle: "Gás Natural Residencial",
      description: "Transforme sua casa com a eficiência e segurança do gás natural canalizado. Sem cilindros, sem preocupações.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center",
      cta: "Solicite Ligação",
      ctaLink: "/contato"
    },
    {
      id: 2,
      title: "Soluções Empresariais Completas",
      subtitle: "Gás Natural Comercial",
      description: "Otimize os custos operacionais da sua empresa com nossa infraestrutura de gás natural de alta qualidade.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center",
      cta: "Conheça os Planos",
      ctaLink: "/servicos"
    },
    {
      id: 3,
      title: "Água Mineral Premium",
      subtitle: "Pureza e Qualidade",
      description: "Água mineral natural de fontes protegidas, com entrega programada e qualidade certificada para sua família.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop&crop=center",
      cta: "Assine Agora",
      ctaLink: "/contato"
    },
    {
      id: 4,
      title: "Inovação e Sustentabilidade",
      subtitle: "Tecnologia Avançada",
      description: "Monitoramento 24/7 com IoT, sistemas inteligentes e compromisso com o meio ambiente para um futuro sustentável.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&crop=center",
      cta: "Saiba Mais",
      ctaLink: "/sobre"
    }
  ];

  return (
    <section className="relative">
      <TraditionalCarousel 
        slides={slides}
        autoPlay={true}
        interval={6000}
        className="min-h-[600px]"
      />
    </section>
  );
};

export default HeroCarousel;