"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface LoaderSpinnerProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /**
   * Size of the spinner in pixels
   * @default 40
   */
  size?: number
  /**
   * Color of the spinner
   * @default "currentColor"
   */
  color?: string
  /**
   * Border width in pixels
   * @default 4
   */
  borderWidth?: number
  /**
   * Animation duration in seconds
   * @default 1
   */
  duration?: number
}

/**
 * A circular spinning loader.
 * 
 * @example
 * ```tsx
 * <LoaderSpinner />
 * ```
 * 
 * @example
 * ```tsx
 * <LoaderSpinner size={60} color="#3b82f6" borderWidth={6} />
 * ```
 */
export function LoaderSpinner({
  className,
  size = 40,
  color = "currentColor",
  borderWidth = 4,
  duration = 1,
  ...props
}: LoaderSpinnerProps) {
  return (
    <motion.div
      className={cn("rounded-full", className)}
      style={{
        width: size,
        height: size,
        border: `${borderWidth}px solid transparent`,
        borderTopColor: color,
        borderRightColor: color,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
      }}
      {...props}
    />
  )
}