"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

export interface PageTransitionFadeProps {
  children: React.ReactNode
  /**
   * Transition duration in seconds
   * @default 0.3
   */
  duration?: number
  /**
   * CSS easing function
   * @default "ease-in-out"
   */
  ease?: string
}

/**
 * Page transition component with fade effect using View Transitions API.
 * Provides smooth fade-in/fade-out transitions between page navigations.
 *
 * @example
 * ```tsx
 * import { PageTransitionFade } from "@/components/animations/pages/page-transition-fade"
 *
 * export default function RootLayout({ children }: { children: React.ReactNode }) {
 *   return (
 *     <html lang="en">
 *       <body>
 *         <PageTransitionFade>
 *           {children}
 *         </PageTransitionFade>
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 *
 * @example With custom duration
 * ```tsx
 * <PageTransitionFade duration={0.5}>
 *   {children}
 * </PageTransitionFade>
 * ```
 *
 * @example With custom easing
 * ```tsx
 * <PageTransitionFade
 *   duration={0.4}
 *   ease="cubic-bezier(0.4, 0, 0.2, 1)"
 * >
 *   {children}
 * </PageTransitionFade>
 * ```
 */
export function PageTransitionFade({
  children,
  duration = 0.3,
  ease = "ease-in-out",
}: PageTransitionFadeProps) {
  const pathname = usePathname()

  React.useEffect(() => {
    if (typeof document === "undefined" || !document.startViewTransition) {
      return
    }

    // Set CSS custom properties for the transition
    document.documentElement.style.setProperty('--page-transition-duration', `${duration}s`)
    document.documentElement.style.setProperty('--page-transition-ease', ease)
  }, [pathname, duration, ease])

  return <>{children}</>
}
