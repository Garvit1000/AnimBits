"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface LoaderMorphingProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /**
   * Size of the loader in pixels
   * @default 40
   */
  size?: number
  /**
   * Color of the loader
   * @default "currentColor"
   */
  color?: string
  /**
   * Animation duration in seconds
   * @default 2
   */
  duration?: number
}

/**
 * A morphing shape loader that transitions between different forms.
 * 
 * @example
 * ```tsx
 * <LoaderMorphing />
 * ```
 * 
 * @example
 * ```tsx
 * <LoaderMorphing size={60} color="#3b82f6" duration={3} />
 * ```
 */
export function LoaderMorphing({
  className,
  size = 40,
  color = "currentColor",
  duration = 2,
  ...props
}: LoaderMorphingProps) {
  return (
    <motion.div
      className={cn(className)}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
      animate={{
        borderRadius: ["20%", "50%", "20%", "50%", "20%"],
        rotate: [0, 90, 180, 270, 360],
        scale: [1, 1.2, 1, 1.2, 1],
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
