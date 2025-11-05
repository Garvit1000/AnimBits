"use client"

import { motion, type HTMLMotionProps } from "framer-motion"

interface LiftButtonProps extends Omit<HTMLMotionProps<"button">, "animate"> {
  children: React.ReactNode
  /**
   * Lift distance in pixels
   * @default 8
   */
  liftHeight?: number
  /**
   * Show shadow effect
   * @default true
   */
  shadow?: boolean
}

/**
 * Button that lifts up on hover
 * 
 * @example
 * ```tsx
 * <LiftButton 
 *   className="px-4 py-2 bg-blue-500 text-white rounded"
 *   liftHeight={8}
 * >
 *   Hover me
 * </LiftButton>
 * ```
 */
export function LiftButton({
  children,
  liftHeight = 8,
  shadow = true,
  ...props
}: LiftButtonProps) {
  return (
    <motion.button
      initial={{ 
        y: 0,
        boxShadow: shadow ? "0 0 0 rgba(0,0,0,0)" : undefined,
      }}
      whileHover={{
        y: -liftHeight,
        boxShadow: shadow ? "0 10px 30px rgba(0,0,0,0.15)" : undefined,
      }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}