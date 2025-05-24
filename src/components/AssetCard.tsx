
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Heart, MapPin } from "lucide-react";

interface AssetCardProps {
  id: string;
  type: "property" | "vehicle" | "business";
  title: string;
  price: number;
  imageUrl: string;
  location?: string;
  specs: {
    label: string;
    value: string;
  }[];
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

const AssetCard = ({
  id,
  type,
  title,
  price,
  imageUrl,
  location,
  specs,
  isFavorite = false,
  onToggleFavorite,
}: AssetCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const detailsPath = `/${type}/${id}`;
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleFavorite) onToggleFavorite(id);
  };

  const formatPrice = (price: number, type: string) => {
    if (type === "business" && title.includes("салон")) {
      return `${price.toLocaleString('ru-RU')} ₽`;
    }
    return `$${price.toLocaleString()}`;
  };
  
  return (
    <Link to={detailsPath}>
      <Card 
        className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer h-full rounded-lg border border-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <div 
            className="h-48 bg-cover bg-center transition-transform duration-500 ease-in-out"
            style={{ 
              backgroundImage: `url(${imageUrl})`,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }} 
          />
          <button 
            className={`absolute top-3 right-3 p-1.5 rounded-full shadow-md transition-all ${
              isFavorite 
                ? "bg-sber-100" 
                : "bg-white hover:bg-sber-50"
            }`}
            onClick={handleFavoriteClick}
          >
            <Heart 
              size={18} 
              className={isFavorite ? "fill-sber-500 text-sber-500" : "text-gray-400 hover:text-sber-500"} 
            />
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-800 line-clamp-1">{title}</h3>
            <span className="font-medium bg-gradient-to-r from-sber-500 to-sber-600 inline-block text-transparent bg-clip-text">
              {formatPrice(price, type)}
            </span>
          </div>
          {location && (
            <div className="text-gray-600 text-sm mb-3 flex items-center">
              <MapPin size={14} className="mr-1 text-sber-500" />
              {location}
            </div>
          )}
          <div className="grid grid-cols-2 gap-2 text-xs">
            {specs.map((spec, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-gray-500">{spec.label}</span>
                <span className="font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default AssetCard;
