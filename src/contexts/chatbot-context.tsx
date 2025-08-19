import { createContext, ReactNode } from 'react';

interface ChatbotContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggleChat: () => void;
}

export const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export interface ChatbotProviderProps {
  children: ReactNode;
}