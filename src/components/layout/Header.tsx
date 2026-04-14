import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 md:px-6 shrink-0">
      <div className="flex items-center flex-1">
        <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        <div className="w-full max-w-md relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input 
            type="search" 
            placeholder="Search properties, leads, or clients..." 
            className="pl-9 bg-gray-50 border-transparent focus:bg-white"
          />
        </div>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
        </Button>
        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">
          JD
        </div>
      </div>
    </header>
  );
}
