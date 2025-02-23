
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Minus, Target } from "lucide-react";
import { BusinessMetric } from "@/types/customer";
import { Progress } from "@/components/ui/progress";

interface BusinessMetricsProps {
  metrics: BusinessMetric[];
}

export const BusinessMetrics = ({ metrics }: BusinessMetricsProps) => {
  const getTrendIcon = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return <ArrowUp className="w-4 h-4 text-green-500" />;
      case "down":
        return <ArrowDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getProgressColor = (value: number, target: number) => {
    const progress = (value / target) * 100;
    if (progress >= 90) return "bg-green-500";
    if (progress >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  const calculateProgress = (value: number, target: number) => {
    return Math.min(Math.round((value / target) * 100), 100);
  };

  return (
    <Card className="animate-fade-up">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Business Impact Metrics</CardTitle>
        <Target className="w-5 h-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-card transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-muted-foreground">
                  {metric.name}
                </span>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-bold">{metric.value}</span>
                  <span className="text-sm text-muted-foreground">
                    Target: {metric.target}
                  </span>
                </div>
                <div className="space-y-1">
                  <Progress
                    value={calculateProgress(metric.value, metric.target)}
                    className={getProgressColor(metric.value, metric.target)}
                  />
                  <div className="text-xs text-muted-foreground text-right">
                    {calculateProgress(metric.value, metric.target)}% of target
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
