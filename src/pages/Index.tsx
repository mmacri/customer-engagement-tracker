
import { CustomerProfile } from "@/components/CustomerProfile";
import { EngagementStage } from "@/components/EngagementStage";
import { BusinessMetrics } from "@/components/BusinessMetrics";
import { RenewalRiskCard } from "@/components/RenewalRiskCard";
import { Customer } from "@/types/customer";

const Index = () => {
  const customerData: Customer = {
    id: "1",
    name: "TechCorp Solutions",
    industry: "Enterprise Software",
    health: "at-risk",
    priority: "high",
    objectives: [
      "Improve customer satisfaction by 25%",
      "Reduce churn rate to <5%",
      "Expand product usage across departments",
    ],
    contacts: [
      {
        name: "Sarah Johnson",
        role: "VP of Operations",
        email: "sarah.j@techcorp.com",
        lastContact: "2024-03-15",
      },
      {
        name: "Michael Chen",
        role: "Technical Lead",
        email: "michael.c@techcorp.com",
        lastContact: "2024-03-18",
      },
    ],
    businessMetrics: [
      {
        name: "User Adoption",
        value: 78,
        trend: "up",
        target: 85,
      },
      {
        name: "Support Tickets",
        value: 12,
        trend: "down",
        target: 10,
      },
      {
        name: "Feature Usage",
        value: 65,
        trend: "up",
        target: 75,
      },
    ],
    featureAdoption: 65,
    renewalDate: "2024-12-31",
    renewalRisk: {
      level: "medium",
      score: 65,
      factors: [
        "Decreasing feature adoption trend",
        "Limited engagement with new features",
        "Support ticket volume above target",
      ],
      recommendations: [
        "Schedule executive business review",
        "Conduct feature adoption workshop",
        "Implement customer feedback program",
      ],
    },
    healthTrends: [
      {
        date: "2024-03-01",
        score: 85,
        factors: {
          engagement: 80,
          adoption: 85,
          satisfaction: 90,
        },
      },
      // Additional trend data points would go here
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
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl font-semibold mb-4">Customer Engagement Tracker</h1>
            <p className="text-muted-foreground">
              Monitor customer success, track engagement, and drive business impact
            </p>
          </div>

          <div className="grid gap-8">
            <div className="grid md:grid-cols-2 gap-8">
              <CustomerProfile {...customerData} />
              <RenewalRiskCard risk={customerData.renewalRisk!} />
            </div>
            <BusinessMetrics metrics={customerData.businessMetrics} />
            
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
