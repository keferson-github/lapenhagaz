
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "Gás Natural Lapenhagáz: seguro, contínuo e eficiente",
      description: "Atendemos residências, comércios e indústrias com energia limpa e disponível 24 horas. Pague apenas o que consumir e diga adeus aos reabastecimentos.",
      image: "https://images.unsplash.com/photo-1514511547119-0912d1c49b78?auto=format&fit=crop&w=1600&q=80",
      primaryAction: { text: "Peça sua ligação", href: "#contato" },
      secondaryAction: { text: "Conheça os segmentos", href: "#segmentos" }
    },
    {
      title: "Energia limpa para seu negócio crescer",
      description: "Soluções em gás natural para empresas de todos os portes. Redução de custos, maior eficiência e sustentabilidade para sua operação.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
      primaryAction: { text: "Soluções empresariais", href: "#comercial" },
      secondaryAction: { text: "Calcule a economia", href: "#calculadora" }
    },
    {
      title: "Sustentabilidade que faz a diferença",
      description: "Escolha a energia do futuro. Gás natural: menos poluente, mais eficiente e com menor impacto ambiental para um planeta melhor.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
      primaryAction: { text: "Saiba mais", href: "#sustentabilidade" },
      secondaryAction: { text: "Área de cobertura", href: "#cobertura" }
    }
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="inicio" className="relative min-h-[100vh] md:min-h-0">
      <Carousel 
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="min-h-[100vh] md:min-h-0">
              <div className="container grid md:grid-cols-2 gap-10 py-20 md:py-24 items-center min-h-[100vh] md:min-h-0">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-muted-foreground text-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <a href={slide.primaryAction.href}>
                      <Button variant="hero" size="default" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">{slide.primaryAction.text}</Button>
                    </a>
                    <a href={slide.secondaryAction.href}>
                      <Button variant="outline" size="default" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105">{slide.secondaryAction.text}</Button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={slide.image}
                    alt="Lapenhagáz conectando casas e empresas com gás natural"
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                    className="w-full h-[260px] md:h-[420px] lg:h-[520px] object-cover rounded-lg border border-border shadow"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="container">
          <div className="relative">
            <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-6 w-6 md:h-8 md:w-8" />
            <CarouselNext className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-6 w-6 md:h-8 md:w-8" />
          </div>
        </div>
        

      </Carousel>
    </section>
  );
};

export default Hero;