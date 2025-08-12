const NumbersSection = () => {
  return (
    <section aria-labelledby="numeros-title" className="py-20">
      <div className="container space-y-10">
        <header className="text-center max-w-2xl mx-auto">
          <h2 id="numeros-title" className="text-3xl md:text-4xl font-bold">
            Lapenhagáz em Números
          </h2>
          <p className="text-muted-foreground mt-2">
            Indicadores que refletem nosso alcance e qualidade de atendimento.
          </p>
        </header>

        {/* Cards brancos com números */}
        <div className="grid md:grid-cols-2 gap-6">
          <article className="relative rounded-2xl border bg-card text-card-foreground p-8 shadow-sm">
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full overflow-hidden border">
              <img
                src="https://images.unsplash.com/photo-1556909114-16c3e839c1ce?w=300&h=300&fit=crop&crop=center"
                alt="Família usando gás com segurança"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                2,6
              </span>
              <span className="text-3xl font-semibold text-muted-foreground">MI</span>
            </div>
            <p className="text-muted-foreground mt-2">Clientes atendidos</p>
          </article>

          <article className="relative rounded-2xl border bg-card text-card-foreground p-8 shadow-sm">
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full overflow-hidden border">
              <img
                src="https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5e?w=300&h=300&fit=crop&crop=center"
                alt="Família satisfeita consumindo com segurança"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                91%
              </span>
            </div>
            <p className="text-muted-foreground mt-2">Clientes satisfeitos (fonte interna 2024)</p>
          </article>
        </div>

        {/* Faixa em gradiente com destaque */}
        <div className="rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground">
            <div className="container px-6 md:px-10 py-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-square max-w-xs mx-auto rounded-full overflow-hidden border border-white/20 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=600&fit=crop&crop=center"
                    alt="Cidade com rede de gás natural"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="uppercase tracking-wide text-primary-foreground/80 text-sm mb-2">Presença</p>
                  <p className="text-4xl md:text-5xl font-extrabold leading-tight">presente em 96 municípios</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda faixa em gradiente (variação) */}
        <div className="rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-accent to-secondary text-primary-foreground">
            <div className="container px-6 md:px-10 py-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-6xl md:text-7xl font-extrabold leading-none">4,2<span className="align-top text-3xl">BI</span></p>
                  <p className="text-primary-foreground/90 mt-3">m³ distribuídos em 2024</p>
                </div>
                <div className="order-1 md:order-2 relative aspect-square max-w-xs mx-auto rounded-full overflow-hidden border border-white/20 shadow-lg">
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
