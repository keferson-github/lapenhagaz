import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Zap, Phone, Calculator, MapPin, Wrench } from "lucide-react";

const QuickAccessCards = () => {
  const services = [
    {
      title: "2ª Via da Conta",
      description: "Baixe sua conta de gás",
      icon: FileText,
      href: "#segunda-via"
    },
    {
      title: "Ligação Nova",
      description: "Solicite sua ligação",
      icon: Zap,
      href: "#ligacao-nova"
    },
    {
      title: "Atendimento",
      description: "Central de atendimento",
      icon: Phone,
      href: "#atendimento"
    },
    {
      title: "Calculadora",
      description: "Simule seu consumo",
      icon: Calculator,
      href: "#calculadora"
    },
    {
      title: "Área de Cobertura",
      description: "Veja onde atendemos",
      icon: MapPin,
      href: "#cobertura"
    },
    {
      title: "Serviços Técnicos",
      description: "Emergência e manutenção",
      icon: Wrench,
      href: "#servicos"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Acesso Rápido</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href={service.href}
                aria-label={service.title}
                className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              >
                <Card className="cursor-pointer hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessCards;