
import { Home, Car, Briefcase } from "lucide-react";
import MainLayout from "@/components/layouts/MainLayout";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import FeaturedAssets from "@/components/FeaturedAssets";
import Recommendations from "@/components/Recommendations";
import PromoBanner from "@/components/PromoBanner";
import AdvertisingWidget from "@/components/AdvertisingWidget";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

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
            className="mb-8"
          />

          <PromoBanner
            title={t('promo.property.title')}
            subtitle={t('promo.property.subtitle')}
            description={t('promo.property.description')}
            buttonText={t('promo.property.button')}
            buttonLink="/smart-search"
            imageUrl="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            className="mb-12"
          />

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
        {/* Integrated Advertising Widget */}
        <AdvertisingWidget className="mb-12" />
        
        <FeaturedAssets />
        
        <Recommendations />

        <PromoBanner
          title={t('promo.financing.title')}
          subtitle={t('promo.financing.subtitle')}
          description={t('promo.financing.description')}
          buttonText={t('promo.financing.button')}
          buttonLink="/financing"
          imageUrl="https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          colorGradient="linear-gradient(90deg, rgba(42,157,80,0.85) 0%, rgba(72,199,116,0.7) 100%)"
          variant="secondary"
        />
      </div>
    </MainLayout>
  );
};

export default Index;
