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
    <section aria-labelledby="compromissos-title" className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4">
            Nosso compromisso
          </div>
          <h2 id="compromissos-title" className="text-3xl md:text-4xl font-bold mb-4">
            Pessoas e meio ambiente
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Trabalhamos para oferecer soluções de energia com segurança, eficiência e respeito ao meio ambiente
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {commitments.map(({ icon: Icon, title, desc }, index) => (
            <div key={title} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-0 hover:bg-white transition-all duration-300 hover:shadow-[var(--shadow-modern)] hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-white" aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Ver nossos compromissos
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              Relatório de sustentabilidade
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentsSection;
