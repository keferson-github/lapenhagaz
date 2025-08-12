import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "Expansão da rede para novos bairros",
      excerpt: "Lapenhagáz anuncia a expansão da rede de gás natural para mais 15 bairros da região metropolitana.",
      date: "15 de Janeiro, 2024",
      category: "Expansão",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
      alt: "Tubulações industriais representando expansão da rede de gás natural"
    },
    {
      title: "Tarifas especiais para pequenos comércios",
      excerpt: "Novo programa oferece condições diferenciadas para microempresas e estabelecimentos comerciais de pequeno porte.",
      date: "10 de Janeiro, 2024",
      category: "Tarifas",
      image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa2?auto=format&fit=crop&w=1600&q=80",
      alt: "Restaurante com fogões a gás representando pequenos comércios"
    },
    {
      title: "Sustentabilidade: metas de carbono zero",
      excerpt: "Empresa apresenta plano estratégico para redução de emissões e práticas sustentáveis até 2030.",
      date: "05 de Janeiro, 2024",
      category: "Sustentabilidade",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
      alt: "Parque com árvores simbolizando sustentabilidade e carbono zero"
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Notícias e Comunicados</h2>
            <p className="text-muted-foreground">Fique por dentro das novidades da Lapenhagáz</p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Ver todas as notícias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-[var(--shadow-elevated)] transition-all duration-300">
              <div className="overflow-hidden rounded-t-lg">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 33vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <span className="inline-block bg-accent/10 text-accent text-xs px-2 py-1 rounded-full mb-3 w-fit">
                  {item.category}
                </span>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {item.excerpt}
                </p>
                <Button variant="link" className="p-0 mt-4 text-primary">
                  Leia mais <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" className="w-full">
            Ver todas as notícias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;