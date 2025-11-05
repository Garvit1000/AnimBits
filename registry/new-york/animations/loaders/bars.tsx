"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface LoaderBarsProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /**
   * Width of each bar in pixels
   * @default 4
   */
  barWidth?: number
  /**
   * Height of each bar in pixels
   * @default 30
   */
  barHeight?: number
  /**
   * Color of the bars
   * @default "currentColor"
   */
  color?: string
  /**
   * Number of bars
   * @default 5
   */
  count?: number
  /**
   * Gap between bars in pixels
   * @default 4
   */
  gap?: number
  /**
   * Animation duration in seconds
   * @default 1
   */
  duration?: number
}

/**
 * A bars loader with animated height.
 * 
 * @example
 * ```tsx
 * <LoaderBars />
 * ```
 * 
 * @example
 * ```tsx
 * <LoaderBars count={7} barHeight={40} color="#3b82f6" />
 * ```
 */
export function LoaderBars({
  className,
  barWidth = 4,
  barHeight = 30,
  color = "currentColor",
  count = 5,
  gap = 4,
  duration = 1,
  ...props
}: LoaderBarsProps) {
  return (
    <div
      className={cn("flex items-end", className)}
      style={{ gap }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          style={{
            width: barWidth,
            backgroundColor: color,
          }}
          animate={{
            height: [barHeight * 0.3, barHeight, barHeight * 0.3],
          }}
          transition={{
            duration,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index * (duration / count),
          }}
        />
      ))}
    </div>
  )
}