
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share, Phone, Mail, MapPin, Calendar, Home, Clock, Eye } from "lucide-react";
import MainLayout from "@/components/layouts/MainLayout";
import ImageGallery from "@/components/ImageGallery";
import AssetCard from "@/components/AssetCard";
import { useLanguage } from "@/contexts/LanguageContext";

// This would come from an API in a real application
const mockPropertyDetails = {
  id: "prop1",
  type: "property",
  title: "Modern 3-Bedroom Apartment with City View",
  price: 350000,
  location: "Moscow City, Presnensky District",
  description: "This luxurious apartment offers a spacious living area with panoramic views of Moscow City. The modern design includes high-end finishes, integrated appliances, and smart home features. The apartment is located in a prestigious building with 24/7 security, concierge service, a fitness center, and underground parking.",
  features: [
    "3 Bedrooms",
    "2 Bathrooms",
    "120 m² Living Area",
    "15th Floor",
    "Built in 2019",
    "24/7 Security",
    "Underground Parking",
    "Fitness Center",
    "Central Heating",
    "Air Conditioning",
    "Smart Home System",
  ],
  images: [
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1617098900661-9479d34c2cea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  ],
  specifications: {
    area: "120 m²",
    rooms: "3",
    bathrooms: "2",
    floor: "15/25",
    buildYear: "2019",
    condition: "Excellent",
    parking: "Underground, 1 space",
    heating: "Central",
    balcony: "Yes, 2",
    elevator: "Yes",
  },
  sellerInfo: {
    name: "Sberbank Real Estate Division",
    phone: "+7 (800) 123-45-67",
    email: "realestate@sberbank.ru",
  },
  mapCoordinates: {
    lat: 55.7558,
    lng: 37.6173,
  },
  createdAt: "2023-09-15",
  viewedCount: 578,
};

// Similar properties for recommendations
const similarProperties = [
  {
    id: "sim1",
    type: "property" as const,
    title: "Elegant 3-Bedroom Apartment",
    price: 330000,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Moscow City Center",
    specs: [
      { label: "Area", value: "110 m²" },
      { label: "Rooms", value: "3" },
      { label: "Floor", value: "12/20" },
      { label: "Built", value: "2020" },
    ],
    isFavorite: false,
  },
  {
    id: "sim2",
    type: "property" as const,
    title: "Modern City Apartment",
    price: 295000,
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Moscow",
    specs: [
      { label: "Area", value: "95 m²" },
      { label: "Rooms", value: "2" },
      { label: "Floor", value: "8/16" },
      { label: "Built", value: "2018" },
    ],
    isFavorite: false,
  },
  {
    id: "sim3",
    type: "property" as const,
    title: "Premium Riverside Loft",
    price: 420000,
    imageUrl: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Moscow River View",
    specs: [
      { label: "Area", value: "155 m²" },
      { label: "Rooms", value: "4" },
      { label: "Floor", value: "20/25" },
      { label: "Built", value: "2021" },
    ],
    isFavorite: true,
  },
];

const PropertyDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const property = mockPropertyDetails; // In a real app, we would fetch this based on the ID
  const { t } = useLanguage();
  
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    sim3: true,
  });

  const toggleFavorite = (id: string) => {
    if (id === property.id) {
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
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={16} className="mr-1 text-sber-500" />
                <span>{property.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-sber-500 to-sber-600 inline-block text-transparent bg-clip-text">
                  ${property.price.toLocaleString()}
                </h2>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => toggleFavorite(property.id)}
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
            
            <ImageGallery images={property.images} />
            
            <div className="mt-8">
              <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="details" className={activeTab === "details" ? "bg-sber-500 text-white" : ""}>
                    {t('property.details')}
                  </TabsTrigger>
                  <TabsTrigger value="features" className={activeTab === "features" ? "bg-sber-500 text-white" : ""}>
                    {t('property.features')}
                  </TabsTrigger>
                  <TabsTrigger value="map" className={activeTab === "map" ? "bg-sber-500 text-white" : ""}>
                    {t('property.map')}
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{t('property.description')}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {property.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{t('property.specifications')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                      <SpecRow label={t('property.spec.area')} value={property.specifications.area} />
                      <SpecRow label={t('property.spec.rooms')} value={property.specifications.rooms} />
                      <SpecRow label={t('property.spec.bathrooms')} value={property.specifications.bathrooms} />
                      <SpecRow label={t('property.spec.floor')} value={property.specifications.floor} />
                      <SpecRow label={t('property.spec.built')} value={property.specifications.buildYear} />
                      <SpecRow label={t('property.spec.condition')} value={property.specifications.condition} />
                      <SpecRow label={t('property.spec.parking')} value={property.specifications.parking} />
                      <SpecRow label={t('property.spec.heating')} value={property.specifications.heating} />
                      <SpecRow label={t('property.spec.balcony')} value={property.specifications.balcony} />
                      <SpecRow label={t('property.spec.elevator')} value={property.specifications.elevator} />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="features" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{t('property.features.title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {property.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-sber-50 transition-colors"
                        >
                          <div className="text-sber-500 mr-2">
                            <Home size={18} />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="map" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{t('property.location')}</h3>
                    {/* In a real app, this would be replaced with an actual map integration */}
                    <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin size={48} className="mx-auto mb-2 text-sber-500" />
                        <p className="font-medium">Map View</p>
                        <p>Property is located at coordinates:</p>
                        <p>Lat: {property.mapCoordinates.lat}, Lng: {property.mapCoordinates.lng}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">{t('property.similar')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarProperties.map((prop) => (
                  <AssetCard
                    key={prop.id}
                    {...prop}
                    isFavorite={favorites[prop.id] || false}
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
                <h3 className="text-lg font-semibold mb-4">{t('property.seller.info')}</h3>
                <div className="text-gray-700 mb-6">
                  <p className="font-medium">{property.sellerInfo.name}</p>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-sber-400 to-sber-600 hover:from-sber-500 hover:to-sber-700 text-white gap-2 shadow-md hover:shadow-lg transition-all">
                    <Phone size={16} /> {t('property.seller.call')}
                  </Button>
                  <Button variant="outline" className="w-full gap-2 border-sber-500 text-sber-600 hover:bg-sber-50">
                    <Mail size={16} /> {t('property.seller.email')}
                  </Button>
                </div>
                
                <div className="mt-8 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-sber-500" />
                    <span>{t('property.listed')} {new Date(property.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-sber-500" />
                    <span>{t('property.updated')} 2 {t('property.days.ago')}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye size={16} className="mr-2 text-sber-500" />
                    <span>{t('property.viewed')} {property.viewedCount} {t('property.times')}</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-sber-50 rounded-lg">
                  <h4 className="font-semibold mb-2">{t('property.financing')}</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {t('property.financing.description')}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-sber-600 border-sber-500 hover:bg-sber-100"
                  >
                    {t('property.financing.calculate')}
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

export default PropertyDetail;
