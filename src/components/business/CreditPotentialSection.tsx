
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, Mail, MessageCircle } from "lucide-react";

interface CreditPotentialSectionProps {
  creditAmount: number;
}

const CreditPotentialSection = ({ creditAmount }: CreditPotentialSectionProps) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactOption = (option: string) => {
    console.log(`Contact option selected: ${option}`);
    setIsContactModalOpen(false);
  };

  return (
    <div className="border-t pt-6 mb-6">
      <div className="mb-4">
        <p className="text-lg font-semibold text-sber-600 mb-2">
          Ваш кредитный потенциал: {creditAmount.toLocaleString('ru-RU')} ₽
        </p>
      </div>
      
      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogTrigger asChild>
          <Button className="w-full bg-gradient-to-r from-sber-400 to-sber-600 hover:from-sber-500 hover:to-sber-700 text-white shadow-md hover:shadow-lg transition-all">
            Узнать условия
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-semibold text-gray-900 mb-4">
              Ваш клиентский менеджер свяжется с вами в ближайшее время. Какой из способов связи вам удобнее?
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Button 
              onClick={() => handleContactOption('call')}
              className="w-full bg-gradient-to-r from-sber-400 to-sber-600 hover:from-sber-500 hover:to-sber-700 text-white gap-2"
            >
              <Phone size={16} />
              Звонок
            </Button>
            <Button 
              onClick={() => handleContactOption('messenger')}
              variant="outline" 
              className="w-full gap-2 border-sber-500 text-sber-600 hover:bg-sber-50"
            >
              <MessageCircle size={16} />
              Мессенджер
            </Button>
            <Button 
              onClick={() => handleContactOption('email')}
              variant="outline" 
              className="w-full gap-2 border-sber-500 text-sber-600 hover:bg-sber-50"
            >
              <Mail size={16} />
              Эл. почта
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreditPotentialSection;
