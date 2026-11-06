import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ListingHeader from "@/components/ListingHeader";
import ListingTabs from "@/components/ListingTabs";
import BookingSidebar from "@/components/BookingSidebar";
import RelatedListings from "@/components/RelatedListings";
import ListingFooter from "@/components/ListingFooter";
import ListingVideo from "@/components/ListingVideo";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-chacara.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: "São Paulo", href: "/sao-paulo" },
          { label: "Hortolândia", href: "/hortolandia" },
          { label: "Espaço Gold Eventos" }
        ]}
      />

      {/* Hero Image */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Espaço Gold Eventos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container mx-auto px-4 pb-6">
            <a
              href="#video"
              className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-semibold text-foreground shadow-medium backdrop-blur-sm transition-smooth hover:bg-background"
            >
              <Play className="h-4 w-4 fill-primary text-primary" />
              Assistir ao vídeo
            </a>
          </div>
        </div>
      </div>

      <ListingHeader />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tabs Content */}
          <div className="lg:col-span-2">
            <ListingTabs />
          </div>

          {/* Right Column - Booking Sidebar */}
          <div className="lg:col-span-1">
            <BookingSidebar />
          </div>
        </div>
      </div>

      <ListingVideo />

      <RelatedListings />
      <ListingFooter />
    </div>
  );
};

export default Index;
