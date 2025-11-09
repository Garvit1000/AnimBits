"use client"

import * as React from "react"

export interface ThemeToggleSlideRightProps {
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
}: ThemeToggleSlideRightProps) {
  const handleClick = async () => {
    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      onToggle?.()
      return
    }

    document.documentElement.classList.add('theme-slide-right')

    const transition = document.startViewTransition(() => {
      onToggle?.()
    })

    await transition.finished
    document.documentElement.classList.remove('theme-slide-right')
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

// Add to your global CSS:
/*
.theme-slide-right::view-transition-old(root) {
  animation: slide-out-right 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-slide-right::view-transition-new(root) {
  animation: slide-in-right 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slide-out-right {
  to {
    transform: translateX(100%);
  }
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
  }
}
*/