
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, TrendingUp, Users } from "lucide-react";
import { QBRData, QBRMetric } from "@/types/customer";
import { Badge } from "@/components/ui/badge";

interface QBRSummaryProps {
  qbrData: QBRData;
}

const MetricTrendIcon = ({ trend }: { trend: "up" | "down" | "stable" }) => {
  const colors = {
    up: "text-green-500",
    down: "text-red-500",
    stable: "text-yellow-500",
  };
  
  return <TrendingUp className={`w-4 h-4 ${colors[trend]}`} />;
};

export const QBRSummary = ({ qbrData }: QBRSummaryProps) => {
  return (
    <Card className="animate-fade-up">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Quarterly Business Review</CardTitle>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {new Date(qbrData.date).toLocaleDateString()}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {qbrData.metrics.map((metric: QBRMetric, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{metric.name}</span>
                  <MetricTrendIcon trend={metric.trend} />
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl font-bold">{metric.current}</span>
                  <span className="text-sm text-muted-foreground">
                    Previous: {metric.previous}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Target: {metric.target}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-medium mb-2">Summary</h4>
            <p className="text-sm text-muted-foreground">{qbrData.summary}</p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Next Steps</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              {qbrData.nextSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-medium mb-2">
              <Users className="w-4 h-4" />
              Attendees
            </h4>
            <div className="flex flex-wrap gap-2">
              {qbrData.attendees.map((attendee, index) => (
                <Badge key={index} variant="secondary">
                  {attendee}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
