import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Droplets, Shield, Clock, CheckCircle, Truck } from "lucide-react";
import Layout from "@/components/Layout";

const Services = () => {
  const gasFeatures = [
    { icon: Shield, title: "Segurança Total", desc: "Fornecimento com padrões rigorosos de segurança e monitoramento 24h." },
    { icon: Clock, title: "Disponibilidade Contínua", desc: "Suprimento ininterrupto sem necessidade de reabastecimento." },
    { icon: Flame, title: "Eficiência Energética", desc: "Melhor desempenho térmico e controle preciso de temperatura." },
  ];

  const waterFeatures = [
    { icon: Droplets, title: "Pureza Garantida", desc: "Água mineral natural com análises laboratoriais regulares." },
    { icon: Truck, title: "Entrega Programada", desc: "Logística otimizada com entregas pontuais e flexíveis." },
    { icon: CheckCircle, title: "Qualidade Certificada", desc: "Produto certificado pelos órgãos competentes de saúde." },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Fornecemos soluções completas em gás natural canalizado e água mineral, 
              atendendo desde residências até grandes complexos industriais.
            </p>
            <Button size="lg" variant="hero">
              Solicite um Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Gás Natural Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Flame className="h-4 w-4" />
                Gás Natural Canalizado
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Energia limpa e eficiente para sua casa ou empresa
              </h2>
              <p className="text-muted-foreground mb-6">
                O gás natural canalizado da LapenhaGáz oferece uma fonte de energia 
                confiável, econômica e sustentável. Ideal para aquecimento, cocção 
                e processos industriais.
              </p>
              <div className="space-y-4 mb-8">
                {gasFeatures.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{title}</h4>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="lg">
                Saiba Mais sobre Gás Natural
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/og-lapenhagaz.jpg"
                alt="Instalação de gás natural em cozinha moderna"
                className="rounded-lg shadow-[var(--shadow-elevated)] w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Água Mineral Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/og-lapenhagaz.jpg"
                alt="Galões de água mineral em ambiente corporativo"
                className="rounded-lg shadow-[var(--shadow-elevated)] w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Droplets className="h-4 w-4" />
                Água Mineral
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Água mineral pura para seu bem-estar
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossa água mineral é extraída de fontes naturais protegidas, 
                garantindo pureza e qualidade superior para sua família ou empresa.
              </p>
              <div className="space-y-4 mb-8">
                {waterFeatures.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="h-8 w-8 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{title}</h4>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="lg">
                Conheça Nossos Planos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-[var(--shadow-glow)]">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Pronto para fazer a diferença?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como nossos serviços podem 
                otimizar seus custos e melhorar sua qualidade de vida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Fale Conosco
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Ver Tarifas
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Services;