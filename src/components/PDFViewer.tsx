
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Palette, Bookmark } from "lucide-react";

interface PDFViewerProps {
  pdfId: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfId }) => {
  // In a real app, we would fetch the PDF data using the ID
  // For now, we'll mock a viewer with sample content
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(5); // Mock total pages
  const [zoomLevel, setZoomLevel] = useState(100);
  const [filterIntensity, setFilterIntensity] = useState(0);
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleZoomIn = () => {
    setZoomLevel(Math.min(zoomLevel + 10, 200));
  };
  
  const handleZoomOut = () => {
    setZoomLevel(Math.max(zoomLevel - 10, 50));
  };
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterIntensity(Number(e.target.value));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4 p-3 bg-white rounded-lg shadow-sm animate-fade-in">
        <div className="flex items-center space-x-2">
          <button 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="p-2 rounded-full hover:bg-namtech-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-namtech-dark" />
          </button>
          <span className="text-sm text-namtech-slate">
            Page {currentPage} of {totalPages}
          </span>
          <button 
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full hover:bg-namtech-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-namtech-dark" />
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleZoomOut}
            disabled={zoomLevel <= 50}
            className="p-2 rounded-full hover:bg-namtech-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ZoomOut className="h-5 w-5 text-namtech-dark" />
          </button>
          <span className="text-sm text-namtech-slate min-w-[48px] text-center">
            {zoomLevel}%
          </span>
          <button 
            onClick={handleZoomIn}
            disabled={zoomLevel >= 200}
            className="p-2 rounded-full hover:bg-namtech-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ZoomIn className="h-5 w-5 text-namtech-dark" />
          </button>
          
          <div className="ml-4 flex items-center">
            <Palette className="h-5 w-5 text-namtech-teal mr-2" />
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={filterIntensity} 
              onChange={handleFilterChange}
              className="w-24 accent-namtech-teal"
            />
          </div>
          
          <button className="ml-2 p-2 rounded-full hover:bg-namtech-light transition-colors">
            <Bookmark className="h-5 w-5 text-namtech-dark" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 relative bg-white rounded-lg shadow-md overflow-hidden animate-slide-in-up">
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `scale(${zoomLevel / 100})`,
            transition: 'transform 0.3s ease',
            filter: `sepia(${filterIntensity / 100})`
          }}
        >
          {/* Mock PDF page content */}
          <div className="w-full max-w-lg p-8 text-namtech-slate">
            <h1 className="text-2xl font-bold mb-4">Sample PDF Content (Page {currentPage})</h1>
            <p className="mb-4">
              This is a sample page from a PDF document. In a real application, this would display 
              the actual PDF content for page {currentPage}.
            </p>
            <p className="mb-4">
              The PDF viewer would include features like zoom controls, blue light filtering, 
              annotations, and more.
            </p>
            {currentPage === 1 && (
              <div className="mt-8 p-4 border border-namtech-teal/30 rounded-lg bg-namtech-teal/5">
                <h3 className="text-lg font-semibold text-namtech-teal mb-2">Introduction</h3>
                <p>
                  Welcome to NAMTECH PDF-VERSE! This demonstration shows how the PDF viewer 
                  interface would work with actual PDF files.
                </p>
              </div>
            )}
            {currentPage === 2 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Chapter 1: Getting Started</h3>
                <p>
                  Learn how to navigate the PDF viewer, adjust settings, and use the various tools
                  available in the application.
                </p>
              </div>
            )}
            {currentPage === 3 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Chapter 2: Advanced Features</h3>
                <p>
                  Discover advanced features like annotations, highlighting, and page navigation
                  to enhance your PDF reading experience.
                </p>
              </div>
            )}
            {currentPage === 4 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Chapter 3: PDF Creation</h3>
                <p>
                  Learn how to create new PDF documents from scratch, convert other document types
                  to PDF format, and add images to your PDFs.
                </p>
              </div>
            )}
            {currentPage === 5 && (
              <div className="mt-8 p-4 border border-namtech-amber/30 rounded-lg bg-namtech-amber/5">
                <h3 className="text-lg font-semibold text-namtech-dark mb-2">Conclusion</h3>
                <p>
                  Thank you for exploring NAMTECH PDF-VERSE! We hope this demonstration gives you
                  a good understanding of how the application works.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
