import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, MapPin, Calendar } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const values = [
    { icon: Award, title: "Excelência", desc: "Comprometidos com a mais alta qualidade em todos os nossos serviços." },
    { icon: Users, title: "Relacionamento", desc: "Construímos parcerias duradouras baseadas na confiança mútua." },
    { icon: MapPin, title: "Presença Regional", desc: "Atendimento próximo e personalizado em toda nossa área de cobertura." },
  ];

  const timeline = [
    { year: "2010", title: "Fundação", desc: "Início das atividades com foco no fornecimento de gás natural." },
    { year: "2015", title: "Expansão", desc: "Ampliação da rede de distribuição para novos bairros." },
    { year: "2018", title: "Diversificação", desc: "Inclusão da água mineral no portfólio de serviços." },
    { year: "2023", title: "Inovação", desc: "Implementação de tecnologias avançadas de monitoramento." },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6">
          Sobre a Lapenhagáz
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Mais de uma década de experiência fornecendo energia limpa e água pura 
              para milhares de famílias e empresas em nossa região.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-muted-foreground mb-6">
                A LapenhaGáz nasceu em 2010 com a missão de levar energia limpa e 
                confiável para residências e empresas. Começamos como uma pequena 
                distribuidora local e hoje somos referência em qualidade e atendimento.
              </p>
              <p className="text-muted-foreground mb-8">
                Nossa trajetória é marcada pelo crescimento sustentável, investimento 
                em tecnologia e, principalmente, pelo compromisso com a satisfação 
                de nossos clientes.
              </p>
              <Button variant="outline" size="lg">
                Conheça Nossa Equipe
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/og-lapenhagaz.jpg"
                alt="Instalações da LapenhaGáz"
                className="rounded-lg shadow-[var(--shadow-elevated)] w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-xl sm:text-3xl font-bold text-center mb-12">Marcos da Nossa Jornada</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map(({ year, title, desc }, index) => (
              <Card key={year} className="relative border-border/70">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="font-bold text-lg sm:text-2xl text-primary">{year}</div>
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-3xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nossa empresa e definem nossa cultura organizacional.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="text-center border-border/70">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestrutura */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/og-lapenhagaz.jpg"
                alt="Infraestrutura e equipamentos da LapenhaGáz"
                className="rounded-lg shadow-[var(--shadow-elevated)] w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-xl sm:text-3xl font-bold mb-6">Infraestrutura de Ponta</h2>
              <p className="text-muted-foreground mb-6">
                Investimos continuamente em infraestrutura moderna e segura. 
                Nossas instalações seguem os mais rigorosos padrões de qualidade 
                e segurança do setor.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Sistema de monitoramento 24/7 com tecnologia IoT</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Rede de distribuição com mais de 50km de extensão</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Certificações ISO 9001 e ISO 14001</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Equipe técnica altamente qualificada</p>
                </div>
              </div>
              <Button variant="outline" size="lg">
                Ver Certificações
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-[var(--shadow-glow)]">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-xl sm:text-3xl font-bold mb-4">
                Faça parte da nossa história
              </h2>
              <p className="text-base sm:text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Junte-se aos milhares de clientes que já confiam na LapenhaGáz 
                para suas necessidades energéticas.
              </p>
              <Button size="lg" variant="secondary">
                Entre em Contato
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default About;