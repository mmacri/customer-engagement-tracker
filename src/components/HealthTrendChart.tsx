
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { HealthTrend } from "@/types/customer";

interface HealthTrendChartProps {
  trends: HealthTrend[];
}

export const HealthTrendChart = ({ trends }: HealthTrendChartProps) => {
  return (
    <Card className="animate-fade-up">
      <CardHeader>
        <CardTitle className="text-lg">Health Score Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trends} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis
                dataKey="date"
                tickFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <YAxis domain={[0, 100]} />
              <Tooltip
                labelFormatter={(date) => new Date(date).toLocaleDateString()}
                formatter={(value: number) => [`${value}%`]}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#2563eb"
                name="Overall Health"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="factors.engagement"
                stroke="#16a34a"
                name="Engagement"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="factors.adoption"
                stroke="#ca8a04"
                name="Adoption"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="factors.satisfaction"
                stroke="#dc2626"
                name="Satisfaction"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
