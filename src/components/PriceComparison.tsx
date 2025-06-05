
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface PriceComparisonProps {
  currentPrice: number;
  averagePrice: number;
  priceRange: {
    min: number;
    max: number;
  };
  type: "property" | "business" | "vehicle";
}

const PriceComparison = ({ currentPrice, averagePrice, priceRange, type }: PriceComparisonProps) => {
  const priceLabel = type === "property" ? "квартир" : type === "business" ? "бизнесов" : "автомобилей";
  const difference = currentPrice - averagePrice;
  const percentageDiff = ((difference / averagePrice) * 100).toFixed(1);

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Сравнение цен</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Текущая цена</p>
            <p className="text-xl font-semibold text-sber-600">
              {currentPrice.toLocaleString('ru-RU')} ₽
            </p>
          </div>
          
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Средняя цена похожих {priceLabel}</p>
            <p className="text-xl font-semibold">
              {averagePrice.toLocaleString('ru-RU')} ₽
            </p>
            <div className="flex items-center justify-center mt-1">
              {difference > 0 ? (
                <TrendingUp size={16} className="text-red-500 mr-1" />
              ) : (
                <TrendingDown size={16} className="text-green-500 mr-1" />
              )}
              <span className={`text-sm ${difference > 0 ? 'text-red-500' : 'text-green-500'}`}>
                {difference > 0 ? '+' : ''}{percentageDiff}%
              </span>
            </div>
          </div>
          
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Диапазон цен</p>
            <p className="text-lg font-semibold">
              {priceRange.min.toLocaleString('ru-RU')} - {priceRange.max.toLocaleString('ru-RU')} ₽
            </p>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <p>
            {difference > 0 
              ? `Цена на ${Math.abs(parseFloat(percentageDiff))}% выше средней по рынку`
              : difference < 0
              ? `Цена на ${Math.abs(parseFloat(percentageDiff))}% ниже средней по рынку`
              : 'Цена соответствует среднерыночной'
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceComparison;
