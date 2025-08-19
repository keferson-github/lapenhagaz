import { useContext } from 'react';
import { ChatbotContext } from '@/contexts/chatbot-context';

export const useChatbotContext = () => {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbotContext must be used within a ChatbotProvider');
  }
  return context;
};

// Hook principal para usar o contexto do chatbot
export const useChatbot = useChatbotContext;