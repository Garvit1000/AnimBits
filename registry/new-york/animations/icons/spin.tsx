"use client"

import { motion, type HTMLMotionProps } from "framer-motion"

interface SpinIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children: React.ReactNode
  /**
   * Duration of one rotation in seconds
   * @default 1
   */
  duration?: number
  /**
   * Direction of rotation
   * @default "clockwise"
   */
  direction?: "clockwise" | "counterclockwise"
}

/**
 * Continuous rotation animation for icons
 * 
 * @example
 * ```tsx
 * <SpinIcon duration={1} direction="clockwise">
 *   <Loader className="w-6 h-6" />
 * </SpinIcon>
 * ```
 */
export function SpinIcon({
  children,
  duration = 1,
  direction = "clockwise",
  ...props
}: SpinIconProps) {
  const rotation = direction === "clockwise" ? 360 : -360

  return (
    <motion.div
      animate={{ rotate: rotation }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}