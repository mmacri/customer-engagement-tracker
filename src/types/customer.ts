
export type CustomerHealth = "healthy" | "at-risk" | "critical";
export type PriorityLevel = "critical" | "high" | "medium" | "low";

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
}
