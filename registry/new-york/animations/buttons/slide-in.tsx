"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { slideInVariants, createDelayedTransition } from "@/lib/animation-presets"

interface SlideInButtonProps extends Omit<HTMLMotionProps<"button">, "animate"> {
  children: React.ReactNode
  /**
   * Delay before animation starts in seconds
   * @default 0
   */
  delay?: number
  /**
   * Animation duration in seconds
   * @default 0.3
   */
  duration?: number
  /**
   * Slide direction
   * @default "left"
   */
  direction?: "left" | "right" | "up" | "down"
}

/**
 * Button with slide-in entrance animation
 * 
 * @example
 * ```tsx
 * <SlideInButton 
 *   className="px-4 py-2 bg-blue-500 text-white rounded"
 *   direction="left"
 *   delay={0.2}
 * >
 *   Sliding Button
 * </SlideInButton>
 * ```
 */
export function SlideInButton({
  children,
  delay = 0,
  duration = 0.3,
  direction = "left",
  ...props
}: SlideInButtonProps) {
  const customVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
      y: direction === "up" ? -20 : direction === "down" ? 20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }

  return (
    <motion.button
      variants={customVariants}
      initial="hidden"
      animate="visible"
      transition={createDelayedTransition(delay, duration)}
      {...props}
    >
      {children}
    </motion.button>
  )
}