import { useState, useRef, memo } from 'react';
import { Instagram } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Dados dos vídeos de stories
const tipsVideos = [
  {
    id: 1,
    title: "",
    description: "",
    videoUrl: "/videos/story1.mp4",
    duration: "",
    category: "Story"
  },
  {
    id: 2,
    title: "",
    description: "",
    videoUrl: "/videos/story2.mp4",
    duration: "",
    category: "Story"
  },
  {
    id: 3,
    title: "",
    description: "",
    videoUrl: "/videos/story3.mp4",
    duration: "",
    category: "Story"
  },
  {
    id: 4,
    title: "",
    description: "",
    videoUrl: "/videos/story4.mp4",
    duration: "",
    category: "Story"
  },
  {
    id: 5,
    title: "",
    description: "",
    videoUrl: "/videos/story5.mp4",
    duration: "",
    category: "Story"
  }
];

// Componente principal
const TipsVideoSection = memo(() => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [expandedInstagramId, setExpandedInstagramId] = useState<number | null>(null);

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 relative"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="container relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-sm uppercase tracking-wider mb-6"
          >
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            Conteúdo exclusivo
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Confira Nossos Últimos Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Acompanhe nossos stories exclusivos com dicas, novidades e promoções especiais da LapenhaGáz
          </motion.p>
        </motion.div>

        {/* Stories Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="relative"
        >
          <Carousel 
            opts={{ 
              align: "start", 
              loop: true,
              slidesToScroll: 1
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {tipsVideos.map((video) => (
                <CarouselItem 
                  key={video.id} 
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <div className="relative h-[36rem] sm:h-[32rem] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl aspect-[9/16] w-full max-w-[320px] sm:max-w-[280px] mx-auto">
                    {/* Story ring */}
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent p-1">
                      <div className="w-full h-full bg-white rounded-2xl" />
                    </div>
                    
                    {/* Video Preview */}
                    <video
                      src={video.videoUrl}
                      className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-xl object-center"
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                      style={{ pointerEvents: 'none' }}
                      onError={(e) => {
                        console.error(`Erro ao carregar vídeo ${video.id}:`, e);
                      }}
                    />
                    
                    {/* Overlay with gradient */}
                    <div className="absolute inset-1 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
                    
                    {/* Story badge - canto inferior direito */}
                    <div className="absolute bottom-4 right-4 z-20">
                      <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white font-medium">
                        {video.category}
                      </span>
                    </div>
                    
                    {/* Instagram button - canto inferior esquerdo */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (expandedInstagramId === video.id) {
                            window.open('https://www.instagram.com/lapenha_gaz/', '_blank');
                          } else {
                            setExpandedInstagramId(video.id);
                          }
                        }}
                        onMouseLeave={() => setExpandedInstagramId(null)}
                        className={`flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-xs font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                          expandedInstagramId === video.id ? 'px-3 py-2' : 'p-2'
                        }`}
                      >
                        <Instagram className="w-4 h-4" />
                        {expandedInstagramId === video.id && <span className="whitespace-nowrap">Siga no Instagram</span>}
                      </button>
                    </div>

                    {/* Video title overlay */}
                    <div className="absolute bottom-12 left-4 right-4 z-10">
                      <h3 className="text-white font-semibold text-sm mb-1 drop-shadow-lg">
                        {video.title}
                      </h3>
                      <p className="text-white/80 text-xs line-clamp-2 drop-shadow-lg">
                        {video.description}
                      </p>
                    </div>
                  </div>
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
});

TipsVideoSection.displayName = 'TipsVideoSection';

export default TipsVideoSection;