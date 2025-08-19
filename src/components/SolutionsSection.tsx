import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

// Ícone personalizado do WhatsApp
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
  </svg>
);

const SolutionsSection = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const categories = [
    {
      id: "p2",
      label: "P2 (2 kg)",
      desc: "Ideal para fogareiros, acampamentos e lampiões. Prático e portátil.",
      img: "/images/img-cilindro-de-gas-p2.webp",
      alt: "Botijão P2 de 2kg para fogareiros e acampamentos",
      fullDescription: "O botijão de gás P2, também conhecido como botijão de 2kg, é um recipiente portátil de gás liquefeito de petróleo (GLP) projetado para aplicações específicas, como fogareiros de uma ou duas bocas e lampiões. Ele não é recomendado para uso em fogões domésticos convencionais, exceto em casos específicos com rosca grossa, e é mais adequado para uso comercial de pequeno porte, como carrinhos de comida, e atividades recreativas como camping.",
      whatsappMessage: "Olá, vim pelo site da LapenhaGáz, e gostaria de comprar um *Botijão P2 (2kg)*.",
    },
    {
      id: "p5",
      label: "P5 (5 kg)",
      desc: "Versátil para fogões, maçaricos, trailers e motorhomes em viagens.",
      img: "/images/img-cilindro-de-gas-p5.webp",
      alt: "Botijão P5 de 5kg para fogões e maçaricos",
      whatsappMessage: "Olá, vim pelo site da LapenhaGáz, e gostaria de comprar um *Botijão P5 (5kg)*!",
    },
    {
      id: "p13",
      label: "P13 (13 kg)",
      desc: "O botijão residencial mais usado no Brasil, ideal para cozinhar no dia a dia.",
      img: "/images/img-cilindro-de-gas-p13.webp",
      alt: "Botijão P13 de 13kg residencial",
      whatsappMessage: "Olá, vim pelo site da LapenhaGáz, e gostaria de comprar um *Botijão P13 (13kg)*!",
    },
    {
      id: "p20",
      label: "P20 (20 kg)",
      desc: "Comum em empilhadeiras industriais, garante eficiência e praticidade.",
      img: "/images/img-cilindro-de-gas-p20.webp",
      alt: "Botijão P20 de 20kg para empilhadeiras",
      whatsappMessage: "Olá, vim pelo site da LapenhaGáz, e gostaria de comprar um *Botijão P20 (20kg)*!",
    },
    {
      id: "p45",
      label: "P45 (45 kg)",
      desc: "Indicado para comércios, restaurantes, hospitais e residências de alto consumo.",
      img: "/images/img-cilindro-de-gas-p45.webp",
      alt: "Botijão P45 de 45kg para comércios e restaurantes",
      whatsappMessage: "Olá, vim pelo site da LapenhaGáz, e gostaria de comprar um *Botijão P45 (45kg)*!",
    },
    {
      id: "p90",
      label: "P90 (90 kg)",
      desc: "Para indústrias e grandes comércios. Requer instalação segura com válvula.",
      img: "/images/img-cilindro-de-gas-p90.webp",
      alt: "Botijão P90 de 90kg para indústrias",
      whatsappMessage: "Olá, vim pelo site da LapenhaGáz, e gostaria de comprar um *Botijão P90 (90kg)*!",
    },
    {
      id: "galao-20l",
      label: "Galão 20L",
      desc: "Praticidade e pureza para sua casa ou empresa, com água mineral de qualidade.",
      img: "/images/galao-agua-mineral-20l.webp",
      alt: "Galão de água mineral 20L",
      whatsappMessage: "Olá, vim pelo site da LapenhaGáz, e gostaria de comprar um *Galão de Água Mineral 20L*!",
    },
  ];

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "5511983880542";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative py-16 md:py-24">
      <div className="container">
        {/* Título da seção */}
        <header className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Nossos Produtos e Serviços
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Botijões de gás GLP em diversos tamanhos e galões de água mineral para atender todas as suas necessidades.
          </p>
        </header>

        {/* Carrossel de cards */}
        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {categories.map((item) => (
                <CarouselItem key={item.id} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="overflow-hidden h-full">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
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
                        {item.id === "p2" ? (
                          <Dialog open={openModal === item.id} onOpenChange={(open) => setOpenModal(open ? item.id : null)}>
                            <DialogTrigger asChild>
                              <Button size="sm" className="px-4">
                                Saiba mais
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="w-[calc(100vw-2rem)] max-w-[340px] sm:max-w-[425px] md:max-w-[600px] lg:max-w-[700px] max-h-[80vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-lg">
                              <DialogHeader>
                                <DialogTitle className="text-xl md:text-2xl font-bold text-center mb-2">
                                  {item.label}
                                </DialogTitle>
                                <div className="flex justify-center mb-4">
                                  <img
                                    src={item.img}
                                    alt={item.alt}
                                    className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg"
                                  />
                                </div>
                              </DialogHeader>
                              <DialogDescription className="text-sm md:text-base leading-relaxed text-justify px-2">
                                {item.fullDescription}
                              </DialogDescription>
                              <div className="flex justify-center mt-6">
                                <Button 
                                  onClick={() => handleWhatsAppClick(item.whatsappMessage)}
                                  className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
                                >
                                  <WhatsAppIcon className="h-4 w-4 mr-2" />
                                  Pedir Agora
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        ) : (
                          <Button size="sm" className="px-4">
                            Saiba mais
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          variant="default"
                          onClick={() => handleWhatsAppClick(item.whatsappMessage)}
                          className="bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                        >
                          <WhatsAppIcon className="h-4 w-4 mr-2" />
                          Pedir Agora
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 md:-left-6" />
            <CarouselNext className="-right-3 md:-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
