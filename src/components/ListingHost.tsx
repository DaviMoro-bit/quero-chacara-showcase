import { Shield, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ListingHost = () => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">Avaliações</h2>
      
      <Card className="p-6 border-border mb-6">
        <div className="flex items-center gap-6 mb-6">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-1">5.0</div>
            <div className="flex gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-warning text-warning" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">124 avaliações</p>
          </div>

          <div className="flex-1 space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-3">
                <span className="text-sm w-8">{rating}</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-warning"
                    style={{ width: rating === 5 ? '95%' : rating === 4 ? '5%' : '0%' }}
                  />
                </div>
                <span className="text-sm text-muted-foreground w-12 text-right">
                  {rating === 5 ? '118' : rating === 4 ? '6' : '0'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <h3 className="text-xl font-semibold mb-4">Anfitrião</h3>
      <Card className="p-6 border-border">
        <div className="flex gap-4 items-start mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-2xl font-bold text-primary-foreground flex-shrink-0">
            CS
          </div>

          <div className="flex-1">
            <h4 className="text-lg font-bold mb-1">Carlos Salinas</h4>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-warning fill-warning" />
                <span>124 avaliações</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-primary" />
                <span>Verificado desde 2015</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">
              Olá! Sou o Carlos e sou apaixonado por criar eventos inesquecíveis. 
              Meu espaço foi projetado com muito carinho para oferecer a melhor 
              experiência para você e sua família.
            </p>

            <Button variant="outline" className="gap-2">
              <MessageCircle className="w-4 h-4" />
              Conversar com anfitrião
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ListingHost;
