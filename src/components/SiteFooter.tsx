import { Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="container py-12 text-sm">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <img src="/images/Lapenhagaz_logo-transparent.png" alt="Lapenhagáz logo" className="w-32 h-auto" loading="lazy" />
            <p className="text-muted-foreground mt-4 max-w-xs">
              Energia e pureza para sua vida. Gás natural e água mineral com qualidade.
            </p>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-3">Fale Conosco</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>WhatsApp: 11 98388-0542 | 11 98388-0596</li>
              <li>contato@lapenhagaz.com.br</li>
            </ul>
          </div>
          {/* Coluna "Redes Sociais" ocultada temporariamente */}
          {/* <div>
            <h4 className="font-semibold mb-3">Redes sociais</h4>
            <div className="flex items-center justify-center md:justify-start gap-4 text-muted-foreground">
              <a aria-label="Facebook" href="#" className="group hover:text-primary transition-all duration-150 hover:scale-110">
                <div className="p-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white group-hover:shadow-lg transition-all duration-150">
                  <Facebook className="h-5 w-5" />
                </div>
              </a>
              <a aria-label="Instagram" href="#" className="group hover:text-primary transition-all duration-150 hover:scale-110">
                <div className="p-2 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white group-hover:shadow-lg transition-all duration-150">
                  <Instagram className="h-5 w-5" />
                </div>
              </a>
              <a aria-label="TikTok" href="#" className="group hover:text-primary transition-all duration-150 hover:scale-110">
                <div className="p-2 rounded-full bg-gradient-to-br from-black to-gray-800 text-white group-hover:shadow-lg transition-all duration-150">
                  <FaTiktok className="h-5 w-5" />
                </div>
              </a>
            </div>
          </div> */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-3">Outros</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Atendemos toda região metropolitana</p>
              <p>Seg-Sab: 8h-20h | Dom: 8h-16h</p>
              <p>Entrega Rápida</p>
              <p>100% Seguro</p>
              <p>4.9/5 ⭐ Avaliação dos clientes</p>
            </div>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-3">Políticas</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/politica-de-privacidade" className="hover:text-primary transition-colors duration-150">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/politica-de-cookies" className="hover:text-primary transition-colors duration-150">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="/termos-de-uso" className="hover:text-primary transition-colors duration-150">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4 mt-8 text-muted-foreground">
          <p>© {new Date().getFullYear()} Lapenhagáz. Todos os direitos reservados.</p>
          <p className="text-sm">
            Desenvolvido por{" "}
            <a 
              href="https://techsolutionspro.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium transition-colors duration-150 hover:underline"
            >
              Tech Solutions Pro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;