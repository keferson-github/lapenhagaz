import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SolutionsSection = () => {
  const categories = [
    {
      id: "residencias",
      label: "Residências",
      desc: "Conforto com água quente, cocção e aquecimento sem cilindros, com segurança e previsibilidade.",
      img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&crop=center",
      alt: "Residência com conforto e gás natural canalizado",
    },
    {
      id: "negocios",
      label: "Negócios",
      desc: "Eficiência para restaurantes, hotéis, lavanderias e hospitais, com abastecimento contínuo.",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=800&fit=crop&crop=center",
      alt: "Cozinha profissional com soluções de gás natural",
    },
    {
      id: "veiculos",
      label: "Veículos",
      desc: "Soluções energéticas econômicas e sustentáveis para frotas e mobilidade.",
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop&crop=center",
      alt: "Frota de veículos com energia mais econômica",
    },
    {
      id: "industrias",
      label: "Indústrias",
      desc: "Qualidade de chama, eficiência energética e redução de custos para sua planta.",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop&crop=center",
      alt: "Indústria com processos otimizados por gás natural",
    },
    {
      id: "especiais",
      label: "Soluções Especiais",
      desc: "Projetos sob medida e consultoria técnica para demandas específicas.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop&crop=center",
      alt: "Projeto especial com consultoria técnica em energia",
    },
  ];

  return (
    <section className="relative py-16 md:py-24">
      <div className="container">
        {/* Título da seção */}
        <header className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Soluções em gás natural para cada necessidade
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Explore nossas soluções para residências, negócios, frotas e indústria, com segurança, eficiência e previsibilidade.
          </p>
        </header>

        {/* Carrossel de cards */}
        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {categories.map((item) => (
                <CarouselItem key={item.id} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">{item.label}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-4">{item.desc}</p>
                      <div className="flex gap-3">
                        <Button size="sm" className="px-4">
                          Saiba mais
                        </Button>
                        <Button size="sm" variant="outline">
                          Falar com especialista
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 md:-left-6" />
            <CarouselNext className="-right-3 md:-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
