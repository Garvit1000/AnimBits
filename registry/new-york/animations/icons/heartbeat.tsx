"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { heartbeatVariants } from "@/lib/animation-presets"

interface HeartbeatIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode
  /**
   * Beats per minute
   * @default 60
   */
  bpm?: number
}

/**
 * Continuous heartbeat rhythm animation for icons
 * 
 * @example
 * ```tsx
 * <HeartbeatIcon bpm={60}>
 *   <Heart className="w-6 h-6 text-red-500" />
 * </HeartbeatIcon>
 * ```
 */
export function HeartbeatIcon({
  children,
  bpm = 60,
  ...props
}: HeartbeatIconProps) {
  // Convert BPM to duration (one complete heartbeat cycle)
  const duration = 60 / bpm

  return (
    <motion.div
      variants={heartbeatVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}