import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Send, Phone, Radio, Users } from "lucide-react";
import { useState } from "react";

export function CommunicationCenter() {
  const [message, setMessage] = useState("");

  const activeUnits = [
    { id: "Unit 12", status: "responding", location: "Marina Bay", lastSeen: "now" },
    { id: "Unit 05", status: "patrol", location: "Heritage Quarter", lastSeen: "2m ago" },
    { id: "Unit 18", status: "available", location: "Central Station", lastSeen: "5m ago" },
    { id: "Unit 03", status: "busy", location: "Night Market", lastSeen: "1m ago" },
    { id: "Unit 21", status: "available", location: "Beach Front", lastSeen: "3m ago" }
  ];

  const recentMessages = [
    {
      from: "Unit 12",
      message: "Arriving at scene, ETA 2 minutes",
      time: "just now",
      priority: "high"
    },
    {
      from: "Control",
      message: "All units be advised - large crowd gathering at Night Market",
      time: "2m ago",
      priority: "medium"
    },
    {
      from: "Unit 05",
      message: "Tourist assistance completed, returning to patrol",
      time: "5m ago",
      priority: "low"
    },
    {
      from: "Unit 18",
      message: "Report filed, suspect in custody",
      time: "8m ago",
      priority: "high"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "responding": return "bg-destructive/20 text-destructive border-destructive";
      case "busy": return "bg-warning/20 text-warning border-warning";
      case "patrol": return "bg-accent/20 text-accent border-accent";
      case "available": return "bg-success/20 text-success border-success";
      default: return "bg-muted/20 text-muted-foreground border-muted";
    }
  };

  const getPriorityBorder = (priority: string) => {
    switch (priority) {
      case "high": return "border-l-destructive";
      case "medium": return "border-l-warning";
      case "low": return "border-l-success";
      default: return "border-l-muted";
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="bg-card border-border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Active Units
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {activeUnits.map((unit, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border/50">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/20 text-primary text-xs">
                      {unit.id.split(' ')[1]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{unit.id}</p>
                    <p className="text-xs text-muted-foreground">{unit.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={getStatusColor(unit.status)}>
                    {unit.status}
                  </Badge>
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm">
                      <Phone className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Radio className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Unit Communications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {recentMessages.map((msg, index) => (
                <div key={index} className={`p-3 bg-muted/50 rounded-lg border border-border/50 border-l-2 ${getPriorityBorder(msg.priority)}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm text-foreground">{msg.from}</span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="text-sm text-foreground">{msg.message}</p>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2 pt-2 border-t border-border/50">
              <Input
                placeholder="Type message to all units..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button size="sm">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}