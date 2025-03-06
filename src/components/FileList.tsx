
import React from "react";
import { Link } from "react-router-dom";
import { FileText, Plus, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for PDF files
const mockPDFs = [
  { id: '1', name: 'User Manual.pdf', lastOpened: '2023-10-15', thumbnailColor: 'bg-red-100' },
  { id: '2', name: 'Project Proposal.pdf', lastOpened: '2023-10-12', thumbnailColor: 'bg-blue-100' },
  { id: '3', name: 'Financial Report.pdf', lastOpened: '2023-10-10', thumbnailColor: 'bg-green-100' },
  { id: '4', name: 'Meeting Notes.pdf', lastOpened: '2023-10-05', thumbnailColor: 'bg-yellow-100' },
  { id: '5', name: 'Research Paper.pdf', lastOpened: '2023-09-28', thumbnailColor: 'bg-purple-100' },
  { id: '6', name: 'Product Catalog.pdf', lastOpened: '2023-09-20', thumbnailColor: 'bg-indigo-100' },
];

interface FileListProps {
  className?: string;
}

const FileList: React.FC<FileListProps> = ({ className }) => {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-namtech-dark">Your PDFs</h2>
        <div className="flex space-x-2">
          <button className="btn-primary flex items-center">
            <Plus className="h-4 w-4 mr-1" />
            <span>Create New</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
        {mockPDFs.map((pdf, index) => (
          <Link 
            key={pdf.id}
            to={`/view/${pdf.id}`}
            className="group animate-scale-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="pdf-thumbnail group-hover:ring-2 ring-namtech-teal/50">
              <div className={cn("w-full h-full flex flex-col justify-center items-center p-4", pdf.thumbnailColor)}>
                <FileText className="h-12 w-12 text-namtech-dark/70 mb-2" />
                <span className="text-xs text-namtech-slate/70 mt-auto">
                  {pdf.lastOpened.split('-').slice(1).join('/')}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                <span className="text-white text-xs font-medium flex items-center">
                  Open <ArrowUpRight className="h-3 w-3 ml-1" />
                </span>
              </div>
            </div>
            <h3 className="mt-2 text-sm font-medium text-namtech-slate truncate">
              {pdf.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FileList;
