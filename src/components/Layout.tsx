import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      <main
        className={cn(
          "transition-all duration-300 min-h-screen",
          sidebarOpen ? "lg:ml-80" : "lg:ml-80" // Always account for sidebar on large screens
        )}
      >
        <div className="pt-20 lg:pt-8"> {/* Account for hamburger button */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}