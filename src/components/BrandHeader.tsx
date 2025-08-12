import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";
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
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lapenhagáz</span>
          <Leaf className="text-primary" aria-hidden />
          <span className="sr-only">Lapenhagáz - Página inicial</span>
        </Link>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-border"
          onClick={() => setOpen(!open)}
          aria-label="Alternar menu"
        >
          <Menu />
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

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <ul className="container py-3 grid gap-3">
            {[
              { label: "Home", href: "#home" },
              { label: "Serviços", href: "#servicos" },
              { label: "Sobre Nós", href: "#sobre" },
              { label: "Contato", href: "#contato" },
              { label: "Blog", href: "#blog" },
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={() => setOpen(false)} className="block py-2">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <div className="flex gap-2">
                <a href="#servicos" className="flex-1"><Button variant="secondary" className="w-full">Contratar gás encanado</Button></a>
                <a href="#servicos" className="flex-1"><Button variant="hero" className="w-full">Loja de serviços</Button></a>
              </div>
            </li>
            <li><Input placeholder="Pesquisar" aria-label="Pesquisar" /></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default BrandHeader;