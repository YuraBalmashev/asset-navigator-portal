import { Home, Car, Briefcase } from "lucide-react";
import MainLayout from "@/components/layouts/MainLayout";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import FeaturedAssets from "@/components/FeaturedAssets";
import AdvertisingWidget from "@/components/AdvertisingWidget";
import RecommendedBusinessAssets from "@/components/RecommendedBusinessAssets";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import AssetCard from "@/components/AssetCard";

const Index = () => {
  const { t } = useLanguage();
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const categories = [
    {
      title: t('category.properties.title'),
      description: t('category.properties.description'),
      icon: <Home size={24} />,
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/properties",
    },
    {
      title: t('category.vehicles.title'),
      description: t('category.vehicles.description'),
      icon: <Car size={24} />,
      imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/vehicles",
    },
    {
      title: t('category.businesses.title'),
      description: t('category.businesses.description'),
      icon: <Briefcase size={24} />,
      imageUrl: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "/businesses",
    },
  ];

  const businessAssets = [
    {
      id: "biz1",
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
      id: "biz2",
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
      id: "biz3",
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
      isFavorite: false,
    },
    {
      id: "veh1",
      type: "vehicle" as const,
      title: "Mercedes-Benz Sprinter",
      price: 4500000,
      imageUrl: "/lovable-uploads/e78f3c63-648d-490f-9c5f-644a02b9d133.png",
      location: "Москва",
      specs: [
        { label: "Год", value: "2023" },
        { label: "Пробег", value: "25,000 км" },
        { label: "Двигатель", value: "2.1L Дизель" },
        { label: "Цвет", value: "Белый" },
      ],
      isFavorite: false,
    },
  ];

  const handleSearch = (query: string) => {
    const searchQuery = query.toLowerCase();
    
    if (searchQuery.includes("готовый бизнес") || searchQuery.includes("бизнес") || searchQuery.includes("find me a ready business")) {
      setSearchResults(businessAssets.filter(asset => asset.type === "business"));
      setShowSearchResults(true);
    } else if (searchQuery.includes("транспорт") || searchQuery.includes("машин") || searchQuery.includes("автомобиль")) {
      setSearchResults(businessAssets.filter(asset => asset.type === "vehicle"));
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-[#F1FAF1] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t('home.title')}
          </h1>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            {t('home.subtitle')}
          </p>
          
          <SearchBar 
            placeholder={t('home.search.placeholder')}
            onSearch={handleSearch}
            className="mb-8"
          />

          {showSearchResults && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Результаты поиска</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {searchResults.map((item) => (
                  <AssetCard
                    key={item.id}
                    {...item}
                    isFavorite={favorites[item.id] || false}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                imageUrl={category.imageUrl}
                link={category.link}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <RecommendedBusinessAssets assets={businessAssets} />
        
        <AdvertisingWidget className="mb-12" />
        
        <FeaturedAssets />
      </div>
    </MainLayout>
  );
};

export default Index;
