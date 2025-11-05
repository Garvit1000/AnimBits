"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { pulseVariants, createContinuousTransition } from "@/lib/animation-presets"

interface PulseIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode
  /**
   * When to trigger the pulse animation
   * @default "always"
   */
  trigger?: "mount" | "hover" | "always"
  /**
   * Duration of one pulse cycle in seconds
   * @default 0.8
   */
  duration?: number
}

/**
 * Continuous pulsing animation for icons
 * 
 * @example
 * ```tsx
 * <PulseIcon trigger="always" duration={0.8}>
 *   <Heart className="w-6 h-6" />
 * </PulseIcon>
 * ```
 */
export function PulseIcon({
  children,
  trigger = "always",
  duration = 0.8,
  ...props
}: PulseIconProps) {
  const animate = trigger === "always" ? "animate" : undefined
  const whileHover = trigger === "hover" ? "animate" : undefined

  return (
    <motion.div
      variants={pulseVariants}
      initial="initial"
      animate={animate}
      whileHover={whileHover}
      transition={createContinuousTransition(duration, "easeInOut")}
      {...props}
    >
      {children}
    </motion.div>
  )
}