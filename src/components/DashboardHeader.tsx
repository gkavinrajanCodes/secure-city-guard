import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Shield, AlertTriangle, Users } from "lucide-react";

interface DashboardHeaderProps {
  userRole: "police" | "supervisor" | "tourism";
  userName: string;
  activeAlerts: number;
}

export function DashboardHeader({ userRole, userName, activeAlerts }: DashboardHeaderProps) {
  const getRoleBadge = () => {
    switch (userRole) {
      case "police":
        return <Badge variant="outline" className="bg-primary/20 text-primary border-primary">Police Officer</Badge>;
      case "supervisor":
        return <Badge variant="outline" className="bg-accent/20 text-accent border-accent">Supervisor</Badge>;
      case "tourism":
        return <Badge variant="outline" className="bg-success/20 text-success border-success">Tourism Official</Badge>;
    }
  };

  const getRoleIcon = () => {
    switch (userRole) {
      case "police":
        return <Shield className="h-5 w-5 text-primary" />;
      case "supervisor":
        return <Users className="h-5 w-5 text-accent" />;
      case "tourism":
        return <Users className="h-5 w-5 text-success" />;
    }
  };

  return (
    <header className="bg-card border-b border-border shadow-sm p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {getRoleIcon()}
            <h1 className="text-xl font-bold text-foreground">Command Center</h1>
          </div>
          {getRoleBadge()}
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            {activeAlerts > 0 && (
              <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {activeAlerts}
              </Badge>
            )}
          </Button>
          
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {userName.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium text-foreground">{userName}</p>
              <p className="text-muted-foreground text-xs">Online</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}