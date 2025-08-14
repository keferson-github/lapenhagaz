import BrandHeader from "@/components/BrandHeader";
import SiteFooter from "@/components/SiteFooter";
import ChatbotWidget from "@/components/ChatbotWidget";
import { ChatbotProvider } from "@/hooks/use-chatbot";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ChatbotProvider>
      <div className="min-h-screen">
        <BrandHeader />
        <main>
          {children}
        </main>
        <ChatbotWidget />
        <SiteFooter />
      </div>
    </ChatbotProvider>
  );
};

export default Layout;