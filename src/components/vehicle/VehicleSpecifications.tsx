
import SpecificationRow from "@/components/business/SpecificationRow";

interface VehicleSpecificationsProps {
  specifications: {
    year: string;
    mileage: string;
    engine: string;
    transmission: string;
    fuelType: string;
    color: string;
    doors: string;
    seats: string;
    driveType: string;
    condition: string;
  };
  description: string;
}

const VehicleSpecifications = ({ specifications, description }: VehicleSpecificationsProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Описание</h3>
        <p className="text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Технические характеристики</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <SpecificationRow label="Год выпуска" value={specifications.year} />
          <SpecificationRow label="Пробег" value={specifications.mileage} />
          <SpecificationRow label="Двигатель" value={specifications.engine} />
          <SpecificationRow label="Коробка передач" value={specifications.transmission} />
          <SpecificationRow label="Топливо" value={specifications.fuelType} />
          <SpecificationRow label="Цвет" value={specifications.color} />
          <SpecificationRow label="Количество дверей" value={specifications.doors} />
          <SpecificationRow label="Количество мест" value={specifications.seats} />
          <SpecificationRow label="Привод" value={specifications.driveType} />
          <SpecificationRow label="Состояние" value={specifications.condition} />
        </div>
      </div>
    </div>
  );
};

export default VehicleSpecifications;
