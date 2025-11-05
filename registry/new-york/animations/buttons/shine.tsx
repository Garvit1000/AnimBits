"use client"

import { motion, type HTMLMotionProps } from "framer-motion"

interface ShineButtonProps extends Omit<HTMLMotionProps<"button">, "animate"> {
  children: React.ReactNode
  /**
   * Shine sweep direction
   * @default "right"
   */
  direction?: "left" | "right"
}

/**
 * Button with shine sweep effect on hover
 * 
 * @example
 * ```tsx
 * <ShineButton 
 *   className="px-4 py-2 bg-blue-500 text-white rounded overflow-hidden relative"
 *   direction="right"
 * >
 *   Hover me
 * </ShineButton>
 * ```
 */
export function ShineButton({
  children,
  direction = "right",
  ...props
}: ShineButtonProps) {
  return (
    <motion.button
      className="relative overflow-hidden"
      whileHover="hover"
      initial="initial"
      {...props}
    >
      {children}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
        variants={{
          initial: {
            x: direction === "right" ? "-100%" : "100%",
          },
          hover: {
            x: direction === "right" ? "100%" : "-100%",
          },
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.button>
  )
}