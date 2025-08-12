import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomeHeroCarousel = () => {
  const heroSlides = [
    {
      id: "residencial",
      badge: "ENERGIA LIMPA",
      title: "Gás Natural para sua Casa",
      subtitle: "Conforto e segurança sem cilindros",
      desc: "Transforme sua casa com a eficiência e praticidade do gás natural canalizado. Água quente, cocção e aquecimento sem preocupações.",
      img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop&crop=center",
      cta: "Solicite Ligação",
      ctaSecondary: "Saiba Mais"
    },
    {
      id: "comercial",
      badge: "SOLUÇÕES EMPRESARIAIS",
      title: "Energia para seu Negócio",
      subtitle: "Eficiência operacional e economia",
      desc: "Otimize os custos da sua empresa com gás natural de alta qualidade. Ideal para restaurantes, hotéis, lavanderias e hospitais.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&crop=center",
      cta: "Conheça os Planos",
      ctaSecondary: "Calcule Economia"
    },
    {
      id: "agua-mineral",
      badge: "ÁGUA PREMIUM",
      title: "Água Mineral Natural",
      subtitle: "Pureza e qualidade certificada",
      desc: "Água mineral de fontes protegidas com entrega programada. Qualidade premium para sua família e empresa.",
      img: "https://images.unsplash.com/photo-1560472355-536de3962603?w=1920&h=1080&fit=crop&crop=center",
      cta: "Assine Agora",
      ctaSecondary: "Ver Planos"
    },
    {
      id: "sustentabilidade",
      badge: "FUTURO SUSTENTÁVEL",
      title: "Tecnologia e Meio Ambiente",
      subtitle: "Inovação com responsabilidade",
      desc: "Monitoramento 24/7 com IoT, sistemas inteligentes e compromisso com o meio ambiente para um futuro sustentável.",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop&crop=center",
      cta: "Conheça a Tecnologia",
      ctaSecondary: "Nosso Compromisso"
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
    <section className="relative min-h-[50vh] overflow-hidden">
      {/* Full-bleed Hero Slider */}
      <div ref={emblaRef} className="overflow-hidden h-full">
        <div className="flex">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-none w-full min-h-[85vh] flex items-center"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.img}
                  alt=""
                  className="w-full h-full object-cover"
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
                  <div className={`mb-6 ${index === selectedIndex ? 'animate-fade-in animation-delay-200 anim-500 animation-ease-smooth animate-once will-change-transform will-change-opacity' : ''}`}>
                    <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary-foreground text-sm font-medium transform translate-y-0 transition-all duration-700 ease-out">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Title */}
                  {index === 0 ? (
                    <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight ${index === selectedIndex ? 'animate-fade-in animation-delay-400 anim-700 animation-ease-smooth animate-once will-change-transform will-change-opacity' : ''}`}>
                      {slide.title}
                    </h1>
                  ) : (
                    <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight ${index === selectedIndex ? 'animate-fade-in animation-delay-400 anim-700 animation-ease-smooth animate-once will-change-transform will-change-opacity' : ''}`}>
                      {slide.title}
                    </h2>
                  )}

                  {/* Subtitle */}
                  <p className={`text-xl md:text-2xl text-primary mb-6 font-semibold ${index === selectedIndex ? 'animate-fade-in animation-delay-600 anim-700 animation-ease-smooth animate-once will-change-transform will-change-opacity' : ''}`}>
                    {slide.subtitle}
                  </p>

                  {/* Description */}
                  <p className={`text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed ${index === selectedIndex ? 'animate-fade-in animation-delay-800 anim-700 animation-ease-smooth animate-once will-change-transform will-change-opacity' : ''}`}>
                    {slide.desc}
                  </p>

                  {/* CTA Buttons */}
                  <div className={`flex flex-col sm:flex-row gap-4 ${index === selectedIndex ? 'animate-fade-in animation-delay-1000 anim-900 animation-ease-smooth animate-once will-change-transform will-change-opacity' : ''}`}>
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-5 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 transform motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      {slide.cta}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-5 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 transform motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      {slide.ctaSecondary}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Slide Number Indicator */}
              <div className="absolute bottom-8 left-6 text-white/60">
                <span className="text-sm font-medium">
                  {String(index + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 pointer-events-auto bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-4 backdrop-blur-sm transition-all duration-300 group"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 pointer-events-auto bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-4 backdrop-blur-sm transition-all duration-300 group"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 right-6 pointer-events-auto">
          <div className="flex flex-col gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-primary scale-125 shadow-lg shadow-primary/50'
                    : 'bg-white/40 hover:bg-white/60 hover:scale-110'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
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