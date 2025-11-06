"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { useHoverLift } from "@/lib/hooks"

export interface CardHoverLiftProps extends HTMLMotionProps<"div"> {
  /**
   * The lift distance in pixels
   * @default 8
   */
  liftDistance?: number
  /**
   * Animation duration in seconds
   * @default 0.2
   */
  duration?: number
  /**
   * Whether to add shadow on lift
   * @default true
   */
  addShadow?: boolean
}

/**
 * A card component that lifts up on hover with an optional shadow effect.
 *
 * Uses the `useHoverLift` primitive hook internally - you can use that hook
 * directly on any motion component for the same effect.
 *
 * @example
 * ```tsx
 * <CardHoverLift className="p-6 bg-white rounded-lg border">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </CardHoverLift>
 * ```
 *
 * @example Using the hook directly
 * ```tsx
 * import { useHoverLift } from "@/lib/hooks"
 *
 * function MyComponent() {
 *   const liftProps = useHoverLift({ liftDistance: 8 })
 *   return <motion.article {...liftProps}>Any element</motion.article>
 * }
 * ```
 */
export function CardHoverLift({
  children,
  className,
  liftDistance = 8,
  duration = 0.2,
  addShadow = true,
  ...props
}: CardHoverLiftProps) {
  const liftProps = useHoverLift({
    liftDistance,
    duration,
    addShadow,
  })

  return (
    <motion.div
      {...liftProps}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}