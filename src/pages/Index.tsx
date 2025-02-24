
import { CustomerProfile } from "@/components/CustomerProfile";
import { EngagementStage } from "@/components/EngagementStage";
import { BusinessMetrics } from "@/components/BusinessMetrics";
import { RenewalRiskCard } from "@/components/RenewalRiskCard";
import { HealthTrendChart } from "@/components/HealthTrendChart";
import { ROIDashboard } from "@/components/ROIDashboard";
import { QBRSummary } from "@/components/QBRSummary";
import { StatusReportCard } from "@/components/StatusReport";
import { Navigation } from "@/components/Navigation";
import { Customer } from "@/types/customer";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [userRole, setUserRole] = useState<"internal" | "customer">("internal");

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
        date: "2024-01-01",
        score: 82,
        factors: {
          engagement: 85,
          adoption: 80,
          satisfaction: 82,
        },
      },
      {
        date: "2024-02-01",
        score: 78,
        factors: {
          engagement: 75,
          adoption: 82,
          satisfaction: 78,
        },
      },
      {
        date: "2024-03-01",
        score: 85,
        factors: {
          engagement: 80,
          adoption: 85,
          satisfaction: 90,
        },
      },
      {
        date: "2024-04-01",
        score: 75,
        factors: {
          engagement: 72,
          adoption: 76,
          satisfaction: 77,
        },
      },
    ],
    qbrData: [
      {
        date: "2024-03-15",
        metrics: [
          {
            name: "Feature Adoption",
            current: 75,
            previous: 65,
            target: 85,
            trend: "up"
          },
          {
            name: "Active Users",
            current: 1250,
            previous: 1100,
            target: 1500,
            trend: "up"
          },
          {
            name: "Support Tickets",
            current: 45,
            previous: 65,
            target: 40,
            trend: "down"
          },
          {
            name: "Response Time",
            current: 2.5,
            previous: 3.1,
            target: 2,
            trend: "up"
          }
        ],
        summary: "Strong quarter with improvements across key metrics. Feature adoption and active users showing positive trends. Support ticket volume decreased while maintaining good response times.",
        nextSteps: [
          "Schedule advanced feature training sessions",
          "Review expansion opportunities in Q2",
          "Implement feedback collection program"
        ],
        attendees: [
          "Sarah Johnson",
          "Michael Chen",
          "Alex Thompson",
          "Maria Garcia"
        ]
      }
    ],
    roiMetrics: [
      {
        category: "Time Savings",
        saved: 250000,
        potential: 400000,
        description: "Automation of key workflows"
      },
      {
        category: "Cost Reduction",
        saved: 180000,
        potential: 300000,
        description: "Operational efficiency improvements"
      },
      {
        category: "Revenue Impact",
        saved: 500000,
        potential: 750000,
        description: "New revenue opportunities enabled"
      }
    ],
    statusReports: [
      {
        weekEnding: "2024-03-22",
        accomplishments: [
          "Completed phase 1 of feature implementation",
          "Conducted user training for 3 departments",
          "Achieved 85% adoption rate in core features"
        ],
        actionItems: [
          {
            title: "Complete User Training",
            description: "Finish remaining department training sessions",
            status: "in-progress",
            owner: "Sarah Johnson",
            dueDate: "2024-03-29",
            priority: "high"
          },
          {
            title: "Feature Integration",
            description: "Integration with existing workflow systems",
            status: "pending",
            owner: "Michael Chen",
            dueDate: "2024-04-05",
            priority: "medium"
          },
          {
            title: "Performance Review",
            description: "Analyze system performance metrics",
            status: "completed",
            owner: "Alex Thompson",
            dueDate: "2024-03-20",
            priority: "low"
          }
        ],
        risks: [
          "Integration timeline may be affected by legacy system dependencies",
          "Resource constraints in IT department",
          "Potential data migration challenges"
        ],
        nextSteps: [
          "Schedule remaining training sessions",
          "Begin phase 2 of feature rollout",
          "Review integration timeline with IT team"
        ]
      }
    ]
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
      <Navigation />
      <div className="container py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex items-center justify-between mb-12 animate-fade-up">
            <div>
              <h1 className="text-4xl font-semibold mb-4">Customer Engagement Tracker</h1>
              <p className="text-muted-foreground">
                Monitor customer success, track engagement, and drive business impact
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant={userRole === "internal" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setUserRole("internal")}
              >
                Internal View
              </Badge>
              <Badge
                variant={userRole === "customer" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setUserRole("customer")}
              >
                Customer View
              </Badge>
            </div>
          </div>

          <div className="grid gap-8">
            <div id="profile" className="grid md:grid-cols-2 gap-8">
              <CustomerProfile {...customerData} />
              {userRole === "internal" && (
                <RenewalRiskCard risk={customerData.renewalRisk!} />
              )}
            </div>
            
            <div id="metrics">
              <BusinessMetrics metrics={customerData.businessMetrics} />
            </div>

            <div id="health">
              <HealthTrendChart trends={customerData.healthTrends!} />
            </div>
            
            {customerData.statusReports && customerData.statusReports[0] && (
              <div id="status">
                <StatusReportCard 
                  report={customerData.statusReports[0]} 
                  userRole={userRole}
                />
              </div>
            )}
            
            {userRole === "internal" && customerData.qbrData && (
              <div id="qbr">
                <QBRSummary qbrData={customerData.qbrData[0]} />
              </div>
            )}
            
            <div id="roi">
              <ROIDashboard metrics={customerData.roiMetrics!} />
            </div>
            
            <div className="grid gap-6">
              {userRole === "internal" && stages.map((stage, index) => (
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
