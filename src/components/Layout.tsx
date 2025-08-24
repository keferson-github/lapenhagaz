import { ReactNode, Suspense, lazy } from "react";
import BrandHeader from "@/components/BrandHeader";
import SiteFooter from "@/components/SiteFooter";
import ResourcePreloader from "@/components/ResourcePreloader";
import ChatbotProvider from "@/components/ChatbotProvider";

// Lazy loading para componentes não críticos
const ChatbotWidget = lazy(() => import("@/components/ChatbotWidget"));
const CookieConsentBanner = lazy(() => import("@/components/CookieConsentBanner"));

interface LayoutProps {
  children: ReactNode;
}

// Componente de fallback para lazy loading
const LazyFallback = () => (
  <div className="w-full h-8 bg-gray-100 animate-pulse rounded" />
);

const Layout = ({ children }: LayoutProps) => {
  return (
    <ChatbotProvider>
      <div className="min-h-screen flex flex-col">
        {/* Preloader para recursos críticos */}
        <ResourcePreloader
          criticalImages={[
            "/images/Lapenhagaz_logo-transparent.png",
            "/slides/foto-botijao-residencial.webp",
            "/slides/foto-slide-aguas.webp"
          ]}
          criticalFonts={[
            "Inter",
            "system-ui"
          ]}
        />
        
        {/* Header */}
        <BrandHeader />
        
        {/* Conteúdo principal */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* Footer */}
        <SiteFooter />
        
        {/* Componentes lazy-loaded */}
        <Suspense fallback={<LazyFallback />}>
          <ChatbotWidget />
        </Suspense>
        
        <Suspense fallback={null}>
          <CookieConsentBanner />
        </Suspense>
      </div>
    </ChatbotProvider>
  );
};

export default Layout;