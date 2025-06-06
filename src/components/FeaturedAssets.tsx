
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AssetCard from "./AssetCard";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data - in a real app this would come from an API
const mockProperties = [
  {
    id: "prop1",
    type: "property" as const,
    title: "Modern 2-Bedroom Apartment",
    price: 125000,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Moscow City Center",
    specs: [
      { label: "Area", value: "78 m²" },
      { label: "Rooms", value: "2" },
      { label: "Floor", value: "12/24" },
      { label: "Built", value: "2019" },
    ],
    isFavorite: false,
  },
  {
    id: "prop2",
    type: "property" as const,
    title: "Luxury Penthouse with View",
    price: 450000,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "St. Petersburg",
    specs: [
      { label: "Area", value: "210 m²" },
      { label: "Rooms", value: "4" },
      { label: "Floor", value: "15/15" },
      { label: "Built", value: "2021" },
    ],
    isFavorite: true,
  },
  {
    id: "prop3",
    type: "property" as const,
    title: "Suburban Family House",
    price: 320000,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Moscow Oblast",
    specs: [
      { label: "Area", value: "180 m²" },
      { label: "Rooms", value: "5" },
      { label: "Land", value: "1200 m²" },
      { label: "Built", value: "2018" },
    ],
    isFavorite: false,
  },
];

const mockVehicles = [
  {
    id: "car1",
    type: "vehicle" as const,
    title: "Audi Q7 Premium Plus",
    price: 45000,
    imageUrl: "https://images.unsplash.com/photo-1581362508255-e4e31556f06b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Moscow",
    specs: [
      { label: "Year", value: "2021" },
      { label: "Mileage", value: "25,000 km" },
      { label: "Engine", value: "3.0L V6" },
      { label: "Color", value: "Black" },
    ],
    isFavorite: true,
  },
  {
    id: "car2",
    type: "vehicle" as const,
    title: "Mercedes-Benz E-Class",
    price: 52000,
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e8559342222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "St. Petersburg",
    specs: [
      { label: "Year", value: "2020" },
      { label: "Mileage", value: "32,000 km" },
      { label: "Engine", value: "2.0L I4" },
      { label: "Color", value: "Silver" },
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
  {
    id: "car3",
    type: "vehicle" as const,
    title: "BMW X5 xDrive",
    price: 63000,
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Kazan",
    specs: [
      { label: "Year", value: "2022" },
      { label: "Mileage", value: "18,500 km" },
      { label: "Engine", value: "3.0L I6" },
      { label: "Color", value: "Blue" },
    ],
    isFavorite: false,
  },
];

const mockBusinesses = [
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
    id: "biz2_old",
    type: "business" as const,
    title: "Restaurant in City Center",
    price: 380000,
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Moscow",
    specs: [
      { label: "Seats", value: "120" },
      { label: "Area", value: "350 m²" },
      { label: "Turnover", value: "$30K/mo" },
      { label: "Staff", value: "15" },
    ],
    isFavorite: true,
  },
  {
    id: "biz3_old",
    type: "business" as const,
    title: "Retail Store Chain",
    price: 850000,
    imageUrl: "https://images.unsplash.com/photo-1604719312566-8912e9c8a47a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Multiple Cities",
    specs: [
      { label: "Stores", value: "8" },
      { label: "Staff", value: "45" },
      { label: "Turnover", value: "$150K/mo" },
      { label: "Est.", value: "2012" },
    ],
    isFavorite: false,
  },
  {
    id: "biz1_old",
    type: "business" as const,
    title: "Hotel Complex by the Sea",
    price: 1200000,
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Sochi",
    specs: [
      { label: "Rooms", value: "45" },
      { label: "Area", value: "2800 m²" },
      { label: "Land", value: "5000 m²" },
      { label: "Built", value: "2015" },
    ],
    isFavorite: false,
  },
];

const FeaturedAssets = () => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    prop2: true,
    car1: true,
    biz2_old: true,
  });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Featured Assets</h2>
      
      <Tabs defaultValue="properties">
        <TabsList className="mb-6">
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
          <TabsTrigger value="businesses">Businesses</TabsTrigger>
        </TabsList>
        
        <TabsContent value="properties" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProperties.map((property) => (
              <AssetCard
                key={property.id}
                {...property}
                isFavorite={favorites[property.id] || false}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/properties">
                View All Properties <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="vehicles" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockVehicles.map((vehicle) => (
              <AssetCard
                key={vehicle.id}
                {...vehicle}
                isFavorite={favorites[vehicle.id] || false}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/vehicles">
                View All Vehicles <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="businesses" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockBusinesses.map((business) => (
              <AssetCard
                key={business.id}
                {...business}
                isFavorite={favorites[business.id] || false}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/businesses">
                View All Businesses <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeaturedAssets;
