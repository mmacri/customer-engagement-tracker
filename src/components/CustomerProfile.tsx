
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building2, Users, Target } from "lucide-react";

interface CustomerProfileProps {
  name: string;
  industry: string;
  objectives: string[];
  contacts: Array<{
    name: string;
    role: string;
    avatar?: string;
  }>;
}

export const CustomerProfile = ({ name, industry, objectives, contacts }: CustomerProfileProps) => {
  return (
    <Card className="p-6 animate-fade-up">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-1">{name}</h2>
          <div className="flex items-center text-muted-foreground mb-4">
            <Building2 className="w-4 h-4 mr-2" />
            <span>{industry}</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Target className="w-4 h-4 mr-2" />
          <h3 className="font-medium">Key Objectives</h3>
        </div>
        <ul className="list-disc list-inside text-sm text-muted-foreground ml-6">
          {objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex items-center mb-3">
          <Users className="w-4 h-4 mr-2" />
          <h3 className="font-medium">Key Contacts</h3>
        </div>
        <div className="grid gap-3">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-8 w-8 mr-3">
                <AvatarImage src={contact.avatar} />
                <AvatarFallback>{contact.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">{contact.name}</div>
                <div className="text-xs text-muted-foreground">{contact.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
