"use client"

import * as motion from "framer-motion/client"
import type { HTMLMotionProps } from "framer-motion"
import { popVariants } from "@/lib/animation-presets"
import { useState } from "react"

interface PopIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode
  /**
   * When to trigger the pop animation
   * @default "mount"
   */
  trigger?: "hover" | "tap" | "mount"
}

/**
 * One-shot pop effect (scale from 0 to 1) for icons
 * 
 * @example
 * ```tsx
 * <PopIcon trigger="mount">
 *   <Star className="w-6 h-6" />
 * </PopIcon>
 * ```
 */
export function PopIcon({
  children,
  trigger = "mount",
  ...props
}: PopIconProps) {
  const [key, setKey] = useState(0)

  const handleTrigger = () => {
    setKey((prev) => prev + 1)
  }

  return (
    <motion.div
      key={key}
      variants={popVariants}
      initial="initial"
      animate={trigger === "mount" ? "animate" : undefined}
      whileHover={trigger === "hover" ? "animate" : undefined}
      whileTap={trigger === "tap" ? "animate" : undefined}
      onTap={trigger === "tap" ? handleTrigger : undefined}
      transition={{ duration: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}