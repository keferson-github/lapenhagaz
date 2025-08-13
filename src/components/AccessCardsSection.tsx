import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AccessCardsSection = () => {
  const accessCards = [
    {
      title: "Já sou cliente",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop&crop=center",
      href: "#ja-cliente",
      desc: "2ª via, débito automático, religação e muito mais."
    },
    {
      title: "Quero ser cliente", 
      image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400&h=250&fit=crop&crop=center",
      href: "#quero-ser",
      desc: "Solicite ligação de gás encanado para sua casa ou negócio."
    },
    {
      title: "Loja online de serviços",
      image: "https://images.unsplash.com/photo-1581091870622-7e0cdfbb6791?w=400&h=250&fit=crop&crop=center", 
      href: "#loja-servicos",
      desc: "Instalações, manutenção e soluções sob medida."
    }
  ];

  return (
    <section className="relative overflow-hidden py-0 bg-gradient-to-b from-background to-[hsl(var(--muted)/0.35)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.10),transparent_60%)]">
      <div className="container">
        <div className="text-center mb-12 mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que você gostaria de acessar?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {accessCards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            >
              <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/80 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center px-6 text-center">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-sm opacity-90 mb-3">{card.desc}</p>
                    <Button variant="cta" size="sm" asChild>
                      <span>Acessar</span>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessCardsSection;