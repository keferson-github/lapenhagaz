import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Factory } from "lucide-react";

const items = [
  {
    icon: Home,
    title: "Residencial",
    desc: "Conforto com água quente, cocção e aquecimento de ambientes, sem cilindros e sem preocupaçōes.",
  },
  {
    icon: Building2,
    title: "Comercial",
    desc: "Abastecimento contínuo para restaurantes, hotéis, lavanderias e hospitais com previsibilidade.",
  },
  {
    icon: Factory,
    title: "Industrial",
    desc: "Eficiência energética, qualidade de chama e redução de custos operacionais para sua planta.",
  },
];

const Segments = () => {
  return (
    <section id="segmentos" className="py-14 md:py-20">
      <div className="container">
        <header className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Segmentos atendidos</h2>
          <p className="text-muted-foreground mt-2">
            Lapenhagáz leva gás natural para diferentes necessidades.
          </p>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="border-border/70">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-secondary">
                    <Icon className="text-primary" aria-hidden />
                  </div>
                  <CardTitle>{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;