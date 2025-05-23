
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

const SearchBar = ({ 
  placeholder, 
  onSearch,
  className = ""
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  const searchPlaceholder = placeholder || t('home.search.placeholder');

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`relative flex w-full max-w-3xl mx-auto ${className}`}
    >
      <div className="relative w-full">
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sber-500" 
          size={18} 
        />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-24 py-6 h-14 w-full text-base rounded-lg border-gray-200 shadow-sm focus:border-sber-500 focus:ring-1 focus:ring-sber-500 transition-all"
          placeholder={searchPlaceholder}
        />
      </div>
      <Button 
        type="submit"
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-sber-400 to-sber-600 hover:from-sber-500 hover:to-sber-700 text-white h-10 shadow-md hover:shadow-lg transition-all"
      >
        {t('home.search.button')}
      </Button>
    </form>
  );
};

export default SearchBar;
