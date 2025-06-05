
import AssetCard from "@/components/AssetCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { mockVehicles } from "@/data/mockVehicles";

interface VehiclesTabProps {
  favorites: Record<string, boolean>;
  onToggleFavorite: (id: string) => void;
}

const VehiclesTab = ({ favorites, onToggleFavorite }: VehiclesTabProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockVehicles.map((vehicle) => (
          <AssetCard
            key={vehicle.id}
            {...vehicle}
            isFavorite={favorites[vehicle.id] || false}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button asChild variant="outline" className="gap-2">
          <Link to="/vehicles">
            View All Vehicles <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default VehiclesTab;
