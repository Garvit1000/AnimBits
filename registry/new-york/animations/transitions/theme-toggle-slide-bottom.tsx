"use client"

import * as React from "react"

export interface ThemeToggleSlideBottomProps {
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
  /**
   * Animation speed in seconds
   * @default 0.5
   */
  speed?: number
  /**
   * Blur amount in pixels
   * @default 0
   */
  blur?: number
}

/**
 * Bottom to top slide animation for theme toggle using View Transitions API.
 * The new theme slides up from the bottom of the screen.
 * 
 * @example
 * ```tsx
 * <ThemeToggleSlideBottom onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
 *   <Button>Toggle Theme</Button>
 * </ThemeToggleSlideBottom>
 * ```
 */
export function ThemeToggleSlideBottom({
  children,
  onToggle,
  theme,
  className,
  speed = 0.5,
  blur = 0,
}: ThemeToggleSlideBottomProps) {
  const handleClick = async () => {
    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      onToggle?.()
      return
    }

    // Set CSS variables for speed and blur
    document.documentElement.style.setProperty('--transition-speed', `${speed}s`)
    document.documentElement.style.setProperty('--transition-blur', `${blur}px`)

    document.documentElement.classList.add('theme-slide-bottom')

    const transition = document.startViewTransition(() => {
      onToggle?.()
    })

    await transition.finished
    document.documentElement.classList.remove('theme-slide-bottom')
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

// Add to your global CSS:
/*
:root {
  --transition-speed: 0.5s;
  --transition-blur: 0px;
}

.theme-slide-bottom::view-transition-old(root) {
  animation: slide-out-bottom var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);
  filter: blur(var(--transition-blur));
}

.theme-slide-bottom::view-transition-new(root) {
  animation: slide-in-bottom var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);
  filter: blur(var(--transition-blur));
}

@keyframes slide-out-bottom {
  to {
    transform: translateY(100%);
  }
}

@keyframes slide-in-bottom {
  from {
    transform: translateY(100%);
  }
}
*/