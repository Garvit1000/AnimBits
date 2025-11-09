"use client"

import * as React from "react"

export interface ThemeToggleCircularProps {
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
}: ThemeToggleCircularProps) {
  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      // Fallback for browsers without View Transitions API
      onToggle?.()
      return
    }

    // Get click coordinates
    const x = e.clientX
    const y = e.clientY

    // Set CSS variables for circle origin
    document.documentElement.style.setProperty('--x', `${x}px`)
    document.documentElement.style.setProperty('--y', `${y}px`)

    // Start view transition
    const transition = document.startViewTransition(() => {
      onToggle?.()
    })

    await transition.ready
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}