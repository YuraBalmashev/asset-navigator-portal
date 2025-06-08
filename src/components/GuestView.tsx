
import { useState } from "react";
import AssetCard from "@/components/AssetCard";
import SearchBar from "@/components/SearchBar";
import { useLanguage } from "@/contexts/LanguageContext";
import { mockProperties } from "@/data/mockProperties";
import { mockVehicles } from "@/data/mockVehicles";
import { mockBusinesses } from "@/data/mockBusinesses";

const GuestView = () => {
  const { t } = useLanguage();
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  // Combine all assets into one array
  const allAssets = [
    ...mockProperties,
    ...mockVehicles,
    ...mockBusinesses,
  ];

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSearch = (query: string) => {
    // For guest users, we can implement basic search functionality
    console.log('Guest search:', query);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        {t('home.title_guest')}
      </h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        {t('home.subtitle_guest')}
      </p>
      
      <SearchBar 
        placeholder={t('home.search.placeholder')}
        onSearch={handleSearch}
        className="mb-12"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allAssets.map((asset) => (
          <AssetCard
            key={asset.id}
            {...asset}
            isFavorite={favorites[asset.id] || false}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default GuestView;
