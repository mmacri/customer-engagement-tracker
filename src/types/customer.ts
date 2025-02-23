
export type CustomerHealth = "healthy" | "at-risk" | "critical";
export type PriorityLevel = "critical" | "high" | "medium" | "low";
export type RiskFactor = "high" | "medium" | "low";
export type TrendDirection = "improving" | "stable" | "declining";

export interface BusinessMetric {
  name: string;
  value: number;
  trend: "up" | "down" | "stable";
  target: number;
}

export interface Contact {
  name: string;
  role: string;
  avatar?: string;
  email: string;
  lastContact?: string;
}

export interface HealthTrend {
  date: string;
  score: number;
  factors: {
    engagement: number;
    adoption: number;
    satisfaction: number;
  };
}

export interface RenewalRisk {
  level: RiskFactor;
  score: number;
  factors: string[];
  recommendations: string[];
}

export interface Customer {
  id: string;
  name: string;
  industry: string;
  objectives: string[];
  contacts: Contact[];
  health: CustomerHealth;
  priority: PriorityLevel;
  businessMetrics: BusinessMetric[];
  featureAdoption: number;
  renewalDate: string;
  lastQBRDate?: string;
  nextQBRDate?: string;
  contractValue?: number;
  customerSince?: string;
  renewalRisk?: RenewalRisk;
  healthTrends?: HealthTrend[];
}
