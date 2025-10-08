import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Images, MapPin, Star, Calendar } from "lucide-react";
import ListingOverview from "./ListingOverview";
import ListingGallery from "./ListingGallery";
import ListingFeatures from "./ListingFeatures";
import ListingHost from "./ListingHost";

const ListingTabs = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full justify-start border-b border-border bg-transparent rounded-none h-auto p-0">
            <TabsTrigger 
              value="overview" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
            >
              <Info className="w-4 h-4 mr-2" />
              Visão Geral
            </TabsTrigger>
            <TabsTrigger 
              value="gallery"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
            >
              <Images className="w-4 h-4 mr-2" />
              Galeria
            </TabsTrigger>
            <TabsTrigger 
              value="amenities"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
            >
              <Star className="w-4 h-4 mr-2" />
              Comodidades
            </TabsTrigger>
            <TabsTrigger 
              value="location"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Localização
            </TabsTrigger>
            <TabsTrigger 
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Avaliações
            </TabsTrigger>
          </TabsList>

          <div className="py-8">
            <TabsContent value="overview" className="mt-0">
              <ListingOverview />
            </TabsContent>

            <TabsContent value="gallery" className="mt-0">
              <ListingGallery />
            </TabsContent>

            <TabsContent value="amenities" className="mt-0">
              <ListingFeatures />
            </TabsContent>

            <TabsContent value="location" className="mt-0">
              <div className="max-w-4xl">
                <h3 className="text-2xl font-bold mb-4">Localização</h3>
                <p className="text-muted-foreground mb-6">Hortolândia, São Paulo</p>
                <div className="w-full h-[400px] bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Mapa da localização</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-0">
              <ListingHost />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ListingTabs;
