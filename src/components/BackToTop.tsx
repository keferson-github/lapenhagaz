import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useChatbot } from "@/hooks/use-chatbot-hook";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const { isOpen: isChatbotOpen } = useChatbot();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Oculta o botão se estiver na versão mobile e o chatbot estiver aberto
  const shouldHide = !isVisible || (isMobile && isChatbotOpen);

  return (
    <Button
      variant="default"
      size="icon"
      className={cn(
        "fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full shadow-lg transition-all duration-150 bg-primary hover:bg-primary/90",
        shouldHide ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
      )}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <ChevronUp className="h-6 w-6 text-white" />
    </Button>
  );
};

export default BackToTop;