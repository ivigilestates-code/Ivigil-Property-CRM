import React from 'react';
import { NavLink } from 'react-router';
import { LayoutDashboard, Home, Users, Settings, Search, Menu, Bell, Building2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-16 items-center border-b border-gray-200 px-6">
        <Building2 className="h-6 w-6 text-blue-600" />
        <span className="ml-2 text-lg font-bold text-gray-900">iVigil CRM</span>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          <NavItem to="/" icon={<LayoutDashboard className="h-5 w-5" />} label="Dashboard" onClick={onNavigate} />
          <NavItem to="/properties" icon={<Home className="h-5 w-5" />} label="Properties" onClick={onNavigate} />
          <NavItem to="/leads" icon={<Users className="h-5 w-5" />} label="Leads" onClick={onNavigate} />
          <NavItem to="/search" icon={<Search className="h-5 w-5" />} label="Search" onClick={onNavigate} />
        </nav>
      </div>
      <div className="border-t border-gray-200 p-4">
        <nav className="space-y-1">
          <NavItem to="/settings" icon={<Settings className="h-5 w-5" />} label="Settings" onClick={onNavigate} />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label, onClick }: { to: string; icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-blue-50 text-blue-700"
            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        )
      }
    >
      {icon}
      <span className="ml-3">{label}</span>
    </NavLink>
  );
}
