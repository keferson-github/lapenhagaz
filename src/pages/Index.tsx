import HomeHeroCarousel from "@/components/HomeHeroCarousel";
import AdvantagesSection from "@/components/AdvantagesSection";
import SolutionsSection from "@/components/SolutionsSection";
import CommitmentsSection from "@/components/CommitmentsSection";
import NumbersSection from "@/components/NumbersSection";
import TipsVideoSection from "@/components/TipsVideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BackToTop from "@/components/BackToTop";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import NewsSection from "@/components/NewsSection";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { getHomePageStructuredData } from '@/lib/structured-data';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

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
          <SolutionsSection />
        </motion.section>

        <section id="sobre" aria-label="Sobre nós" className="scroll-mt-24 relative z-10">
          <motion.div style={{ y: useTransform(scrollYProgress, [0.2, 0.4], ['0%', '-5%']) }}>
            <AdvantagesSection />
          </motion.div>
          <motion.div style={{ y: useTransform(scrollYProgress, [0.3, 0.5], ['0%', '-8%']) }}>
            <CommitmentsSection />
          </motion.div>
          <motion.div style={{ y: useTransform(scrollYProgress, [0.4, 0.6], ['0%', '-12%']) }}>
            <NumbersSection />
          </motion.div>
        </section>

        <motion.section 
          id="dicas" 
          aria-label="Dicas úteis e rápidas" 
          className="scroll-mt-24 relative z-10"
          style={{ y: useTransform(scrollYProgress, [0.5, 0.7], ['0%', '-15%']) }}
        >
          <TipsVideoSection />
        </motion.section>

        <motion.section 
          id="depoimentos" 
          aria-label="Depoimentos de clientes" 
          className="scroll-mt-24 relative z-10"
          style={{ y: useTransform(scrollYProgress, [0.6, 0.8], ['0%', '-10%']) }}
        >
          <TestimonialsSection />
        </motion.section>

        <motion.section 
          id="blog" 
          aria-label="Blog" 
          className="scroll-mt-24 relative z-10"
          style={{ y: useTransform(scrollYProgress, [0.7, 0.9], ['0%', '-8%']) }}
        >
          <NewsSection />
        </motion.section>



        <BackToTop />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </div>
    </Layout>
  );
};

export default Index;
