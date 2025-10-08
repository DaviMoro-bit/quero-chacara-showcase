import { MapPin, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              Quero Chácara
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="/listings" className="text-foreground hover:text-primary transition-colors font-medium">
              Espaços
            </a>
            <a href="/how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
              Como Funciona
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="outline" className="gap-2">
              <User className="w-4 h-4" />
              Entrar
            </Button>
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground hidden md:flex">
              Anunciar Espaço
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
