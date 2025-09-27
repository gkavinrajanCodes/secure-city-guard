import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LayoutDashboard, 
  MapPin, 
  AlertTriangle, 
  FileText, 
  MessageSquare, 
  BarChart3 
} from "lucide-react";

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "map", label: "Map", icon: MapPin },
    { id: "alerts", label: "Alerts", icon: AlertTriangle },
    { id: "reports", label: "E-FIR", icon: FileText },
    { id: "comms", label: "Comms", icon: MessageSquare },
    { id: "analytics", label: "Analytics", icon: BarChart3 }
  ];

  return (
    <div className="bg-card border-b border-border shadow-sm p-2">
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-6 bg-muted/50">
          {tabs.map((tab) => (
            <TabsTrigger 
              key={tab.id} 
              value={tab.id}
              className="flex flex-col items-center gap-1 py-2 text-xs data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
            >
              <tab.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}