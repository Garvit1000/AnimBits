"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CardSlideInProps extends HTMLMotionProps<"div"> {
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
   * Direction to slide from
   * @default "left"
   */
  direction?: "left" | "right" | "top" | "bottom"
  /**
   * Distance to slide in pixels
   * @default 20
   */
  distance?: number
}

/**
 * A card component that slides in from a direction when it mounts.
 * 
 * @example
 * ```tsx
 * <CardSlideIn className="p-6 bg-white rounded-lg border">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </CardSlideIn>
 * ```
 * 
 * @example
 * ```tsx
 * <CardSlideIn 
 *   direction="right" 
 *   distance={30}
 *   className="p-6 bg-white rounded-lg border"
 * >
 *   <h3>Slide from Right</h3>
 * </CardSlideIn>
 * ```
 */
export function CardSlideIn({
  children,
  className,
  duration = 0.3,
  delay = 0,
  direction = "left",
  distance = 20,
  ...props
}: CardSlideInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -distance, y: 0 }
      case "right":
        return { x: distance, y: 0 }
      case "top":
        return { x: 0, y: -distance }
      case "bottom":
        return { x: 0, y: distance }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}