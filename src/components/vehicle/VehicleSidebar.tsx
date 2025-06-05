
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar, Clock, Eye } from "lucide-react";

interface VehicleSidebarProps {
  sellerInfo: {
    name: string;
    phone: string;
    email: string;
  };
  createdAt: string;
  viewedCount: number;
}

const VehicleSidebar = ({ sellerInfo, createdAt, viewedCount }: VehicleSidebarProps) => {
  return (
    <Card className="sticky top-24">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Информация о продавце</h3>
        <div className="text-gray-700 mb-6">
          <p className="font-medium">{sellerInfo.name}</p>
        </div>
        
        <div className="space-y-3">
          <Button className="w-full bg-gradient-to-r from-sber-400 to-sber-600 hover:from-sber-500 hover:to-sber-700 text-white gap-2 shadow-md hover:shadow-lg transition-all">
            <Phone size={16} /> Позвонить
          </Button>
          <Button variant="outline" className="w-full gap-2 border-sber-500 text-sber-600 hover:bg-sber-50">
            <Mail size={16} /> Написать
          </Button>
        </div>
        
        <div className="mt-8 space-y-3 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-sber-500" />
            <span>Размещено {new Date(createdAt).toLocaleDateString('ru-RU')}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-sber-500" />
            <span>Обновлено 5 дней назад</span>
          </div>
          <div className="flex items-center">
            <Eye size={16} className="mr-2 text-sber-500" />
            <span>Просмотрено {viewedCount.toLocaleString('ru-RU')} раз</span>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-sber-50 rounded-lg">
          <div className="mb-3">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-sber-500 to-sber-600 inline-block text-transparent bg-clip-text">
              <span className="block">Автокредит:</span>
              <span className="block">от 8.9% годовых</span>
            </h2>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Получите автокредит на выгодных условиях от Сбербанка.
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-sber-600 border-sber-500 hover:bg-sber-100"
          >
            Рассчитать кредит
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleSidebar;
