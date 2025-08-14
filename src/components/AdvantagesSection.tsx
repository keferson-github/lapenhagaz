import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Clock, Shield, DollarSign } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Trabalhamos apenas com as melhores marcas de gás GLP e água mineral do mercado, garantindo qualidade superior."
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Entrega ágil e pontual de gás GLP e água mineral, com agendamento flexível para sua comodidade."
    },
    {
      icon: DollarSign,
      title: "Preços Competitivos",
      description: "Os melhores preços do mercado em gás GLP e água mineral, com condições especiais para clientes fiéis."
    },
    {
      icon: Leaf,
      title: "Produtos Certificados",
      description: "Todos os nossos produtos possuem certificação de qualidade e seguem rigorosos padrões de segurança."
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_70%)]" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">
            Por que escolher?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a LapenhaGáz?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra os benefícios que fazem da LapenhaGáz a melhor escolha em gás GLP e água mineral
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card key={index} className="group border-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:shadow-[var(--shadow-modern)] hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;