"use client"

import * as motion from "framer-motion/client"
import type { HTMLMotionProps } from "framer-motion"
import { bounceContinuousVariants, createContinuousTransition } from "@/lib/animation-presets"

interface BounceContinuousProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode
  /**
   * Duration of one bounce cycle in seconds
   * @default 1
   */
  duration?: number
}

/**
 * Continuous bouncing animation for icons
 * 
 * @example
 * ```tsx
 * <BounceContinuous duration={1}>
 *   <ArrowDown className="w-6 h-6" />
 * </BounceContinuous>
 * ```
 */
export function BounceContinuous({
  children,
  duration = 1,
  ...props
}: BounceContinuousProps) {
  return (
    <motion.div
      variants={bounceContinuousVariants}
      initial="initial"
      animate="animate"
      transition={createContinuousTransition(duration, "easeInOut")}
      {...props}
    >
      {children}
    </motion.div>
  )
}