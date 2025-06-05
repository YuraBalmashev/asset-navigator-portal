
import { Button } from "@/components/ui/button";
import { Heart, Share, MapPin } from "lucide-react";

interface VehicleHeaderProps {
  title: string;
  price: number;
  location: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const VehicleHeader = ({ title, price, location, isFavorite, onToggleFavorite }: VehicleHeaderProps) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <div className="flex items-center text-gray-600 mb-4">
        <MapPin size={16} className="mr-1 text-sber-500" />
        <span>{location}</span>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-sber-500 to-sber-600 inline-block text-transparent bg-clip-text">
          {price.toLocaleString('ru-RU')} ₽
        </h2>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={onToggleFavorite}
            className={isFavorite ? "bg-sber-100 border-sber-500" : "hover:border-sber-500"}
          >
            <Heart 
              size={20} 
              className={isFavorite ? "fill-sber-500 text-sber-500" : "text-gray-600 hover:text-sber-500"} 
            />
          </Button>
          <Button variant="outline" size="icon" className="hover:border-sber-500">
            <Share size={20} className="text-gray-600 hover:text-sber-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleHeader;
