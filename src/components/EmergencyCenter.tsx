import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Phone, MapPin, Clock, User } from "lucide-react";

export function EmergencyCenter() {
  const emergencies = [
    {
      id: "EM-001",
      type: "Medical Emergency",
      location: "Marina Bay - Sector 7",
      time: "2 min ago",
      status: "active",
      priority: "high",
      responder: "Unit 12"
    },
    {
      id: "EM-002", 
      type: "Lost Tourist",
      location: "Heritage Quarter",
      time: "8 min ago",
      status: "responding",
      priority: "medium",
      responder: "Unit 05"
    },
    {
      id: "EM-003",
      type: "Theft Report",
      location: "Night Market",
      time: "15 min ago",
      status: "resolved",
      priority: "low",
      responder: "Unit 18"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-destructive/20 text-destructive border-destructive";
      case "responding": return "bg-warning/20 text-warning border-warning";
      case "resolved": return "bg-success/20 text-success border-success";
      default: return "bg-muted/20 text-muted-foreground border-muted";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-destructive";
      case "medium": return "text-warning";
      case "low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Emergency Center
          </CardTitle>
          <Button size="sm" className="bg-destructive/20 text-destructive border-destructive hover:bg-destructive/30">
            <Phone className="h-4 w-4 mr-2" />
            Panic Button
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {emergencies.map((emergency, index) => (
          <div key={index} className="p-3 bg-muted/50 rounded-lg border border-border/50 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getStatusColor(emergency.status)}>
                  {emergency.status}
                </Badge>
                <span className="text-sm font-medium text-foreground">{emergency.id}</span>
              </div>
              <AlertTriangle className={`h-4 w-4 ${getPriorityColor(emergency.priority)}`} />
            </div>
            
            <h4 className="font-medium text-foreground">{emergency.type}</h4>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {emergency.location}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {emergency.time}
              </div>
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {emergency.responder}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="text-xs">
                View Details
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                Contact Unit
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}