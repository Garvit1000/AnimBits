"use client";

import * as React from "react";

export interface ThemeToggleSlideTopProps {
  /**
   * The element to trigger the theme toggle
   */
  children: React.ReactNode;
  /**
   * Callback when theme is toggled
   */
  onToggle?: () => void;
  /**
   * Current theme
   */
  theme?: "light" | "dark";
  /**
   * Optional class name
   */
  className?: string;
  /**
   * Animation speed in seconds
   * @default 0.5
   */
  speed?: number;
  /**
   * Blur amount in pixels
   * @default 0
   */
  blur?: number;
}

/**
 * Top to bottom slide animation for theme toggle using View Transitions API.
 * The new theme slides in from the top of the screen.
 *
 * @example
 * ```tsx
 * <ThemeToggleSlideTop onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
 *   <Button>Toggle Theme</Button>
 * </ThemeToggleSlideTop>
 * ```
 */
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
    // Prevent multiple simultaneous transitions
    if (isTransitioning) return;

    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      onToggle?.();
      return;
    }

    setIsTransitioning(true);

    // Set CSS variables for speed and blur
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
