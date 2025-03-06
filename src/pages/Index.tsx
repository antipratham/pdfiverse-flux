
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  FileText, 
  FilePlus, 
  ZoomIn, 
  Sun, 
  Bookmark, 
  Image, 
  Search, 
  MoveDown, 
  Stamp 
} from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="py-20 w-full text-center">
        <div className="max-w-5xl mx-auto px-4">
          <div className="animate-slide-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-namtech-dark mb-6 tracking-tight">
              Transform Your <span className="text-gradient">PDF Experience</span>
            </h1>
            <p className="text-xl text-namtech-slate max-w-3xl mx-auto mb-8">
              Create, convert, edit, and manage PDFs with unparalleled simplicity and elegance.
              Your complete PDF solution, designed for the modern reader.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/browse" className="btn-primary">
                Browse Your PDFs
              </Link>
              <button className="btn-secondary">
                Create New PDF
              </button>
            </div>
          </div>
          
          <div className="mt-16 relative animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-namtech-teal/20 to-transparent"></div>
            <div className="relative bg-white border border-namtech-dark/10 shadow-xl rounded-2xl overflow-hidden max-w-3xl mx-auto">
              <div className="h-6 bg-namtech-light border-b border-namtech-dark/10 flex items-center px-3">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex space-x-2 mb-3">
                  <div className="p-1.5 rounded bg-namtech-light">
                    <ZoomIn className="h-4 w-4 text-namtech-dark/70" />
                  </div>
                  <div className="p-1.5 rounded bg-namtech-light">
                    <Sun className="h-4 w-4 text-namtech-dark/70" />
                  </div>
                  <div className="p-1.5 rounded bg-namtech-light">
                    <Bookmark className="h-4 w-4 text-namtech-dark/70" />
                  </div>
                </div>
                <div className="bg-namtech-light rounded p-4">
                  <div className="w-full h-48 bg-white rounded border border-namtech-dark/10 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-namtech-teal/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 w-full bg-gradient-to-b from-white to-namtech-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-namtech-dark mb-4">
              Powerful PDF Management
            </h2>
            <p className="text-lg text-namtech-slate max-w-2xl mx-auto">
              All the tools you need to work with PDFs in one elegant, intuitive interface.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<FilePlus className="h-8 w-8 text-namtech-teal" />}
              title="Create PDFs"
              description="Create new PDFs from scratch with user-input text and save them to your device."
              delay={0}
            />
            <FeatureCard 
              icon={<FileText className="h-8 w-8 text-namtech-teal" />}
              title="Convert Documents"
              description="Transform Word, text, and images into PDF format with a single click."
              delay={100}
            />
            <FeatureCard 
              icon={<ZoomIn className="h-8 w-8 text-namtech-teal" />}
              title="Enhanced Reading"
              description="Adjustable zoom functionality and blue light filter for comfortable reading."
              delay={200}
            />
            <FeatureCard 
              icon={<Bookmark className="h-8 w-8 text-namtech-teal" />}
              title="Last-Read Sync"
              description="Remember your last-read page across sessions for seamless continuity."
              delay={300}
            />
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Image className="h-8 w-8 text-namtech-teal" />}
              title="Add Images"
              description="Insert images into PDFs at specific pages or positions for enhanced content."
              delay={400}
            />
            <FeatureCard 
              icon={<Search className="h-8 w-8 text-namtech-teal" />}
              title="Text Search"
              description="Find text within PDFs and highlight matches for quick reference."
              delay={500}
            />
            <FeatureCard 
              icon={<MoveDown className="h-8 w-8 text-namtech-teal" />}
              title="Page Reordering"
              description="Rearrange pages within your PDF to organize content as needed."
              delay={600}
            />
            <FeatureCard 
              icon={<Stamp className="h-8 w-8 text-namtech-teal" />}
              title="Watermarking"
              description="Add customizable watermarks to PDFs for personal or professional use."
              delay={700}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 w-full">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-namtech-dark to-namtech-teal rounded-2xl shadow-lg p-8 text-white text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your PDF Experience?</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Start creating, converting, and managing your PDFs today with NAMTECH PDF-VERSE.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/browse" className="bg-white text-namtech-dark hover:bg-white/90 px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
                Get Started
              </Link>
              <button className="border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="feature-card"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-gradient-to-br from-namtech-teal/10 to-namtech-dark/5 p-3 rounded-full">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-namtech-dark">{title}</h3>
      <p className="text-namtech-slate text-sm">{description}</p>
    </div>
  );
};

export default Index;
