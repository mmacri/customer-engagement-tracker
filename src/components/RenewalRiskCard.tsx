
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { RenewalRisk } from "@/types/customer";

const riskColors = {
  high: "bg-red-500",
  medium: "bg-yellow-500",
  low: "bg-green-500",
};

const RiskIcon = ({ level }: { level: "high" | "medium" | "low" }) => {
  switch (level) {
    case "high":
      return <AlertTriangle className="w-5 h-5 text-red-500" />;
    case "medium":
      return <ArrowUpRight className="w-5 h-5 text-yellow-500" />;
    case "low":
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
  }
};

interface RenewalRiskCardProps {
  risk: RenewalRisk;
}

export const RenewalRiskCard = ({ risk }: RenewalRiskCardProps) => {
  return (
    <Card className="animate-fade-up">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Renewal Risk Assessment</CardTitle>
        <RiskIcon level={risk.level} />
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Risk Score</span>
            <Badge variant="secondary" className={`${riskColors[risk.level]} text-white`}>
              {risk.level.toUpperCase()}
            </Badge>
          </div>
          <Progress
            value={risk.score}
            className={`h-2 ${riskColors[risk.level]}`}
          />
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Risk Factors</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {risk.factors.map((factor, index) => (
                <li key={index}>{factor}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Recommended Actions</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {risk.recommendations.map((recommendation, index) => (
                <li key={index}>{recommendation}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
