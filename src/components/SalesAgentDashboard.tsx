
import { useState } from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

interface RecommendedBuyer {
  name: string;
  phone: string;
}

interface AgentAsset {
  id: string;
  title: string;
  price: string;
  seller: string;
  saleType: "Direct" | "Auction" | "Bankruptcy";
  recommendedBuyers: RecommendedBuyer[];
}

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
    id: "veh1",
    title: "BMW M5 VII G90",
    price: "26,500,000 ₽",
    seller: "ООО Автопремиум",
    saleType: "Auction",
    recommendedBuyers: [
      { name: "Петров А.В.", phone: "+7 903 555-77-88" },
      { name: "ООО Элитавто", phone: "+7 495 777-33-22" }
    ]
  }
];

const SalesAgentDashboard = () => {
  const [selectedAsset, setSelectedAsset] = useState<AgentAsset | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewBuyers = (asset: AgentAsset) => {
    setSelectedAsset(asset);
    setIsModalOpen(true);
  };

  const getAssetLink = (id: string) => {
    // Determine asset type based on ID prefix
    if (id.startsWith('biz')) return `/business/${id}`;
    if (id.startsWith('veh')) return `/vehicle/${id}`;
    return `/property/${id}`;
  };

  const getSaleTypeColor = (saleType: string) => {
    switch (saleType) {
      case "Direct": return "text-green-600 bg-green-50";
      case "Auction": return "text-blue-600 bg-blue-50";
      case "Bankruptcy": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sales Agent Dashboard</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset Title</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Seller</TableHead>
              <TableHead>Sale Type</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agentAssets.map((asset) => (
              <TableRow 
                key={asset.id} 
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => window.location.href = getAssetLink(asset.id)}
              >
                <TableCell className="font-medium">{asset.title}</TableCell>
                <TableCell>{asset.price}</TableCell>
                <TableCell>{asset.seller}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSaleTypeColor(asset.saleType)}`}>
                    {asset.saleType}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewBuyers(asset);
                    }}
                  >
                    <Eye size={16} className="mr-1" />
                    Buyers
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Recommended Buyers for {selectedAsset?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            {selectedAsset?.recommendedBuyers.map((buyer, index) => (
              <div 
                key={index}
                className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={() => window.location.href = '/buyer-not-found'}
              >
                <div className="font-medium">{buyer.name}</div>
                <div className="text-sm text-gray-600">{buyer.phone}</div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SalesAgentDashboard;
