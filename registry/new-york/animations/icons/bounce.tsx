"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { bounceVariants } from "@/lib/animation-presets"
import { useState } from "react"

interface BounceIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode
  /**
   * When to trigger the bounce animation
   * @default "hover"
   */
  trigger?: "hover" | "tap" | "mount"
}

/**
 * One-shot bounce animation for icons triggered by interaction
 * 
 * @example
 * ```tsx
 * <BounceIcon trigger="hover">
 *   <Star className="w-6 h-6" />
 * </BounceIcon>
 * ```
 */
export function BounceIcon({
  children,
  trigger = "hover",
  ...props
}: BounceIconProps) {
  const [key, setKey] = useState(0)

  const handleTrigger = () => {
    setKey((prev) => prev + 1)
  }

  return (
    <motion.div
      key={key}
      variants={bounceVariants}
      initial="initial"
      animate={trigger === "mount" ? "animate" : undefined}
      whileHover={trigger === "hover" ? "animate" : undefined}
      whileTap={trigger === "tap" ? "animate" : undefined}
      onHoverStart={trigger === "hover" ? handleTrigger : undefined}
      onTap={trigger === "tap" ? handleTrigger : undefined}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}