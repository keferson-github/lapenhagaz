import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const SolutionsSection = () => {
  const categories = [
    {
      id: "p2",
      label: "P2 (2 kg)",
      desc: "Ideal para fogareiros, acampamentos e lampiões. Prático e portátil.",
      img: "/images/og-lapenhagaz.jpg",
      alt: "Botijão P2 de 2kg para fogareiros e acampamentos",
    },
    {
      id: "p5",
      label: "P5 (5 kg)",
      desc: "Versátil para fogões, maçaricos, trailers e motorhomes em viagens.",
      img: "/images/og-lapenhagaz.jpg",
      alt: "Botijão P5 de 5kg para fogões e maçaricos",
    },
    {
      id: "p13",
      label: "P13 (13 kg)",
      desc: "O botijão residencial mais usado no Brasil, ideal para cozinhar no dia a dia.",
      img: "/images/og-lapenhagaz.jpg",
      alt: "Botijão P13 de 13kg residencial",
    },
    {
      id: "p20",
      label: "P20 (20 kg)",
      desc: "Comum em empilhadeiras industriais, garante eficiência e praticidade.",
      img: "/images/og-lapenhagaz.jpg",
      alt: "Botijão P20 de 20kg para empilhadeiras",
    },
    {
      id: "p45",
      label: "P45 (45 kg)",
      desc: "Indicado para comércios, restaurantes, hospitais e residências de alto consumo.",
      img: "/images/og-lapenhagaz.jpg",
      alt: "Botijão P45 de 45kg para comércios e restaurantes",
    },
    {
      id: "p90",
      label: "P90 (90 kg)",
      desc: "Para indústrias e grandes comércios. Requer instalação segura com válvula.",
      img: "/images/og-lapenhagaz.jpg",
      alt: "Botijão P90 de 90kg para indústrias",
    },
    {
      id: "galao-20l",
      label: "Galão 20L",
      desc: "Praticidade e pureza para sua casa ou empresa, com água mineral de qualidade.",
      img: "/images/og-lapenhagaz.jpg",
      alt: "Galão de água mineral 20L",
    },
  ];

  return (
    <motion.section 
      className="relative py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        {/* Título da seção */}
        <motion.header 
          className="mb-10 md:mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Nossos Produtos e Serviços
          </motion.h2>
          <motion.p 
            className="mt-3 text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Botijões de gás GLP em diversos tamanhos e galões de água mineral para atender todas as suas necessidades.
          </motion.p>
        </motion.header>

        {/* Carrossel de cards */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {categories.map((item, index) => (
                <CarouselItem key={item.id} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold">{item.label}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground mb-4">{item.desc}</p>
                        <div className="flex gap-3">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="sm" className="px-4">
                              Saiba mais
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="sm" variant="outline">
                              Falar com especialista
                            </Button>
                          </motion.div>
                        </div>
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
      </div>
    </motion.section>
  );
};

export default SolutionsSection;
