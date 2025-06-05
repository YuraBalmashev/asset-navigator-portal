
import { ArrowRight } from "lucide-react";
import AssetCard from "./AssetCard";
import { useState } from "react";

interface RecommendationsProps {
  title?: string;
  limit?: number;
}

const Recommendations = ({ 
  title = "Recommended for You", 
  limit = 4 
}: RecommendationsProps) => {
  // Mock data - in a real app this would come from an API
  const mockRecommendations = [
    {
      id: "rec1",
      type: "property" as const,
      title: "Premium Apartment in Moscow City",
      price: 380000,
      imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "Moscow City",
      specs: [
        { label: "Area", value: "145 m²" },
        { label: "Rooms", value: "3" },
        { label: "Floor", value: "42/60" },
        { label: "Built", value: "2021" },
      ],
      isFavorite: false,
    },
    {
      id: "rec2",
      type: "vehicle" as const,
      title: "Lexus RX 350 F Sport",
      price: 58000,
      imageUrl: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "St. Petersburg",
      specs: [
        { label: "Year", value: "2022" },
        { label: "Mileage", value: "15,000 km" },
        { label: "Engine", value: "3.5L V6" },
        { label: "Color", value: "White" },
      ],
      isFavorite: true,
    },
    {
      id: "rec3",
      type: "business" as const,
      title: "Сеть салонов красоты",
      price: 420000,
      imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "Москва",
      specs: [
        { label: "Салоны", value: "4" },
        { label: "Сотрудники", value: "28" },
        { label: "Выручка", value: "6,500,000 ₽/мес." },
        { label: "Основан", value: "2015" },
      ],
      isFavorite: false,
    },
    {
      id: "rec4",
      type: "property" as const,
      title: "Cozy Studio Near Metro",
      price: 95000,
      imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "Moscow",
      specs: [
        { label: "Area", value: "38 m²" },
        { label: "Rooms", value: "1" },
        { label: "Floor", value: "5/9" },
        { label: "Built", value: "2017" },
      ],
      isFavorite: false,
    },
  ];

  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    rec2: true,
  });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <button className="text-[#9b87f5] flex items-center gap-1 hover:underline">
          View all <ArrowRight size={16} />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockRecommendations.slice(0, limit).map((item) => (
          <AssetCard
            key={item.id}
            {...item}
            isFavorite={favorites[item.id] || false}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
