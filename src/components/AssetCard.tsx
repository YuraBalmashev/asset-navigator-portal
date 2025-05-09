
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

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
  
  return (
    <Link to={detailsPath}>
      <Card 
        className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer h-full"
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
            className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-md transition-transform hover:scale-110"
            onClick={handleFavoriteClick}
          >
            <Heart 
              size={18} 
              className={isFavorite ? "fill-[#9b87f5] text-[#9b87f5]" : "text-gray-400"} 
            />
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-800 line-clamp-1">{title}</h3>
            <span className="font-medium text-[#9b87f5]">
              ${price.toLocaleString()}
            </span>
          </div>
          {location && (
            <div className="text-gray-600 text-sm mb-3">{location}</div>
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
