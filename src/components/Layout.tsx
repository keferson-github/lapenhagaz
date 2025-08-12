import BrandHeader from "@/components/BrandHeader";
import SiteFooter from "@/components/SiteFooter";
import ChatbotWidget from "@/components/ChatbotWidget";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <BrandHeader />
      <main>
        {children}
      </main>
      <ChatbotWidget />
      <SiteFooter />
    </div>
  );
};

export default Layout;