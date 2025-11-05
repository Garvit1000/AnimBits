"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface CardFlipProps extends HTMLMotionProps<"div"> {
  /**
   * Animation duration in seconds
   * @default 0.6
   */
  duration?: number
  /**
   * Flip axis
   * @default "y"
   */
  axis?: "x" | "y"
}

/**
 * A card component that flips on hover.
 * 
 * @example
 * ```tsx
 * <CardFlip className="p-6 bg-white rounded-lg border">
 *   <h3>Card Title</h3>
 *   <p>Hover to flip!</p>
 * </CardFlip>
 * ```
 * 
 * @example
 * ```tsx
 * <CardFlip axis="x" className="p-6 bg-white rounded-lg border">
 *   <h3>Flip Vertically</h3>
 * </CardFlip>
 * ```
 */
export function CardFlip({
  children,
  className,
  duration = 0.6,
  axis = "y",
  ...props
}: CardFlipProps) {
  return (
    <motion.div
      whileHover={{
        rotateY: axis === "y" ? 180 : 0,
        rotateX: axis === "x" ? 180 : 0,
      }}
      transition={{ duration }}
      style={{ transformStyle: "preserve-3d" }}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}