"use client";

import * as React from "react";

export interface ThemeToggleSlideRightProps {
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
 * Right to left slide animation for theme toggle using View Transitions API.
 * The new theme slides in from the right side of the screen.
 *
 * @example
 * ```tsx
 * <ThemeToggleSlideRight onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
 *   <Button>Toggle Theme</Button>
 * </ThemeToggleSlideRight>
 * ```
 */
export function ThemeToggleSlideRight({
  children,
  onToggle,
  theme,
  className,
  speed = 0.5,
  blur = 0,
}: ThemeToggleSlideRightProps) {
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

    document.documentElement.classList.add("theme-slide-right");

    const transition = document.startViewTransition(() => {
      onToggle?.();
    });

    try {
      await transition.finished;
    } catch (error) {
      console.warn("Theme transition interrupted:", error);
    } finally {
      document.documentElement.classList.remove("theme-slide-right");
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
