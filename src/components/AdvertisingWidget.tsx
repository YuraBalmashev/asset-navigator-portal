
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdvertisingWidgetProps {
  className?: string;
}

const AdvertisingWidget = ({ className }: AdvertisingWidgetProps) => {
  // Mock data for the ads - in a real application, this would come from an API
  const ads = [
    {
      id: "ad1",
      title: "Special Financing Rates",
      description: "Get pre-approved with rates as low as 4.5% on premium properties",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      ctaText: "Apply Now",
      ctaLink: "/financing",
      backgroundColor: "#F0F9F0",
      textColor: "#333",
    },
    {
      id: "ad2",
      title: "Corporate Asset Solutions",
      description: "Tailored offerings for businesses seeking to invest in commercial properties",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      ctaText: "Learn More",
      ctaLink: "/corporate",
      backgroundColor: "#E6F4E6",
      textColor: "#333",
    },
    {
      id: "ad3",
      title: "Premium Vehicle Collection",
      description: "Exclusive selection of luxury vehicles at competitive prices",
      imageUrl: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      ctaText: "Browse Collection",
      ctaLink: "/premium-vehicles",
      backgroundColor: "#DFF2DF",
      textColor: "#333",
    },
  ];

  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const currentAd = ads[currentAdIndex];

  const nextAd = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
  };

  const prevAd = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
  };

  return (
    <div className={cn("w-full py-6", className)}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Featured Offers</h2>
        <div className="text-xs text-gray-500">Advertisement</div>
      </div>
      
      <Card 
        className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
        style={{ backgroundColor: currentAd.backgroundColor }}
      >
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div 
              className="w-full md:w-1/2 h-48 md:h-auto bg-center bg-cover relative"
              style={{ backgroundImage: `url(${currentAd.imageUrl})` }}
            >
              <button
                onClick={prevAd}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-sber-600 p-1 rounded-full hover:bg-white transition-colors"
                aria-label="Previous ad"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextAd}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-sber-600 p-1 rounded-full hover:bg-white transition-colors"
                aria-label="Next ad"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between" style={{ color: currentAd.textColor }}>
              <div>
                <h3 className="text-xl font-semibold mb-2">{currentAd.title}</h3>
                <p className="mb-4">{currentAd.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-sber-400 to-sber-600 hover:from-sber-500 hover:to-sber-700 text-white shadow-md hover:shadow-lg transition-all"
                >
                  <a href={currentAd.ctaLink} className="inline-flex items-center">
                    {currentAd.ctaText} <ExternalLink size={16} className="ml-2" />
                  </a>
                </Button>
                
                <div className="flex space-x-2">
                  {ads.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAdIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        currentAdIndex === index ? "bg-sber-500" : "bg-gray-300"
                      }`}
                      aria-label={`Go to ad ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvertisingWidget;
