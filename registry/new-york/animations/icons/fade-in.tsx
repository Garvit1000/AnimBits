"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { fadeInVariants, createDelayedTransition } from "@/lib/animation-presets"

interface FadeInIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
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
 * Entrance animation with fade effect for icons
 * 
 * @example
 * ```tsx
 * <FadeInIcon delay={0.2} duration={0.3}>
 *   <Sparkles className="w-6 h-6" />
 * </FadeInIcon>
 * ```
 */
export function FadeInIcon({
  children,
  delay = 0,
  duration = 0.3,
  ...props
}: FadeInIconProps) {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={createDelayedTransition(delay, duration)}
      {...props}
    >
      {children}
    </motion.div>
  )
}