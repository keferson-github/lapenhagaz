import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-72 rounded-xl border bg-card text-card-foreground shadow-xl animate-enter">
          <div className="flex items-center justify-between p-3 border-b">
            <strong className="text-sm">Assistente Lapenhagáz</strong>
            <button aria-label="Fechar" onClick={() => setOpen(false)} className="p-1 rounded hover:bg-muted">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-3 text-sm space-y-2">
            <p className="text-muted-foreground">Como posso ajudar hoje?</p>
            <div className="grid gap-2">
              <Button variant="secondary" size="sm">2ª via da conta</Button>
              <Button variant="secondary" size="sm">Solicitar ligação</Button>
              <Button variant="secondary" size="sm">Falar com atendimento</Button>
            </div>
          </div>
        </div>
      )}
      <Button onClick={() => setOpen((v) => !v)} size="lg" className="rounded-full shadow-lg" aria-label="Abrir chatbot">
        <MessageCircle />
        <span className="ml-1 hidden md:inline">Precisando de ajuda?</span>
      </Button>
    </div>
  );
};

export default ChatbotWidget;
