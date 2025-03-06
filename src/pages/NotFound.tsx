
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FileQuestion } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-namtech-light p-4">
      <div className="glass-card p-8 max-w-md w-full text-center animate-scale-in">
        <FileQuestion className="h-16 w-16 mx-auto text-namtech-teal mb-4" />
        <h1 className="text-4xl font-bold text-namtech-dark mb-4">404</h1>
        <p className="text-xl text-namtech-slate mb-6">
          The page you're looking for couldn't be found.
        </p>
        <p className="text-namtech-slate/70 mb-8">
          The file may have been moved, deleted, or never existed.
        </p>
        <Link 
          to="/" 
          className="btn-primary inline-flex items-center"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
