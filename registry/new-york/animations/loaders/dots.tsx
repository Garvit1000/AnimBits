"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface LoaderDotsProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /**
   * Size of each dot in pixels
   * @default 10
   */
  size?: number
  /**
   * Color of the dots
   * @default "currentColor"
   */
  color?: string
  /**
   * Number of dots
   * @default 3
   */
  count?: number
  /**
   * Gap between dots in pixels
   * @default 8
   */
  gap?: number
  /**
   * Animation duration in seconds
   * @default 1.2
   */
  duration?: number
}

/**
 * A bouncing dots loader.
 * 
 * @example
 * ```tsx
 * <LoaderDots />
 * ```
 * 
 * @example
 * ```tsx
 * <LoaderDots size={12} count={5} color="#3b82f6" />
 * ```
 */
export function LoaderDots({
  className,
  size = 10,
  color = "currentColor",
  count = 3,
  gap = 8,
  duration = 1.2,
  ...props
}: LoaderDotsProps) {
  return (
    <div
      className={cn("flex items-center", className)}
      style={{ gap: gap }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="rounded-full"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
          }}
          animate={{
            y: [0, -size * 1.5, 0],
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