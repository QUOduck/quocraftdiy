import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Package, Video, Info, X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { 
    path: '/', 
    label: 'Home', 
    icon: Home
  },
  { 
    path: '/gallery', 
    label: 'Paper Models Gallery', 
    icon: Package
  },
  { 
    path: '/craft-videos', 
    label: 'Craft Videos', 
    icon: Video
  },
  { 
    path: '/info', 
    label: 'Information', 
    icon: Info
  },
];

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 p-3 rounded-xl bg-primary hover:bg-primary-glow transition-all duration-300 hover:scale-110 shadow-button"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-primary-foreground" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full bg-secondary-dark z-40 transition-all duration-300 ease-in-out",
          "flex flex-col pt-20 px-6",
          isOpen ? "w-80" : "w-0 px-0",
          "lg:w-80 lg:px-6" // Always visible on large screens
        )}
      >
        <div className={cn(
          "space-y-2",
          isOpen ? "opacity-100" : "opacity-0 lg:opacity-100",
          "transition-opacity duration-300"
        )}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => onToggle()}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 p-3 rounded-xl font-semibold transition-all duration-300",
                  "hover:bg-sidebar-accent hover:scale-105",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-glow" 
                    : "text-sidebar-foreground hover:text-sidebar-accent-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-base">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
        
        {/* Footer in Sidebar */}
        <div className={cn(
          "mt-auto pb-8",
          isOpen ? "opacity-100" : "opacity-0 lg:opacity-100",
          "transition-opacity duration-300"
        )}>
          <div className="text-center">
            <h3 className="title-playful text-xl mb-2">QuoCraft</h3>
            <p className="text-sidebar-foreground text-sm">
              Turn 3D models into real papercraft!
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}