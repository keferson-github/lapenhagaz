import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const AccessCardsSection = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    dragFree: false,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const accessCards = [
    {
      title: "Gás GLP Residencial",
      image: "/images/og-lapenhagaz.jpg",
      href: "#gas-residencial",
      desc: "Botijões de gás GLP das melhores marcas para sua casa."
    },
    {
      title: "Gás GLP Comercial", 
      image: "/images/og-lapenhagaz.jpg",
      href: "#gas-comercial",
      desc: "Soluções em gás GLP para restaurantes, padarias e empresas."
    },
    {
      title: "Água Mineral Premium",
      image: "/images/og-lapenhagaz.jpg", 
      href: "#agua-mineral",
      desc: "Água mineral natural de qualidade superior com entrega."
    }
  ];

  return (
    <section className="relative overflow-hidden py-0 bg-gradient-to-b from-background to-[hsl(var(--muted)/0.35)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.10),transparent_60%)]">
      <div className="container">
        <div className="text-center mb-12 mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que você gostaria de acessar?
          </h2>
        </div>

        {isMobile ? (
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {accessCards.map((card, index) => (
                  <div key={index} className="flex-[0_0_85%] min-w-0 pl-4">
                    <a
                      href={card.href}
                      className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                    >
                      <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="absolute inset-0 bg-primary/80 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center px-6 text-center">
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                            <p className="text-sm opacity-90 mb-3">{card.desc}</p>
                            <Button variant="cta" size="sm" asChild>
                              <span>Acessar</span>
                            </Button>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                            {card.title}
                          </h3>
                        </CardContent>
                      </Card>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows for mobile */}
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-2 shadow-lg transition-all duration-300"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-2 shadow-lg transition-all duration-300"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {accessCards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              >
                <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/80 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center px-6 text-center">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                      <p className="text-sm opacity-90 mb-3">{card.desc}</p>
                      <Button variant="cta" size="sm" asChild>
                        <span>Acessar</span>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AccessCardsSection;