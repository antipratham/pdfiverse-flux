
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Eye, Moon, Sun, Save, Bell, Book } from "lucide-react";

const Settings: React.FC = () => {
  const [rememberLastPage, setRememberLastPage] = useState(true);
  const [blueFilterEnabled, setBlueFilterEnabled] = useState(false);
  const [blueFilterIntensity, setBlueFilterIntensity] = useState([30]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [defaultZoomLevel, setDefaultZoomLevel] = useState([100]);

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="animate-slide-in-up" style={{ animationDelay: "50ms" }}>
        <div className="flex items-center mb-4">
          <Book className="h-5 w-5 text-namtech-teal mr-2" />
          <h3 className="text-lg font-medium text-namtech-dark">Reading Preferences</h3>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center">
                <Save className="h-4 w-4 text-namtech-dark mr-2" />
                <Label htmlFor="remember-page" className="text-sm font-medium">
                  Remember last page
                </Label>
              </div>
              <p className="text-sm text-namtech-slate/70">
                Resume reading from the last page you were on
              </p>
            </div>
            <Switch
              id="remember-page"
              checked={rememberLastPage}
              onCheckedChange={setRememberLastPage}
            />
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <Eye className="h-4 w-4 text-namtech-dark mr-2" />
              <Label htmlFor="default-zoom" className="text-sm font-medium">
                Default zoom level
              </Label>
            </div>
            <div className="flex flex-col space-y-2">
              <Slider
                id="default-zoom"
                value={defaultZoomLevel}
                min={50}
                max={200}
                step={10}
                onValueChange={setDefaultZoomLevel}
                className="w-full"
              />
              <div className="flex justify-between">
                <span className="text-xs text-namtech-slate/70">50%</span>
                <span className="text-xs font-medium text-namtech-dark">{defaultZoomLevel}%</span>
                <span className="text-xs text-namtech-slate/70">200%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="animate-slide-in-up" style={{ animationDelay: "100ms" }}>
        <div className="flex items-center mb-4">
          <Moon className="h-5 w-5 text-namtech-teal mr-2" />
          <h3 className="text-lg font-medium text-namtech-dark">Display Settings</h3>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center">
                <Sun className="h-4 w-4 text-namtech-dark mr-2" />
                <Label htmlFor="blue-filter" className="text-sm font-medium">
                  Blue light filter
                </Label>
              </div>
              <p className="text-sm text-namtech-slate/70">
                Reduce eye strain during night-time reading
              </p>
            </div>
            <Switch
              id="blue-filter"
              checked={blueFilterEnabled}
              onCheckedChange={setBlueFilterEnabled}
            />
          </div>
          
          {blueFilterEnabled && (
            <div className="space-y-3 animate-fade-in">
              <Label htmlFor="filter-intensity" className="text-sm font-medium">
                Filter intensity
              </Label>
              <div className="flex flex-col space-y-2">
                <Slider
                  id="filter-intensity"
                  value={blueFilterIntensity}
                  min={0}
                  max={100}
                  step={5}
                  onValueChange={setBlueFilterIntensity}
                  className="w-full"
                />
                <div className="flex justify-between">
                  <span className="text-xs text-namtech-slate/70">Low</span>
                  <span className="text-xs font-medium text-namtech-dark">{blueFilterIntensity}%</span>
                  <span className="text-xs text-namtech-slate/70">High</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="animate-slide-in-up" style={{ animationDelay: "150ms" }}>
        <div className="flex items-center mb-4">
          <Bell className="h-5 w-5 text-namtech-teal mr-2" />
          <h3 className="text-lg font-medium text-namtech-dark">Notifications</h3>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="notifications" className="text-sm font-medium">
                Enable notifications
              </Label>
              <p className="text-sm text-namtech-slate/70">
                Receive updates about your documents
              </p>
            </div>
            <Switch
              id="notifications"
              checked={notificationsEnabled}
              onCheckedChange={setNotificationsEnabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
