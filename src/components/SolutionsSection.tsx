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
      id: "residencias",
      label: "Gás GLP Residencial",
      desc: "Botijões de gás GLP das melhores marcas para sua casa. Alto poder calorífico, segurança garantida e diversos tamanhos disponíveis.",
      img: "/images/og-lapenhagaz.jpg",
      alt: "Botijões de gás GLP para residências",
    },
    {
      id: "negocios",
      label: "Gás GLP Comercial",
      desc: "Fornecimento de gás GLP para restaurantes, padarias e estabelecimentos comerciais. Entrega programada e marcas confiáveis.",
      img: "/images/og-lapenhagaz.jpg",
      alt: "Gás GLP para estabelecimentos comerciais",
    },
    {
      id: "agua-mineral",
      label: "Água Mineral",
      desc: "Água mineral natural de alta qualidade. Galões higienizados, entrega pontual e sabor puro para sua família ou empresa.",
      img: "/images/og-lapenhagaz.jpg",
      alt: "Galões de água mineral natural",
    },
    {
      id: "industrias",
      label: "Gás GLP Industrial",
      desc: "Soluções em gás GLP para indústrias e grandes volumes. Fornecimento contínuo das melhores marcas com preços competitivos.",
      img: "/images/og-lapenhagaz.jpg",
      alt: "Gás GLP para uso industrial",
    },
    {
      id: "marcas-premium",
      label: "Marcas Premium",
      desc: "Trabalhamos exclusivamente com as melhores marcas de gás GLP do mercado. Qualidade certificada e confiança garantida.",
      img: "/images/og-lapenhagaz.jpg",
      alt: "Melhores marcas de gás GLP do mercado",
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
            Gás GLP e Água Mineral para cada necessidade
          </motion.h2>
          <motion.p 
            className="mt-3 text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Fornecemos gás GLP das melhores marcas e água mineral de qualidade superior para residências, comércios e indústrias.
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
