"use client"

import * as React from "react"

export interface ThemeToggleSlideTopProps {
  /**
   * The element to trigger the theme toggle
   */
  children: React.ReactNode
  /**
   * Callback when theme is toggled
   */
  onToggle?: () => void
  /**
   * Current theme
   */
  theme?: "light" | "dark"
  /**
   * Optional class name
   */
  className?: string
}

/**
 * Top to bottom slide animation for theme toggle using View Transitions API.
 * The new theme slides down from the top of the screen.
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
}: ThemeToggleSlideTopProps) {
  const handleClick = async () => {
    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      onToggle?.()
      return
    }

    // Add custom class for this specific transition
    document.documentElement.classList.add('theme-slide-top')

    const transition = document.startViewTransition(() => {
      onToggle?.()
    })

    await transition.finished
    document.documentElement.classList.remove('theme-slide-top')
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

// Add to your global CSS:
/*
.theme-slide-top::view-transition-old(root) {
  animation: slide-out-top 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-slide-top::view-transition-new(root) {
  animation: slide-in-top 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slide-out-top {
  to {
    transform: translateY(-100%);
  }
}

@keyframes slide-in-top {
  from {
    transform: translateY(-100%);
  }
}
*/