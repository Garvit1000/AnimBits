"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

export type SlideDirection = "left" | "right" | "top" | "bottom"

export interface PageTransitionSlideProps {
  children: React.ReactNode
  /**
   * Slide direction
   * @default "left"
   */
  direction?: SlideDirection
  /**
   * Transition duration in seconds
   * @default 0.4
   */
  duration?: number
  /**
   * CSS easing function
   * @default "ease-in-out"
   */
  ease?: string
}

/**
 * Page transition component with slide effect using View Transitions API.
 * Provides smooth sliding transitions between page navigations from any direction.
 *
 * @example
 * ```tsx
 * import { PageTransitionSlide } from "@/components/animations/pages/page-transition-slide"
 *
 * export default function RootLayout({ children }: { children: React.ReactNode }) {
 *   return (
 *     <html lang="en">
 *       <body>
 *         <PageTransitionSlide direction="left">
 *           {children}
 *         </PageTransitionSlide>
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 *
 * @example Slide from right
 * ```tsx
 * <PageTransitionSlide direction="right">
 *   {children}
 * </PageTransitionSlide>
 * ```
 *
 * @example Slide from top with custom duration
 * ```tsx
 * <PageTransitionSlide
 *   direction="top"
 *   duration={0.5}
 * >
 *   {children}
 * </PageTransitionSlide>
 * ```
 *
 * @example With custom easing
 * ```tsx
 * <PageTransitionSlide
 *   direction="bottom"
 *   duration={0.6}
 *   ease="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
 * >
 *   {children}
 * </PageTransitionSlide>
 * ```
 */
export function PageTransitionSlide({
  children,
  direction = "left",
  duration = 0.4,
  ease = "ease-in-out",
}: PageTransitionSlideProps) {
  const pathname = usePathname()

  React.useEffect(() => {
    if (typeof document === "undefined" || !document.startViewTransition) {
      return
    }

    // Set CSS custom properties for the transition
    document.documentElement.style.setProperty('--page-transition-duration', `${duration}s`)
    document.documentElement.style.setProperty('--page-transition-ease', ease)
    document.documentElement.setAttribute('data-slide-direction', direction)
  }, [pathname, duration, ease, direction])

  return <>{children}</>
}
