import { Button } from "@/components/ui/button";
import { 
  Bars3Icon as Menu, 
  MagnifyingGlassIcon as Search, 
  ChevronDownIcon as ChevronDown, 
  PhoneIcon as Phone, 
  MapPinIcon as MapPin, 
  ClockIcon as Clock, 
  StarIcon as Star, 
  RocketLaunchIcon as Zap, 
  ShieldCheckIcon as Shield, 
  AcademicCapIcon as Award, 
  XMarkIcon as X,
  FireIcon as Gas,
  BeakerIcon as Water,
  HomeIcon as Home,
  BuildingOfficeIcon as Commercial,
  WrenchScrewdriverIcon as Tools,
  UserGroupIcon as Team
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";


export const BrandHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? 'border-b border-border/80 bg-background/95 backdrop-blur-xl shadow-modern' 
        : 'border-b border-border/40 bg-background/90 backdrop-blur-lg'
    }`}>
      {/* Top bar - Enhanced for Desktop */}
      <div className="hidden md:block bg-gradient-to-r from-secondary via-secondary to-primary text-secondary-foreground relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container relative z-10 flex items-center justify-between py-3 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-medium group cursor-pointer">
              <Phone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform stroke-2" />
              <span className="group-hover:text-accent transition-colors">Emergência 0800 000 000</span>
            </div>
            
            <div className="hidden lg:flex items-center gap-1 text-xs opacity-90">
              <MapPin className="w-3 h-3 stroke-2" />
              <span>Atendemos toda região metropolitana</span>
            </div>
            
            <div className="hidden xl:flex items-center gap-1 text-xs opacity-90">
              <Clock className="w-3 h-3 stroke-2" />
              <span>Seg-Sex: 8h-18h | Sáb: 8h-12h</span>
            </div>
            
            <div className="hidden lg:flex items-center gap-4 ml-4">
              <div className="flex items-center gap-2 text-xs opacity-90">
                 <Zap className="w-3 h-3 text-accent stroke-2" />
                 <span>Entrega Rápida</span>
               </div>
               
               <div className="flex items-center gap-2 text-xs opacity-90">
                 <Shield className="w-3 h-3 text-accent stroke-2" />
                 <span>100% Seguro</span>
               </div>
               
               <div className="flex items-center gap-2 text-xs opacity-90">
                 <Award className="w-3 h-3 text-accent stroke-2" />
                 <span>Certificado</span>
               </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs">
              <Star className="w-3 h-3 text-accent stroke-2 fill-accent" />
              <span className="font-medium">4.9/5 ⭐ Avaliação dos clientes</span>
            </div>
            
            <Link to="/login">
              <Button 
                size="sm" 
                variant="secondary" 
                className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 font-medium px-4"
              >
                Já sou cliente
              </Button>
            </Link>
            

          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="/lapenhagaz_logo_horizontal-removebg-horizontal.png" 
              alt="Lapenhagáz" 
              className="h-12 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </div>
          <span className="sr-only">Lapenhagáz - Página inicial</span>
        </Link>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-110"
          onClick={() => setOpen(!open)}
          aria-label="Alternar menu"
        >
          <div className="relative w-6 h-6">
            <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out stroke-2 ${
               open ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
             }`} />
             <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out stroke-2 ${
               open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
             }`} />
          </div>
        </button>

        {/* Enhanced Desktop Navigation with Mega Menu */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <nav className="flex items-center gap-1">
            {[
              { 
                label: "Home", 
                href: "#home",
                simple: true
              },
              { 
                label: "Serviços", 
                href: "#servicos",
                dropdown: [
                  { label: "Gás GLP Residencial", desc: "Para sua casa", href: "#glp-residencial", icon: Home },
                  { label: "Gás GLP Comercial", desc: "Para empresas", href: "#glp-comercial", icon: Commercial },
                  { label: "Água Mineral", desc: "Pureza garantida", href: "#agua-mineral", icon: Water },
                  { label: "Gás Encanado", desc: "Instalação completa", href: "#gas-encanado", icon: Gas }
                ]
              },
              { 
                label: "Sobre Nós", 
                href: "#sobre",
                dropdown: [
                  { label: "Nossa História", desc: "Tradição e qualidade", href: "#historia", icon: Team },
                  { label: "Missão e Valores", desc: "Nossos princípios", href: "#missao", icon: Star },
                  { label: "Certificações", desc: "Qualidade certificada", href: "#certificacoes", icon: Award },
                  { label: "Sustentabilidade", desc: "Compromisso ambiental", href: "#sustentabilidade", icon: Shield }
                ]
              },
              { 
                label: "Contato", 
                href: "#contato",
                simple: true
              },
              { 
                label: "Blog", 
                href: "#blog",
                simple: true
              },
            ].map((item) => (
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => !item.simple && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={item.href} 
                  className={`flex items-center gap-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-muted/50 hover:text-primary group ${
                    activeDropdown === item.label ? 'bg-muted/50 text-primary' : 'text-foreground/80'
                  }`}
                >
                  {item.label}
                  {!item.simple && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 stroke-2 ${
                      activeDropdown === item.label ? 'rotate-180' : 'group-hover:rotate-180'
                    }`} />
                  )}
                </a>
                
                {/* Mega Menu Dropdown */}
                {!item.simple && item.dropdown && (
                  <div className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-elevated border border-border/20 p-6 transition-all duration-300 transform ${
                    activeDropdown === item.label 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible translate-y-2 pointer-events-none'
                  }`}>
                    <div className="grid gap-3">
                      {item.dropdown.map((subItem) => (
                        <a 
                          key={subItem.label}
                          href={subItem.href}
                          className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-200 hover:scale-[1.02]"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                            <subItem.icon className="w-4 h-4 text-primary stroke-2" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover/item:text-primary transition-colors">
                              {subItem.label}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {subItem.desc}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                    
                    {/* Call to action in dropdown */}
                    <div className="mt-4 pt-4 border-t border-border/20">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        Ver todos os serviços
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <a href="#servicos" className="group">
            <Button 
              variant="secondary" 
              className="relative overflow-hidden bg-secondary hover:bg-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-modern group-hover:-translate-y-0.5 font-medium px-6"
            >
              <span className="relative z-10">Contratar gás encanado</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </a>
          
          <a href="#servicos" className="group">
            <Button 
              variant="hero" 
              className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:scale-105 hover:shadow-glow group-hover:-translate-y-0.5 font-semibold px-6 tracking-wide"
            >
              <span className="relative z-10">Loja de serviços</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </a>
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