
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertiesTab from "./featured/PropertiesTab";
import VehiclesTab from "./featured/VehiclesTab";
import BusinessesTab from "./featured/BusinessesTab";

const FeaturedAssets = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    prop2: true,
    car1: true,
    biz2_old: true,
  });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Featured Assets</h2>
      
      <Tabs defaultValue="properties">
        <TabsList className="mb-6">
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
          <TabsTrigger value="businesses">Businesses</TabsTrigger>
        </TabsList>
        
        <TabsContent value="properties">
          <PropertiesTab 
            favorites={favorites} 
            onToggleFavorite={toggleFavorite} 
          />
        </TabsContent>
        
        <TabsContent value="vehicles">
          <VehiclesTab 
            favorites={favorites} 
            onToggleFavorite={toggleFavorite} 
          />
        </TabsContent>
        
        <TabsContent value="businesses">
          <BusinessesTab 
            favorites={favorites} 
            onToggleFavorite={toggleFavorite} 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeaturedAssets;
