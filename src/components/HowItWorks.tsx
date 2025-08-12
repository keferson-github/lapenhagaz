import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Wrench, Flame } from "lucide-react";

const steps = [
  { icon: MapPin, title: "Viabilidade", desc: "Analisamos a disponibilidade da rede em sua região e o traçado interno." },
  { icon: Wrench, title: "Instalação", desc: "Executamos a obra com equipe técnica credenciada e segurança." },
  { icon: Flame, title: "Ativação", desc: "Testes, inspeção e ativação do fornecimento com orientação completa." },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-14 md:py-20">
      <div className="container">
        <header className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Como funciona</h2>
          <p className="text-muted-foreground mt-2">
            Do estudo de viabilidade à ativação do gás natural, nós cuidamos de tudo.
          </p>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <Card key={title} className="border-border/70">
              <CardContent className="p-6 space-y-3">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-secondary">
                  <Icon className="text-primary" aria-hidden />
                </div>
                <div className="text-sm text-muted-foreground">Passo {i + 1}</div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;