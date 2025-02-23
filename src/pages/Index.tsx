
import { CustomerProfile } from "@/components/CustomerProfile";
import { EngagementStage } from "@/components/EngagementStage";

const Index = () => {
  const customerData = {
    name: "TechCorp Solutions",
    industry: "Enterprise Software",
    objectives: [
      "Improve customer satisfaction by 25%",
      "Reduce churn rate to <5%",
      "Expand product usage across departments",
    ],
    contacts: [
      {
        name: "Sarah Johnson",
        role: "VP of Operations",
      },
      {
        name: "Michael Chen",
        role: "Technical Lead",
      },
    ],
  };

  const stages = [
    {
      title: "Kickoff & Discovery",
      status: "completed" as const,
      items: [
        "Initial stakeholder meeting",
        "Goals & KPIs defined",
        "Technical requirements gathered",
      ],
    },
    {
      title: "Implementation & Adoption",
      status: "active" as const,
      items: [
        "Core features deployed",
        "User training sessions",
        "Usage monitoring setup",
      ],
    },
    {
      title: "Optimization & Expansion",
      status: "pending" as const,
      items: [
        "Performance analysis",
        "Additional feature rollout",
        "Cross-team collaboration",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl font-semibold mb-4">Customer Engagement Demo</h1>
            <p className="text-muted-foreground">
              An interactive guide for Technical Account Managers and Customer Success Specialists
            </p>
          </div>

          <div className="grid gap-8">
            <CustomerProfile {...customerData} />
            
            <div className="grid gap-6">
              {stages.map((stage, index) => (
                <EngagementStage key={index} {...stage} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
