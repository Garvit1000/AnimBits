"use client";

import * as React from "react";

export interface ThemeToggleCircularProps {
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
 * Circular ripple animation for theme toggle using View Transitions API.
 * Creates an expanding circle effect from the click position.
 *
 * @example
 * ```tsx
 * <ThemeToggleCircular onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
 *   <Button>Toggle Theme</Button>
 * </ThemeToggleCircular>
 * ```
 *
 * @example
 * ```tsx
 * // With custom theme state
 * const [theme, setTheme] = useState('light')
 * <ThemeToggleCircular
 *   theme={theme}
 *   onToggle={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
 * >
 *   <MoonIcon />
 * </ThemeToggleCircular>
 * ```
 */
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
    // Prevent multiple simultaneous transitions
    if (isTransitioning) return;

    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      // Fallback for browsers without View Transitions API
      onToggle?.();
      return;
    }

    setIsTransitioning(true);

    // Get click coordinates
    const x = e.clientX;
    const y = e.clientY;

    // Determine current theme state BEFORE any changes
    const isDark = document.documentElement.classList.contains("dark");
    const targetTheme = isDark ? "to-light" : "to-dark";

    // Set CSS variables for circle origin, speed, and blur
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

    // Set transition direction BEFORE starting the transition
    document.documentElement.setAttribute("data-theme-transition", targetTheme);

    // Start view transition with proper error handling
    try {
      const transition = document.startViewTransition(() => {
        // This callback MUST be synchronous and update the DOM
        onToggle?.();
      });

      // Wait for transition to completely finish
      await transition.finished;
    } catch (error) {
      // Transition was skipped or interrupted
      console.error("Theme transition error:", error);
    } finally {
      // Always clean up after transition (success or failure)
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
