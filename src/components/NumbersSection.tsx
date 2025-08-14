import { useState, useEffect, useRef, memo, useCallback, useMemo } from 'react';

// Hook personalizado otimizado para animar contagem de números com melhor performance
const useCountAnimation = (endValue: number, duration: number = 2000, decimals: number = 0) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  // Função de easing memoizada para evitar recálculos
  const easeOutQuart = useCallback((x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  }, []);

  useEffect(() => {
    // Usando opções otimizadas para o IntersectionObserver com menor threshold
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: '150px' } // Carregamento ainda mais antecipado
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      // Limpar animação pendente para evitar vazamento de memória
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
      if (!startTimeRef.current) startTimeRef.current = currentTime;
      const elapsed = currentTime - startTimeRef.current;
      
      // Limitar a taxa de atualização para melhorar performance
      if (currentTime - lastFrameTime < 16) { // ~60fps
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTime = currentTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Usando a função de easing memoizada
      const easedProgress = easeOutQuart(progress);
      const currentValue = startValue + (endValue - startValue) * easedProgress;
      
      // Evitar atualizações desnecessárias do estado
      const newValue = Number(currentValue.toFixed(decimals));
      if (newValue !== count) {
        setCount(newValue);
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
  }, [isVisible, endValue, duration, decimals, count, easeOutQuart]);

  return { count, elementRef };
};

// Componente memoizado para evitar renderizações desnecessárias
const NumbersSection = memo(() => {
  // Reduzindo a duração das animações para melhorar o desempenho
  const clientsCount = useCountAnimation(15, 1800);
  const satisfactionCount = useCountAnimation(98, 1500);
  const experienceCount = useCountAnimation(15, 1000);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/40 to-green-50/40 relative overflow-hidden">
      {/* Background decorative elements - Otimizado para melhor renderização */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2240%22%20r%3D%222%22%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.4%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-xl animate-pulse delay-500" />
      
      <div className="container relative space-y-20">
        <header className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-sm uppercase tracking-wider mb-6">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
            Nossa trajetória de crescimento
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
            LapenhaGáz em Números
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
            Dados que demonstram nossa trajetória de sucesso no fornecimento de gás GLP e água mineral de qualidade
          </p>
        </header>

        {/* Cards de estatísticas principais */}
        <div className="grid md:grid-cols-2 gap-10">
          <article ref={clientsCount.elementRef} className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 hover:bg-white border border-white/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -top-8 -right-4 md:-right-8 w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-primary/70 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ring-2 ring-secondary/40">
              <img
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=400&fit=crop&crop=center&auto=format&q=80"
                srcSet="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=200&h=200&fit=crop&crop=center&auto=format&q=75 200w,
                         https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=400&fit=crop&crop=center&auto=format&q=80 400w"
                sizes="(max-width: 768px) 100px, 200px"
                alt="Mulher sorrindo com sua filha no colo demonstrando satisfação"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                fetchPriority="high"
                decoding="async"
                width="400"
                height="400"
              />
            </div>
            <div className="relative">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-6xl md:text-7xl font-black bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-700 leading-none">
                  +{clientsCount.count}
                </span>
                <span className="text-4xl font-black text-gray-500 group-hover:text-gray-700 transition-colors duration-500">MIL</span>
              </div>
              <p className="text-gray-700 font-bold text-xl group-hover:text-gray-900 transition-colors duration-500">Famílias e empresas atendidas</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  <span className="font-medium">Residências, restaurantes e comércios</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
                  <span className="font-medium">Entrega de gás GLP e água mineral</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                  <span className="font-medium">Crescimento de 25% ao ano desde 2009</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  <span className="font-medium">Cobertura em toda região metropolitana</span>
                </div>
              </div>
            </div>
          </article>

          <article ref={satisfactionCount.elementRef} className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 hover:bg-white border border-white/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -top-8 -right-4 md:-right-8 w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-secondary/70 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ring-2 ring-primary/40">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&crop=center&auto=format&q=80"
                srcSet="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop&crop=center&auto=format&q=75 200w,
                         https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&crop=center&auto=format&q=80 400w"
                sizes="(max-width: 768px) 100px, 200px"
                alt="Condomínio de edifícios representando clientes satisfeitos"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                decoding="async"
                width="400"
                height="400"
              />
            </div>
            <div className="relative">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-6xl md:text-7xl font-black bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-700 leading-none">
                  {satisfactionCount.count}%
                </span>
              </div>
              <p className="text-gray-700 font-bold text-xl group-hover:text-gray-900 transition-colors duration-500">Índice de satisfação dos clientes</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                  <span className="font-medium">Pesquisa NPS realizada em 2024</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  <span className="font-medium">Qualidade do gás GLP certificada</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                  <span className="font-medium">Água mineral com pureza garantida</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                  <span className="font-medium">Entrega pontual e atendimento 24h</span>
                </div>
              </div>
            </div>
          </article>
        </div>



        {/* Seção de crescimento sustentável */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-bold text-sm uppercase tracking-wider">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Compromisso com o futuro
            </div>
            <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent leading-tight">
              Crescimento Sustentável
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Nossa expansão é pautada pela responsabilidade ambiental e social, investindo em tecnologias limpas e práticas sustentáveis que beneficiam as comunidades onde atuamos.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div ref={experienceCount.elementRef} className="text-center space-y-2 group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-green-600 group-hover:text-green-700 transition-colors duration-300">{experienceCount.count}+</div>
                <p className="text-sm text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">Anos de experiência</p>
              </div>
              <div className="text-center space-y-2 group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-blue-600 group-hover:text-blue-700 transition-colors duration-300">100%</div>
                <p className="text-sm text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">Energia limpa</p>
              </div>
              <div className="text-center space-y-2 group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-purple-600 group-hover:text-purple-700 transition-colors duration-300">24/7</div>
                <p className="text-sm text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">Suporte técnico</p>
              </div>
              <div className="text-center space-y-2 group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-orange-600 group-hover:text-orange-700 transition-colors duration-300">ISO</div>
                <p className="text-sm text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">Certificações</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

NumbersSection.displayName = 'NumbersSection';

export default NumbersSection;
