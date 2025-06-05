
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share, Phone, Mail, MapPin, Calendar, Car, Clock, Eye } from "lucide-react";
import MainLayout from "@/components/layouts/MainLayout";
import ImageGallery from "@/components/ImageGallery";
import AssetCard from "@/components/AssetCard";
import PriceComparison from "@/components/PriceComparison";
import { useLanguage } from "@/contexts/LanguageContext";

const mockVehicleDetails = {
  id: "veh1",
  type: "vehicle",
  title: "BMW X5 xDrive40i",
  price: 6500000,
  location: "Москва",
  description: "Премиальный BMW X5 в отличном состоянии. Автомобиль прошел полное техническое обслуживание, имеет полную сервисную историю. Один владелец, некурящий. Все системы работают исправно. Автомобиль находится в идеальном техническом и визуальном состоянии.",
  features: [
    "xDrive полный привод",
    "Панорамная крыша",
    "Кожаный салон",
    "Навигационная система",
    "Камера заднего вида",
    "Парковочные датчики",
    "Круиз-контроль",
    "Bluetooth",
    "USB порты",
    "Климат-контроль",
    "Подогрев сидений",
  ],
  images: [
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  ],
  specifications: {
    year: "2022",
    mileage: "35,000 км",
    engine: "3.0L Twin Turbo I6",
    transmission: "Автоматическая 8-ступенчатая",
    fuelType: "Бензин",
    color: "Графитовый металлик",
    doors: "5",
    seats: "7",
    driveType: "Полный привод",
    condition: "Отличное",
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
  createdAt: "2024-10-20",
  viewedCount: 342,
};

const similarVehicles = [
  {
    id: "sim1v",
    type: "vehicle" as const,
    title: "Audi Q7 55 TFSI",
    price: 7200000,
    imageUrl: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Москва",
    specs: [
      { label: "Год", value: "2023" },
      { label: "Пробег", value: "18,000 км" },
      { label: "Двигатель", value: "3.0L V6 Turbo" },
      { label: "Цвет", value: "Черный" },
    ],
    isFavorite: false,
  },
  {
    id: "sim2v",
    type: "vehicle" as const,
    title: "Mercedes-Benz GLE 350",
    price: 6800000,
    imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Санкт-Петербург",
    specs: [
      { label: "Год", value: "2021" },
      { label: "Пробег", value: "42,000 км" },
      { label: "Двигатель", value: "2.0L Turbo" },
      { label: "Цвет", value: "Белый" },
    ],
    isFavorite: false,
  },
  {
    id: "sim3v",
    type: "vehicle" as const,
    title: "Lexus RX 350",
    price: 5900000,
    imageUrl: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
  
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    sim3v: true,
  });

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
  
  const SpecRow = ({ label, value }: { label: string, value: string }) => (
    <div className="flex justify-between py-2 border-b border-gray-100">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{vehicle.title}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={16} className="mr-1 text-sber-500" />
                <span>{vehicle.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-sber-500 to-sber-600 inline-block text-transparent bg-clip-text">
                  {vehicle.price.toLocaleString('ru-RU')} ₽
                </h2>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => toggleFavorite(vehicle.id)}
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
            
            <ImageGallery images={vehicle.images} />
            
            <div className="mt-8">
              <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="details" className={activeTab === "details" ? "bg-sber-500 text-white" : ""}>
                    Характеристики
                  </TabsTrigger>
                  <TabsTrigger value="features" className={activeTab === "features" ? "bg-sber-500 text-white" : ""}>
                    Особенности
                  </TabsTrigger>
                  <TabsTrigger value="map" className={activeTab === "map" ? "bg-sber-500 text-white" : ""}>
                    Карта
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Описание</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {vehicle.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Технические характеристики</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                      <SpecRow label="Год выпуска" value={vehicle.specifications.year} />
                      <SpecRow label="Пробег" value={vehicle.specifications.mileage} />
                      <SpecRow label="Двигатель" value={vehicle.specifications.engine} />
                      <SpecRow label="Коробка передач" value={vehicle.specifications.transmission} />
                      <SpecRow label="Топливо" value={vehicle.specifications.fuelType} />
                      <SpecRow label="Цвет" value={vehicle.specifications.color} />
                      <SpecRow label="Количество дверей" value={vehicle.specifications.doors} />
                      <SpecRow label="Количество мест" value={vehicle.specifications.seats} />
                      <SpecRow label="Привод" value={vehicle.specifications.driveType} />
                      <SpecRow label="Состояние" value={vehicle.specifications.condition} />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="features" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Особенности автомобиля</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {vehicle.features.map((feature, index) => (
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
                </TabsContent>
                
                <TabsContent value="map" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Местоположение</h3>
                    <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin size={48} className="mx-auto mb-2 text-sber-500" />
                        <p className="font-medium">Карта</p>
                        <p>Автомобиль находится по координатам:</p>
                        <p>Широта: {vehicle.mapCoordinates.lat}, Долгота: {vehicle.mapCoordinates.lng}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <PriceComparison
              currentPrice={vehicle.price}
              averagePrice={6200000}
              priceRange={{ min: 4500000, max: 8500000 }}
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
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Информация о продавце</h3>
                <div className="text-gray-700 mb-6">
                  <p className="font-medium">{vehicle.sellerInfo.name}</p>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-sber-400 to-sber-600 hover:from-sber-500 hover:to-sber-700 text-white gap-2 shadow-md hover:shadow-lg transition-all">
                    <Phone size={16} /> Позвонить
                  </Button>
                  <Button variant="outline" className="w-full gap-2 border-sber-500 text-sber-600 hover:bg-sber-50">
                    <Mail size={16} /> Написать
                  </Button>
                </div>
                
                <div className="mt-8 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-sber-500" />
                    <span>Размещено {new Date(vehicle.createdAt).toLocaleDateString('ru-RU')}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-sber-500" />
                    <span>Обновлено 5 дней назад</span>
                  </div>
                  <div className="flex items-center">
                    <Eye size={16} className="mr-2 text-sber-500" />
                    <span>Просмотрено {vehicle.viewedCount.toLocaleString('ru-RU')} раз</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-sber-50 rounded-lg">
                  <div className="mb-3">
                    <h2 className="text-2xl font-semibold bg-gradient-to-r from-sber-500 to-sber-600 inline-block text-transparent bg-clip-text">
                      <span className="block">Автокредит:</span>
                      <span className="block">от 8.9% годовых</span>
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Получите автокредит на выгодных условиях от Сбербанка.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-sber-600 border-sber-500 hover:bg-sber-100"
                  >
                    Рассчитать кредит
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default VehicleDetail;
