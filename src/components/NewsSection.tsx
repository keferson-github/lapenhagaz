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
      title: "Novas marcas premium de gás GLP",
      excerpt: "LapenhaGáz amplia portfólio com as marcas mais conceituadas do mercado de gás GLP, oferecendo ainda mais qualidade.",
      date: "15 de Janeiro, 2024",
      category: "Produtos",
      image: "/images/og-lapenhagaz.jpg",
      alt: "Botijões de gás GLP representando novas marcas premium"
    },
    {
      title: "Promoção especial para restaurantes",
      excerpt: "Condições exclusivas para estabelecimentos comerciais com desconto progressivo na compra de gás GLP.",
      date: "10 de Janeiro, 2024",
      category: "Promoções",
      image: "/images/og-lapenhagaz.jpg",
      alt: "Chef profissional cozinhando em restaurante com fogão a gás durante promoção especial"
    },
    {
      title: "Água mineral com nova fonte natural",
      excerpt: "LapenhaGáz inaugura parceria com nova fonte de água mineral natural, garantindo pureza e qualidade superior.",
      date: "05 de Janeiro, 2024",
      category: "Água Mineral",
      image: "/images/og-lapenhagaz.jpg",
      alt: "Fonte natural de água mineral simbolizando pureza e qualidade"
    }
  ];

  return (
    <motion.section 
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div 
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Notícias e Comunicados
            </motion.h2>
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Fique por dentro das novidades da Lapenhagáz
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {news.map((item, index) => (
                <CarouselItem key={index} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                    whileHover={{ y: -5 }}
                  >
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
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="link" className="p-0 mt-4 text-primary">
                            Leia mais <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
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
          transition={{ duration: 0.6, delay: 0.8 }}
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