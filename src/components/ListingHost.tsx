import { Shield, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ListingHost = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-8 shadow-medium border-border">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Host Avatar */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-3xl font-bold text-primary-foreground">
                CS
              </div>
            </div>

            {/* Host Info */}
            <div className="flex-1">
              <h3 className="font-heading text-2xl font-bold mb-2 text-foreground">
                Anfitrião: Carlos Salinas
              </h3>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  <span>124 avaliações</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Verificado desde 2015</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Olá! Sou o Carlos e sou apaixonado por criar eventos inesquecíveis. 
                Meu espaço foi projetado com muito carinho para oferecer a melhor 
                experiência para você e sua família. Estou sempre disponível para 
                ajudar a tornar sua festa perfeita!
              </p>

              <Button 
                variant="outline" 
                className="rounded-full font-semibold border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Conversar com anfitrião
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-primary mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Taxa de resposta</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary mb-1">&lt; 1h</p>
                <p className="text-sm text-muted-foreground">Tempo de resposta</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary mb-1">9+ anos</p>
                <p className="text-sm text-muted-foreground">Experiência</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ListingHost;
