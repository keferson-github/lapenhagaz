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
    <section className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-b from-background to-[hsl(var(--muted)/0.35)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.08),transparent_60%)]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vantagens do gás encanado
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card key={index} className="border-2 border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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