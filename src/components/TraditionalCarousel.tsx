import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  ctaLink: string;
}

interface TraditionalCarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const TraditionalCarousel = ({ 
  slides, 
  autoPlay = true, 
  interval = 5000,
  className 
}: TraditionalCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(nextSlide, interval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isHovered, interval]);

  return (
    <div 
      className={cn("relative w-full h-[600px] overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center">
              <div className="container">
                <div className="max-w-2xl space-y-6">
                  <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-blue-400/30">
                    <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-semibold">
                      {slide.subtitle}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                    {slide.description}
                  </p>
                  <Button 
                    variant="hero" 
                    size="default"
                    className="group"
                    asChild
                  >
                    <a href={slide.ctaLink}>
                      {slide.cta}
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 z-30 h-8 w-8 md:h-10 md:w-10"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 z-30 h-8 w-8 md:h-10 md:w-10"
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
      </Button>

      {/* Bottom controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50 z-30">
        {/* Play/Pause button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleAutoPlay}
          className="h-8 px-3"
          aria-label={isPlaying ? "Pausar slideshow" : "Reproduzir slideshow"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Progress bar */}
      {isPlaying && !isHovered && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/30 z-20">
          <div 
            className="h-full bg-primary transition-all duration-100 ease-linear"
            style={{
              width: `${((Date.now() % interval) / interval) * 100}%`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TraditionalCarousel;