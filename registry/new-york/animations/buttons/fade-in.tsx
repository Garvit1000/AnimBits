"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { fadeInVariants, createDelayedTransition } from "@/lib/animation-presets"

interface FadeInButtonProps extends Omit<HTMLMotionProps<"button">, "animate"> {
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
}

/**
 * Button with fade-in entrance animation
 * 
 * @example
 * ```tsx
 * <FadeInButton 
 *   className="px-4 py-2 bg-blue-500 text-white rounded"
 *   delay={0.2}
 * >
 *   Fading Button
 * </FadeInButton>
 * ```
 */
export function FadeInButton({
  children,
  delay = 0,
  duration = 0.3,
  ...props
}: FadeInButtonProps) {
  return (
    <motion.button
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={createDelayedTransition(delay, duration)}
      {...props}
    >
      {children}
    </motion.button>
  )
}