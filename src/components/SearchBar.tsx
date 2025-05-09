
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

const SearchBar = ({ 
  placeholder = "What are you looking for? E.g., 'Apartment in Moscow with 2 bedrooms'", 
  onSearch,
  className = ""
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

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
          placeholder={placeholder}
        />
      </div>
      <Button 
        type="submit"
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-sber-400 to-sber-600 hover:from-sber-500 hover:to-sber-700 text-white h-10 shadow-md hover:shadow-lg transition-all"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
