import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";


export const BrandHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      {/* Top bar */}
      <div className="hidden md:block bg-secondary text-secondary-foreground">
        <div className="container flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-4">
            <span className="font-medium">Emergência 0800 000 000</span>
            <div className="hidden lg:flex items-center gap-3 opacity-90">
              <a aria-label="Facebook" href="#" className="hover:opacity-100">FB</a>
              <a aria-label="Instagram" href="#" className="hover:opacity-100">IG</a>
              <a aria-label="LinkedIn" href="#" className="hover:opacity-100">IN</a>
              <a aria-label="YouTube" href="#" className="hover:opacity-100">YT</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login"><Button size="sm" variant="secondary" className="bg-secondary-foreground text-secondary hover:opacity-90">Já sou cliente</Button></Link>
            <div className="w-56">
              <Input placeholder="Pesquisar" aria-label="Pesquisar" />
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lapenhagaz_logo_horizontal-removebg-horizontal.png" 
            alt="Lapenhagáz" 
            className="h-12 w-auto"
          />
          <span className="sr-only">Lapenhagáz - Página inicial</span>
        </Link>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md"
          onClick={() => setOpen(!open)}
          aria-label="Alternar menu"
        >
          <Menu className={`transition-transform duration-300 ease-in-out ${
            open ? 'rotate-90' : 'rotate-0'
          }`} />
        </button>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {[
              { label: "Home", href: "#home" },
              { label: "Serviços", href: "#servicos" },
              { label: "Sobre Nós", href: "#sobre" },
              { label: "Contato", href: "#contato" },
              { label: "Blog", href: "#blog" },
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-foreground/80 hover:text-foreground px-2 py-2 story-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#servicos"><Button variant="secondary">Contratar gás encanado</Button></a>
          <a href="#servicos"><Button variant="hero">Loja de serviços</Button></a>
        </div>
      </nav>

      <div className={`md:hidden border-t border-border/60 bg-background overflow-hidden transition-all duration-300 ease-in-out ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <ul className="container py-3 grid gap-3 text-center transform transition-transform duration-300 ease-in-out">
          {[
            { label: "Home", href: "#home" },
            { label: "Serviços", href: "#servicos" },
            { label: "Sobre Nós", href: "#sobre" },
            { label: "Contato", href: "#contato" },
            { label: "Blog", href: "#blog" },
          ].map((item, index) => (
            <li key={item.label} className={`transform transition-all duration-300 ease-in-out ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`} style={{ transitionDelay: open ? `${index * 50}ms` : '0ms' }}>
              <a href={item.href} onClick={() => setOpen(false)} className="block py-2 text-center font-medium hover:text-primary transition-colors duration-200">
                {item.label}
              </a>
            </li>
          ))}
          <li className={`transform transition-all duration-300 ease-in-out ${
            open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`} style={{ transitionDelay: open ? '250ms' : '0ms' }}>
            <div className="flex flex-col gap-2 items-center">
              <a href="#servicos" className="w-full max-w-xs"><Button variant="secondary" className="w-full transition-all duration-200 hover:scale-105">Contratar gás encanado</Button></a>
              <a href="#servicos" className="w-full max-w-xs"><Button variant="hero" className="w-full transition-all duration-200 hover:scale-105">Loja de serviços</Button></a>
            </div>
          </li>
          <li className={`flex justify-center transform transition-all duration-300 ease-in-out ${
            open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`} style={{ transitionDelay: open ? '300ms' : '0ms' }}>
            <div className="w-full max-w-xs">
              <Input placeholder="Pesquisar" aria-label="Pesquisar" className="text-center transition-all duration-200 focus:scale-105" />
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default BrandHeader;