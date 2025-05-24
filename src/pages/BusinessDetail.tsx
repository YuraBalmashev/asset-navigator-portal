
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart, Share, Phone, Mail, MapPin, Calendar, Building, Clock, Eye, MessageCircle } from "lucide-react";
import MainLayout from "@/components/layouts/MainLayout";
import ImageGallery from "@/components/ImageGallery";
import AssetCard from "@/components/AssetCard";
import { useLanguage } from "@/contexts/LanguageContext";

const mockBusinessDetails = {
  id: "rec3",
  type: "business",
  title: "Сеть салонов красоты",
  price: 420000,
  location: "Москва",
  description: "Эта сеть салонов красоты предлагает современный интерьер, профессиональное оборудование и выгодное расположение в Москве. Прекрасно подходит для инвестиций в быстрорастущую отрасль красоты и ухода за собой.",
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
    established: "2015",
    parking: "Есть",
    condition: "Отличное",
    area: "450 м² общая",
    equipment: "Профессиональное",
    location: "Центр города",
    certification: "Полная",
  },
  sellerInfo: {
    name: "Отдел бизнеса Сбербанка",
    phone: "+7 (800) 123-45-67",
    email: "business@sberbank.ru",
  },
  mapCoordinates: {
    lat: 55.7558,
    lng: 37.6173,
  },
  createdAt: "2023-09-15",
  viewedCount: 892,
};

const similarBusinesses = [
  {
    id: "sim1b",
    type: "business" as const,
    title: "Сеть фитнес-клубов",
    price: 850000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Москва",
    specs: [
      { label: "Клубы", value: "3" },
      { label: "Члены", value: "1,200" },
      { label: "Выручка", value: "2,400,000 ₽/мес." },
      { label: "Основан", value: "2018" },
    ],
    isFavorite: false,
  },
  {
    id: "sim2b",
    type: "business" as const,
    title: "Ресторанная сеть",
    price: 650000,
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Москва",
    specs: [
      { label: "Рестораны", value: "5" },
      { label: "Сотрудники", value: "45" },
      { label: "Выручка", value: "3,200,000 ₽/мес." },
      { label: "Основан", value: "2016" },
    ],
    isFavorite: false,
  },
  {
    id: "sim3b",
    type: "business" as const,
    title: "Сеть магазинов одежды",
    price: 290000,
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Санкт-Петербург",
    specs: [
      { label: "Магазины", value: "6" },
      { label: "Сотрудники", value: "22" },
      { label: "Выручка", value: "1,800,000 ₽/мес." },
      { label: "Основан", value: "2017" },
    ],
    isFavorite: true,
  },
];

const BusinessDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const business = mockBusinessDetails;
  const { t } = useLanguage();
  
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
  
  const SpecRow = ({ label, value }: { label: string, value: string }) => (
    <div className="flex justify-between py-2 border-b border-gray-100">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );

  const handleContactOption = (option: string) => {
    console.log(`Contact option selected: ${option}`);
    setIsContactModalOpen(false);
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
            
            <ImageGallery images={business.images} />
            
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
                      {business.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Спецификации</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                      <SpecRow label="Салоны" value={business.specifications.salons} />
                      <SpecRow label="Сотрудники" value={business.specifications.employees} />
                      <SpecRow label="Выручка" value={business.specifications.revenue} />
                      <SpecRow label="Основан" value={business.specifications.established} />
                      <SpecRow label="Парковка" value={business.specifications.parking} />
                      <SpecRow label="Состояние" value={business.specifications.condition} />
                      <SpecRow label="Общая площадь" value={business.specifications.area} />
                      <SpecRow label="Оборудование" value={business.specifications.equipment} />
                      <SpecRow label="Расположение" value={business.specifications.location} />
                      <SpecRow label="Сертификация" value={business.specifications.certification} />
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
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Информация о продавце</h3>
                <div className="text-gray-700 mb-6">
                  <p className="font-medium">{business.sellerInfo.name}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <Button className="w-full bg-gradient-to-r from-sber-400 to-sber-600 hover:from-sber-500 hover:to-sber-700 text-white gap-2 shadow-md hover:shadow-lg transition-all">
                    <Phone size={16} /> Позвонить продавцу
                  </Button>
                  <Button variant="outline" className="w-full gap-2 border-sber-500 text-sber-600 hover:bg-sber-50">
                    <Mail size={16} /> Написать продавцу
                  </Button>
                </div>

                {/* Credit Potential Section */}
                <div className="border-t pt-6 mb-6">
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-sber-600 mb-2">
                      Кредитный потенциал: 100 000 000 ₽
                    </p>
                  </div>
                  
                  <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-sber-400 to-sber-600 hover:from-sber-500 hover:to-sber-700 text-white shadow-md hover:shadow-lg transition-all">
                        Узнать условия
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-center text-lg font-semibold text-gray-900 mb-4">
                          Ваш клиентский менеджер свяжется с вами в ближайшее время. Какой из способов связи вам удобнее?
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col gap-3 mt-4">
                        <Button 
                          onClick={() => handleContactOption('call')}
                          className="w-full bg-gradient-to-r from-sber-400 to-sber-600 hover:from-sber-500 hover:to-sber-700 text-white gap-2"
                        >
                          <Phone size={16} />
                          Звонок
                        </Button>
                        <Button 
                          onClick={() => handleContactOption('messenger')}
                          variant="outline" 
                          className="w-full gap-2 border-sber-500 text-sber-600 hover:bg-sber-50"
                        >
                          <MessageCircle size={16} />
                          Мессенджер
                        </Button>
                        <Button 
                          onClick={() => handleContactOption('email')}
                          variant="outline" 
                          className="w-full gap-2 border-sber-500 text-sber-600 hover:bg-sber-50"
                        >
                          <Mail size={16} />
                          Эл. почта
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-sber-500" />
                    <span>Размещено {new Date(business.createdAt).toLocaleDateString('ru-RU')}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-sber-500" />
                    <span>Обновлено 2 дней назад</span>
                  </div>
                  <div className="flex items-center">
                    <Eye size={16} className="mr-2 text-sber-500" />
                    <span>Просмотрено {business.viewedCount.toLocaleString('ru-RU')} раз</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BusinessDetail;
