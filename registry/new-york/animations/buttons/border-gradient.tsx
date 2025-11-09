"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface BorderGradientButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode
  /**
   * Animation duration in seconds
   * @default 2
   */
  duration?: number
  /**
   * Gradient colors
   * @default ["#3b82f6", "#8b5cf6", "#ec4899"]
   */
  colors?: string[]
}

/**
 * Button with animated gradient border that travels around perimeter.
 * 
 * @example
 * ```tsx
 * <BorderGradientButton className="px-4 py-2 bg-white text-black rounded">
 *   Gradient Border
 * </BorderGradientButton>
 * ```
 * 
 * @example
 * ```tsx
 * <BorderGradientButton 
 *   colors={["#ff0080", "#ff8c00", "#40e0d0"]}
 *   duration={3}
 * >
 *   Custom Colors
 * </BorderGradientButton>
 * ```
 */
export function BorderGradientButton({
  children,
  className,
  duration = 2,
  colors = ["#3b82f6", "#8b5cf6", "#ec4899"],
  ...props
}: BorderGradientButtonProps) {
  const gradientString = colors.join(", ")

  return (
    <motion.button
      className={cn("relative", className)}
      whileHover="hover"
      initial="initial"
      {...props}
    >
      <motion.div
        className="absolute inset-0 rounded-[inherit] p-[2px]"
        style={{
          background: `conic-gradient(from 0deg, ${gradientString}, ${colors[0]})`,
        }}
        variants={{
          initial: { rotate: 0 },
          hover: { rotate: 360 },
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="w-full h-full rounded-[inherit] bg-white dark:bg-neutral-900" />
      </motion.div>
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
