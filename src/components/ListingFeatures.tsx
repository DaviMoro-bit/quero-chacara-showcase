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
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold mb-8 text-center text-foreground">
          O que este espaço oferece
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-background hover:bg-card transition-all duration-300 hover:shadow-medium group"
            >
              <div className="p-4 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingFeatures;
