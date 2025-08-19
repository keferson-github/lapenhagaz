import { useState } from 'react';
import { X, Cookie, Settings, Shield, BarChart3, Target } from 'lucide-react';
// Hook removido durante limpeza - funcionalidade simplificada
import { CookieConsent } from '../types/cookie-consent';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

export function CookieConsentBanner() {
  // Funcionalidade simplificada após limpeza
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [customConsent, setCustomConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  if (!showBanner) return null;

  const handleCustomAccept = () => {
    console.log('Funcionalidade de consentimento simplificada');
    setShowSettings(false);
  };

  const acceptAll = () => {
    console.log('Aceitar todos os cookies');
    setShowBanner(false);
  };

  const rejectAll = () => {
    console.log('Rejeitar cookies opcionais');
    setShowBanner(false);
  };

  const hideBanner = () => {
    setShowBanner(false);
  };

  const cookieTypes = [
    {
      key: 'necessary' as keyof CookieConsent,
      title: 'Cookies Necessários',
      description: 'Essenciais para o funcionamento básico do site. Não podem ser desabilitados.',
      icon: Shield,
      required: true,
      examples: 'Autenticação, carrinho de compras, preferências de idioma'
    },
    {
      key: 'analytics' as keyof CookieConsent,
      title: 'Cookies de Análise',
      description: 'Nos ajudam a entender como você usa nosso site para melhorar a experiência.',
      icon: BarChart3,
      required: false,
      examples: 'Google Analytics, métricas de performance, mapas de calor'
    },
    {
      key: 'preferences' as keyof CookieConsent,
      title: 'Cookies de Preferências',
      description: 'Lembram suas configurações e preferências para personalizar sua experiência.',
      icon: Settings,
      required: false,
      examples: 'Tema escuro/claro, configurações de layout, preferências de região'
    },
    {
      key: 'marketing' as keyof CookieConsent,
      title: 'Cookies de Marketing',
      description: 'Utilizados para mostrar anúncios relevantes e medir a eficácia das campanhas.',
      icon: Target,
      required: false,
      examples: 'Facebook Pixel, Google Ads, remarketing'
    },
  ];

  return (
    <>
      {/* Banner Principal */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Utilizamos cookies para melhorar sua experiência
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Respeitamos sua privacidade. Utilizamos cookies essenciais para o funcionamento do site e, 
                  com seu consentimento, cookies para análise e personalização. 
                  <a 
                    href="/politica-de-cookies" 
                    className="text-blue-600 hover:text-blue-800 underline ml-1"
                  >
                    Saiba mais sobre nossa política de cookies
                  </a>.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 lg:flex-shrink-0">
              <Dialog open={showSettings} onOpenChange={setShowSettings}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="whitespace-nowrap">
                    <Settings className="h-4 w-4 mr-2" />
                    Personalizar
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Cookie className="h-5 w-5" />
                      Configurações de Cookies
                    </DialogTitle>
                    <DialogDescription>
                      Escolha quais tipos de cookies você deseja aceitar. Você pode alterar essas configurações a qualquer momento.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4 mt-4">
                    {cookieTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <Card key={type.key} className="relative">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Icon className="h-5 w-5 text-blue-600" />
                                <div>
                                  <CardTitle className="text-base flex items-center gap-2">
                                    {type.title}
                                    {type.required && (
                                      <Badge variant="secondary" className="text-xs">
                                        Obrigatório
                                      </Badge>
                                    )}
                                  </CardTitle>
                                </div>
                              </div>
                              <Switch
                                checked={type.required || customConsent[type.key]}
                                disabled={type.required}
                                onCheckedChange={(checked) => {
                                  if (!type.required) {
                                    setCustomConsent(prev => ({
                                      ...prev,
                                      [type.key]: checked
                                    }));
                                  }
                                }}
                              />
                            </div>
                            <CardDescription className="text-sm">
                              {type.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="text-xs text-gray-500">
                              <strong>Exemplos:</strong> {type.examples}
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 mt-6">
                    <Button onClick={handleCustomAccept} className="flex-1">
                      Salvar Preferências
                    </Button>
                    <Button variant="outline" onClick={acceptAll} className="flex-1">
                      Aceitar Todos
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button 
                onClick={rejectAll} 
                variant="outline" 
                size="sm"
                className="whitespace-nowrap"
              >
                Rejeitar
              </Button>
              
              <Button 
                onClick={acceptAll} 
                size="sm"
                className="whitespace-nowrap bg-blue-600 hover:bg-blue-700"
              >
                Aceitar Todos
              </Button>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={hideBanner}
              className="lg:ml-2 p-1 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Overlay para mobile quando o banner está aberto */}
      <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" />
    </>
  );
}

// Componente para mostrar o status atual dos cookies (para páginas de configuração)
export function CookieStatus() {
  // Funcionalidade simplificada após limpeza
  const consent = null;
  
  if (!consent) {
    return (
      <div className="text-sm text-gray-500">
        Nenhuma preferência de cookies definida.
      </div>
    );
  }

  const cookieTypes = [
    { key: 'necessary', label: 'Necessários', icon: Shield },
    { key: 'analytics', label: 'Análise', icon: BarChart3 },
    { key: 'preferences', label: 'Preferências', icon: Settings },
    { key: 'marketing', label: 'Marketing', icon: Target },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {cookieTypes.map((type) => {
        const Icon = type.icon;
        const isEnabled = consent[type.key as keyof CookieConsent];
        
        return (
          <div 
            key={type.key}
            className={`flex items-center gap-2 p-3 rounded-lg border ${
              isEnabled 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-gray-50 border-gray-200 text-gray-600'
            }`}
          >
            <Icon className="h-4 w-4" />
            <span className="text-sm font-medium">{type.label}</span>
            <Badge 
              variant={isEnabled ? 'default' : 'secondary'} 
              className="ml-auto text-xs"
            >
              {isEnabled ? 'Ativo' : 'Inativo'}
            </Badge>
          </div>
        );
      })}
    </div>
  );
}