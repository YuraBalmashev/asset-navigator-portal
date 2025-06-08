
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Bell, Heart, Eye, Settings, List, Edit } from "lucide-react";
import MainLayout from "@/components/layouts/MainLayout";
import AssetCard from "@/components/AssetCard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState({
    firstName: "Юрий",
    lastName: "Б.",
    email: "example@example.com",
    phone: "+7 (923) 456-78-90",
    notifications: {
      email: true,
      sms: false,
      app: true,
    }
  });

  // Mock favorite items
  const favoriteItems = [
    {
      id: "fav1",
      type: "property" as const,
      title: "Modern 2-Bedroom Apartment",
      price: 125000,
      imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "Moscow City Center",
      specs: [
        { label: "Area", value: "78 m²" },
        { label: "Rooms", value: "2" },
        { label: "Floor", value: "12/24" },
        { label: "Built", value: "2019" },
      ],
      isFavorite: true,
    },
    {
      id: "fav2",
      type: "vehicle" as const,
      title: "Audi Q7 Premium Plus",
      price: 45000,
      imageUrl: "https://images.unsplash.com/photo-1581362508255-e4e31556f06b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "Moscow",
      specs: [
        { label: "Year", value: "2021" },
        { label: "Mileage", value: "25,000 km" },
        { label: "Engine", value: "3.0L V6" },
        { label: "Color", value: "Black" },
      ],
      isFavorite: true,
    },
    {
      id: "fav3",
      type: "business" as const,
      title: "Restaurant in City Center",
      price: 380000,
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "Moscow",
      specs: [
        { label: "Seats", value: "120" },
        { label: "Area", value: "350 m²" },
        { label: "Turnover", value: "$30K/mo" },
        { label: "Staff", value: "15" },
      ],
      isFavorite: true,
    },
  ];

  // Mock recently viewed items
  const recentlyViewedItems = [
    {
      id: "rv1",
      type: "property" as const,
      title: "Luxury Penthouse with View",
      price: 45000000,
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "St. Petersburg",
      specs: [
        { label: "Area", value: "210 m²" },
        { label: "Rooms", value: "4" },
        { label: "Floor", value: "15/15" },
        { label: "Built", value: "2021" },
      ],
      isFavorite: false,
    },
    {
      id: "rv2",
      type: "vehicle" as const,
      title: "Mercedes-Benz E-Class",
      price: 5200000,
      imageUrl: "https://images.unsplash.com/photo-1549399542-7e8559342222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "St. Petersburg",
      specs: [
        { label: "Year", value: "2020" },
        { label: "Mileage", value: "32,000 km" },
        { label: "Engine", value: "2.0L I4" },
        { label: "Color", value: "Silver" },
      ],
      isFavorite: false,
    },
    {
      id: "rv3",
      type: "property" as const,
      title: "Suburban Family House",
      price: 96000000,
      imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      location: "Moscow Oblast",
      specs: [
        { label: "Area", value: "180 m²" },
        { label: "Rooms", value: "5" },
        { label: "Land", value: "1200 m²" },
        { label: "Built", value: "2018" },
      ],
      isFavorite: false,
    },
  ];

  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    fav1: true,
    fav2: true,
    fav3: true,
  });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    alert("Profile updated successfully!");
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Account</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                    <User size={48} className="text-gray-500" />
                  </div>
                  <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
                  <p className="text-gray-500">{user.email}</p>
                </div>
                
                <nav className="space-y-1">
                  <Button 
                    variant={activeTab === "profile" ? "default" : "ghost"} 
                    className={`w-full justify-start ${activeTab === "profile" ? "bg-[#9b87f5]" : ""}`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <User size={18} className="mr-2" />
                    Profile
                  </Button>
                  <Button 
                    variant={activeTab === "favorites" ? "default" : "ghost"} 
                    className={`w-full justify-start ${activeTab === "favorites" ? "bg-[#9b87f5]" : ""}`}
                    onClick={() => setActiveTab("favorites")}
                  >
                    <Heart size={18} className="mr-2" />
                    Favorites
                  </Button>
                  <Button 
                    variant={activeTab === "history" ? "default" : "ghost"} 
                    className={`w-full justify-start ${activeTab === "history" ? "bg-[#9b87f5]" : ""}`}
                    onClick={() => setActiveTab("history")}
                  >
                    <Eye size={18} className="mr-2" />
                    Recently Viewed
                  </Button>
                  <Button 
                    variant={activeTab === "settings" ? "default" : "ghost"} 
                    className={`w-full justify-start ${activeTab === "settings" ? "bg-[#9b87f5]" : ""}`}
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings size={18} className="mr-2" />
                    Settings
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Manage your personal information and contact details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          value={user.firstName} 
                          onChange={(e) => setUser({...user, firstName: e.target.value})} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          value={user.lastName} 
                          onChange={(e) => setUser({...user, lastName: e.target.value})} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={user.email} 
                          onChange={(e) => setUser({...user, email: e.target.value})} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input 
                          id="phone" 
                          value={user.phone} 
                          onChange={(e) => setUser({...user, phone: e.target.value})} 
                        />
                      </div>
                    </div>
                    <Button type="submit" className="mt-6 bg-[#9b87f5] hover:bg-[#7E69AB]">
                      Save Changes
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
            
            {/* Favorites Tab */}
            {activeTab === "favorites" && (
              <Card>
                <CardHeader>
                  <CardTitle>Favorites</CardTitle>
                  <CardDescription>
                    Items you've saved to your favorites collection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteItems.map((item) => (
                      <AssetCard
                        key={item.id}
                        {...item}
                        isFavorite={favorites[item.id] || false}
                        onToggleFavorite={toggleFavorite}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* History Tab */}
            {activeTab === "history" && (
              <Card>
                <CardHeader>
                  <CardTitle>Recently Viewed</CardTitle>
                  <CardDescription>
                    Items you've recently viewed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recentlyViewedItems.map((item) => (
                      <AssetCard
                        key={item.id}
                        {...item}
                        isFavorite={favorites[item.id] || false}
                        onToggleFavorite={toggleFavorite}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Settings Tab */}
            {activeTab === "settings" && (
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>
                    Manage how you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-gray-500">Receive notifications via email</p>
                    </div>
                    <div className="flex items-center h-6">
                      <input
                        id="email-notifications"
                        type="checkbox"
                        checked={user.notifications.email}
                        onChange={(e) => 
                          setUser({
                            ...user,
                            notifications: {
                              ...user.notifications,
                              email: e.target.checked
                            }
                          })
                        }
                        className="w-5 h-5 text-[#9b87f5] border-gray-300 rounded focus:ring-[#9b87f5]"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">SMS Notifications</h3>
                      <p className="text-sm text-gray-500">Receive notifications via SMS</p>
                    </div>
                    <div className="flex items-center h-6">
                      <input
                        id="sms-notifications"
                        type="checkbox"
                        checked={user.notifications.sms}
                        onChange={(e) => 
                          setUser({
                            ...user,
                            notifications: {
                              ...user.notifications,
                              sms: e.target.checked
                            }
                          })
                        }
                        className="w-5 h-5 text-[#9b87f5] border-gray-300 rounded focus:ring-[#9b87f5]"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">App Notifications</h3>
                      <p className="text-sm text-gray-500">Receive in-app notifications</p>
                    </div>
                    <div className="flex items-center h-6">
                      <input
                        id="app-notifications"
                        type="checkbox"
                        checked={user.notifications.app}
                        onChange={(e) => 
                          setUser({
                            ...user,
                            notifications: {
                              ...user.notifications,
                              app: e.target.checked
                            }
                          })
                        }
                        className="w-5 h-5 text-[#9b87f5] border-gray-300 rounded focus:ring-[#9b87f5]"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="mt-6 bg-[#9b87f5] hover:bg-[#7E69AB]">
                    Save Notification Preferences
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
