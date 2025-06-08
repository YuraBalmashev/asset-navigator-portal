
import { useState } from "react";
import { User, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser, User as UserType } from "@/contexts/UserContext";

const UserProfileDropdown = () => {
  const { currentUser, setCurrentUser } = useUser();

  const users: UserType[] = [
    { type: 'guest', name: 'Guest User' },
    { type: 'authorized', name: 'John Smith' },
    { type: 'sales-agent', name: 'Sales Agent' }
  ];

  const handleUserSelect = (user: UserType) => {
    setCurrentUser(user);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <User size={20} className="text-gray-600" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-white">
        {users.map((user) => (
          <DropdownMenuItem
            key={user.type}
            onClick={() => handleUserSelect(user)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>{user.name}</span>
            {currentUser.type === user.type && (
              <Check size={16} className="text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileDropdown;
