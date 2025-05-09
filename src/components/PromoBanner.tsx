
import { Card, CardContent } from "@/components/ui/card";
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
}

const PromoBanner = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageUrl,
  colorGradient = "linear-gradient(102.3deg, rgba(147,39,143,0.8) 0%, rgba(234,172,232,0.8) 100%)",
  variant = "primary",
}: PromoBannerProps) => {
  return (
    <Card className="overflow-hidden">
      <div 
        className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between"
        style={{
          backgroundImage: `${colorGradient}, url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="z-10 md:w-2/3 text-white">
          <h3 className="text-xl md:text-2xl font-medium mb-1">{subtitle}</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="mb-6 max-w-lg">{description}</p>
          )}
          <Button 
            asChild 
            variant={variant === "primary" ? "default" : "secondary"}
            className={
              variant === "primary" 
                ? "bg-white text-[#9b87f5] hover:bg-gray-100" 
                : "bg-[#9b87f5] text-white hover:bg-[#7E69AB]"
            }
          >
            <Link to={buttonLink}>{buttonText}</Link>
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
