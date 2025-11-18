"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggleCircular } from "@/registry/new-york/animations/transitions/theme-toggle-circular";
import { ThemeToggleSlideTop } from "@/registry/new-york/animations/transitions/theme-toggle-slide-top";
import { ThemeToggleSlideBottom } from "@/registry/new-york/animations/transitions/theme-toggle-slide-bottom";
import { ThemeToggleSlideLeft } from "@/registry/new-york/animations/transitions/theme-toggle-slide-left";
import { ThemeToggleSlideRight } from "@/registry/new-york/animations/transitions/theme-toggle-slide-right";

export default function ThemeToggleDemoPage() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  const toggleTheme = () => {
    // Determine the NEW theme based on current DOM state, not React state
    const isDark = document.documentElement.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";

    // Update React state
    setTheme(newTheme);

    // Explicitly set or remove the dark class instead of toggling
    if (isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const ThemeIcon = () => (
    <div className="relative h-5 w-5">
      <Sun className="absolute inset-0 h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold">AnimBits Theme Toggle</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click any button to toggle theme with different transition
            animations
          </p>
          <Badge variant="outline">
            Current Theme:{" "}
            <span className="ml-1 font-bold capitalize">{theme}</span>
          </Badge>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {/* Circular */}
          <ThemeToggleCircular onToggle={toggleTheme} theme={theme}>
            <Button variant="outline" size="lg" className="w-full h-14">
              <ThemeIcon />
              <span className="ml-2">Click Position to Edges (Circular)</span>
            </Button>
          </ThemeToggleCircular>

          {/* Top to Bottom */}
          <ThemeToggleSlideTop onToggle={toggleTheme} theme={theme}>
            <Button variant="outline" size="lg" className="w-full h-14">
              <ThemeIcon />
              <span className="ml-2">Top to Bottom</span>
            </Button>
          </ThemeToggleSlideTop>

          {/* Bottom to Top */}
          <ThemeToggleSlideBottom onToggle={toggleTheme} theme={theme}>
            <Button variant="outline" size="lg" className="w-full h-14">
              <ThemeIcon />
              <span className="ml-2">Bottom to Top</span>
            </Button>
          </ThemeToggleSlideBottom>

          {/* Left to Right */}
          <ThemeToggleSlideLeft onToggle={toggleTheme} theme={theme}>
            <Button variant="outline" size="lg" className="w-full h-14">
              <ThemeIcon />
              <span className="ml-2">Left to Right</span>
            </Button>
          </ThemeToggleSlideLeft>

          {/* Right to Left */}
          <ThemeToggleSlideRight onToggle={toggleTheme} theme={theme}>
            <Button variant="outline" size="lg" className="w-full h-14">
              <ThemeIcon />
              <span className="ml-2">Right to Left</span>
            </Button>
          </ThemeToggleSlideRight>
        </div>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>View Transitions API - Chrome 111+, Edge 111+, Opera 97+</p>
        </div>
      </div>
    </div>
  );
}
