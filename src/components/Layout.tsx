
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Settings, 
  FolderOpen, 
  FilePlus, 
  ChevronRight 
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col min-h-screen bg-namtech-light">
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-namtech-light/80 border-b border-namtech-dark/10">
        <div className="container mx-auto flex h-16 items-center px-4 sm:px-6">
          <Link 
            to="/" 
            className="flex items-center space-x-2 transition-all duration-300 hover:opacity-80"
          >
            <BookOpen className="h-6 w-6 text-namtech-dark" />
            <span className="font-bold text-xl text-namtech-dark">PDF-VERSE</span>
          </Link>
          <nav className="ml-auto flex items-center space-x-4 sm:space-x-6">
            <Link 
              to="/" 
              className={cn("nav-link", isActive("/") && "active")}
            >
              Home
            </Link>
            <Link 
              to="/browse" 
              className={cn("nav-link", isActive("/browse") && "active")}
            >
              Browse
            </Link>
            <Link 
              to="/settings" 
              className={cn("nav-link", isActive("/settings") && "active")}
            >
              Settings
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-6">
        {location.pathname !== "/" && (
          <div className="mb-6 flex items-center text-sm text-namtech-slate/70 animate-fade-in">
            <Link to="/" className="hover:text-namtech-dark transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            {location.pathname.split("/").filter(Boolean).map((segment, i, arr) => (
              <React.Fragment key={i}>
                {i === arr.length - 1 ? (
                  <span className="font-medium text-namtech-dark capitalize">
                    {segment}
                  </span>
                ) : (
                  <>
                    <Link 
                      to={`/${arr.slice(0, i + 1).join("/")}`} 
                      className="hover:text-namtech-dark transition-colors capitalize"
                    >
                      {segment}
                    </Link>
                    <ChevronRight className="h-4 w-4 mx-1" />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
        <div className="animate-fade-in">{children}</div>
      </main>
      <footer className="py-6 border-t border-namtech-dark/10 bg-namtech-light/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-namtech-slate/70">
            © {new Date().getFullYear()} NAMTECH PDF-VERSE. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-namtech-slate/70 hover:text-namtech-dark transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-namtech-slate/70 hover:text-namtech-dark transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-namtech-slate/70 hover:text-namtech-dark transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
