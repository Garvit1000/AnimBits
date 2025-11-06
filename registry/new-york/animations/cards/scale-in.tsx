"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { useScaleIn } from "@/lib/hooks"

export interface CardScaleInProps extends HTMLMotionProps<"div"> {
  /**
   * Animation duration in seconds
   * @default 0.5
   */
  duration?: number
  /**
   * Delay before animation starts in seconds
   * @default 0
   */
  delay?: number
  /**
   * Initial scale value (0 to 1)
   * @default 0.8
   */
  initialScale?: number
}

/**
 * A card component that scales in when it enters the viewport.
 *
 * Uses the `useScaleIn` primitive hook internally - you can use that hook
 * directly on any motion component for the same effect.
 *
 * @example
 * ```tsx
 * <CardScaleIn className="p-6 bg-white rounded-lg border">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </CardScaleIn>
 * ```
 *
 * @example
 * ```tsx
 * <CardScaleIn
 *   initialScale={0.8}
 *   delay={0.1}
 *   className="p-6 bg-white rounded-lg border"
 * >
 *   <h3>Scaled Card</h3>
 * </CardScaleIn>
 * ```
 *
 * @example Using the hook directly
 * ```tsx
 * import { useScaleIn } from "@/lib/hooks"
 *
 * function MyComponent() {
 *   const scaleProps = useScaleIn({ from: 0.5, duration: 0.6 })
 *   return <motion.div {...scaleProps}>Any element</motion.div>
 * }
 * ```
 */
export function CardScaleIn({
  children,
  className,
  duration = 0.5,
  delay = 0,
  initialScale = 0.8,
  ...props
}: CardScaleInProps) {
  const scaleProps = useScaleIn({
    duration,
    delay,
    from: initialScale,
  })

  return (
    <motion.div
      {...scaleProps}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}