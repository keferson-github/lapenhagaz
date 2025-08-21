import { useState, useEffect } from 'react';
import { Shield, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface PolicyConsentModalProps {
  onAccept: () => void;
  onReject: () => void;
}

export function PolicyConsentModal({ onAccept, onReject }: PolicyConsentModalProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Efeito de entrada inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleVisibility = () => {
    if (!isVisible) {
      setIsVisible(true);
      setIsExpanded(true);
      setIsInitialLoad(true);
      setTimeout(() => setIsInitialLoad(false), 100);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsAnimating(false);
      }, 300); // Duração da animação de saída
    }
  };

  const handleAccept = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onAccept();
      setIsVisible(false);
      setIsAnimating(false);
    }, 300);
  };

  const handleReject = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onReject();
      setIsVisible(false);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      {/* Botão flutuante sempre visível */}
      <button
        onClick={toggleVisibility}
        className={`fixed bottom-20 left-6 z-50 w-12 h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-full shadow-lg transition-all duration-300 ease-out flex items-center justify-center hover:scale-105 ${
          isVisible ? 'rotate-0 opacity-90' : 'rotate-180 opacity-100 scale-110'
        }`}
        aria-label={isVisible ? "Ocultar políticas de privacidade" : "Mostrar políticas de privacidade"}
      >
        <Shield className={`h-6 w-6 text-white transition-transform duration-300 ease-out ${
          isVisible ? 'rotate-0' : 'rotate-180'
        }`} />
      </button>
      
      {/* Modal principal */}
      {isVisible && (
        <div className={`fixed bottom-36 left-1/2 transform -translate-x-1/2 sm:bottom-34 sm:left-20 sm:transform-none sm:translate-x-0 z-50 max-w-sm sm:max-w-md w-full sm:w-auto px-4 sm:px-0 transition-all duration-300 ease-out ${
          isAnimating || isInitialLoad ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'
        }`}>
      {/* Pop-up Container */}
      <div className="bg-white rounded-2xl shadow-elevated border border-border overflow-hidden transition-all duration-300 ease-out transform">
        {/* Header sempre visível */}
        <div className="bg-gradient-to-r from-primary to-secondary p-3 sm:p-4 text-white relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-xs sm:text-sm truncate">Controle sua privacidade</h3>
                <p className="text-xs text-primary-foreground/80 hidden sm:block">Nosso site usa cookies para melhorar a navegação</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={toggleExpanded}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label={isExpanded ? 'Recolher conteúdo' : 'Expandir conteúdo'}
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-white" />
                ) : (
                  <ChevronUp className="h-4 w-4 text-white" />
                )}
              </button>
              <button
                onClick={toggleVisibility}
                className="w-8 h-8 rounded-full bg-transparent border-2 border-white/30 ml-1 flex items-center justify-center"
                aria-label="Ocultar modal"
              >
                <span className="text-white text-sm font-bold">×</span>
              </button>
            </div>
          </div>
        </div>

        {/* Conteúdo expansível */}
        <div className={`overflow-hidden transition-all duration-300 ease-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
            {/* Links das políticas */}
            <div className="flex flex-row flex-wrap gap-1 text-xs sm:text-sm justify-center sm:justify-start">
              <a 
                href="/politica-de-privacidade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium underline transition-colors inline"
              >
                Política de Privacidade
              </a>
              <span className="text-muted-foreground">•</span>
              <a 
                href="/politica-de-cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium underline transition-colors inline"
              >
                Política de Cookies
              </a>
              <span className="text-muted-foreground">•</span>
              <a 
                href="/termos-de-uso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium underline transition-colors inline"
              >
                Termos de uso
              </a>
            </div>

            {/* Botões de ação */}
            <div className="flex gap-2">
              <Button 
                onClick={handleReject}
                variant="outline"
                size="sm"
                className="flex-1 text-xs sm:text-sm border-border hover:bg-muted hover:text-primary active:text-primary transition-all duration-200 h-8 sm:h-9 min-w-0"
              >
                Rejeitar
              </Button>
              <Button 
                onClick={handleAccept}
                size="sm"
                className="flex-1 text-xs sm:text-sm bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground transition-all duration-200 shadow-modern h-8 sm:h-9 min-w-0"
              >
                Aceitar
              </Button>
            </div>
          </div>
        </div>
      </div>
        </div>
      )}
    </>
  );
}