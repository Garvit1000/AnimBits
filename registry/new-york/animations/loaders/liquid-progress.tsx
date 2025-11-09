"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface LoaderLiquidProgressProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /**
   * Progress value (0-100)
   * @default 0
   */
  progress?: number
  /**
   * Height of the progress bar in pixels
   * @default 8
   */
  height?: number
  /**
   * Color of the liquid
   * @default "#3b82f6"
   */
  color?: string
  /**
   * Animation duration in seconds
   * @default 1
   */
  duration?: number
}

/**
 * A liquid-style progress bar that fills vertically.
 * 
 * @example
 * ```tsx
 * <LoaderLiquidProgress progress={60} />
 * ```
 * 
 * @example
 * ```tsx
 * <LoaderLiquidProgress 
 *   progress={80}
 *   height={12}
 *   color="#10b981"
 * />
 * ```
 */
export function LoaderLiquidProgress({
  className,
  progress = 0,
  height = 8,
  color = "#3b82f6",
  duration = 1,
  ...props
}: LoaderLiquidProgressProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800", className)}
      style={{ height }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `linear-gradient(90deg, ${color}, ${color}dd)`,
        }}
        initial={{ x: "-100%" }}
        animate={{ x: `${progress - 100}%` }}
        transition={{
          duration,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${color}44, transparent)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  )
}
