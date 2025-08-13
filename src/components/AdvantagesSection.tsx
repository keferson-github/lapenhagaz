import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Clock, Shield, DollarSign } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Energia limpa e renovável que contribui para um futuro mais sustentável e responsável com o meio ambiente."
    },
    {
      icon: Clock,
      title: "Praticidade",
      description: "Fornecimento contínuo 24 horas, sem necessidade de troca de cilindros ou preocupações com o abastecimento."
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Sistema seguro e confiável, com monitoramento constante e tecnologia avançada para sua tranquilidade."
    },
    {
      icon: DollarSign,
      title: "Economia",
      description: "Redução significativa nos custos operacionais e maior eficiência energética para sua casa ou empresa."
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
            Vantagens do gás encanado
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra os benefícios que fazem do gás natural a melhor escolha para sua casa ou empresa
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