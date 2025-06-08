
import { Home, Car, Briefcase } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import { useLanguage } from "@/contexts/LanguageContext";

const GuestView = () => {
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
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        {t('home.title')}
      </h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        {t('home.subtitle')}
      </p>
      
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
  );
};

export default GuestView;
