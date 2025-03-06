
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import PDFViewer from "@/components/PDFViewer";

const View = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-namtech-dark mb-4">No PDF Selected</h2>
          <p className="text-namtech-slate">Please select a PDF to view.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-4">
        <div className="animate-fade-in">
          <h1 className="text-2xl font-bold text-namtech-dark mb-1">
            {/* In a real app, we would fetch the PDF name from a database or file system */}
            {id === "1" ? "User Manual.pdf" : 
             id === "2" ? "Project Proposal.pdf" : 
             id === "3" ? "Financial Report.pdf" : 
             id === "4" ? "Meeting Notes.pdf" : 
             id === "5" ? "Research Paper.pdf" : 
             id === "6" ? "Product Catalog.pdf" : 
             "Document.pdf"}
          </h1>
          <p className="text-sm text-namtech-slate">Last opened: Yesterday at 2:45 PM</p>
        </div>
        
        <div className="h-[calc(100vh-300px)] min-h-[500px]">
          <PDFViewer pdfId={id} />
        </div>
      </div>
    </Layout>
  );
};

export default View;
