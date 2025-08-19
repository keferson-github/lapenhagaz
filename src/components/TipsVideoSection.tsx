import { useState, useRef, useEffect, memo } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Instagram } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

// Dados dos vídeos de stories
const tipsVideos = [
  {
    id: 1,
    title: "Dicas rápidas de Segurança",
    description: "Confira dicas exclusivas sobre segurança no uso de gás e água mineral.",
    videoUrl: "/videos/story1.mp4",
    duration: "0:15",
    category: "Story"
  },
  {
    id: 2,
    title: "Qualidade Garantida",
    description: "Informações importantes sobre a qualidade dos nossos produtos.",
    videoUrl: "/videos/story2.mp4",
    duration: "0:15",
    category: "Story"
  },
  {
    id: 3,
    title: "Entrega Rápida",
    description: "Conheça nosso sistema de entrega rápida e eficiente.",
    videoUrl: "/videos/story3.mp4",
    duration: "0:15",
    category: "Story"
  },
  {
    id: 4,
    title: "Promoções Especiais",
    description: "Fique por dentro das nossas promoções e ofertas especiais.",
    videoUrl: "/videos/story4.mp4",
    duration: "0:15",
    category: "Story"
  },
  {
    id: 5,
    title: "Novidades Exclusivas",
    description: "Descubra as últimas novidades e lançamentos da LapenhaGáz.",
    videoUrl: "/videos/story5.mp4",
    duration: "0:15",
    category: "Story"
  }
];

// Componente do player de vídeo
const VideoPlayer = memo(({ video, isActive, onClose }: { 
  video: typeof tipsVideos[0], 
  isActive: boolean, 
  onClose: () => void 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.currentTime = 0;
      setProgress(0);
    }
  }, [isActive]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  return (
    <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden group">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      >
        <source src={video.videoUrl} type="video/mp4" />
      </video>
      
      {/* Overlay com controles */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30">
        {/* Header */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">LG</span>
            </div>
            <span className="text-sm font-medium">LapenhaGáz</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <span className="text-white text-lg leading-none">×</span>
          </button>
        </div>

        {/* Progress bar */}
        <div className="absolute top-16 left-4 right-4">
          <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Play/Pause button central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group-hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </button>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-end justify-between">
            <div className="flex-1">
              <div className="inline-block px-2 py-1 bg-primary/80 rounded-full text-xs font-medium mb-2">
                {video.category}
              </div>
              <h3 className="font-bold text-lg mb-1 leading-tight">{video.title}</h3>
              <p className="text-sm text-white/90 leading-relaxed">{video.description}</p>
              
              {/* Instagram button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('https://instagram.com/lapenhagaz', '_blank');
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-2 rounded-full text-xs font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-3"
              >
                <Instagram className="w-4 h-4" />
                <span>Siga no Instagram</span>
              </button>
            </div>
            <div className="flex flex-col items-center gap-2 ml-4">
              <button
                onClick={toggleMute}
                className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
              <span className="text-xs text-white/80">{video.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

// Componente principal
const TipsVideoSection = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isInstagramExpanded, setIsInstagramExpanded] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<typeof tipsVideos[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tipsVideos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + tipsVideos.length) % tipsVideos.length);
  };





  // Funções para navegação por touch (swipe)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-scroll para o item ativo
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = 280; // w-64 + gap
      const scrollPosition = currentIndex * itemWidth;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <>
      <motion.section 
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="py-6 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 relative overflow-hidden"
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
              className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight"
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
            {/* Navigation buttons - Hidden on mobile */}
            <button
              onClick={prevSlide}
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 items-center justify-center group hover:bg-white hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" />
            </button>
            
            <button
              onClick={nextSlide}
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 items-center justify-center group hover:bg-white hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" />
            </button>

            {/* Stories container */}
            <div className="container px-4 sm:px-8 lg:px-16 py-4 sm:py-8">
              {/* Mobile: Grid com 1 coluna - mesmo padrão do Blog */}
              <div className="grid grid-cols-1 sm:hidden gap-6">
                <div className="relative w-full">
                  {/* Seta Esquerda */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 opacity-70 hover:opacity-100"
                    disabled={currentIndex === 0}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Seta Direita */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 opacity-70 hover:opacity-100"
                    disabled={currentIndex === tipsVideos.length - 1}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <motion.div
                    key={tipsVideos[currentIndex].id}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0 }}
                    className="w-full group"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                    <div className="relative h-80 md:h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 aspect-[9/16] w-48 md:w-60 lg:w-72 mx-auto">
                    {/* Story ring */}
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent p-1">
                      <div className="w-full h-full bg-white rounded-2xl" />
                    </div>
                    
                    {/* Video Preview - GIF Style */}
                    <video
                      src={tipsVideos[currentIndex].videoUrl}
                      className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-xl"
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                      style={{ pointerEvents: 'none' }}
                    />
                    
                    {/* Overlay with gradient */}
                    <div className="absolute inset-1 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
                    

                    
                    {/* Story badge - canto inferior direito */}
                    <div className="absolute bottom-4 right-4 z-20">
                      <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white font-medium">
                        {tipsVideos[currentIndex].category}
                      </span>
                    </div>
                    
                    {/* Instagram button - canto inferior esquerdo */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isInstagramExpanded) {
                            window.open('https://instagram.com/lapenhagaz', '_blank');
                          } else {
                            setIsInstagramExpanded(true);
                          }
                        }}
                        onMouseLeave={() => setIsInstagramExpanded(false)}
                        className={`flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-xs font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                          isInstagramExpanded ? 'px-3 py-2' : 'p-2'
                        }`}
                      >
                        <Instagram className="w-4 h-4" />
                        {isInstagramExpanded && <span className="whitespace-nowrap">Siga no Instagram</span>}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
              
            {/* Desktop: Flex horizontal */}
            <div 
              ref={scrollContainerRef}
              className="hidden sm:flex gap-4 overflow-x-auto scrollbar-hide justify-center"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {tipsVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0 }}
                    className={`flex-shrink-0 w-48 md:w-60 lg:w-72 group ${
                      index === currentIndex ? '' : 'opacity-70'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                  <div className="relative h-80 md:h-96 lg:h-[32rem] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 aspect-[9/16] w-48 md:w-60 lg:w-72">
                       {/* Story ring */}
                       <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent p-1">
                         <div className="w-full h-full bg-white rounded-2xl" />
                       </div>
                       
                       {/* Video Preview - GIF Style */}
                       <video
                         src={video.videoUrl}
                         className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-xl"
                         muted
                         autoPlay
                         loop
                         playsInline
                         preload="metadata"
                         style={{ pointerEvents: 'none' }}
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
                             if (isInstagramExpanded) {
                               window.open('https://instagram.com/lapenhagaz', '_blank');
                             } else {
                               setIsInstagramExpanded(true);
                             }
                           }}
                           onMouseLeave={() => setIsInstagramExpanded(false)}
                           className={`flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-xs font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                             isInstagramExpanded ? 'px-3 py-2' : 'p-2'
                           }`}
                         >
                           <Instagram className="w-4 h-4" />
                           {isInstagramExpanded && <span className="whitespace-nowrap">Siga no Instagram</span>}
                         </button>
                       </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {tipsVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>


    </>
  );
});

TipsVideoSection.displayName = 'TipsVideoSection';

export default TipsVideoSection;