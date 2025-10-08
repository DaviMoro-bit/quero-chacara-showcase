import { Users, Home, Waves, UtensilsCrossed, Car, Wifi } from "lucide-react";

const amenities = [
  { icon: Users, label: "Até 200 pessoas", color: "text-primary" },
  { icon: Home, label: "3 Salões", color: "text-primary" },
  { icon: Waves, label: "Piscina adulto", color: "text-primary" },
  { icon: UtensilsCrossed, label: "Área Gourmet", color: "text-primary" },
  { icon: Car, label: "Estacionamento", color: "text-primary" },
  { icon: Wifi, label: "Wi-Fi grátis", color: "text-primary" },
];

const ListingOverview = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">
            Um espaço perfeito para celebrar momentos inesquecíveis
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            O Espaço Gold Eventos oferece uma estrutura completa para tornar sua festa única. 
            Com amplas áreas verdes, piscina, churrasqueira e toda comodidade que você precisa 
            para criar memórias especiais com família e amigos.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-2xl bg-secondary hover:bg-secondary/70 transition-all duration-300 hover:shadow-soft"
              >
                <div className="p-3 rounded-xl bg-primary/10">
                  <amenity.icon className={`w-6 h-6 ${amenity.color}`} />
                </div>
                <span className="font-medium text-foreground">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingOverview;
