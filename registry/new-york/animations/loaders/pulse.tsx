"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface LoaderPulseProps extends HTMLMotionProps<"div"> {
  /**
   * Size of the circle in pixels
   * @default 60
   */
  size?: number
  /**
   * Color of the pulse
   * @default "currentColor"
   */
  color?: string
  /**
   * Animation duration in seconds
   * @default 1.5
   */
  duration?: number
}

/**
 * A pulsing circle loader.
 * 
 * @example
 * ```tsx
 * <LoaderPulse />
 * ```
 * 
 * @example
 * ```tsx
 * <LoaderPulse size={80} color="#3b82f6" duration={2} />
 * ```
 */
export function LoaderPulse({
  className,
  size = 60,
  color = "currentColor",
  duration = 1.5,
  ...props
}: LoaderPulseProps) {
  return (
    <motion.div
      className={cn("rounded-full", className)}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      {...props}
    />
  )
}