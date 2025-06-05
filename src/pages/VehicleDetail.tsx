import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLayout from "@/components/layouts/MainLayout";
import ImageGallery from "@/components/ImageGallery";
import ImageManager from "@/components/ImageManager";
import AssetCard from "@/components/AssetCard";
import PriceComparison from "@/components/PriceComparison";
import VehicleHeader from "@/components/vehicle/VehicleHeader";
import VehicleSpecifications from "@/components/vehicle/VehicleSpecifications";
import VehicleFeatures from "@/components/vehicle/VehicleFeatures";
import VehicleMap from "@/components/vehicle/VehicleMap";
import VehicleSidebar from "@/components/vehicle/VehicleSidebar";
import { useLanguage } from "@/contexts/LanguageContext";

const mockVehicleDetails = {
  id: "veh1",
  type: "vehicle",
  title: "BMW M5 VII G90",
  price: 26500000,
  location: "Москва",
  description: "Новый автомобиль. Предоставляется Юридическая гарантия. Стоимость указана за наличный расчёт. Доступна оплата за безналичный расчёт с и без НДС",
  features: [
    "M Drive Professional",
    "BMW Iconic Glow Экстерьер Пакет",
    "M Shadowline Фары",
    "Панорамное стекло Крыша",
    "BMW IconicSounds Electric",
    "Парковочные датчики",
    "Parking Assistant Plus с системой камер 360",
    "Комфортный доступ",
    "USB порты",
    "Климат-контроль",
    "Подогрев сидений",
  ],
  images: [
    "/lovable-uploads/e78f3c63-648d-490f-9c5f-644a02b9d133.png",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  ],
  specifications: {
    year: "2025",
    mileage: "30 км",
    engine: "4.4 л / 727 л.с. / гибрид",
    transmission: "Автоматическая 8-ступенчатая",
    fuelType: "Бензин",
    color: "Графитовый металлик",
    doors: "5",
    seats: "5",
    driveType: "Полный привод",
    condition: "Новый",
  },
  sellerInfo: {
    name: "Автосалон Сбербанка",
    phone: "+7 (800) 123-45-67",
    email: "auto@sberbank.ru",
  },
  mapCoordinates: {
    lat: 55.7558,
    lng: 37.6173,
  },
  createdAt: "2025-05-31",
  viewedCount: 342,
};

const similarVehicles = [
  {
    id: "sim1v",
    type: "vehicle" as const,
    title: "Audi RS6 Performance",
    price: 7200000,
    imageUrl:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Москва",
    specs: [
      { label: "Год", value: "2022" },
      { label: "Пробег", value: "18,000 км" },
      { label: "Двигатель", value: "4.0L V8 TwinTurbo" },
      { label: "Цвет", value: "Черный" },
    ],
    isFavorite: false,
  },
  {
    id: "sim2v",
    type: "vehicle" as const,
    title: "Mercedes-Benz AMG GT",
    price: 41800000,
    imageUrl:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Санкт-Петербург",
    specs: [
      { label: "Год", value: "2024" },
      { label: "Пробег", value: "12,000 км" },
      { label: "Двигатель", value: "4.0L Turbo" },
      { label: "Цвет", value: "Серый" },
    ],
    isFavorite: false,
  },
  {
    id: "sim3v",
    type: "vehicle" as const,
    title: "Dodge Challenger SRT",
    price: 5900000,
    imageUrl:
      "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Москва",
    specs: [
      { label: "Год", value: "2020" },
      { label: "Пробег", value: "55,000 км" },
      { label: "Двигатель", value: "3.5L V6" },
      { label: "Цвет", value: "Серебристый" },
    ],
    isFavorite: true,
  },
];

const VehicleDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const vehicle = mockVehicleDetails;
  const { t } = useLanguage();
  const [vehicleImages, setVehicleImages] = useState(vehicle.images);
  
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    sim3v: true,
  });

  // Load persisted images on component mount
  useEffect(() => {
    const savedImages = localStorage.getItem(`vehicle-images-${vehicle.id}`);
    if (savedImages) {
      try {
        const parsedImages = JSON.parse(savedImages);
        if (Array.isArray(parsedImages) && parsedImages.length > 0) {
          setVehicleImages(parsedImages);
        }
      } catch (error) {
        console.error('Error loading saved vehicle images:', error);
      }
    }
  }, [vehicle.id]);

  const toggleFavorite = (id: string) => {
    if (id === vehicle.id) {
      setIsFavorite(!isFavorite);
    } else {
      setFavorites(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <VehicleHeader
              title={vehicle.title}
              price={vehicle.price}
              location={vehicle.location}
              isFavorite={isFavorite}
              onToggleFavorite={() => toggleFavorite(vehicle.id)}
            />
            
            <ImageGallery images={vehicleImages} />
            
            <div className="mt-8">
              <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="details" className={activeTab === "details" ? "bg-sber-500 text-white" : ""}>
                    Характеристики
                  </TabsTrigger>
                  <TabsTrigger value="features" className={activeTab === "features" ? "bg-sber-500 text-white" : ""}>
                    Особенности
                  </TabsTrigger>
                  <TabsTrigger value="images" className={activeTab === "images" ? "bg-sber-500 text-white" : ""}>
                    Изображения
                  </TabsTrigger>
                  <TabsTrigger value="map" className={activeTab === "map" ? "bg-sber-500 text-white" : ""}>
                    Карта
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="details">
                  <VehicleSpecifications
                    specifications={vehicle.specifications}
                    description={vehicle.description}
                  />
                </TabsContent>
                
                <TabsContent value="features">
                  <VehicleFeatures features={vehicle.features} />
                </TabsContent>

                <TabsContent value="images">
                  <ImageManager
                    images={vehicleImages}
                    onImagesChange={setVehicleImages}
                    maxImages={20}
                    storageKey={`vehicle-images-${vehicle.id}`}
                  />
                </TabsContent>
                
                <TabsContent value="map">
                  <VehicleMap mapCoordinates={vehicle.mapCoordinates} />
                </TabsContent>
              </Tabs>
            </div>
            
            <PriceComparison
              currentPrice={vehicle.price}
              averagePrice={24250000}
              priceRange={{ min: 19500000, max: 29000000 }}
              type="vehicle"
            />
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Похожие автомобили</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarVehicles.map((veh) => (
                  <AssetCard
                    key={veh.id}
                    {...veh}
                    isFavorite={favorites[veh.id] || false}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <VehicleSidebar
              sellerInfo={vehicle.sellerInfo}
              createdAt={vehicle.createdAt}
              viewedCount={vehicle.viewedCount}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default VehicleDetail;
