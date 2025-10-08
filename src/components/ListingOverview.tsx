import { Users, Home, Waves, UtensilsCrossed, Car, Wifi } from "lucide-react";

const amenities = [
  { icon: Users, label: "Até 200 pessoas" },
  { icon: Home, label: "3 Salões" },
  { icon: Waves, label: "Piscina adulto" },
  { icon: UtensilsCrossed, label: "Área Gourmet" },
  { icon: Car, label: "Estacionamento" },
  { icon: Wifi, label: "Wi-Fi grátis" },
];

const ListingOverview = () => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Sobre o Espaço</h2>
      
      <p className="text-muted-foreground leading-relaxed mb-6">
        O Espaço Gold Eventos oferece uma estrutura completa para tornar sua festa única. 
        Com amplas áreas verdes, piscina, churrasqueira e toda comodidade que você precisa 
        para criar memórias especiais com família e amigos.
      </p>

      <p className="text-muted-foreground leading-relaxed mb-8">
        Com mais de 2.000m² de área verde, oferecemos amplo espaço ao ar livre, piscina 
        adulto aquecida, área gourmet completa com churrasqueira profissional, campo de 
        futebol society, salão de festas climatizado e estacionamento para 50 carros.
      </p>

      <h3 className="text-xl font-semibold mb-4">Destaques</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {amenities.map((amenity, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all"
          >
            <amenity.icon className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">{amenity.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingOverview;
