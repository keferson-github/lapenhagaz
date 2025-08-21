import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

// Importação direta para componentes críticos de UI
import ToasterComponents from "./components/ToasterComponents";

// Lazy loading das páginas com prefetch inteligente
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const HeaderDemo = lazy(() => import("./pages/HeaderDemo"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Páginas legais agrupadas em um chunk separado
const LegalPages = lazy(() => import("./components/LegalPages"));

const queryClient = new QueryClient();

// Componente de loading para Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ToasterComponents />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/header-demo" element={<HeaderDemo />} />
            <Route path="/politica-de-privacidade" element={<LegalPages />} />
            <Route path="/politica-de-cookies" element={<LegalPages />} />
            <Route path="/termos-de-uso" element={<LegalPages />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
