
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, CheckCircle2, Clock, AlertTriangle, XCircle } from "lucide-react";
import { StatusReport, StatusReportItem, ActionStatus, UserRole } from "@/types/customer";

interface StatusReportProps {
  report: StatusReport;
  userRole: UserRole;
}

const statusIcons: Record<ActionStatus, React.ReactNode> = {
  completed: <CheckCircle2 className="w-4 h-4 text-green-500" />,
  "in-progress": <Clock className="w-4 h-4 text-blue-500" />,
  pending: <Clock className="w-4 h-4 text-yellow-500" />,
  blocked: <XCircle className="w-4 h-4 text-red-500" />
};

const statusColors: Record<ActionStatus, string> = {
  completed: "bg-green-500",
  "in-progress": "bg-blue-500",
  pending: "bg-yellow-500",
  blocked: "bg-red-500"
};

export const StatusReportCard = ({ report, userRole }: StatusReportProps) => {
  const [downloading, setDownloading] = useState(false);

  const downloadReport = async () => {
    setDownloading(true);
    try {
      const content = generateReportContent(report, userRole);
      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `status-report-${report.weekEnding}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading report:", error);
    } finally {
      setDownloading(false);
    }
  };

  const generateReportContent = (report: StatusReport, userRole: UserRole): string => {
    const sections = [
      `Status Report - Week Ending ${report.weekEnding}\n\n`,
      "Key Accomplishments:\n" + report.accomplishments.map(a => `- ${a}`).join("\n") + "\n\n",
      "Action Items:\n" + report.actionItems
        .map(item => `- ${item.title} (${item.status.toUpperCase()}) - Owner: ${item.owner} - Due: ${item.dueDate}`)
        .join("\n") + "\n\n",
      "Next Steps:\n" + report.nextSteps.map(step => `- ${step}`).join("\n") + "\n\n"
    ];

    if (userRole === "internal") {
      sections.push("Risks:\n" + report.risks.map(risk => `- ${risk}`).join("\n"));
    }

    return sections.join("");
  };

  return (
    <Card className="animate-fade-up">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Weekly Status Report</CardTitle>
        <div className="flex items-center gap-4">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{report.weekEnding}</span>
          </div>
          <button
            onClick={downloadReport}
            disabled={downloading}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            {downloading ? "Downloading..." : "Download"}
          </button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-medium mb-2">Key Accomplishments</h4>
          <ul className="space-y-2">
            {report.accomplishments.map((accomplishment, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                {accomplishment}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Action Items</h4>
          <div className="grid gap-3">
            {report.actionItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/5 transition-colors"
              >
                <div className="flex items-start gap-3">
                  {statusIcons[item.status]}
                  <div>
                    <h5 className="font-medium">{item.title}</h5>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">Owner: {item.owner}</span>
                      <span className="text-xs text-muted-foreground">Due: {item.dueDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className={`${statusColors[item.status]} text-white`}>
                    {item.status}
                  </Badge>
                  <Badge variant="outline">{item.priority}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {userRole === "internal" && (
          <div>
            <h4 className="font-medium mb-2">Risks</h4>
            <ul className="space-y-2">
              {report.risks.map((risk, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  {risk}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="font-medium mb-2">Next Steps</h4>
          <ul className="space-y-2">
            {report.nextSteps.map((step, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                {step}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

