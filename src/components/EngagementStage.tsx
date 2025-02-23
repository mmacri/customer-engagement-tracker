
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EngagementStageProps {
  title: string;
  status: "pending" | "active" | "completed";
  items: string[];
}

export const EngagementStage = ({ title, status, items }: EngagementStageProps) => {
  const statusColors = {
    pending: "bg-secondary/20",
    active: "bg-primary/20",
    completed: "bg-accent/20",
  };

  return (
    <Card className={`p-6 ${statusColors[status]} backdrop-blur-sm animate-fade-up`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Badge variant="outline" className="capitalize">
          {status}
        </Badge>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
};
