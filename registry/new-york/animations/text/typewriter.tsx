"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface TextTypewriterProps extends Omit<HTMLMotionProps<"p">, "children"> {
  /**
   * The text content to animate
   */
  children: string
  /**
   * Delay before animation starts in seconds
   * @default 0
   */
  delay?: number
  /**
   * Speed of typing in characters per second
   * @default 30
   */
  speed?: number
  /**
   * Whether to show a blinking cursor
   * @default true
   */
  cursor?: boolean
  /**
   * Cursor character
   * @default "|"
   */
  cursorChar?: string
}

/**
 * A text component with a typewriter animation effect.
 * 
 * @example
 * ```tsx
 * <TextTypewriter>Hello World</TextTypewriter>
 * ```
 * 
 * @example
 * ```tsx
 * <TextTypewriter speed={50} cursor={false}>
 *   Fast typing without cursor
 * </TextTypewriter>
 * ```
 */
export function TextTypewriter({
  children,
  className,
  delay = 0,
  speed = 30,
  cursor = true,
  cursorChar = "|",
  ...props
}: TextTypewriterProps) {
  const [displayedText, setDisplayedText] = React.useState("")
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isComplete, setIsComplete] = React.useState(false)

  React.useEffect(() => {
    if (currentIndex === 0) {
      const startTimeout = setTimeout(() => {
        setCurrentIndex(1)
      }, delay * 1000)
      return () => clearTimeout(startTimeout)
    }

    if (currentIndex <= children.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(children.slice(0, currentIndex))
        setCurrentIndex(currentIndex + 1)
      }, 1000 / speed)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, children, delay, speed])

  return (
    <motion.p className={cn(className)} {...props}>
      {displayedText}
      {cursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block"
        >
          {cursorChar}
        </motion.span>
      )}
    </motion.p>
  )
}