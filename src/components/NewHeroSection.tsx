import { Button } from "@/components/ui/button";

const NewHeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-primary via-accent to-secondary text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12 py-20">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                CONSUMO CONSCIENTE
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Dicas de Consumo
                <br />
                <span className="text-accent">Consciente</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
                Todo dia, o ano todo
              </h2>
            </div>

            <p className="text-lg text-white/80 max-w-lg leading-relaxed">
              A Lapenhagáz oferece soluções completas em gás natural canalizado e água mineral, 
              promovendo eficiência energética e sustentabilidade para sua casa ou empresa.
            </p>

            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 rounded-full text-lg shadow-lg"
            >
              VAMOS LÁ!
            </Button>
          </div>

          {/* Right content - Woman image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1594824797147-dfb21f6b4b7b?w=500&h=600&fit=crop&crop=face"
                alt="Mulher sorrindo representando consumo consciente"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              {/* Decorative circles around the woman */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;