import HomeHeroCarousel from "@/components/HomeHeroCarousel";
import AccessCardsSection from "@/components/AccessCardsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import SolutionsSection from "@/components/SolutionsSection";
import CommitmentsSection from "@/components/CommitmentsSection";
import NumbersSection from "@/components/NumbersSection";
import BackToTop from "@/components/BackToTop";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
const Index = () => {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lapenhagáz',
    url: '/',
    logo: '/images/og-lapenhagaz.jpg',
    sameAs: [] as string[],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR'
    }
  };

  return (
    <Layout>
      <Seo 
        title="Lapenhagáz - Gás Natural e Água Mineral | Energia para sua vida"
        description="Gás natural canalizado e água mineral com segurança, eficiência e qualidade. Lapenhagáz atende residências, negócios e indústrias."
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

      <section id="blog" aria-label="Blog" className="scroll-mt-24">
        <NewsSection />
      </section>

      <section id="contato" aria-label="Contato" className="scroll-mt-24">
        <ContactSection />
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
