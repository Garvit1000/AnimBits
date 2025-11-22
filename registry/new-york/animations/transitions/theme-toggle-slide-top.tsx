"use client";
import * as React from "react";
export interface ThemeToggleSlideTopProps {
  children: React.ReactNode;
  onToggle?: () => void;
  theme?: "light" | "dark";
  className?: string;
  speed?: number;
  blur?: number;
}
export function ThemeToggleSlideTop({
  children,
  onToggle,
  theme,
  className,
  speed = 0.5,
  blur = 0,
}: ThemeToggleSlideTopProps) {
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
    document.documentElement.classList.add("theme-slide-top");
    const transition = document.startViewTransition(() => {
      onToggle?.();
    });
    try {
      await transition.finished;
    } catch (error) {
      console.warn("Theme transition interrupted:", error);
    } finally {
      document.documentElement.classList.remove("theme-slide-top");
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
