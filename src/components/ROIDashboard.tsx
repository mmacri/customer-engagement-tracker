
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DollarSign } from "lucide-react";
import { ROIMetric } from "@/types/customer";

interface ROIDashboardProps {
  metrics: ROIMetric[];
}

export const ROIDashboard = ({ metrics }: ROIDashboardProps) => {
  const totalSaved = metrics.reduce((acc, metric) => acc + metric.saved, 0);
  const totalPotential = metrics.reduce((acc, metric) => acc + metric.potential, 0);

  return (
    <Card className="animate-fade-up">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">ROI & Value Realization</CardTitle>
        <DollarSign className="w-5 h-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold">${totalSaved.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Total Value Realized</p>
            </div>
            <div>
              <p className="text-2xl font-bold">${totalPotential.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Potential Value</p>
            </div>
          </div>

          <div className="space-y-4">
            {metrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{metric.category}</span>
                  <span className="text-sm text-muted-foreground">
                    ${metric.saved.toLocaleString()} / ${metric.potential.toLocaleString()}
                  </span>
                </div>
                <Progress
                  value={(metric.saved / metric.potential) * 100}
                  className="h-2"
                />
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
