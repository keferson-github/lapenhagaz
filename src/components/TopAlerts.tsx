import { X, AlertTriangle } from "lucide-react";
import { useState } from "react";

const TopAlerts = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-destructive text-destructive-foreground py-2 px-4 text-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          <span>
            <strong>Atenção:</strong> Agendamento online disponível para ligações novas. Clique aqui para agendar.
          </span>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="hover:opacity-75 transition-opacity"
          aria-label="Fechar alerta"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default TopAlerts;