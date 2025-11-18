"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface TransitionDemoProps {
  TransitionComponent: React.ComponentType<{
    children: React.ReactNode;
    onToggle: () => void;
    speed?: number;
    blur?: number;
    className?: string;
  }>;
}

export function TransitionDemo({ TransitionComponent }: TransitionDemoProps) {
  const [speed, setSpeed] = React.useState(0.5);
  const [blur, setBlur] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = React.useCallback(() => {
    // Toggle the dark class on the document element to trigger the transition
    const isDark = document.documentElement.classList.contains("dark");
    console.log("Before toggle:", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
    const isNowDark = document.documentElement.classList.contains("dark");
    console.log("After toggle:", isNowDark ? "dark" : "light");
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="flex flex-col gap-6 items-center w-full p-6">
        <Button variant="outline" size="sm" className="relative">
          <Sun className="h-4 w-4 mr-2" />
          <span>Toggle Theme</span>
        </Button>
        <div className="w-full max-w-md space-y-4 p-4 border rounded-lg bg-card">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Speed</Label>
              <span className="text-sm text-muted-foreground">0.5s</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Blur</Label>
              <span className="text-sm text-muted-foreground">0px</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-6 items-center w-full p-6"
      suppressHydrationWarning
    >
      <TransitionComponent onToggle={toggleTheme} speed={speed} blur={blur}>
        <Button
          variant="outline"
          size="sm"
          className="relative"
          suppressHydrationWarning
        >
          <Sun className="h-4 w-4 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 left-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="ml-0 dark:ml-6" suppressHydrationWarning>
            Toggle Theme
          </span>
        </Button>
      </TransitionComponent>

      <div
        className="w-full max-w-md space-y-4 p-4 border rounded-lg bg-card"
        suppressHydrationWarning
      >
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="speed-slider">Speed</Label>
            <span
              className="text-sm text-muted-foreground"
              suppressHydrationWarning
            >
              {speed.toFixed(1)}s
            </span>
          </div>
          <Slider
            id="speed-slider"
            min={0.1}
            max={2}
            step={0.1}
            value={[speed]}
            onValueChange={(value) => setSpeed(value[0])}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="blur-slider">Blur</Label>
            <span
              className="text-sm text-muted-foreground"
              suppressHydrationWarning
            >
              {blur}px
            </span>
          </div>
          <Slider
            id="blur-slider"
            min={0}
            max={20}
            step={1}
            value={[blur]}
            onValueChange={(value) => setBlur(value[0])}
            className="w-full"
          />
        </div>

        <div className="text-xs text-muted-foreground text-center pt-2">
          Click the button above to see the transition effect
        </div>
      </div>
    </div>
  );
}
