import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Users } from "lucide-react";

const commitments = [
  {
    icon: Leaf,
    title: "Somos ambientalmente responsáveis",
    desc: "Projetos para reduzir emissões e promover eficiência energética em toda a cadeia.",
  },
  {
    icon: Users,
    title: "Somos socialmente comprometidos",
    desc: "Parcerias e iniciativas voltadas às pessoas e às comunidades que atendemos.",
  },
  {
    icon: Recycle,
    title: "Estamos em constante evolução",
    desc: "Inovação aberta, melhoria contínua e tecnologia aplicada ao dia a dia.",
  },
];

const CommitmentsSection = () => {
  return (
    <section aria-labelledby="compromissos-title" className="py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-start">
        {/* Texto e CTAs */}
        <article>
          <header className="mb-6">
            <h2 id="compromissos-title" className="text-3xl md:text-4xl font-bold">
              Nossos compromissos com as pessoas e o meio ambiente
            </h2>
          </header>
          <p className="text-muted-foreground max-w-prose mb-8">
            Trabalhamos para oferecer soluções de energia com segurança, eficiência e respeito ao
            meio ambiente. Nosso foco está em gerar valor para nossos clientes e para a sociedade,
            mantendo um relacionamento transparente.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button variant="cta">Ver nossos compromissos</Button>
            <Button variant="outline" asChild>
              <a href="#relatorio-sustentabilidade">Relatório de sustentabilidade</a>
            </Button>
          </div>
        </article>

        {/* Cards com compromissos + imagem decorativa */}
        <aside className="space-y-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=500&fit=crop&crop=center"
              alt="Pessoas plantando mudas representando responsabilidade ambiental"
              className="w-full rounded-xl shadow-xl"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-primary/10" />
          </div>

          <ul className="grid sm:grid-cols-2 gap-4">
            {commitments.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="p-5 rounded-xl border bg-card text-card-foreground">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <Icon className="text-primary" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold leading-tight">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default CommitmentsSection;
