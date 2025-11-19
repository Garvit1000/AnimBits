"use client"

import * as motion from "framer-motion/client"
import type { HTMLMotionProps } from "framer-motion"
import { rotateVariants } from "@/lib/animation-presets"
import { useState } from "react"

interface RotateIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode
  /**
   * When to trigger the rotation animation
   * @default "hover"
   */
  trigger?: "hover" | "tap" | "mount"
  /**
   * Rotation direction
   * @default "clockwise"
   */
  direction?: "clockwise" | "counterclockwise"
}

/**
 * One-shot 360° rotation animation for icons
 * 
 * @example
 * ```tsx
 * <RotateIcon trigger="hover" direction="clockwise">
 *   <RefreshCw className="w-6 h-6" />
 * </RotateIcon>
 * ```
 */
export function RotateIcon({
  children,
  trigger = "hover",
  direction = "clockwise",
  ...props
}: RotateIconProps) {
  const [key, setKey] = useState(0)
  const rotation = direction === "clockwise" ? 360 : -360

  const customVariants = {
    initial: { rotate: 0 },
    animate: { rotate: rotation },
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