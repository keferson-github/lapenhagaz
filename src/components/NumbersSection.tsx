const NumbersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      <div className="container relative space-y-16">
        <header className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-sm uppercase tracking-wider mb-4">
            Nossa trajetória
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            LapenhaGáz em Números
          </h2>
          <p className="text-muted-foreground text-lg">
            Dados que demonstram nossa presença e compromisso com a excelência
          </p>
        </header>

        {/* Cards modernizados com números */}
        <div className="grid md:grid-cols-2 gap-8">
          <article className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white border-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full overflow-hidden border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1556909114-16c3e839c1ce?w=300&h=300&fit=crop&crop=center"
                alt="Família usando gás com segurança"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                  2,6
                </span>
                <span className="text-3xl font-bold text-gray-600 group-hover:text-gray-800 transition-colors duration-300">MI</span>
              </div>
              <p className="text-gray-600 font-semibold text-lg mt-2 group-hover:text-gray-800 transition-colors duration-300">Clientes atendidos</p>
            </div>
          </article>

          <article className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white border-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full overflow-hidden border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5e?w=300&h=300&fit=crop&crop=center"
                alt="Família satisfeita consumindo com segurança"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-black bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                  91%
                </span>
              </div>
              <p className="text-gray-600 font-semibold text-lg mt-2 group-hover:text-gray-800 transition-colors duration-300">Clientes satisfeitos (fonte interna 2024)</p>
            </div>
          </article>
        </div>

        {/* Faixa em gradiente modernizada */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground relative">
            <div className="absolute inset-0 bg-black/10" />
            <div className="container px-6 md:px-10 py-12 relative">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-square max-w-xs mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=600&fit=crop&crop=center"
                    alt="Cidade com rede de gás natural"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="uppercase tracking-wide text-primary-foreground/90 text-sm mb-4 font-bold">Presença</p>
                  <p className="text-4xl md:text-5xl font-black leading-tight drop-shadow-lg">presente em 96 municípios</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda faixa modernizada */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-br from-accent to-secondary text-primary-foreground relative">
            <div className="absolute inset-0 bg-black/10" />
            <div className="container px-6 md:px-10 py-12 relative">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-6xl md:text-7xl font-black leading-none drop-shadow-lg">4,2<span className="align-top text-3xl">BI</span></p>
                  <p className="text-primary-foreground/95 mt-3 text-lg font-semibold">m³ distribuídos em 2024</p>
                </div>
                <div className="order-1 md:order-2 relative aspect-square max-w-xs mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1581091215367-59ab6dcef1b8?w=600&h=600&fit=crop&crop=center"
                    alt="Infraestrutura de dutos industriais"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
