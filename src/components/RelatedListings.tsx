import { Star, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-chacara.jpg";

const listings = [
  {
    title: "Chácara Vista Verde",
    location: "Campinas, SP",
    price: "R$ 2.000",
    rating: 4.8,
    reviews: 89,
    image: heroImage,
  },
  {
    title: "Espaço Paraíso",
    location: "Sumaré, SP",
    price: "R$ 1.800",
    rating: 4.9,
    reviews: 112,
    image: heroImage,
  },
  {
    title: "Rancho Alegria",
    location: "Valinhos, SP",
    price: "R$ 2.200",
    rating: 4.7,
    reviews: 76,
    image: heroImage,
  },
];

const RelatedListings = () => {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold mb-8 text-foreground">
          Outros espaços que você pode gostar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listings.map((listing, idx) => (
            <Card
              key={idx}
              className="overflow-hidden hover:shadow-large transition-all duration-300 cursor-pointer group border-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(listing.rating)
                            ? "fill-accent text-accent"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {listing.rating} · {listing.reviews} avaliações
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {listing.title}
                </h3>

                <div className="flex items-center gap-1 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{listing.location}</span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-primary">{listing.price}</span>
                  <span className="text-sm text-muted-foreground">/ diária</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedListings;
