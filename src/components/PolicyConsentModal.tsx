import { useState } from 'react';
import { Shield, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface PolicyConsentModalProps {
  onAccept: () => void;
  onReject: () => void;
}

export function PolicyConsentModal({ onAccept, onReject }: PolicyConsentModalProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleVisibility = () => {
    if (!isVisible) {
      setIsVisible(true);
      setIsExpanded(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      {/* Botão flutuante sempre visível */}
      <button
        onClick={toggleVisibility}
        className={`fixed bottom-20 left-6 z-50 w-12 h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-full shadow-elevated transition-all duration-300 flex items-center justify-center hover:scale-105 ${
          isVisible ? 'opacity-50 hover:opacity-100' : 'opacity-100'
        }`}
        aria-label={isVisible ? "Ocultar políticas de privacidade" : "Mostrar políticas de privacidade"}
      >
        <Shield className="h-5 w-5" />
      </button>
      
      {/* Modal principal */}
      {isVisible && (
        <div className="fixed bottom-20 left-20 z-50 max-w-sm w-full">
      {/* Pop-up Container */}
      <div className="bg-white rounded-2xl shadow-elevated border border-border overflow-hidden transition-all duration-300 ease-in-out">
        {/* Header sempre visível */}
        <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Controle sua privacidade</h3>
                <p className="text-xs text-primary-foreground/80">Nosso site usa cookies para melhorar a navegação</p>
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
                className="p-1 hover:bg-white/20 rounded-full transition-colors ml-1"
                aria-label="Ocultar modal"
              >
                <span className="text-white text-sm font-bold">×</span>
              </button>
            </div>
          </div>
        </div>

        {/* Conteúdo expansível */}
        {isExpanded && (
          <div className="p-4 space-y-4">
            {/* Links das políticas */}
            <div className="flex flex-wrap gap-1 text-sm">
              <a 
                href="/politica-de-privacidade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium underline transition-colors"
              >
                Política de Privacidade
              </a>
              <span className="text-muted-foreground">-</span>
              <a 
                href="/politica-de-cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium underline transition-colors"
              >
                Política de Cookies
              </a>
              <span className="text-muted-foreground">-</span>
              <a 
                href="/termos-de-uso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium underline transition-colors"
              >
                Termos de uso
              </a>
            </div>

            {/* Botões de ação */}
            <div className="flex gap-2">
              <Button 
                onClick={onReject}
                variant="outline"
                size="sm"
                className="flex-1 text-sm border-border hover:bg-muted transition-all duration-200"
              >
                Rejeitar
              </Button>
              <Button 
                onClick={onAccept}
                size="sm"
                className="flex-1 text-sm bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground transition-all duration-200 shadow-modern"
              >
                Aceitar
              </Button>
            </div>
          </div>
        )}
      </div>
        </div>
      )}
    </>
  );
}