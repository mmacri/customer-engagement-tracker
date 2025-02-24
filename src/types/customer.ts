export type CustomerHealth = "healthy" | "at-risk" | "critical";
export type PriorityLevel = "critical" | "high" | "medium" | "low";
export type RiskFactor = "high" | "medium" | "low";
export type TrendDirection = "improving" | "stable" | "declining";
export type UserRole = "internal" | "customer";

export interface QBRMetric {
  name: string;
  current: number;
  previous: number;
  target: number;
  trend: "up" | "down" | "stable";
}

export interface ROIMetric {
  category: string;
  saved: number;
  potential: number;
  description: string;
}

export interface QBRData {
  date: string;
  metrics: QBRMetric[];
  summary: string;
  nextSteps: string[];
  attendees: string[];
}

export type ActionStatus = "completed" | "in-progress" | "pending" | "blocked";

export interface StatusReportItem {
  title: string;
  description: string;
  status: ActionStatus;
  owner: string;
  dueDate: string;
  priority: PriorityLevel;
}

export interface StatusReport {
  weekEnding: string;
  accomplishments: string[];
  actionItems: StatusReportItem[];
  risks: string[];
  nextSteps: string[];
}

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
  qbrData?: QBRData[];
  roiMetrics?: ROIMetric[];
  statusReports?: StatusReport[];
}
