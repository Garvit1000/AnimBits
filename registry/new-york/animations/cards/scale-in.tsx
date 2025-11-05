"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CardScaleInProps extends HTMLMotionProps<"div"> {
  /**
   * Animation duration in seconds
   * @default 0.3
   */
  duration?: number
  /**
   * Delay before animation starts in seconds
   * @default 0
   */
  delay?: number
  /**
   * Initial scale value (0 to 1)
   * @default 0.9
   */
  initialScale?: number
}

/**
 * A card component that scales in when it mounts.
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
 */
export function CardScaleIn({
  children,
  className,
  duration = 0.3,
  delay = 0,
  initialScale = 0.9,
  ...props
}: CardScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}