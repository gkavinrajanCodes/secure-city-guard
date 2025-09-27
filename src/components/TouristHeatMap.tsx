import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, AlertCircle } from "lucide-react";

export function TouristHeatMap() {
  const hotSpots = [
    { name: "Marina Bay", tourists: 234, status: "high", risk: "low" },
    { name: "Heritage Quarter", tourists: 189, status: "medium", risk: "medium" },
    { name: "Night Market", tourists: 456, status: "very-high", risk: "high" },
    { name: "Temple District", tourists: 123, status: "low", risk: "low" },
    { name: "Beach Front", tourists: 345, status: "high", risk: "medium" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "very-high": return "bg-destructive/20 text-destructive border-destructive";
      case "high": return "bg-warning/20 text-warning border-warning";
      case "medium": return "bg-accent/20 text-accent border-accent";
      case "low": return "bg-success/20 text-success border-success";
      default: return "bg-muted/20 text-muted-foreground border-muted";
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high": return "text-destructive";
      case "medium": return "text-warning";
      case "low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Tourist Heat Map
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="relative h-48 bg-muted rounded-lg p-4 mb-4 border border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-lg"></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Interactive Map</p>
              <p className="text-xs text-muted-foreground">Real-time tourist density</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {hotSpots.map((spot, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border/50">
              <div className="flex items-center gap-3">
                <AlertCircle className={`h-4 w-4 ${getRiskColor(spot.risk)}`} />
                <div>
                  <p className="font-medium text-foreground">{spot.name}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    {spot.tourists} tourists
                  </div>
                </div>
              </div>
              <Badge variant="outline" className={getStatusColor(spot.status)}>
                {spot.status.replace('-', ' ')}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}