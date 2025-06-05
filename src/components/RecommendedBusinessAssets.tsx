
import AssetCard from "./AssetCard";
import { useState } from "react";

interface Asset {
  id: string;
  type: "property" | "vehicle" | "business";
  title: string;
  price: number;
  imageUrl: string;
  location: string;
  specs: { label: string; value: string }[];
  isFavorite: boolean;
}

interface RecommendedBusinessAssetsProps {
  assets: Asset[];
}

const RecommendedBusinessAssets = ({ assets }: RecommendedBusinessAssetsProps) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Рекомендуемые активы</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {assets.map((asset) => (
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

export default RecommendedBusinessAssets;
