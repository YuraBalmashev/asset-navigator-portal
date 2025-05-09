
import { Toaster } from "@/components/ui/toaster";
import { NavigationMenu } from "../ui/navigation-menu";
import Footer from "../Footer";
import Header from "../Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default MainLayout;
