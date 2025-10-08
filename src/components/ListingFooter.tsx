import { Button } from "@/components/ui/button";

const ListingFooter = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-cta" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Encontre o lugar perfeito para sua próxima festa
        </h2>
        
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Descubra centenas de chácaras, sítios e espaços incríveis para eventos em toda região
        </p>

        <Button 
          size="lg" 
          className="bg-background hover:bg-background/90 text-primary font-bold px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Explorar chácaras
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
    </section>
  );
};

export default ListingFooter;
