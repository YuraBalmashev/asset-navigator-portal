
import { useState } from "react";
import { Eye, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

interface Buyer {
  name: string;
  phone: string;
}

interface AgentAsset {
  id: string;
  title: string;
  price: string;
  seller: string;
  saleType: "Direct" | "Auction" | "Bankruptcy";
  recommendedBuyers: Buyer[];
}

const SalesAgentDashboard = () => {
  const { t } = useLanguage();
  const [selectedAsset, setSelectedAsset] = useState<AgentAsset | null>(null);
  const [showBuyersModal, setShowBuyersModal] = useState(false);

  const agentAssets: AgentAsset[] = [
    {
      id: "biz1",
      title: "Fitness Club in City Center",
      price: "12,500,000 ₽",
      seller: "АО Регионинвест",
      saleType: "Bankruptcy",
      recommendedBuyers: [
        { name: "ИП Сидоров", phone: "+7 911 234-56-78" },
        { name: "Фитнес Групп", phone: "+7 495 123-45-67" }
      ]
    },
    {
      id: "biz2",
      title: "Chain of Cafés",
      price: "24,000,000 ₽",
      seller: "ООО БизнесФонд",
      saleType: "Direct",
      recommendedBuyers: [
        { name: "ООО КофеТайм", phone: "+7 495 999-88-77" },
      ]
    },
    {
      id: "prop1",
      title: "Modern Office Building",
      price: "85,000,000 ₽",
      seller: "ПАО Недвижимость",
      saleType: "Auction",
      recommendedBuyers: [
        { name: "Бизнес Центр Групп", phone: "+7 495 111-22-33" },
        { name: "ООО ОфисИнвест", phone: "+7 916 444-55-66" }
      ]
    }
  ];

  const openBuyersModal = (asset: AgentAsset) => {
    setSelectedAsset(asset);
    setShowBuyersModal(true);
  };

  const closeBuyersModal = () => {
    setShowBuyersModal(false);
    setSelectedAsset(null);
  };

  const getSaleTypeTranslation = (saleType: string) => {
    const key = saleType.toLowerCase();
    return t(`sales_agent.sale_types.${key}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t('sales_agent.title')}</h1>
        <p className="text-gray-600">{t('sales_agent.subtitle')}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('sales_agent.table.asset')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">{t('sales_agent.table.asset')}</th>
                  <th className="text-left py-3 px-4">{t('sales_agent.table.price')}</th>
                  <th className="text-left py-3 px-4">{t('sales_agent.table.seller')}</th>
                  <th className="text-left py-3 px-4">{t('sales_agent.table.sale_type')}</th>
                  <th className="text-left py-3 px-4">{t('sales_agent.table.buyers')}</th>
                  <th className="text-left py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {agentAssets.map((asset) => (
                  <tr key={asset.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <Link
                        to={`/business/${asset.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {asset.title}
                      </Link>
                    </td>
                    <td className="py-3 px-4 font-medium">{asset.price}</td>
                    <td className="py-3 px-4">{asset.seller}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        asset.saleType === 'Direct' ? 'bg-green-100 text-green-800' :
                        asset.saleType === 'Auction' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {getSaleTypeTranslation(asset.saleType)}
                      </span>
                    </td>
                    <td className="py-3 px-4">{asset.recommendedBuyers.length}</td>
                    <td className="py-3 px-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openBuyersModal(asset)}
                        className="flex items-center gap-2"
                      >
                        <Users size={16} />
                        {t('common.view')}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Buyers Modal */}
      {showBuyersModal && selectedAsset && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <div>
                <h2 className="text-xl font-semibold">{t('sales_agent.buyers_modal.title')}</h2>
                <p className="text-gray-600 text-sm">{t('sales_agent.buyers_modal.subtitle')} {selectedAsset.title}</p>
              </div>
              <Button variant="ghost" size="icon" onClick={closeBuyersModal}>
                <X size={20} />
              </Button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {selectedAsset.recommendedBuyers.map((buyer, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                    <Link
                      to="/buyer-not-found"
                      className="block"
                    >
                      <h3 className="font-medium text-blue-600 hover:text-blue-800 mb-2">
                        {buyer.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        <span className="font-medium">{t('sales_agent.buyers_modal.phone')}:</span> {buyer.phone}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end p-6 border-t">
              <Button onClick={closeBuyersModal}>
                {t('sales_agent.buyers_modal.close')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesAgentDashboard;
