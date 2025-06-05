
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Heart, Share, MapPin, Building } from "lucide-react";
import MainLayout from "@/components/layouts/MainLayout";
import ImageGallery from "@/components/ImageGallery";
import ImageManager from "@/components/ImageManager";
import AssetCard from "@/components/AssetCard";
import SellerInfoSection from "@/components/business/SellerInfoSection";
import SpecificationRow from "@/components/business/SpecificationRow";
import PriceComparison from "@/components/PriceComparison";
import { useLanguage } from "@/contexts/LanguageContext";

const mockBusinessDetails = {
  id: "rec3",
  type: "business",
  title: "Сеть салонов красоты Lumière",
  price: 60000000,
  location: "Москва",
  description: "Лот в конкурсном производстве - сеть салонов красоты Lumière. Один владелец. Сеть предлагает современный интерьер, профессиональное оборудование и выгодное расположение в Москве. Прекрасно подходит для инвестиций в быстрорастущую отрасль красоты и ухода за собой. Для обсуждения интересующих деталей, свяжитесь с менеджером",
  features: [
    "4 салона",
    "28 сотрудников", 
    "Современное оборудование",
    "Выгодное расположение",
    "Стабильная клиентская база",
    "Обученный персонал",
    "Парковочные места",
    "Система кондиционирования",
    "Центральное отопление",
    "Система безопасности",
    "Отличная репутация",
  ],
  images: [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  ],
  specifications: {
    salons: "4",
    employees: "28",
    revenue: "6 500 000 ₽/мес.",
    established: "2018",
    parking: "Есть",
    condition: "Отличное",
    area: "450 м² общая",
    equipment: "Профессиональное",
    location: "Центр города",
    certification: "Полная",
  },
  sellerInfo: {
    name: "Сбербанк",
    phone: "+7 (800) 123-45-67",
    email: "business@sberbank.ru",
  },
  mapCoordinates: {
    lat: 55.7558,
    lng: 37.6173,
  },
  createdAt: "2025-04-15",
  viewedCount: 892,
};

const similarBusinesses = [
  {
    id: "sim1b",
    type: "business" as const,
    title: "Фитнес-клуб",
    price: 85000000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Москва",
    specs: [
      { label: "Филиалы", value: "10" },
      { label: "Клиенты", value: "1,200" },
      { label: "Выручка", value: "10,400,000 ₽/мес." },
      { label: "Основан", value: "2021" },
    ],
    isFavorite: false,
  },
  {
    id: "sim2b",
    type: "business" as const,
    title: "Ресторанная сеть",
    price: 73000000,
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Москва",
    specs: [
      { label: "Рестораны", value: "5" },
      { label: "Сотрудники", value: "45" },
      { label: "Выручка", value: "15,200,000 ₽/мес." },
      { label: "Основан", value: "2016" },
    ],
    isFavorite: false,
  },
  {
    id: "sim3b",
    type: "business" as const,
    title: "Сеть магазинов одежды",
    price: 29000000,
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Санкт-Петербург",
    specs: [
      { label: "Магазины", value: "6" },
      { label: "Сотрудники", value: "22" },
      { label: "Выручка", value: "1,800,000 ₽/мес." },
      { label: "Основан", value: "2024" },
    ],
    isFavorite: true,
  },
];

const BusinessDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const business = mockBusinessDetails;
  const { t } = useLanguage();
  const [businessImages, setBusinessImages] = useState(business.images);
  
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    sim3b: true,
  });

  const toggleFavorite = (id: string) => {
    if (id === business.id) {
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
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{business.title}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={16} className="mr-1 text-sber-500" />
                <span>{business.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-sber-500 to-sber-600 inline-block text-transparent bg-clip-text">
                  {business.price.toLocaleString('ru-RU')} ₽
                </h2>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => toggleFavorite(business.id)}
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
            
            <ImageGallery images={businessImages} />
            
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
                
                <TabsContent value="details" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Описание</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {business.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Спецификации</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                      <SpecificationRow label="Салоны" value={business.specifications.salons} />
                      <SpecificationRow label="Сотрудники" value={business.specifications.employees} />
                      <SpecificationRow label="Выручка" value={business.specifications.revenue} />
                      <SpecificationRow label="Основан" value={business.specifications.established} />
                      <SpecificationRow label="Парковка" value={business.specifications.parking} />
                      <SpecificationRow label="Состояние" value={business.specifications.condition} />
                      <SpecificationRow label="Общая площадь" value={business.specifications.area} />
                      <SpecificationRow label="Оборудование" value={business.specifications.equipment} />
                      <SpecificationRow label="Расположение" value={business.specifications.location} />
                      <SpecificationRow label="Сертификация" value={business.specifications.certification} />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="features" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Особенности бизнеса</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {business.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-sber-50 transition-colors"
                        >
                          <div className="text-sber-500 mr-2">
                            <Building size={18} />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="images" className="space-y-6">
                  <ImageManager
                    images={businessImages}
                    onImagesChange={setBusinessImages}
                    maxImages={25}
                  />
                </TabsContent>
                
                <TabsContent value="map" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Местоположение</h3>
                    <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin size={48} className="mx-auto mb-2 text-sber-500" />
                        <p className="font-medium">Карта</p>
                        <p>Объект расположен по координатам:</p>
                        <p>Широта: {business.mapCoordinates.lat}, Долгота: {business.mapCoordinates.lng}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <PriceComparison
              currentPrice={business.price}
              averagePrice={55000000}
              priceRange={{ min: 25000000, max: 95000000 }}
              type="business"
            />
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Похожие предложения</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarBusinesses.map((business) => (
                  <AssetCard
                    key={business.id}
                    {...business}
                    isFavorite={favorites[business.id] || false}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SellerInfoSection
              sellerInfo={business.sellerInfo}
              createdAt={business.createdAt}
              viewedCount={business.viewedCount}
              creditAmount={210000000}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BusinessDetail;
