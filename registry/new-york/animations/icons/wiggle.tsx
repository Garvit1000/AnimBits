"use client"

import * as motion from "framer-motion/client"
import type { HTMLMotionProps } from "framer-motion"
import { wiggleVariants } from "@/lib/animation-presets"
import { useState } from "react"

interface WiggleIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode
  /**
   * When to trigger the wiggle animation
   * @default "hover"
   */
  trigger?: "hover" | "tap" | "mount"
  /**
   * Wiggle intensity (rotation angle in degrees)
   * @default 10
   */
  intensity?: number
}

/**
 * One-shot wiggle animation (rotate left-right) for icons
 * 
 * @example
 * ```tsx
 * <WiggleIcon trigger="hover" intensity={10}>
 *   <Bell className="w-6 h-6" />
 * </WiggleIcon>
 * ```
 */
export function WiggleIcon({
  children,
  trigger = "hover",
  intensity = 10,
  ...props
}: WiggleIconProps) {
  const [key, setKey] = useState(0)

  const customVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, -intensity, intensity, -intensity, intensity, 0],
    },
  }

  const handleTrigger = () => {
    setKey((prev) => prev + 1)
  }

  return (
    <motion.div
      key={key}
      variants={customVariants}
      initial="initial"
      animate={trigger === "mount" ? "animate" : undefined}
      whileHover={trigger === "hover" ? "animate" : undefined}
      whileTap={trigger === "tap" ? "animate" : undefined}
      onTap={trigger === "tap" ? handleTrigger : undefined}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}