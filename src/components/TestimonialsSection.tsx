import { useState, useEffect, memo, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Calendar } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

// Hook personalizado para animar contagem de números
const useCountAnimation = (endValue: number, duration: number = 2000, decimals: number = 0) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const easeOutQuart = useCallback((x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: '150px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startValue = 0;
    let lastFrameTime = 0;

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = startValue + (endValue - startValue) * easedProgress;

      if (currentTime - lastFrameTime >= 16) {
        setCount(Number(currentValue.toFixed(decimals)));
        lastFrameTime = currentTime;
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, endValue, duration, decimals, easeOutQuart]);

  return { count, elementRef };
};

// Dados dos depoimentos
const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "Centro, São Paulo",
    avatar: "/images/og-lapenhagaz.jpg",
    rating: 5,
    date: "Há 2 semanas",
    comment: "Excelente atendimento! A entrega foi super rápida e o gás chegou em perfeitas condições. Já sou cliente há mais de 3 anos e sempre fui muito bem atendida. Recomendo!",
    service: "Entrega de Gás GLP",
    verified: true
  },
  {
    id: 2,
    name: "João Santos",
    location: "Vila Madalena, São Paulo",
    avatar: "/images/og-lapenhagaz.jpg",
    rating: 5,
    date: "Há 1 semana",
    comment: "A água mineral da LapenhaGáz é de excelente qualidade! Sabor puro e refrescante. O sistema de entrega é muito prático e os preços são justos. Virei cliente fiel!",
    service: "Água Mineral",
    verified: true
  },
  {
    id: 3,
    name: "Ana Costa",
    location: "Moema, São Paulo",
    avatar: "/images/og-lapenhagaz.jpg",
    rating: 5,
    date: "Há 3 dias",
    comment: "Serviço impecável! Nunca tive problemas com atraso na entrega. A equipe é muito educada e profissional. Indico para todos os meus vizinhos!",
    service: "Entrega de Gás GLP",
    verified: true
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    location: "Pinheiros, São Paulo",
    avatar: "/images/og-lapenhagaz.jpg",
    rating: 5,
    date: "Há 5 dias",
    comment: "Empresa séria e confiável. Preços competitivos e qualidade garantida. O atendimento via WhatsApp é muito ágil. Estou muito satisfeito com o serviço!",
    service: "Água Mineral",
    verified: true
  },
  {
    id: 5,
    name: "Fernanda Lima",
    location: "Itaim Bibi, São Paulo",
    avatar: "/images/og-lapenhagaz.jpg",
    rating: 5,
    date: "Há 1 semana",
    comment: "Melhor empresa de gás da região! Sempre pontuais, produtos de qualidade e preço justo. Já indiquei para várias amigas e todas ficaram satisfeitas.",
    service: "Entrega de Gás GLP",
    verified: true
  },
  {
    id: 6,
    name: "Roberto Mendes",
    location: "Brooklin, São Paulo",
    avatar: "/images/og-lapenhagaz.jpg",
    rating: 5,
    date: "Há 4 dias",
    comment: "Atendimento nota 10! Desde o primeiro contato até a entrega, tudo perfeito. A água é de excelente qualidade e o preço é muito bom. Super recomendo!",
    service: "Água Mineral",
    verified: true
  }
];

// Componente do card de depoimento
const TestimonialCard = memo(({ testimonial, isActive, index = 0 }: { 
  testimonial: typeof testimonials[0], 
  isActive: boolean,
  index?: number
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 h-full border border-gray-100 ${
        isActive ? 'scale-105 shadow-2xl border-primary/20' : 'scale-95'
      }`}
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      {/* Quote icon */}
      <div className="absolute -top-4 left-8">
        <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
          <Quote className="w-4 h-4 text-white" />
        </div>
      </div>
      
      {/* Header com avatar e info */}
      <div className="flex items-start gap-4 mb-6">
        {/* Avatar - oculto na versão mobile */}
        <div className="relative hidden">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
          />
          {testimonial.verified && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900 mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>{testimonial.name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <MapPin className="w-4 h-4" />
            <span>{testimonial.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              <span>{testimonial.date}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Serviço */}
      <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-medium text-sm rounded-full mb-4">
        {testimonial.service}
      </div>
      
      {/* Comentário */}
      <p className="text-gray-700 leading-relaxed text-base italic" style={{ fontFamily: 'Roboto, sans-serif' }}>
        "{testimonial.comment}"
      </p>
      
      {/* Badge verificado */}
      {testimonial.verified && (
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-gray-100">
          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-sm text-green-600 font-medium">Cliente Verificado</span>
        </div>
      )}
    </motion.div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

// Componente principal
const TestimonialsSection = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Hooks de animação para as estatísticas
  const clientsCount = useCountAnimation(5000, 2500);
  const satisfactionCount = useCountAnimation(98, 2000);
  const experienceCount = useCountAnimation(15, 1800);
  const supportCount = useCountAnimation(24, 1500);
  
  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };
  
  // Calcular quais cards mostrar (3 por vez no desktop)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], isActive: i === 1 });
    }
    return visible;
  };
  
  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 relative overflow-hidden"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="container relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-sm uppercase tracking-wider mb-6"
          >
            <Star className="w-4 h-4 text-primary" />
            Depoimentos Reais
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            O que nossos clientes dizem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Mais de <span className="font-bold text-primary">5.000 famílias</span> confiam na LapenhaGáz para suas necessidades de gás e água mineral
          </motion.p>
        </motion.div>
        
        {/* Carrossel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-7xl mx-auto"
        >
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 md:items-center md:justify-center group hover:bg-white hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 md:items-center md:justify-center group hover:bg-white hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" />
          </button>
          
          {/* Cards container */}
          <div className="px-4 md:px-16">
            {/* Desktop view - 3 cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${currentIndex}`}
                  testimonial={testimonial}
                  isActive={testimonial.isActive}
                  index={index}
                />
              ))}
            </div>
            
            {/* Mobile view - 1 card */}
            <div className="md:hidden max-w-full mx-auto">
              <TestimonialCard
                testimonial={testimonials[currentIndex]}
                isActive={true}
                index={0}
              />
              <div className="flex justify-between mt-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-white hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-white hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* Auto-play indicator */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${
                isAutoPlaying ? 'bg-primary animate-pulse' : 'bg-gray-400'
              }`} />
              {isAutoPlaying ? 'Reprodução automática ativa' : 'Clique para ativar reprodução automática'}
            </button>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {/* Clientes Satisfeitos */}
          <motion.div 
            ref={clientsCount.elementRef}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ y: -2 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-black text-primary mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>{clientsCount.count.toLocaleString('pt-BR')}+</div>
            <div className="text-sm text-muted-foreground font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>Clientes Satisfeitos</div>
          </motion.div>

          {/* Avaliações Positivas */}
          <motion.div 
            ref={satisfactionCount.elementRef}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ y: -2 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-black text-secondary mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>{satisfactionCount.count}%</div>
            <div className="text-sm text-muted-foreground font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>Avaliações Positivas</div>
          </motion.div>

          {/* Anos de Experiência */}
          <motion.div 
            ref={experienceCount.elementRef}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            whileHover={{ y: -2 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-black text-accent mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>{experienceCount.count}+</div>
            <div className="text-sm text-muted-foreground font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>Anos de Experiência</div>
          </motion.div>

          {/* Atendimento */}
          <motion.div 
            ref={supportCount.elementRef}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ y: -2 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-black text-primary mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>{supportCount.count}h</div>
            <div className="text-sm text-muted-foreground font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>Atendimento</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;