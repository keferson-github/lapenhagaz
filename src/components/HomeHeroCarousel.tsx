import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from "lucide-react";

import OptimizedHeroImage from '@/components/OptimizedHeroImage';

// Ícone do WhatsApp SVG
const WhatsAppIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="mr-2"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
  </svg>
);

const HomeHeroCarousel = () => {
  const whatsappNumber = "5511983880542";
  const whatsappMessage = "Olá, vim pelo site da LapenhaGáz, e gostaria de fazer um pedido!";
  
  const heroSlides = [
    {
      id: "residencial",
      badge: "GÁS GLP PREMIUM",
      title: "Gás GLP para sua Casa",
      subtitle: "Qualidade e segurança garantidas",
      desc: "Gás GLP das melhores marcas do mercado para sua residência. Entrega rápida, segura e com a qualidade que sua família merece. Atendimento especializado.",
      img: "slides/foto-botijao-residencial.webp"
    },
    {
      id: "comercial",
      badge: "SOLUÇÕES EMPRESARIAIS",
      title: "Gás GLP para Empresas",
      subtitle: "Eficiência e economia garantidas",
      desc: "Gás GLP de alta qualidade para restaurantes, padarias, hotéis e indústrias. Fornecimento regular das melhores marcas. Suporte técnico completo.",
      img: "slides/foto-slide-gas-empresas.webp"
    },
    {
      id: "agua-mineral",
      badge: "ÁGUA PREMIUM",
      title: "Água Mineral Natural",
      subtitle: "Pureza e qualidade certificada é na Lapenhagáz",
      desc: "Água mineral de fontes protegidas com entrega programada. Qualidade premium para sua família e empresa. Distribuição confiável e pontual.",
      img: "slides/foto-slide-aguas.webp"
    },
    {
      id: "marcas-premium",
      badge: "MARCAS PREMIUM",
      title: "As Melhores Marcas",
      subtitle: "Qualidade certificada e confiança",
      desc: "Trabalhamos exclusivamente com as marcas líderes do mercado de gás GLP e água mineral. Qualidade garantida em cada entrega. Parceiros de confiança.",
      img: "slides/foto-slide-grandes-marcas.webp"
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

  // Auto-play otimizado
  useEffect(() => {
    if (!emblaApi) return;
    
    // Use requestIdleCallback para não bloquear a thread principal
    let autoplayId: number;
    const startAutoplay = () => {
      autoplayId = window.setInterval(() => {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => emblaApi.scrollNext());
        } else {
          emblaApi.scrollNext();
        }
      }, 6000);
    };
    
    if ('requestIdleCallback' in window) {
      requestIdleCallback(startAutoplay);
    } else {
      startAutoplay();
    }
    
    return () => clearInterval(autoplayId);
  }, [emblaApi]);

  return (
    <section className="relative h-[550px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* Full-bleed Hero Slider */}
      <div ref={emblaRef} className="overflow-hidden h-full">
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`relative flex-none w-full h-full flex items-center transition-opacity duration-500 ${
                index === selectedIndex ? 'opacity-100' : 'opacity-70'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <OptimizedHeroImage
                  src={slide.img}
                  alt={`${slide.title} - ${slide.subtitle}`}
                  className={`w-full h-full ${
                    slide.id === 'agua-mineral' ? 'object-center' : 'object-bottom'
                  }`}
                  priority={index === 0}
                  sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1440px) 1440px, 1920px"
                  width={1920}
                  height={650}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 container mx-auto px-6">
                <div
                  className={`max-w-3xl transition-all duration-700 ${
                    index === selectedIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  {/* Badge */}
                  <div className="hidden md:block mb-6">
                    <span className="inline-block px-6 py-3 bg-primary/30 backdrop-blur-md border border-primary/40 rounded-full text-primary-foreground text-sm font-semibold shadow-lg">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Title */}
                  {index === 0 ? (
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                      {slide.title}
                    </h1>
                  ) : (
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                      {slide.title}
                    </h2>
                  )}

                  {/* Subtitle */}
                  <p className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-6 font-bold drop-shadow-xl">
                    {slide.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed drop-shadow-lg">
                    {slide.desc}
                  </p>

                  {/* CTA Button */}
                  <div className="flex justify-center items-center sm:justify-start mb-8 w-full">
                    <div className="w-full sm:w-auto">
                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                           size="lg" 
                           className="w-full sm:w-80 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-150 flex items-center justify-center"
                         >
                           <WhatsAppIcon />
                           Faça agora seu pedido
                         </Button>
                       </a>
                     </div>
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
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-1 lg:p-2 backdrop-blur-sm transition-all duration-150 group hover:scale-110 z-20"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-1 lg:p-2 backdrop-blur-sm transition-all duration-150 group hover:scale-110 z-20"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-auto">
          <div className="h-1 bg-white/20">
            <div 
              className="h-full bg-primary transition-all duration-150 ease-out shadow-lg shadow-primary/50"
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