import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 mt-10 bg-muted/30">
      <div className="container py-12 text-sm">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/images/og-lapenhagaz.jpg" alt="Lapenhagáz logo" className="w-28 rounded-md shadow" loading="lazy" />
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
            <div className="flex items-center gap-3 text-muted-foreground">
              <a aria-label="Facebook" href="#" className="hover:text-foreground"><Facebook /></a>
              <a aria-label="Instagram" href="#" className="hover:text-foreground"><Instagram /></a>
              <a aria-label="LinkedIn" href="#" className="hover:text-foreground"><Linkedin /></a>
              <a aria-label="YouTube" href="#" className="hover:text-foreground"><Youtube /></a>
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 text-muted-foreground">
          <p>© {new Date().getFullYear()} Lapenhagáz. Todos os direitos reservados.</p>
          <p className="text-xs">Parte do grupo Compass | Regulada pela ARSESP</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;