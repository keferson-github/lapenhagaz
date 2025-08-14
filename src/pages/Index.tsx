import HomeHeroCarousel from "@/components/HomeHeroCarousel";
import AccessCardsSection from "@/components/AccessCardsSection";
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

const Index = () => {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lapenhagáz',
    url: '/',
    logo: '/images/Lapenhagaz_logo-transparent.png',
    sameAs: [] as string[],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR'
    }
  };

  return (
    <Layout>
      <Seo 
        title="LapenhaGáz - Gás GLP e Água Mineral das Melhores Marcas"
        description="Fornecimento de gás GLP das melhores marcas e água mineral de qualidade superior. Entrega rápida e segura para residências e empresas."
        canonical="/"
      />

      <section id="home" aria-label="Início" className="scroll-mt-24">
        <HomeHeroCarousel />
        <AccessCardsSection />
      </section>

      <section id="servicos" aria-label="Serviços" className="scroll-mt-24">
        <SolutionsSection />
      </section>

      <section id="sobre" aria-label="Sobre nós" className="scroll-mt-24">
        <AdvantagesSection />
        <CommitmentsSection />
        <NumbersSection />
      </section>

      <section id="dicas" aria-label="Dicas úteis e rápidas" className="scroll-mt-24">
        <TipsVideoSection />
      </section>

      <section id="depoimentos" aria-label="Depoimentos de clientes" className="scroll-mt-24">
        <TestimonialsSection />
      </section>

      <section id="blog" aria-label="Blog" className="scroll-mt-24">
        <NewsSection />
      </section>



      <BackToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
    </Layout>
  );
};

export default Index;
