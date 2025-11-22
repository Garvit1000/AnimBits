"use client";
import * as React from "react";
export interface ThemeToggleCircularProps {
  children: React.ReactNode;
  onToggle?: () => void;
  theme?: "light" | "dark";
  className?: string;
  speed?: number;
  blur?: number;
}
export function ThemeToggleCircular({
  children,
  onToggle,
  theme,
  className,
  speed = 0.5,
  blur = 0,
}: ThemeToggleCircularProps) {
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTransitioning) return;
    if (!document.startViewTransition) {
      onToggle?.();
      return;
    }
    setIsTransitioning(true);
    const x = e.clientX;
    const y = e.clientY;
    const isDark = document.documentElement.classList.contains("dark");
    const targetTheme = isDark ? "to-light" : "to-dark";
    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);
    document.documentElement.style.setProperty(
      "--transition-speed",
      `${speed}s`,
    );
    document.documentElement.style.setProperty(
      "--transition-blur",
      `${blur}px`,
    );
    document.documentElement.setAttribute("data-theme-transition", targetTheme);
    try {
      const transition = document.startViewTransition(() => {
        onToggle?.();
      });
      await transition.finished;
    } catch (error) {
      console.error("Theme transition error:", error);
    } finally {
      document.documentElement.removeAttribute("data-theme-transition");
      setIsTransitioning(false);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={className}
      style={{ pointerEvents: isTransitioning ? "none" : "auto" }}
    >
      {children}
    </div>
  );
}
