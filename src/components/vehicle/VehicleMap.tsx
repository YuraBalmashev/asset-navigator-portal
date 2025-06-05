
import { MapPin } from "lucide-react";

interface VehicleMapProps {
  mapCoordinates: {
    lat: number;
    lng: number;
  };
}

const VehicleMap = ({ mapCoordinates }: VehicleMapProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Местоположение</h3>
        <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin size={48} className="mx-auto mb-2 text-sber-500" />
            <p className="font-medium">Карта</p>
            <p>Автомобиль находится по координатам:</p>
            <p>Широта: {mapCoordinates.lat}, Долгота: {mapCoordinates.lng}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleMap;
