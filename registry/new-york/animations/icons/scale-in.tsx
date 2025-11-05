"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { scaleInVariants, createDelayedTransition } from "@/lib/animation-presets"

interface ScaleInIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
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
   * Initial scale value
   * @default 0.9
   */
  from?: number
}

/**
 * Entrance animation with scale effect for icons
 * 
 * @example
 * ```tsx
 * <ScaleInIcon delay={0.1} duration={0.3} from={0.8}>
 *   <Zap className="w-6 h-6" />
 * </ScaleInIcon>
 * ```
 */
export function ScaleInIcon({
  children,
  delay = 0,
  duration = 0.3,
  from = 0.9,
  ...props
}: ScaleInIconProps) {
  const customVariants = {
    hidden: { opacity: 0, scale: from },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <motion.div
      variants={customVariants}
      initial="hidden"
      animate="visible"
      transition={createDelayedTransition(delay, duration)}
      {...props}
    >
      {children}
    </motion.div>
  )
}