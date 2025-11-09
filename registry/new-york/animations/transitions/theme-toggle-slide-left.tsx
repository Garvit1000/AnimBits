"use client"

import * as React from "react"

export interface ThemeToggleSlideLeftProps {
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
 * Left to right slide animation for theme toggle using View Transitions API.
 * The new theme slides in from the left side of the screen.
 * 
 * @example
 * ```tsx
 * <ThemeToggleSlideLeft onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
 *   <Button>Toggle Theme</Button>
 * </ThemeToggleSlideLeft>
 * ```
 */
export function ThemeToggleSlideLeft({
  children,
  onToggle,
  theme,
  className,
}: ThemeToggleSlideLeftProps) {
  const handleClick = async () => {
    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      onToggle?.()
      return
    }

    document.documentElement.classList.add('theme-slide-left')

    const transition = document.startViewTransition(() => {
      onToggle?.()
    })

    await transition.finished
    document.documentElement.classList.remove('theme-slide-left')
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

// Add to your global CSS:
/*
.theme-slide-left::view-transition-old(root) {
  animation: slide-out-left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-slide-left::view-transition-new(root) {
  animation: slide-in-left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slide-out-left {
  to {
    transform: translateX(-100%);
  }
}

@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
  }
}
*/