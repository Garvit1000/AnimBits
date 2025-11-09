"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { useScramble, type UseScrambleOptions } from "@/lib/hooks/use-scramble"

export interface TextScrambleProps extends Omit<HTMLMotionProps<"p">, "children">, UseScrambleOptions {
  /**
   * The text content to animate
   */
  children: string
}

/**
 * A text component that decodes from random characters to the final text.
 * Built using the useScramble() primitive hook.
 * 
 * @example
 * ```tsx
 * <TextScramble>Decode Me</TextScramble>
 * ```
 * 
 * @example
 * ```tsx
 * <TextScramble duration={1.5} delay={0.5}>
 *   Hacker Text
 * </TextScramble>
 * ```
 * 
 * @example
 * ```tsx
 * // Use the hook directly for any element
 * import { useScramble } from "@/lib/hooks/use-scramble"
 * const text = useScramble({ text: "Hello" })
 * <h1 className="font-mono">{text}</h1>
 * ```
 */
export function TextScramble({
  children,
  className,
  duration,
  delay,
  scrambleChars,
  ...props
}: TextScrambleProps) {
  const displayText = useScramble({
    text: children,
    duration,
    delay,
    scrambleChars,
  })

  return (
    <motion.p
      className={cn("font-mono", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: delay || 0 }}
      {...props}
    >
      {displayText}
    </motion.p>
  )
}
