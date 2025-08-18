import { Button } from "@/components/ui/button";
import { Shield, Recycle, Users, X, FileText, Leaf, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const commitments = [
  {
    icon: Shield,
    title: "Qualidade sem compromisso",
    desc: "Selecionamos rigorosamente as melhores marcas de gás GLP e fontes de água mineral para garantir excelência.",
  },
  {
    icon: Users,
    title: "Atendimento personalizado",
    desc: "Cada cliente é único e merece um atendimento diferenciado, com soluções sob medida para suas necessidades.",
  },
  {
    icon: Recycle,
    title: "Sustentabilidade e responsabilidade",
    desc: "Promovemos o uso consciente de recursos e práticas sustentáveis em toda nossa cadeia de fornecimento.",
  },
];

const CommitmentsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isSustainabilityModalOpen, setIsSustainabilityModalOpen] = useState(false);
  const [sustainabilityCurrentPage, setSustainabilityCurrentPage] = useState(0);

  // Previne scroll do body quando modal está aberto e preserva posição
  useEffect(() => {
    if (isModalOpen || isSustainabilityModalOpen) {
      // Captura e armazena a posição atual do scroll
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      
      // Armazena a posição no body para recuperação
      document.body.style.setProperty('--scroll-y', scrollY + 'px');
      
      // Aplica estilos para prevenir scroll de forma mais robusta
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      
      // Previne scroll em dispositivos móveis
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Recupera a posição armazenada
      const savedScrollY = document.body.style.getPropertyValue('--scroll-y');
      const scrollPosition = savedScrollY ? parseInt(savedScrollY.replace('px', ''), 10) : 0;
      
      // Remove todos os estilos aplicados para restaurar scroll normal
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('position');
      document.body.style.removeProperty('top');
      document.body.style.removeProperty('left');
      document.body.style.removeProperty('right');
      document.body.style.removeProperty('width');
      document.body.style.removeProperty('--scroll-y');
      document.documentElement.style.removeProperty('overflow');
      
      // Restaura a posição do scroll e garante que o scroll funcione normalmente
      if (scrollPosition >= 0) {
        requestAnimationFrame(() => {
          window.scrollTo({
            top: scrollPosition,
            left: 0,
            behavior: 'instant'
          });
          
          // Força a reativação do scroll após restauração
          setTimeout(() => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
          }, 10);
        });
      }
    }
  }, [isModalOpen, isSustainabilityModalOpen]);

  const modalPages = [
    {
      title: "Nosso Compromisso",
      content: (
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            Na <strong>LapenhaGáz</strong>, cada entrega carrega mais do que gás ou água mineral:<br />
            leva <strong>segurança, confiança e cuidado</strong> até você.<br />
            Nossa missão é garantir produtos de qualidade com um <strong>atendimento humano e próximo</strong>.
          </p>
        </div>
      )
    },
    {
      title: "Excelência em Qualidade",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Excelência em Qualidade</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-center">
            Selecionamos <strong>fornecedores de confiança</strong> e <strong>marcas reconhecidas</strong> para oferecer sempre o melhor em gás GLP e água mineral pura.<br /><br />
            Cada detalhe é pensado para entregar <strong>tranquilidade</strong> e <strong>eficiência</strong> ao seu dia a dia.
          </p>
        </div>
      )
    },
    {
      title: "Atendimento que Valoriza Você",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Atendimento que Valoriza Você</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-center">
            Acreditamos que cada cliente é <strong>único</strong>.<br /><br />
            Por isso, oferecemos um <strong>atendimento personalizado</strong>, ouvindo suas necessidades e oferecendo soluções sob medida para <strong>residências, comércios e indústrias</strong>.
          </p>
        </div>
      )
    },
    {
      title: "Sustentabilidade com Responsabilidade",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <Recycle className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Sustentabilidade com Responsabilidade</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-center">
            Estamos comprometidos em promover <strong>práticas conscientes e sustentáveis</strong> em toda nossa operação,<br /><br />
            respeitando o <strong>meio ambiente</strong> e contribuindo para um <strong>futuro mais seguro e equilibrado</strong>.
          </p>
        </div>
      )
    }
  ];

  const sustainabilityPages = [
    {
      title: "Relatório de Sustentabilidade – LapenhaGáz",
      content: (
        <div className="text-center space-y-4">
          <div className="flex items-center gap-3 justify-center mb-4">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Nosso Compromisso</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Na <strong>LapenhaGáz</strong>, acreditamos que cada entrega vai além do fornecimento de gás GLP e água mineral: levamos <strong>qualidade, segurança e confiança</strong> para lares, empresas e indústrias.<br /><br />
            Nosso propósito é crescer de forma responsável, equilibrando <strong>eficiência, atendimento humano e respeito ao meio ambiente</strong>.
          </p>
        </div>
      )
    },
    {
      title: "Excelência em Qualidade",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Excelência em Qualidade</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-center">
            Selecionamos com rigor as <strong>melhores marcas de gás GLP e fontes de água mineral</strong>.<br /><br />
            Esse cuidado garante que cada cliente receba produtos <strong>confiáveis, dentro dos mais altos padrões de qualidade e segurança</strong>.
          </p>
        </div>
      )
    },
    {
      title: "Atendimento Personalizado",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Atendimento Personalizado</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-center">
            Cada cliente é <strong>único</strong>, e nossas soluções refletem isso.<br /><br />
            Atuamos de forma próxima e transparente, oferecendo <strong>atendimento diferenciado para residências, comércios e indústrias</strong>, sempre adaptando nossos serviços às necessidades específicas de cada situação.
          </p>
        </div>
      )
    },
    {
      title: "Sustentabilidade e Responsabilidade",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <Leaf className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Sustentabilidade e Responsabilidade</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-center mb-4">
            Nosso compromisso vai além do presente. Trabalhamos diariamente para promover:
          </p>
          <div className="space-y-3 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700"><strong>Uso consciente de recursos naturais</strong> em todas as etapas da nossa operação.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700"><strong>Práticas seguras e responsáveis</strong> no armazenamento e transporte do gás GLP.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700"><strong>Apoio ao consumo responsável de água mineral</strong>, valorizando a preservação de fontes naturais.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700"><strong>Redução de impacto ambiental</strong>, com iniciativas que priorizam eficiência energética e segurança ambiental.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Nosso Futuro Sustentável",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center">
            <Heart className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Nosso Futuro Sustentável</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-center">
            A <strong>LapenhaGáz</strong> entende que sustentabilidade não é apenas um valor, mas um <strong>caminho para o futuro</strong>.<br /><br />
            Continuaremos investindo em <strong>inovação, práticas seguras e soluções</strong> que unam eficiência, responsabilidade social e respeito ambiental,<br /><br />
            garantindo que cada cliente receba não apenas um produto, mas também a <strong>certeza de estar escolhendo uma empresa comprometida com o amanhã</strong>.
          </p>
        </div>
      )
    }
  ];

  const nextPage = () => {
    if (currentPage < modalPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPage(0);
  };

  const nextSustainabilityPage = () => {
    if (sustainabilityCurrentPage < sustainabilityPages.length - 1) {
      setSustainabilityCurrentPage(sustainabilityCurrentPage + 1);
    }
  };

  const prevSustainabilityPage = () => {
    if (sustainabilityCurrentPage > 0) {
      setSustainabilityCurrentPage(sustainabilityCurrentPage - 1);
    }
  };

  const goToSustainabilityPage = (pageIndex: number) => {
    setSustainabilityCurrentPage(pageIndex);
  };

  const closeSustainabilityModal = () => {
    setIsSustainabilityModalOpen(false);
    setSustainabilityCurrentPage(0);
  };


  return (
    <motion.section 
      aria-labelledby="compromissos-title" 
      className="py-8 md:py-16 bg-gradient-to-r from-primary/5 to-secondary/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3 }}
    >
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.div 
            className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            Nosso compromisso
          </motion.div>
          <motion.h2 
            id="compromissos-title" 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Nossos valores e compromissos
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            Trabalhamos com dedicação para oferecer os melhores produtos em gás GLP e água mineral, sempre priorizando qualidade e atendimento
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {commitments.map(({ icon: Icon, title, desc }, index) => (
            <motion.div 
              key={title} 
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-0 hover:bg-white transition-all duration-300 hover:shadow-[var(--shadow-modern)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className="h-6 w-6 text-white" aria-hidden />
                </motion.div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver nossos compromissos
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => setIsSustainabilityModalOpen(true)}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                Relatório de sustentabilidade
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
             className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8"
             style={{ 
               position: 'fixed', 
               top: 0, 
               left: 0, 
               right: 0, 
               bottom: 0,
               transform: 'none',
               willChange: 'auto'
             }}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.3 }}
           >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            
            {/* Modal Content */}
             <motion.div
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl max-h-[85vh] sm:max-h-[70vh] md:max-h-[65vh] lg:max-h-[60vh] overflow-hidden flex flex-col"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
               {/* Header */}
               <div className="bg-white border-b border-gray-200 p-4 sm:p-6 rounded-t-2xl flex-shrink-0">
                 <div className="flex items-center justify-between">
                   <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 pr-2">{modalPages[currentPage].title}</h1>
                   <Button
                     variant="ghost"
                     size="sm"
                     onClick={closeModal}
                     className="h-8 w-8 p-0 hover:bg-gray-100 flex-shrink-0"
                   >
                     <X className="h-4 w-4" />
                   </Button>
                 </div>
               </div>
 
               {/* Content */}
                <div className="p-4 sm:p-6 flex-1 overflow-y-auto min-h-[200px] sm:min-h-[250px] flex flex-col justify-center">
                 <motion.div
                   key={currentPage}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.3 }}
                 >
                   {modalPages[currentPage].content}
                 </motion.div>
               </div>

               {/* Pagination */}
               <div className="border-t border-gray-200 p-4 sm:p-6 flex-shrink-0">
                 {/* Page Indicators */}
                 <div className="flex justify-center space-x-2 mb-4">
                   {modalPages.map((_, index) => (
                     <button
                       key={index}
                       onClick={() => goToPage(index)}
                       className={`w-3 h-3 rounded-full transition-all duration-200 ${
                         index === currentPage
                           ? 'bg-primary scale-110'
                           : 'bg-gray-300 hover:bg-gray-400'
                       }`}
                     />
                   ))}
                 </div>

                 {/* Navigation Buttons */}
                 <div className="flex justify-between items-center gap-2">
                   <Button
                     variant="outline"
                     onClick={prevPage}
                     disabled={currentPage === 0}
                     className="px-3 sm:px-4 py-2 text-sm sm:text-base"
                   >
                     Anterior
                   </Button>
                   
                   <span className="text-xs sm:text-sm text-gray-500 flex-shrink-0">
                     {currentPage + 1} de {modalPages.length}
                   </span>
                   
                   {currentPage === modalPages.length - 1 ? (
                     <Button
                       onClick={closeModal}
                       className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-4 sm:px-6 py-2 text-sm sm:text-base"
                     >
                       Fechar
                     </Button>
                   ) : (
                     <Button
                       onClick={nextPage}
                       className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-3 sm:px-4 py-2 text-sm sm:text-base"
                     >
                       Próximo
                     </Button>
                   )}
                 </div>
               </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Relatório de Sustentabilidade */}
      <AnimatePresence>
        {isSustainabilityModalOpen && (
          <motion.div
             className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8"
             style={{ 
               position: 'fixed', 
               top: 0, 
               left: 0, 
               right: 0, 
               bottom: 0,
               transform: 'none',
               willChange: 'auto'
             }}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.3 }}
           >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSustainabilityModal}
            />
            
            {/* Modal Content */}
             <motion.div
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl max-h-[85vh] sm:max-h-[70vh] md:max-h-[65vh] lg:max-h-[60vh] overflow-hidden flex flex-col"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
               {/* Header */}
               <div className="bg-white border-b border-gray-200 p-4 sm:p-6 rounded-t-2xl flex-shrink-0">
                 <div className="flex items-center justify-between">
                   <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 pr-2">{sustainabilityPages[sustainabilityCurrentPage].title}</h1>
                   <Button
                     variant="ghost"
                     size="sm"
                     onClick={closeSustainabilityModal}
                     className="h-8 w-8 p-0 hover:bg-gray-100 flex-shrink-0"
                   >
                     <X className="h-4 w-4" />
                   </Button>
                 </div>
               </div>
 
               {/* Content */}
                <div className="p-4 sm:p-6 flex-1 overflow-y-auto min-h-[200px] sm:min-h-[250px] flex flex-col justify-center">
                 <motion.div
                   key={sustainabilityCurrentPage}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.3 }}
                 >
                   {sustainabilityPages[sustainabilityCurrentPage].content}
                 </motion.div>
               </div>

               {/* Pagination */}
               <div className="border-t border-gray-200 p-4 sm:p-6 flex-shrink-0">
                 {/* Page Indicators */}
                 <div className="flex justify-center space-x-2 mb-4">
                   {sustainabilityPages.map((_, index) => (
                     <button
                       key={index}
                       onClick={() => goToSustainabilityPage(index)}
                       className={`w-3 h-3 rounded-full transition-all duration-200 ${
                         index === sustainabilityCurrentPage
                           ? 'bg-primary scale-110'
                           : 'bg-gray-300 hover:bg-gray-400'
                       }`}
                     />
                   ))}
                 </div>

                 {/* Navigation Buttons */}
                 <div className="flex justify-between items-center gap-2">
                   <Button
                     variant="outline"
                     onClick={prevSustainabilityPage}
                     disabled={sustainabilityCurrentPage === 0}
                     className="px-3 sm:px-4 py-2 text-sm sm:text-base"
                   >
                     Anterior
                   </Button>
                   
                   <span className="text-xs sm:text-sm text-gray-500 flex-shrink-0">
                     {sustainabilityCurrentPage + 1} de {sustainabilityPages.length}
                   </span>
                   
                   {sustainabilityCurrentPage === sustainabilityPages.length - 1 ? (
                     <Button
                       onClick={closeSustainabilityModal}
                       className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-4 sm:px-6 py-2 text-sm sm:text-base"
                     >
                       Fechar
                     </Button>
                   ) : (
                     <Button
                       onClick={nextSustainabilityPage}
                       className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-3 sm:px-4 py-2 text-sm sm:text-base"
                     >
                       Próximo
                     </Button>
                   )}
                 </div>
               </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default CommitmentsSection;
