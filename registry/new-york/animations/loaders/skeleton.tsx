"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface LoaderSkeletonProps extends HTMLMotionProps<"div"> {
  /**
   * Width of the skeleton
   * @default "100%"
   */
  width?: string | number
  /**
   * Height of the skeleton in pixels
   * @default 20
   */
  height?: number
  /**
   * Border radius in pixels
   * @default 4
   */
  borderRadius?: number
  /**
   * Base color of the skeleton
   * @default "#e5e7eb"
   */
  baseColor?: string
  /**
   * Highlight color of the skeleton
   * @default "#f3f4f6"
   */
  highlightColor?: string
  /**
   * Animation duration in seconds
   * @default 1.5
   */
  duration?: number
}

/**
 * A skeleton loader with shimmer effect.
 * 
 * @example
 * ```tsx
 * <LoaderSkeleton />
 * ```
 * 
 * @example
 * ```tsx
 * <LoaderSkeleton width={300} height={40} borderRadius={8} />
 * ```
 */
export function LoaderSkeleton({
  className,
  width = "100%",
  height = 20,
  borderRadius = 4,
  baseColor = "#e5e7eb",
  highlightColor = "#f3f4f6",
  duration = 1.5,
  ...props
}: LoaderSkeletonProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: baseColor,
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent, ${highlightColor}, transparent)`,
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  )
}