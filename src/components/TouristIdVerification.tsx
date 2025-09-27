import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, CheckCircle, XCircle, Camera } from "lucide-react";
import { useState } from "react";

export function TouristIdVerification() {
  const [searchId, setSearchId] = useState("");
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const mockTourist = {
    id: "TID-2024-001234",
    name: "Sarah Johnson",
    nationality: "United States",
    passport: "US123456789",
    checkIn: "2024-01-15",
    checkOut: "2024-01-22",
    hotel: "Grand Pacific Resort",
    status: "verified",
    blockchainHash: "0x7f8c9e4a2b1d...",
    riskLevel: "low"
  };

  const handleSearch = () => {
    if (searchId.trim()) {
      setVerificationResult(mockTourist);
    }
  };

  const handleScan = () => {
    // Simulate QR code scan
    setSearchId("TID-2024-001234");
    setVerificationResult(mockTourist);
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Tourist ID Verification
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Enter Tourist ID or scan QR code"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSearch} size="sm">
            <Search className="h-4 w-4" />
          </Button>
          <Button onClick={handleScan} variant="outline" size="sm">
            <Camera className="h-4 w-4" />
          </Button>
        </div>

        {verificationResult && (
          <div className="space-y-3 p-4 bg-muted/10 rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-foreground">{verificationResult.name}</h3>
              <div className="flex items-center gap-2">
                {verificationResult.status === "verified" ? (
                  <CheckCircle className="h-5 w-5 text-success" />
                ) : (
                  <XCircle className="h-5 w-5 text-destructive" />
                )}
                <Badge 
                  variant="outline" 
                  className={
                    verificationResult.status === "verified" 
                      ? "bg-success/20 text-success border-success"
                      : "bg-destructive/20 text-destructive border-destructive"
                  }
                >
                  {verificationResult.status}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-muted-foreground">Tourist ID</p>
                <p className="font-medium text-foreground">{verificationResult.id}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Nationality</p>
                <p className="font-medium text-foreground">{verificationResult.nationality}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Check-in</p>
                <p className="font-medium text-foreground">{verificationResult.checkIn}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Check-out</p>
                <p className="font-medium text-foreground">{verificationResult.checkOut}</p>
              </div>
              <div className="col-span-2">
                <p className="text-muted-foreground">Accommodation</p>
                <p className="font-medium text-foreground">{verificationResult.hotel}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-border/50">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Blockchain Verified</span>
                <span className="font-mono text-primary">{verificationResult.blockchainHash}</span>
              </div>
              <div className="flex items-center justify-between text-xs mt-1">
                <span className="text-muted-foreground">Risk Level</span>
                <Badge 
                  variant="outline" 
                  className="bg-success/20 text-success border-success text-xs"
                >
                  {verificationResult.riskLevel}
                </Badge>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}