import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, TrendingDown, Activity, Calendar } from "lucide-react";

export function AnalyticsDashboard() {
  const weeklyStats = [
    { day: "Mon", tourists: 1234, incidents: 2, response: 3.2 },
    { day: "Tue", tourists: 1456, incidents: 1, response: 2.8 },
    { day: "Wed", tourists: 1678, incidents: 4, response: 4.1 },
    { day: "Thu", tourists: 1890, incidents: 3, response: 3.5 },
    { day: "Fri", tourists: 2234, incidents: 6, response: 4.8 },
    { day: "Sat", tourists: 2876, incidents: 8, response: 5.2 },
    { day: "Sun", tourists: 2654, incidents: 5, response: 3.9 }
  ];

  const hotspotAnalysis = [
    { location: "Night Market", risk: "High", incidents: 24, trend: "up" },
    { location: "Marina Bay", risk: "Medium", incidents: 12, trend: "down" },
    { location: "Heritage Quarter", risk: "Low", incidents: 6, trend: "stable" },
    { location: "Beach Front", risk: "Medium", incidents: 15, trend: "up" },
    { location: "Temple District", risk: "Low", incidents: 3, trend: "down" }
  ];

  const performanceMetrics = [
    { metric: "Average Response Time", value: "3.8 min", change: "-0.5 min", trend: "positive" },
    { metric: "Tourist Satisfaction", value: "8.7/10", change: "+0.3", trend: "positive" },
    { metric: "Incident Resolution Rate", value: "94%", change: "+2%", trend: "positive" },
    { metric: "Unit Utilization", value: "78%", change: "-5%", trend: "negative" }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "high": return "bg-destructive/20 text-destructive border-destructive";
      case "medium": return "bg-warning/20 text-warning border-warning";
      case "low": return "bg-success/20 text-success border-success";
      default: return "bg-muted/20 text-muted-foreground border-muted";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-3 w-3 text-destructive" />;
      case "down": return <TrendingDown className="h-3 w-3 text-success" />;
      default: return <Activity className="h-3 w-3 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-4">
      <Card className="bg-card border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Weekly Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {weeklyStats.map((stat, index) => (
              <div key={index} className="text-center p-2 bg-muted/50 rounded border border-border/50">
                <p className="text-xs font-medium text-foreground">{stat.day}</p>
                <p className="text-sm text-primary font-bold">{stat.tourists}</p>
                <p className="text-xs text-muted-foreground">{stat.incidents} incidents</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="p-3 bg-muted/50 rounded-lg border border-border/50">
                <p className="text-xs text-muted-foreground">{metric.metric}</p>
                <p className="text-lg font-bold text-foreground">{metric.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  {metric.trend === "positive" ? (
                    <TrendingUp className="h-3 w-3 text-success" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-destructive" />
                  )}
                  <span className={`text-xs ${metric.trend === "positive" ? "text-success" : "text-destructive"}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Hotspot Risk Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {hotspotAnalysis.map((hotspot, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border/50">
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-medium text-foreground">{hotspot.location}</p>
                  <p className="text-xs text-muted-foreground">{hotspot.incidents} incidents this week</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getRiskColor(hotspot.risk)}>
                  {hotspot.risk} Risk
                </Badge>
                {getTrendIcon(hotspot.trend)}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}