
import AssetCard from "@/components/AssetCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { mockBusinesses } from "@/data/mockBusinesses";

interface BusinessesTabProps {
  favorites: Record<string, boolean>;
  onToggleFavorite: (id: string) => void;
}

const BusinessesTab = ({ favorites, onToggleFavorite }: BusinessesTabProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBusinesses.map((business) => (
          <AssetCard
            key={business.id}
            {...business}
            isFavorite={favorites[business.id] || false}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button asChild variant="outline" className="gap-2">
          <Link to="/businesses">
            View All Businesses <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BusinessesTab;
