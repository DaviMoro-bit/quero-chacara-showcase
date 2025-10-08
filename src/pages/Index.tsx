import ListingHero from "@/components/ListingHero";
import ListingOverview from "@/components/ListingOverview";
import ListingGallery from "@/components/ListingGallery";
import ListingDetails from "@/components/ListingDetails";
import ListingFeatures from "@/components/ListingFeatures";
import ListingHost from "@/components/ListingHost";
import RelatedListings from "@/components/RelatedListings";
import ListingFooter from "@/components/ListingFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ListingHero />
      <ListingOverview />
      <ListingGallery />
      <ListingDetails />
      <ListingFeatures />
      <ListingHost />
      <RelatedListings />
      <ListingFooter />
    </main>
  );
};

export default Index;
