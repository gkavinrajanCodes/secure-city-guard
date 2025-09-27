import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, AlertTriangle, Shield, MapPin, TrendingUp, Clock } from "lucide-react";

export function MetricsGrid() {
  const metrics = [
    {
      title: "Active Tourists",
      value: "2,847",
      change: "+12%",
      changeType: "positive" as const,
      icon: Users,
      description: "Registered today"
    },
    {
      title: "Emergency Alerts",
      value: "3",
      change: "-2",
      changeType: "positive" as const,
      icon: AlertTriangle,
      description: "Active incidents"
    },
    {
      title: "Police Units",
      value: "24",
      change: "96%",
      changeType: "positive" as const,
      icon: Shield,
      description: "Response ready"
    },
    {
      title: "Hot Zones",
      value: "7",
      change: "+1",
      changeType: "negative" as const,
      icon: MapPin,
      description: "High activity areas"
    },
    {
      title: "Response Time",
      value: "4.2m",
      change: "-0.8m",
      changeType: "positive" as const,
      icon: Clock,
      description: "Average"
    },
    {
      title: "Safety Score",
      value: "8.7/10",
      change: "+0.3",
      changeType: "positive" as const,
      icon: TrendingUp,
      description: "Overall rating"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <metric.icon className="h-4 w-4" />
              {metric.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
              <Badge 
                variant={metric.changeType === "positive" ? "default" : "destructive"}
                className={
                  metric.changeType === "positive" 
                    ? "bg-success/20 text-success border-success" 
                    : "bg-destructive/20 text-destructive border-destructive"
                }
              >
                {metric.change}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}