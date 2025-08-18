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
import { motion } from "framer-motion";

const NewsSection = () => {
  const news = [
    {
      title: "ANP fixa ICMS do GLP em R$ 1,39/kg",
      excerpt: "ANP confirma: ICMS do GLP é R$ 1,39/kg desde fevereiro de 2025, com margens e PMPF por UF/estado, em tabela atualizada. Confira critérios e metodologia oficial.",
      date: "25 de Fevereiro, 2025",
      category: "Regulamentação",
      image: "/images/blog-card1.webp",
      alt: "Regulamentação ANP sobre ICMS do GLP"
    },
    {
      title: "Rejeição de mudanças no gás de cozinha",
      excerpt: "Levantamento nacional indica rejeição à venda fracionada e à troca de marcas em botijões: mais de 80% veem riscos de segurança e desconfiam da proposta no país.",
      date: "10 de Fevereiro, 2025",
      category: "Mercado",
      image: "/images/blog-card2.webp",
      alt: "Pesquisa sobre mudanças no mercado de gás de cozinha"
    },
    {
      title: "MME pauta reforma e investimentos no GLP",
      excerpt: "Em fórum do setor, MME debate reforma do mercado de GLP, regulação do gás, preços de referência e fiscalização, com foco em investimentos e segurança estrutural.",
      date: "08 de Fevereiro, 2025",
      category: "Governo",
      image: "/images/blog-card3.webp",
      alt: "Fórum do MME sobre reforma do mercado de GLP"
    },
    {
      title: "Terminal de GLP em Suape avança R$ 1,2 bi",
      excerpt: "Projeto da OTGN em Suape soma R$ 1,2 bilhão e capacidade prevista de 1,5 milhão t/ano, ampliando a logística de GLP no Nordeste e gerando empregos em PE.",
      date: "05 de Fevereiro, 2025",
      category: "Infraestrutura",
      image: "/images/blog-card4.webp",
      alt: "Terminal de GLP em Suape - investimento em infraestrutura"
    },
    {
      title: "CBMERJ atualiza norma técnica do GLP",
      excerpt: "Bombeiros do RJ atualizam a NT 3-02, com requisitos de segurança para centrais e recipientes até 13 kg de GLP, reforçando prevenção de incêndio e pânico no RJ.",
      date: "03 de Fevereiro, 2025",
      category: "Segurança",
      image: "/images/blog-card5.webp",
      alt: "Norma técnica CBMERJ para segurança no uso de GLP"
    },
    {
      title: "Sindigás esclarece cadeia de envase",
      excerpt: "Nota reforça: produtores não vendem GLP envasado. Envase cabe a distribuidoras; entrega, instalação e revenda são de empresas autorizadas e fiscalizadas por lei.",
      date: "27 de Maio, 2025",
      category: "Esclarecimentos",
      image: "/images/blog-card6.webp",
      alt: "Esclarecimentos Sindigás sobre cadeia de envase e entrega de GLP"
    }
  ];

  return (
    <motion.section 
      className="py-8 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3 }}
    >
      <div className="container px-12 md:px-16 lg:px-24">
        <motion.div 
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div>
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              Notícias e Comunicados
            </motion.h2>
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Fique por dentro das novidades da Lapenhagáz
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.25 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="hidden md:flex">
              Ver todas as notícias
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {news.map((item, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div>
                    <Card className="group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-150 h-full">
                      <div className="overflow-hidden rounded-t-lg">
                        <AspectRatio ratio={4 / 3}>
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
                        <CardTitle className="text-lg group-hover:text-primary">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm line-clamp-3">
                          {item.excerpt}
                        </p>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button variant="link" className="p-0 mt-4 text-primary">
                            Leia mais <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 md:-left-6" />
            <CarouselNext className="-right-3 md:-right-6" />
          </Carousel>
        </motion.div>
        
        <motion.div 
          className="text-center mt-8 md:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button variant="outline" className="w-full">
              Ver todas as notícias
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewsSection;