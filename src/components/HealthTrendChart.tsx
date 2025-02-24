
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from "recharts";
import { HealthTrend } from "@/types/customer";
import { Info } from "lucide-react";
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HealthTrendChartProps {
  trends: HealthTrend[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border">
        <p className="font-semibold mb-2">
          {new Date(label).toLocaleDateString(undefined, {
            month: 'long',
            year: 'numeric'
          })}
        </p>
        {payload.map((entry: any, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 text-sm"
          >
            <span style={{ color: entry.color }}>{entry.name}:</span>
            <span className="font-semibold">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const HealthTrendChart = ({ trends }: HealthTrendChartProps) => {
  const criticalThreshold = 60;
  const warningThreshold = 75;

  return (
    <Card className="animate-fade-up">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg">Health Score Trends</CardTitle>
          <TooltipProvider>
            <UITooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Track customer health metrics over time</p>
              </TooltipContent>
            </UITooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={trends} 
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              className="[&_.recharts-cartesian-grid-horizontal]:opacity-30 [&_.recharts-cartesian-grid-vertical]:opacity-30"
            >
              <XAxis
                dataKey="date"
                tickFormatter={(date) => new Date(date).toLocaleDateString(undefined, { month: 'short' })}
                stroke="#666"
                fontSize={12}
              />
              <YAxis 
                domain={[0, 100]} 
                stroke="#666"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="top" 
                height={36}
                formatter={(value) => <span className="text-sm">{value}</span>}
              />
              <ReferenceLine 
                y={criticalThreshold} 
                stroke="#dc2626" 
                strokeDasharray="3 3"
                label={{ value: 'Critical', position: 'insideLeft', fill: '#dc2626', fontSize: 12 }}
              />
              <ReferenceLine 
                y={warningThreshold} 
                stroke="#ca8a04" 
                strokeDasharray="3 3"
                label={{ value: 'Warning', position: 'insideLeft', fill: '#ca8a04', fontSize: 12 }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#2563eb"
                name="Overall Health"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="factors.engagement"
                stroke="#16a34a"
                name="Engagement"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="factors.adoption"
                stroke="#ca8a04"
                name="Adoption"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="factors.satisfaction"
                stroke="#dc2626"
                name="Satisfaction"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
