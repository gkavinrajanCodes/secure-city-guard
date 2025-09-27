import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { NavigationTabs } from "@/components/NavigationTabs";
import { MetricsGrid } from "@/components/MetricsGrid";
import { TouristHeatMap } from "@/components/TouristHeatMap";
import { EmergencyCenter } from "@/components/EmergencyCenter";
import { TouristIdVerification } from "@/components/TouristIdVerification";
import { EFIRGenerator } from "@/components/EFIRGenerator";
import { CommunicationCenter } from "@/components/CommunicationCenter";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userRole] = useState<"police" | "supervisor" | "tourism">("police");
  const [userName] = useState("Officer Sarah Chen");

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-4">
            <MetricsGrid />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
              <TouristHeatMap />
              <EmergencyCenter />
            </div>
            <div className="p-4">
              <TouristIdVerification />
            </div>
          </div>
        );
      case "map":
        return (
          <div className="p-4">
            <TouristHeatMap />
          </div>
        );
      case "alerts":
        return (
          <div className="p-4">
            <EmergencyCenter />
          </div>
        );
      case "reports":
        return (
          <div className="p-4">
            <EFIRGenerator />
          </div>
        );
      case "comms":
        return (
          <div className="p-4">
            <CommunicationCenter />
          </div>
        );
      case "analytics":
        return (
          <div className="p-4">
            <AnalyticsDashboard />
          </div>
        );
      default:
        return <div className="p-4">Tab content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        userRole={userRole}
        userName={userName}
        activeAlerts={3}
      />
      <NavigationTabs 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="pb-4">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default Index;
