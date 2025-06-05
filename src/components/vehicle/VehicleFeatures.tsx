
import { Car } from "lucide-react";

interface VehicleFeaturesProps {
  features: string[];
}

const VehicleFeatures = ({ features }: VehicleFeaturesProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Особенности автомобиля</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-sber-50 transition-colors"
            >
              <div className="text-sber-500 mr-2">
                <Car size={18} />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleFeatures;
