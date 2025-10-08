import { useState } from "react";
import { Star, MapPin, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-chacara.jpg";

const ListingHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImage, heroImage, heroImage]; // Using same image for demo

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        <img
          src={images[currentImage]}
          alt="Espaço Gold Eventos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentImage ? "bg-background w-8" : "bg-background/50"
            }`}
            aria-label={`Ir para imagem ${idx + 1}`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-background font-medium">5.0</span>
            <span className="text-background/80">· 124 avaliações</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold text-background mb-3">
            Espaço Gold Eventos
          </h1>

          <div className="flex items-center gap-2 text-background/90 mb-6">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Hortolândia, São Paulo</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Reservar agora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-background/95 hover:bg-background text-foreground font-semibold px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingHero;
