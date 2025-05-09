
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  link: string;
}

const CategoryCard = ({ title, description, icon, imageUrl, link }: CategoryCardProps) => {
  return (
    <Link to={link}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer h-full rounded-lg border border-gray-100">
        <div 
          className="h-48 bg-cover bg-center" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-white bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-full">{icon}</div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
          </div>
        </div>
        <CardContent className="p-5">
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
