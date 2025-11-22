"use client";
import * as React from "react";
export interface ThemeToggleSlideLeftProps {
  children: React.ReactNode;
  onToggle?: () => void;
  theme?: "light" | "dark";
  className?: string;
  speed?: number;
  blur?: number;
}
export function ThemeToggleSlideLeft({
  children,
  onToggle,
  theme,
  className,
  speed = 0.5,
  blur = 0,
}: ThemeToggleSlideLeftProps) {
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const handleClick = async () => {
    if (isTransitioning) return;
    if (!document.startViewTransition) {
      onToggle?.();
      return;
    }
    setIsTransitioning(true);
    document.documentElement.style.setProperty(
      "--transition-speed",
      `${speed}s`,
    );
    document.documentElement.style.setProperty(
      "--transition-blur",
      `${blur}px`,
    );
    document.documentElement.classList.add("theme-slide-left");
    const transition = document.startViewTransition(() => {
      onToggle?.();
    });
    try {
      await transition.finished;
    } catch (error) {
      console.warn("Theme transition interrupted:", error);
    } finally {
      document.documentElement.classList.remove("theme-slide-left");
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
