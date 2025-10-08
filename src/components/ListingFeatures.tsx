import { Flame, Waves, Trophy, Music, Utensils, WifiHigh, ParkingCircle, TreePine } from "lucide-react";

const features = [
  { icon: Flame, title: "Churrasqueira", description: "Área gourmet completa" },
  { icon: Waves, title: "Piscina Adulto", description: "Aquecida com deck" },
  { icon: Trophy, title: "Campo Society", description: "Iluminação noturna" },
  { icon: Music, title: "Som Ambiente", description: "Sistema profissional" },
  { icon: Utensils, title: "Cozinha", description: "Equipada completa" },
  { icon: WifiHigh, title: "Wi-Fi", description: "Alta velocidade" },
  { icon: ParkingCircle, title: "Estacionamento", description: "50 vagas" },
  { icon: TreePine, title: "Área Verde", description: "2.000m²" },
];

const ListingFeatures = () => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">Comodidades</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all"
          >
            <feature.icon className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingFeatures;
