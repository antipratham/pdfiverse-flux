
import React from "react";
import Layout from "@/components/Layout";
import SettingsComponent from "@/components/Settings";

const SettingsPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-namtech-dark mb-2">Settings</h1>
          <p className="text-namtech-slate">Customize your PDF-VERSE experience.</p>
        </div>
        
        <SettingsComponent />
      </div>
    </Layout>
  );
};

export default SettingsPage;
