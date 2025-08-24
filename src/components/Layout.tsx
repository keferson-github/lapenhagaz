import { ReactNode } from "react";
import BrandHeader from "@/components/BrandHeader";
import SiteFooter from "@/components/SiteFooter";
import ChatbotProvider from "@/components/ChatbotProvider";
import ChatbotWidget from "@/components/ChatbotWidget";
import CookieConsentBanner from "@/components/CookieConsentBanner";

interface LayoutProps {
  children: ReactNode;
}



const Layout = ({ children }: LayoutProps) => {
  return (
    <ChatbotProvider>
      <div className="min-h-screen flex flex-col">

        
        {/* Header */}
        <BrandHeader />
        
        {/* Conteúdo principal */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* Footer */}
        <SiteFooter />
        
        {/* Componentes */}
        <ChatbotWidget />
        <CookieConsentBanner />
      </div>
    </ChatbotProvider>
  );
};

export default Layout;