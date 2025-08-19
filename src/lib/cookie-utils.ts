import { CookieConsent } from '../types/cookie-consent';

/**
 * Verifica se um tipo específico de cookie é permitido
 * @param type - Tipo do cookie (necessary, analytics, marketing, preferences)
 * @returns boolean indicando se o cookie é permitido
 */
export function isCookieAllowed(type: keyof CookieConsent): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const stored = localStorage.getItem('lapenhagaz_cookie_consent');
    if (!stored) return type === 'necessary'; // Apenas cookies necessários por padrão
    
    const consent: CookieConsent = JSON.parse(stored);
    return consent[type] || false;
  } catch {
    return type === 'necessary';
  }
}

/**
 * Define um cookie com verificação de consentimento
 * @param name - Nome do cookie
 * @param value - Valor do cookie
 * @param days - Dias para expiração
 * @param type - Tipo do cookie para verificação de consentimento
 */
export function setCookie(
  name: string, 
  value: string, 
  days: number, 
  type: keyof CookieConsent = 'necessary'
) {
  if (!isCookieAllowed(type)) return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

/**
 * Obtém o valor de um cookie
 * @param name - Nome do cookie
 * @returns Valor do cookie ou null se não encontrado
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  
  return null;
}