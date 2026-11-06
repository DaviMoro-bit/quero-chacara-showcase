import { Calendar, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BookingSidebar = () => {
  return (
    <div id="booking" className="lg:sticky lg:top-24 scroll-mt-28">
      <Card className="p-6 border-border shadow-lg">
        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-bold text-primary">R$ 2.500</span>
            <span className="text-muted-foreground">/ diária</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Cancelamento grátis até 48h antes
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <Label htmlFor="check-in" className="text-sm font-medium mb-2 block">
              Data do evento
            </Label>
            <div className="relative">
              <Input
                id="check-in"
                type="date"
                className="pl-10"
              />
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div>
            <Label htmlFor="guests" className="text-sm font-medium mb-2 block">
              Número de convidados
            </Label>
            <Input
              id="guests"
              type="number"
              placeholder="Ex: 100"
              min="1"
              max="200"
            />
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">Diária</span>
              <span className="font-medium">R$ 2.500,00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-lg text-primary">R$ 2.500,00</span>
            </div>
          </div>

          <Button 
            type="submit"
            size="lg" 
            className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold"
          >
            Solicitar Reserva
          </Button>

          <Button 
            type="button"
            size="lg" 
            variant="outline"
            className="w-full gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Contatar via WhatsApp
          </Button>
        </form>

        <div className="mt-4 pt-4 border-t border-border">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Heart className="w-4 h-4" />
            Salvar nos favoritos
          </button>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-4">
          Você não será cobrado ainda
        </p>
      </Card>
    </div>
  );
};

export default BookingSidebar;
