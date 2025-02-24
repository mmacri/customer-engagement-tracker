
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

export const Navigation = () => {
  const navItems: NavItem[] = [
    { id: "profile", label: "Customer Profile" },
    { id: "metrics", label: "Business Metrics" },
    { id: "health", label: "Health Trends" },
    { id: "status", label: "Status Report" },
    { id: "roi", label: "ROI Dashboard" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <div className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Navigation</span>
            </div>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="text-foreground/60 hover:text-foreground"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </nav>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 rounded-full shadow-md"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </>
  );
};
