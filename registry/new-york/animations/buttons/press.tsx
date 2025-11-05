"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { pressVariants } from "@/lib/animation-presets"

interface PressButtonProps extends Omit<HTMLMotionProps<"button">, "animate"> {
  children: React.ReactNode
  /**
   * Scale factor when pressed
   * @default 0.95
   */
  scale?: number
}

/**
 * Button with press-down effect on tap
 * 
 * @example
 * ```tsx
 * <PressButton className="px-4 py-2 bg-blue-500 text-white rounded">
 *   Click me
 * </PressButton>
 * ```
 */
export function PressButton({
  children,
  scale = 0.95,
  ...props
}: PressButtonProps) {
  const customVariants = {
    initial: { scale: 1 },
    tap: { scale },
  }

  return (
    <motion.button
      variants={customVariants}
      initial="initial"
      whileTap="tap"
      transition={{ duration: 0.1 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}