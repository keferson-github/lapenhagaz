import BrandHeader from "@/components/BrandHeader";
import SiteFooter from "@/components/SiteFooter";
import ChatbotWidget from "@/components/ChatbotWidget";
import ChatbotProvider from "@/components/ChatbotProvider";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import ResourcePreloader from "@/components/ResourcePreloader";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ChatbotProvider>
      <ResourcePreloader 
        criticalImages={[
          '/images/banner-gás.webp',
          '/images/banner-agua-mineral-com-logo.webp',
          '/images/Lapenhagaz_logo-transparent.png'
        ]}
        criticalFonts={[
          // Adicionar fontes críticas se houver
        ]}
      />
      <div className="min-h-screen">
        <BrandHeader />
        <main>
          {children}
        </main>
        <ChatbotWidget />
        <CookieConsentBanner />
        <SiteFooter />
      </div>
    </ChatbotProvider>
  );
};

export default Layout;