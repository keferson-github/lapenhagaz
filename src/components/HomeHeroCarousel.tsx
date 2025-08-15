import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomeHeroCarousel = () => {
  const heroSlides = [
    {
      id: "residencial",
      badge: "GÁS GLP PREMIUM",
      title: "Gás GLP para sua Casa",
      subtitle: "Qualidade e segurança garantidas",
      desc: "Gás GLP das melhores marcas do mercado para sua residência. Entrega rápida, segura e com a qualidade que sua família merece. Atendimento especializado.",
      img: "/foto-botijao-residencial.webp",
      cta: "Solicite Entrega",
      ctaSecondary: "Ver Marcas"
    },
    {
      id: "comercial",
      badge: "SOLUÇÕES EMPRESARIAIS",
      title: "Gás GLP para Empresas",
      subtitle: "Eficiência e economia garantidas",
      desc: "Gás GLP de alta qualidade para restaurantes, padarias, hotéis e indústrias. Fornecimento regular das melhores marcas. Suporte técnico completo.",
      img: "/images/foto-slide-gas-empresas.webp",
      cta: "Solicite Orçamento",
      ctaSecondary: "Ver Soluções"
    },
    {
      id: "agua-mineral",
      badge: "ÁGUA PREMIUM",
      title: "Água Mineral Natural",
      subtitle: "Pureza e qualidade certificada é na Lapenhagáz",
      desc: "Água mineral de fontes protegidas com entrega programada. Qualidade premium para sua família e empresa. Distribuição confiável e pontual.",
      img: "/foto-slide-aguas.webp",
      cta: "Assine Agora",
      ctaSecondary: "Ver Planos"
    },
    {
      id: "marcas-premium",
      badge: "MARCAS PREMIUM",
      title: "As Melhores Marcas",
      subtitle: "Qualidade certificada e confiança",
      desc: "Trabalhamos exclusivamente com as marcas líderes do mercado de gás GLP e água mineral. Qualidade garantida em cada entrega. Parceiros de confiança.",
      img: "/foto-slide-grandes-marcas.webp",
      cta: "Conheça as Marcas",
      ctaSecondary: "Nossos Produtos"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="relative h-[550px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* Full-bleed Hero Slider */}
      <div ref={emblaRef} className="overflow-hidden h-full">
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-none w-full h-full flex items-center"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.img}
                  alt=""
                  className={`w-full h-full object-cover ${
                    slide.id === 'agua-mineral' ? 'object-center' : 'object-bottom'
                  }`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 container mx-auto px-6">
                <div
                  key={`${slide.id}-${index === selectedIndex ? 'active' : 'inactive'}`}
                  className="max-w-3xl"
                >
                  {/* Badge */}
                  <div className={`hidden md:block mb-6 ${index === selectedIndex ? 'animate-slide-up animation-delay-200 anim-600 animation-ease-smooth animate-once will-change-transform will-change-opacity' : ''}`}>
                    <span className="inline-block px-6 py-3 bg-primary/30 backdrop-blur-md border border-primary/40 rounded-full text-primary-foreground text-sm font-semibold transform translate-y-0 transition-all duration-700 ease-out shadow-lg">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Title */}
                  {index === 0 ? (
                    <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl ${index === selectedIndex ? 'animate-slide-up animation-delay-400 anim-800 animation-ease-smooth animate-once will-change-transform will-change-opacity' : ''}`}>
                      {slide.title}
                    </h1>
                  ) : (
                    <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl ${index === selectedIndex ? 'animate-slide-up animation-delay-400 anim-800 animation-ease-smooth animate-once will-change-transform will-change-opacity' : ''}`}>
                      {slide.title}
                    </h2>
                  )}

                  {/* Subtitle */}
                  <p className={`text-2xl md:text-3xl lg:text-4xl text-primary mb-6 font-bold drop-shadow-xl ${index === selectedIndex ? 'animate-slide-up animation-delay-600 anim-800 animation-ease-smooth animate-once will-change-transform will-change-opacity' : ''}`}>
                    {slide.subtitle}
                  </p>

                  {/* Description */}
                  <p className={`text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed drop-shadow-lg ${index === selectedIndex ? 'animate-slide-up animation-delay-800 anim-800 animation-ease-smooth animate-once will-change-transform will-change-opacity' : ''}`}>
                    {slide.desc}
                  </p>

                  {/* CTA Buttons */}
                  <div className={`flex flex-col sm:flex-row gap-3 mb-8 ${index === selectedIndex ? 'animate-fade-in animation-delay-1000 anim-900 animation-ease-smooth animate-once will-change-transform will-change-opacity' : ''}`}>
                    <Button 
                      size="default" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 transform motion-reduce:transform-none motion-reduce:transition-none animate-pulse-subtle"
                    >
                      {slide.cta}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="default"
                      className="border-white bg-white/20 text-white hover:bg-white hover:text-primary backdrop-blur-sm px-8 py-4 text-base rounded-full font-semibold transition-all duration-500 hover:scale-110 hover:-translate-y-2 transform motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      {slide.ctaSecondary}
                    </Button>
                  </div>


                </div>
              </div>


            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Navigation Arrows - Desktop and Tablet only */}
        <div className="hidden md:block pointer-events-auto">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-1 lg:p-2 backdrop-blur-sm transition-all duration-300 group hover:scale-110 z-20"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-1 lg:p-2 backdrop-blur-sm transition-all duration-300 group hover:scale-110 z-20"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-auto">
          <div className="h-1 bg-white/20">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out shadow-lg shadow-primary/50"
              style={{ 
                width: `${((selectedIndex + 1) / heroSlides.length) * 100}%` 
              }}
            />
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="sr-only" aria-live="polite">
        Slide atual: {heroSlides[selectedIndex]?.title} - {selectedIndex + 1} de {heroSlides.length}
      </div>
    </section>
  );
};

export default HomeHeroCarousel;