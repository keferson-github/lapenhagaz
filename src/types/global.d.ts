// Declarações de tipos globais para o projeto

// Google Analytics gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'consent',
      targetId: string | 'update',
      config?: {
        [key: string]: string | number | boolean | undefined;
        analytics_storage?: 'granted' | 'denied';
        ad_storage?: 'granted' | 'denied';
        functionality_storage?: 'granted' | 'denied';
        personalization_storage?: 'granted' | 'denied';
        security_storage?: 'granted' | 'denied';
      }
    ) => void;
  }
}

export {};