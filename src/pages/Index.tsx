import HomeHeroCarousel from "@/components/HomeHeroCarousel";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { usePolicyConsent } from "@/hooks/use-policy-consent";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, Suspense, lazy } from 'react';

// Lazy load de componentes não críticos (below-the-fold)
const AdvantagesSection = lazy(() => import("@/components/AdvantagesSection"));
const SolutionsSection = lazy(() => import("@/components/SolutionsSection"));
const CommitmentsSection = lazy(() => import("@/components/CommitmentsSection"));
const NumbersSection = lazy(() => import("@/components/NumbersSection"));
const TipsVideoSection = lazy(() => import("@/components/TipsVideoSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const NewsSection = lazy(() => import("@/components/NewsSection"));
const GoogleMapsSection = lazy(() => import("@/components/GoogleMapsSection"));
const BackToTop = lazy(() => import("@/components/BackToTop"));
const PolicyConsentModal = lazy(() => import("@/components/PolicyConsentModal").then(module => ({ default: module.PolicyConsentModal })));

// Componente de fallback para seções
const SectionFallback = () => (
  <div className="w-full h-32 bg-gray-50 animate-pulse rounded-lg" />
);
import { getHomePageStructuredData } from '@/lib/structured-data';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Hook para gerenciar o consentimento de políticas
  const { handleAccept, handleReject, showModal } = usePolicyConsent();

  // Parallax transforms para diferentes elementos
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const cloudY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const structuredData = getHomePageStructuredData();

  return (
    <Layout>
      <Seo 
        title="LapenhaGáz - Gás GLP e Água Mineral das Melhores Marcas"
        description="Fornecimento de gás GLP das melhores marcas e água mineral de qualidade superior. Entrega rápida e segura para residências e empresas."
        canonical="/"
        keywords="gás glp, água mineral, botijão de gás, galão de água, entrega de gás, fornecimento gás residencial, gás empresarial, lapenhagáz"
        image="/images/Lapenhagaz_logo-transparent.png"
        structuredData={structuredData}
      />

      <div ref={containerRef} className="relative">
        {/* Elementos de fundo com parallax */}
        <motion.div 
          style={{ y: backgroundY }}
          className="fixed inset-0 z-0 pointer-events-none"
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-2xl" />
        </motion.div>

        <motion.div 
          style={{ y: cloudY }}
          className="fixed inset-0 z-0 pointer-events-none"
        >
          <div className="absolute top-60 left-1/4 w-40 h-20 bg-gradient-to-r from-blue-100/30 to-green-100/30 rounded-full blur-xl" />
          <div className="absolute bottom-40 right-1/3 w-36 h-18 bg-gradient-to-r from-purple-100/20 to-blue-100/20 rounded-full blur-xl" />
        </motion.div>

        <section id="home" aria-label="Início" className="scroll-mt-24 relative z-10">
          <HomeHeroCarousel />
        </section>

        <motion.section 
          id="servicos" 
          aria-label="Serviços" 
          className="scroll-mt-24 relative z-10"
          style={{ y: useTransform(scrollYProgress, [0.1, 0.3], ['0%', '-10%']) }}
        >
          <Suspense fallback={<SectionFallback />}>
            <SolutionsSection />
          </Suspense>
        </motion.section>

        <section id="sobre" aria-label="Sobre nós" className="scroll-mt-24 relative z-10">
          <motion.div style={{ y: useTransform(scrollYProgress, [0.2, 0.4], ['0%', '-5%']) }}>
            <Suspense fallback={<SectionFallback />}>
              <AdvantagesSection />
            </Suspense>
          </motion.div>
          <motion.div style={{ y: useTransform(scrollYProgress, [0.3, 0.5], ['0%', '-8%']) }}>
            <Suspense fallback={<SectionFallback />}>
              <CommitmentsSection />
            </Suspense>
          </motion.div>
          <motion.div style={{ y: useTransform(scrollYProgress, [0.4, 0.6], ['0%', '-12%']) }}>
            <Suspense fallback={<SectionFallback />}>
              <NumbersSection />
            </Suspense>
          </motion.div>
        </section>

        <motion.section 
          id="dicas" 
          aria-label="Dicas úteis e rápidas" 
          className="scroll-mt-24 relative z-10"
          style={{ y: useTransform(scrollYProgress, [0.5, 0.7], ['0%', '-15%']) }}
        >
          <Suspense fallback={<SectionFallback />}>
            <TipsVideoSection />
          </Suspense>
        </motion.section>

        <motion.section 
          id="depoimentos" 
          aria-label="Depoimentos de clientes" 
          className="scroll-mt-24 relative z-10"
          style={{ y: useTransform(scrollYProgress, [0.6, 0.8], ['0%', '-10%']) }}
        >
          <Suspense fallback={<SectionFallback />}>
            <TestimonialsSection />
          </Suspense>
        </motion.section>

        <motion.section 
          id="blog" 
          aria-label="Blog" 
          className="scroll-mt-24 relative z-10"
          style={{ y: useTransform(scrollYProgress, [0.7, 0.9], ['0%', '-8%']) }}
        >
          <Suspense fallback={<SectionFallback />}>
            <NewsSection />
          </Suspense>
        </motion.section>

        <motion.section 
          id="localizacao" 
          aria-label="Localização" 
          className="relative z-10"
          style={{ y: useTransform(scrollYProgress, [0.8, 1], ['0%', '-5%']) }}
        >
          <Suspense fallback={<SectionFallback />}>
            <GoogleMapsSection />
          </Suspense>
        </motion.section>

        <Suspense fallback={null}>
          <BackToTop />
        </Suspense>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </div>

      {/* Modal de Consentimento de Políticas - Sempre renderizado */}
      <Suspense fallback={null}>
        <PolicyConsentModal 
          onAccept={handleAccept}
          onReject={handleReject}
        />
      </Suspense>
    </Layout>
  );
};

export default Index;
