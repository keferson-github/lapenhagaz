import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Flame, Clock, Leaf } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Segurança", desc: "Distribuição canalizada com padrões rigorosos e monitoramento." },
  { icon: Clock, title: "Disponibilidade 24/7", desc: "Sem reabastecimentos: fornecimento contínuo e confiável." },
  { icon: Flame, title: "Eficiência", desc: "Chama estável e melhor desempenho em aquecimento e cocção." },
  { icon: Leaf, title: "Sustentabilidade", desc: "Energia mais limpa com menor emissão de particulados." },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-14 md:py-20 bg-muted/30">
      <div className="container">
        <header className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Por que escolher a Lapenhagáz</h2>
          <p className="text-muted-foreground mt-2">
            Benefícios que fazem diferença no seu dia a dia e no seu negócio.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="border-border/70">
              <CardContent className="flex gap-4 items-start p-6">
                <div className="h-10 w-10 rounded-md bg-secondary inline-flex items-center justify-center">
                  <Icon className="text-primary" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;