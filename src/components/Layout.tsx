import BrandHeader from "@/components/BrandHeader";
import SiteFooter from "@/components/SiteFooter";
import ResourcePreloader from "@/components/ResourcePreloader";
import { ReactNode, Suspense, lazy } from "react";

// Lazy load de componentes não críticos
const ChatbotWidget = lazy(() => import("@/components/ChatbotWidget"));
const ChatbotProvider = lazy(() => import("@/components/ChatbotProvider"));
const CookieConsentBanner = lazy(() => import("@/components/CookieConsentBanner").then(module => ({ default: module.CookieConsentBanner })));

// Componente de fallback para lazy loading
const LazyFallback = () => <div style={{ display: 'none' }} />;

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Suspense fallback={<LazyFallback />}>
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
          <Suspense fallback={<LazyFallback />}>
            <ChatbotWidget />
          </Suspense>
          <Suspense fallback={<LazyFallback />}>
            <CookieConsentBanner />
          </Suspense>
          <SiteFooter />
        </div>
      </ChatbotProvider>
    </Suspense>
  );
};

export default Layout;