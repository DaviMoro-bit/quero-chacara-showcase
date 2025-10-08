import { Calendar, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ListingDetails = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">
              Sobre o Espaço
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                O Espaço Gold Eventos é perfeito para quem busca um lugar especial para celebrar 
                aniversários, casamentos, confraternizações e eventos corporativos. Nossa estrutura 
                completa oferece tudo que você precisa para criar momentos inesquecíveis.
              </p>
              
              <p className="text-muted-foreground mb-4">
                Com mais de 2.000m² de área verde, oferecemos amplo espaço ao ar livre, piscina 
                adulto aquecida, área gourmet completa com churrasqueira profissional, campo de 
                futebol society, salão de festas climatizado e estacionamento para 50 carros.
              </p>

              <h3 className="font-heading text-2xl font-semibold mt-8 mb-4 text-foreground">
                Comodidades Incluídas
              </h3>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Churrasqueira profissional com área gourmet completa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Piscina adulto aquecida com deck e espreguiçadeiras</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Campo de futebol society com iluminação noturna</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Salão de festas climatizado com capacidade para 200 pessoas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Wi-Fi de alta velocidade em toda área</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Sistema de som ambiente profissional</span>
                </li>
              </ul>
            </div>

            {/* Location Map Placeholder */}
            <div className="mt-8">
              <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">
                Localização
              </h3>
              <div className="w-full h-[300px] bg-muted rounded-2xl flex items-center justify-center">
                <p className="text-muted-foreground">Hortolândia, São Paulo</p>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-4 shadow-large border-border">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-primary">R$ 2.500</span>
                  <span className="text-muted-foreground">/ diária</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Cancelamento grátis até 48h antes
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Check-in</p>
                    <p className="text-sm text-muted-foreground">Selecione a data</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Horário</p>
                    <p className="text-sm text-muted-foreground">8h às 23h</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Valor total</p>
                    <p className="text-sm text-muted-foreground">R$ 2.500,00</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Solicitar Reserva
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Você não será cobrado ainda
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingDetails;
