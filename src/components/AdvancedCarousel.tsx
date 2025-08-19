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

interface AdvancedCarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const AdvancedCarousel = ({ 
  slides, 
  autoPlay = true, 
  interval = 5000,
  className 
}: AdvancedCarouselProps) => {
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

  const getSlideStyle = (index: number) => {
    const diff = index - currentSlide;
    const isActive = diff === 0;
    const isPrev = diff === -1 || (currentSlide === 0 && index === slides.length - 1);
    const isNext = diff === 1 || (currentSlide === slides.length - 1 && index === 0);

    if (isActive) {
      return {
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        opacity: 1,
        zIndex: 3,
      };
    } else if (isPrev) {
      return {
        transform: 'translateX(-50%) scale(0.8) rotateY(25deg)',
        opacity: 0.7,
        zIndex: 2,
      };
    } else if (isNext) {
      return {
        transform: 'translateX(50%) scale(0.8) rotateY(-25deg)',
        opacity: 0.7,
        zIndex: 2,
      };
    } else {
      return {
        transform: 'translateX(0) scale(0.6) rotateY(0deg)',
        opacity: 0,
        zIndex: 1,
      };
    }
  };

  return (
    <div 
      className={cn("relative w-full h-[600px] overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      
      {/* Slides container */}
      <div className="relative w-full h-full flex items-center justify-center perspective-1000">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute w-full max-w-4xl h-[500px] transition-all duration-700 ease-in-out cursor-pointer preserve-3d"
            style={getSlideStyle(index)}
            onClick={() => goToSlide(index)}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] border border-border/20 bg-background backdrop-blur-sm">
              {/* Image */}
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
              <div className="absolute bottom-0 left-0 right-0 p-8 text-foreground">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-sm font-medium border border-blue-400/30">
                          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-semibold">
                            {slide.subtitle}
                          </span>
                        </div>
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-2xl">
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

              {/* Slide indicator */}
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium">
                {index + 1} / {slides.length}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 z-10 h-8 w-8 md:h-10 md:w-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 z-10 h-8 w-8 md:h-10 md:w-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
      </Button>

      {/* Bottom controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
        {/* Play/Pause button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleAutoPlay}
          className="h-8 px-2"
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
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/30">
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

export default AdvancedCarousel;