"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { useHoverGlow } from "@/lib/hooks"

export interface CardHoverGlowProps extends HTMLMotionProps<"div"> {
  /**
   * The glow color (as rgba or hex)
   * @default "rgba(59, 130, 246, 0.5)" (blue)
   */
  glowColor?: string
  /**
   * The glow spread in pixels
   * @default 20
   */
  glowSpread?: number
  /**
   * Animation duration in seconds
   * @default 0.3
   */
  duration?: number
}

/**
 * A card component that glows on hover with customizable color.
 *
 * Uses the `useHoverGlow` primitive hook internally - you can use that hook
 * directly on any motion component for the same effect.
 *
 * @example
 * ```tsx
 * <CardHoverGlow className="p-6 bg-white rounded-lg border">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </CardHoverGlow>
 * ```
 *
 * @example
 * ```tsx
 * <CardHoverGlow
 *   glowColor="rgba(168, 85, 247, 0.5)"
 *   glowSpread={30}
 *   className="p-6 bg-white rounded-lg border"
 * >
 *   <h3>Purple Glow Card</h3>
 * </CardHoverGlow>
 * ```
 *
 * @example Using the hook directly
 * ```tsx
 * import { useHoverGlow } from "@/lib/hooks"
 *
 * function MyComponent() {
 *   const glowProps = useHoverGlow({ glowColor: "rgba(168, 85, 247, 0.5)" })
 *   return <motion.section {...glowProps}>Any element</motion.section>
 * }
 * ```
 */
export function CardHoverGlow({
  children,
  className,
  glowColor = "rgba(59, 130, 246, 0.5)",
  glowSpread = 20,
  duration = 0.3,
  ...props
}: CardHoverGlowProps) {
  const glowProps = useHoverGlow({
    glowColor,
    glowBlur: glowSpread,
    duration,
  })

  return (
    <motion.div
      {...glowProps}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}