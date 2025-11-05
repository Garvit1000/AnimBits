"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CardFadeInProps extends HTMLMotionProps<"div"> {
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
}

/**
 * A card component that fades in when it mounts.
 * 
 * @example
 * ```tsx
 * <CardFadeIn className="p-6 bg-white rounded-lg border">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </CardFadeIn>
 * ```
 * 
 * @example
 * ```tsx
 * <CardFadeIn delay={0.2} duration={0.5} className="p-6 bg-white rounded-lg border">
 *   <h3>Delayed Card</h3>
 * </CardFadeIn>
 * ```
 */
export function CardFadeIn({
  children,
  className,
  duration = 0.3,
  delay = 0,
  ...props
}: CardFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}