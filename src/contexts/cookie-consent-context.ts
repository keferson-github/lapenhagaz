import { createContext } from 'react';
import { CookieConsentContextType } from '../types/cookie-consent';

export const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);