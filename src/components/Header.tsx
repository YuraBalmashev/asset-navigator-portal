
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-b-gray-100 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-bold text-2xl text-primary">
            Portal<span className="text-[#9b87f5]">DA</span>
          </Link>
          
          {!isMobile && (
            <nav className="hidden md:flex gap-6">
              <Link to="/properties" className="text-gray-600 hover:text-[#9b87f5] transition-colors">
                Properties
              </Link>
              <Link to="/vehicles" className="text-gray-600 hover:text-[#9b87f5] transition-colors">
                Vehicles
              </Link>
              <Link to="/businesses" className="text-gray-600 hover:text-[#9b87f5] transition-colors">
                Businesses
              </Link>
            </nav>
          )}
        </div>

        {!isMobile && (
          <div className="hidden md:flex relative max-w-md w-full mx-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              className="pl-10 pr-4 py-2 w-full"
              placeholder="Search for properties, vehicles, businesses..."
            />
          </div>
        )}

        <div className="flex items-center gap-2">
          {!isMobile ? (
            <>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/favorites">
                  <Heart size={20} className="text-gray-600" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/notifications">
                  <Bell size={20} className="text-gray-600" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/dashboard">
                  <User size={20} className="text-gray-600" />
                </Link>
              </Button>
            </>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={24} className="text-gray-600" />
            </Button>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="container mx-auto py-4 bg-white border-t border-gray-100">
          <div className="flex items-center relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              className="pl-10 pr-4 py-2 w-full"
              placeholder="Search..."
            />
          </div>
          <nav className="flex flex-col gap-4">
            <Link to="/properties" className="text-gray-600 hover:text-[#9b87f5] py-2 border-b border-gray-100">
              Properties
            </Link>
            <Link to="/vehicles" className="text-gray-600 hover:text-[#9b87f5] py-2 border-b border-gray-100">
              Vehicles
            </Link>
            <Link to="/businesses" className="text-gray-600 hover:text-[#9b87f5] py-2 border-b border-gray-100">
              Businesses
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-[#9b87f5] py-2 border-b border-gray-100">
              My Account
            </Link>
            <Link to="/favorites" className="text-gray-600 hover:text-[#9b87f5] py-2 border-b border-gray-100">
              Favorites
            </Link>
            <Link to="/notifications" className="text-gray-600 hover:text-[#9b87f5] py-2">
              Notifications
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
