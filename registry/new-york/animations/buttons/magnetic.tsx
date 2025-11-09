"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { useMagnetic, type UseMagneticOptions } from "@/lib/hooks/use-magnetic"

interface MagneticButtonProps extends Omit<HTMLMotionProps<"button">, "ref">, UseMagneticOptions {
  children: React.ReactNode
}

/**
 * Button that attracts toward cursor on hover.
 * Built using the useMagnetic() primitive hook.
 * 
 * @example
 * ```tsx
 * <MagneticButton className="px-4 py-2 bg-blue-500 text-white rounded">
 *   Magnetic
 * </MagneticButton>
 * ```
 * 
 * @example
 * ```tsx
 * <MagneticButton strength={50}>
 *   Strong Pull
 * </MagneticButton>
 * ```
 * 
 * @example
 * ```tsx
 * // Use the hook directly for any element
 * import { useMagnetic } from "@/lib/hooks/use-magnetic"
 * const { magneticProps, ref } = useMagnetic()
 * <motion.div ref={ref} {...magneticProps}>Card</motion.div>
 * ```
 */
export function MagneticButton({
  children,
  className,
  strength,
  stiffness,
  damping,
  ...props
}: MagneticButtonProps) {
  const { magneticProps, ref } = useMagnetic({ strength, stiffness, damping })

  return (
    <motion.button
      ref={ref as any}
      {...magneticProps}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
