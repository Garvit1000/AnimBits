"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

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
 * @example
 * ```tsx
 * <CardHoverLift className="p-6 bg-white rounded-lg border">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </CardHoverLift>
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
  return (
    <motion.div
      whileHover={{
        y: -liftDistance,
        boxShadow: addShadow ? "0 10px 30px rgba(0,0,0,0.15)" : undefined,
      }}
      transition={{ duration }}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}