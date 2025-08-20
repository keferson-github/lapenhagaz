import { useState } from 'react';

// Hook para gerenciar o estado do modal de consentimento de políticas
// Modal aparece sempre que a página é carregada/atualizada
export function usePolicyConsent() {
  const [hasConsented, setHasConsented] = useState<boolean | null>(null);

  const handleAccept = () => {
    setHasConsented(true);
  };

  const handleReject = () => {
    setHasConsented(false);
  };

  return {
    hasConsented,
    handleAccept,
    handleReject,
    showModal: hasConsented === null
  };
}