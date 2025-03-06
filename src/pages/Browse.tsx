
import React from "react";
import Layout from "@/components/Layout";
import FileList from "@/components/FileList";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FilePlus, FileType, FileImage, FileText } from "lucide-react";

const Browse = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-namtech-dark mb-2">File Browser</h1>
          <p className="text-namtech-slate">Browse, manage, and organize your PDF documents.</p>
        </div>
        
        <Tabs defaultValue="all" className="animate-slide-in-up">
          <TabsList className="mb-6 bg-white">
            <TabsTrigger value="all" className="data-[state=active]:bg-namtech-light">
              All Files
            </TabsTrigger>
            <TabsTrigger value="recent" className="data-[state=active]:bg-namtech-light">
              Recent
            </TabsTrigger>
            <TabsTrigger value="created" className="data-[state=active]:bg-namtech-light">
              Created
            </TabsTrigger>
            <TabsTrigger value="converted" className="data-[state=active]:bg-namtech-light">
              Converted
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <FileList />
          </TabsContent>
          
          <TabsContent value="recent" className="mt-0">
            <FileList />
          </TabsContent>
          
          <TabsContent value="created" className="mt-0">
            <div className="text-center py-12">
              <FileText className="h-16 w-16 mx-auto text-namtech-slate/30 mb-4" />
              <h3 className="text-lg font-medium text-namtech-dark mb-2">No created PDFs yet</h3>
              <p className="text-namtech-slate mb-6 max-w-md mx-auto">
                Start creating your own PDFs from scratch with our intuitive editor.
              </p>
              <button className="btn-primary">
                <FilePlus className="h-4 w-4 mr-2" />
                Create New PDF
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="converted" className="mt-0">
            <div className="text-center py-12">
              <FileType className="h-16 w-16 mx-auto text-namtech-slate/30 mb-4" />
              <h3 className="text-lg font-medium text-namtech-dark mb-2">No converted files yet</h3>
              <p className="text-namtech-slate mb-6 max-w-md mx-auto">
                Convert documents like Word, text files, or images to PDF format.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-secondary">
                  <FileText className="h-4 w-4 mr-2" />
                  Convert Document
                </button>
                <button className="btn-secondary">
                  <FileImage className="h-4 w-4 mr-2" />
                  Convert Image
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 border-t border-namtech-dark/10 pt-8 animate-fade-in">
          <h2 className="text-xl font-semibold text-namtech-dark mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow">
              <div className="flex items-center">
                <div className="bg-namtech-teal/10 p-2 rounded-full mr-3">
                  <FilePlus className="h-5 w-5 text-namtech-teal" />
                </div>
                <div>
                  <h3 className="font-medium text-namtech-dark">Create New</h3>
                  <p className="text-sm text-namtech-slate">Create a PDF from scratch</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow">
              <div className="flex items-center">
                <div className="bg-namtech-teal/10 p-2 rounded-full mr-3">
                  <FileType className="h-5 w-5 text-namtech-teal" />
                </div>
                <div>
                  <h3 className="font-medium text-namtech-dark">Convert</h3>
                  <p className="text-sm text-namtech-slate">Convert to PDF format</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow">
              <div className="flex items-center">
                <div className="bg-namtech-teal/10 p-2 rounded-full mr-3">
                  <FileText className="h-5 w-5 text-namtech-teal" />
                </div>
                <div>
                  <h3 className="font-medium text-namtech-dark">Open File</h3>
                  <p className="text-sm text-namtech-slate">Open existing PDF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Browse;
