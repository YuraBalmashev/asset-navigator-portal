
import { Home, Car, Briefcase } from "lucide-react";
import MainLayout from "@/components/layouts/MainLayout";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import FeaturedAssets from "@/components/FeaturedAssets";
import Recommendations from "@/components/Recommendations";
import PromoBanner from "@/components/PromoBanner";
import AdvertisingWidget from "@/components/AdvertisingWidget";

const Index = () => {
  const categories = [
    {
      title: "Properties",
      description: "Apartments, houses, and commercial spaces",
      icon: <Home size={20} />,
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/properties",
    },
    {
      title: "Vehicles",
      description: "Cars, trucks, and special purpose vehicles",
      icon: <Car size={20} />,
      imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/vehicles",
    },
    {
      title: "Businesses",
      description: "Ready-made businesses and commercial opportunities",
      icon: <Briefcase size={20} />,
      imageUrl: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/businesses",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-[#F1F0FB] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Find Your Perfect Asset
          </h1>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Browse through a wide selection of properties, vehicles, and ready-made businesses from Sberbank's marketplace.
          </p>
          
          <SearchBar 
            placeholder="What are you looking for? E.g., 'Apartment in Moscow with 2 bedrooms'"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                imageUrl={category.imageUrl}
                link={category.link}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Integrated Advertising Widget */}
        <AdvertisingWidget className="mb-12" />
        
        <PromoBanner
          title="Find Your Dream Property"
          subtitle="NEW FEATURE"
          description="Use our AI-powered search to find properties matching your exact requirements."
          buttonText="Try Smart Search"
          buttonLink="/smart-search"
          imageUrl="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        />
        
        <FeaturedAssets />
        
        <Recommendations />

        <PromoBanner
          title="Vehicle Financing Available"
          subtitle="SPECIAL OFFER"
          description="Get pre-approved for financing on any vehicle with rates starting at just 4.9%."
          buttonText="Learn More"
          buttonLink="/financing"
          imageUrl="https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          colorGradient="linear-gradient(90deg, rgba(26,31,44,0.85) 0%, rgba(26,31,44,0.7) 100%)"
          variant="secondary"
        />
      </div>
    </MainLayout>
  );
};

export default Index;
