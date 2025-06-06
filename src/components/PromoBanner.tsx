import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PromoBannerProps {
  title: string;
  subtitle: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  colorGradient?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const PromoBanner = ({
  title, // Ensure this prop is passed and used correctly
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageUrl,
  colorGradient = "linear-gradient(102.3deg, rgba(42,157,80,0.9) 0%, rgba(72,199,116,0.8) 100%)",
  variant = "primary",
  className = "",
}: PromoBannerProps) => {
  return (
    <Card className={`overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div 
        className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between"
        style={{
          background: `${colorGradient}, url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="z-10 md:w-2/3 text-white">
          <h3 className="text-xl md:text-2xl font-medium mb-1 animate-fade-in">{subtitle}</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">{title}</h2>
          {description && (
            <p className="mb-6 max-w-lg animate-fade-in">{description}</p>
          )}
          <Button
            asChild
            className={`animate-scale-in ${
              variant === "primary" 
                ? "bg-white text-sber-600 hover:bg-gray-100 hover:text-sber-700 transition-colors" 
                : "bg-gradient-to-r from-sber-400 to-sber-600 text-white hover:from-sber-500 hover:to-sber-700 shadow-md hover:shadow-lg"
            }`}
          >
            <Link to="https://www.sberbank.com/ru/person/credits/money/avtokredit">{buttonText}</Link>
          </Button>
        </div>
        <div className="mt-6 md:mt-0 z-10 md:w-1/3">
          {/* Additional content like an image or icon can go here */}
        </div>
      </div>
    </Card>
  );
};

export default PromoBanner;
