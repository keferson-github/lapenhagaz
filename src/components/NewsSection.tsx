import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NewsSection = () => {
  const news = [
    {
      title: "Novas marcas premium de gás GLP",
      excerpt: "LapenhaGáz amplia portfólio com as marcas mais conceituadas do mercado de gás GLP, oferecendo ainda mais qualidade.",
      date: "15 de Janeiro, 2024",
      category: "Produtos",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
      alt: "Botijões de gás GLP representando novas marcas premium"
    },
    {
      title: "Promoção especial para restaurantes",
      excerpt: "Condições exclusivas para estabelecimentos comerciais com desconto progressivo na compra de gás GLP.",
      date: "10 de Janeiro, 2024",
      category: "Promoções",
      image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa2?auto=format&fit=crop&w=1600&q=80",
      alt: "Restaurante com fogões a gás representando promoção comercial"
    },
    {
      title: "Água mineral com nova fonte natural",
      excerpt: "LapenhaGáz inaugura parceria com nova fonte de água mineral natural, garantindo pureza e qualidade superior.",
      date: "05 de Janeiro, 2024",
      category: "Água Mineral",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
      alt: "Fonte natural de água mineral simbolizando pureza e qualidade"
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
        
        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {news.map((item, index) => (
                <CarouselItem key={index} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <Card className="group cursor-pointer hover:shadow-[var(--shadow-elevated)] transition-all duration-300 h-full">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 md:-left-6" />
            <CarouselNext className="-right-3 md:-right-6" />
          </Carousel>
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