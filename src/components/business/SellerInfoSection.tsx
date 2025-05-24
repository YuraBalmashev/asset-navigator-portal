
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Calendar, Clock, Eye } from "lucide-react";
import CreditPotentialSection from "./CreditPotentialSection";

interface SellerInfo {
  name: string;
  phone: string;
  email: string;
}

interface SellerInfoSectionProps {
  sellerInfo: SellerInfo;
  createdAt: string;
  viewedCount: number;
  creditAmount: number;
}

const SellerInfoSection = ({ sellerInfo, createdAt, viewedCount, creditAmount }: SellerInfoSectionProps) => {
  return (
    <Card className="sticky top-24">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Информация о продавце</h3>
        <div className="text-gray-700 mb-6">
          <p className="font-medium">{sellerInfo.name}</p>
        </div>
        
        <div className="space-y-3 mb-6">
          <Button className="w-full bg-gradient-to-r from-sber-400 to-sber-600 hover:from-sber-500 hover:to-sber-700 text-white gap-2 shadow-md hover:shadow-lg transition-all">
            <Phone size={16} /> Позвонить продавцу
          </Button>
          <Button variant="outline" className="w-full gap-2 border-sber-500 text-sber-600 hover:bg-sber-50">
            <Mail size={16} /> Написать продавцу
          </Button>
        </div>

        <CreditPotentialSection creditAmount={creditAmount} />
        
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-sber-500" />
            <span>Размещено {new Date(createdAt).toLocaleDateString('ru-RU')}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-sber-500" />
            <span>Обновлено 2 дней назад</span>
          </div>
          <div className="flex items-center">
            <Eye size={16} className="mr-2 text-sber-500" />
            <span>Просмотрено {viewedCount.toLocaleString('ru-RU')} раз</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SellerInfoSection;
