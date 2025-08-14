import { Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 mt-10 bg-muted/30">
      <div className="container py-12 text-sm">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img src="/images/Lapenhagaz_logo-transparent.png" alt="Lapenhagáz logo" className="w-32 h-auto" loading="lazy" />
            <p className="text-muted-foreground mt-4 max-w-xs">
              Energia e pureza para sua vida. Gás natural canalizado e água mineral com qualidade.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Fale com a gente</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Emergência: 0800 000 000</li>
              <li>Comercial: (11) 0000-0000</li>
              <li>Ouvidoria: 0800 000 000</li>
              <li>Atendimento: contato@lapenhagaz.com.br</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Redes sociais</h4>
            <div className="flex items-center justify-center md:justify-start gap-4 text-muted-foreground">
              <a aria-label="Facebook" href="#" className="group hover:text-primary transition-all duration-300 hover:scale-110">
                <div className="p-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white group-hover:shadow-lg transition-all duration-300">
                  <Facebook className="h-5 w-5" />
                </div>
              </a>
              <a aria-label="Instagram" href="#" className="group hover:text-primary transition-all duration-300 hover:scale-110">
                <div className="p-2 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white group-hover:shadow-lg transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </div>
              </a>
              <a aria-label="TikTok" href="#" className="group hover:text-primary transition-all duration-300 hover:scale-110">
                <div className="p-2 rounded-full bg-gradient-to-br from-black to-gray-800 text-white group-hover:shadow-lg transition-all duration-300">
                  <FaTiktok className="h-5 w-5" />
                </div>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Outros</h4>
            <nav className="grid gap-2 text-muted-foreground">
              <a href="#" className="hover:text-foreground">Área do fornecedor</a>
              <a href="#" className="hover:text-foreground">Política de privacidade</a>
              <a href="#" className="hover:text-foreground">LGPD</a>
              <a href="#" className="hover:text-foreground">Trabalhe conosco</a>
            </nav>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-8 text-muted-foreground">
          <p>© {new Date().getFullYear()} Lapenhagáz. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;