import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FileText, Plus, Download, Eye } from "lucide-react";
import { useState } from "react";

export function EFIRGenerator() {
  const [newReport, setNewReport] = useState({
    type: "",
    priority: "",
    location: "",
    description: ""
  });

  const recentReports = [
    {
      id: "FIR-2024-0156",
      type: "Theft",
      location: "Night Market",
      priority: "Medium",
      status: "Filed",
      time: "2 hours ago"
    },
    {
      id: "FIR-2024-0155", 
      type: "Missing Person",
      location: "Marina Bay",
      priority: "High",
      status: "Processing",
      time: "4 hours ago"
    },
    {
      id: "FIR-2024-0154",
      type: "Harassment",
      location: "Heritage Quarter",
      priority: "High",
      status: "Filed",
      time: "6 hours ago"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high": return "bg-destructive/20 text-destructive border-destructive";
      case "medium": return "bg-warning/20 text-warning border-warning";
      case "low": return "bg-success/20 text-success border-success";
      default: return "bg-muted/20 text-muted-foreground border-muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "processing": return "bg-accent/20 text-accent border-accent";
      case "filed": return "bg-success/20 text-success border-success";
      case "draft": return "bg-muted/20 text-muted-foreground border-muted";
      default: return "bg-muted/20 text-muted-foreground border-muted";
    }
  };

  return (
    <div className="space-y-4">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5 text-primary" />
            Generate New E-FIR
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Select onValueChange={(value) => setNewReport({...newReport, type: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Incident Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="theft">Theft</SelectItem>
                <SelectItem value="assault">Assault</SelectItem>
                <SelectItem value="harassment">Harassment</SelectItem>
                <SelectItem value="missing">Missing Person</SelectItem>
                <SelectItem value="accident">Accident</SelectItem>
                <SelectItem value="fraud">Fraud</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => setNewReport({...newReport, priority: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Priority Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High Priority</SelectItem>
                <SelectItem value="medium">Medium Priority</SelectItem>
                <SelectItem value="low">Low Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Input
            placeholder="Incident Location"
            value={newReport.location}
            onChange={(e) => setNewReport({...newReport, location: e.target.value})}
          />

          <Textarea
            placeholder="Detailed description of the incident..."
            value={newReport.description}
            onChange={(e) => setNewReport({...newReport, description: e.target.value})}
            rows={4}
          />

          <div className="flex gap-2">
            <Button className="bg-primary/20 text-primary border-primary hover:bg-primary/30">
              <FileText className="h-4 w-4 mr-2" />
              Generate E-FIR
            </Button>
            <Button variant="outline">Save Draft</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Recent E-FIRs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentReports.map((report, index) => (
            <div key={index} className="p-3 bg-muted/10 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground">{report.id}</span>
                <div className="flex gap-2">
                  <Badge variant="outline" className={getPriorityColor(report.priority)}>
                    {report.priority}
                  </Badge>
                  <Badge variant="outline" className={getStatusColor(report.status)}>
                    {report.status}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-foreground">{report.type} - {report.location}</p>
                  <p className="text-muted-foreground text-xs">{report.time}</p>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-3 w-3 mr-1" />
                    PDF
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}