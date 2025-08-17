import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { useChatbot } from "@/hooks/use-chatbot-hook";
import { useIsMobile } from "@/hooks/use-mobile";

const ChatbotWidget = () => {
  const { isOpen, toggleChat } = useChatbot();
  const isMobile = useIsMobile();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Options */}
      {isOpen && (
        <div className={`mb-4 space-y-3 animate-in slide-in-from-bottom-4 duration-500 ease-out ${
          isMobile ? 'fixed inset-x-4 bottom-24 z-50' : ''
        }`}>
          <div className={`bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 ${
            isMobile ? 'w-full max-w-none mx-auto' : 'max-w-sm'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Precisando de ajuda?</h3>
                <p className="text-xs text-gray-600">Escolha uma opção abaixo</p>
              </div>
            </div>
            <div className="space-y-2">
              <button className="group w-full text-left p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 text-sm border border-transparent hover:border-primary/20 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-lg">💬</span>
                  <span className="font-medium group-hover:text-primary transition-colors">Falar com atendente</span>
                </div>
              </button>
              <button className="group w-full text-left p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 text-sm border border-transparent hover:border-primary/20 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📞</span>
                  <span className="font-medium group-hover:text-primary transition-colors">Solicitar ligação</span>
                </div>
              </button>
              <button className="group w-full text-left p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 text-sm border border-transparent hover:border-primary/20 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📧</span>
                  <span className="font-medium group-hover:text-primary transition-colors">Enviar e-mail</span>
                </div>
              </button>
              <button className="group w-full text-left p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 text-sm border border-transparent hover:border-primary/20 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-lg">❓</span>
                  <span className="font-medium group-hover:text-primary transition-colors">Perguntas frequentes</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`relative bg-gradient-to-br from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-full p-4 shadow-2xl transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary/30 group animate-float-subtle ${
          isOpen ? 'rotate-180' : 'hover:rotate-12'
        }`}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat de ajuda"}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-300" />
        ) : (
          <MessageCircle className="h-6 w-6 transition-transform duration-300" />
        )}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default ChatbotWidget;
