import { useState } from 'react';
import { ChatbotContext, ChatbotProviderProps } from '@/hooks/use-chatbot-context';

export const ChatbotProvider = ({ children }: ChatbotProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ChatbotContext.Provider value={{ isOpen, setIsOpen, toggleChat }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export default ChatbotProvider;