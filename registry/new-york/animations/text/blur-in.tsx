"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface TextBlurInProps extends Omit<HTMLMotionProps<"p">, "children"> {
  /**
   * The text content to animate
   */
  children: string
  /**
   * Animation duration in seconds
   * @default 0.8
   */
  duration?: number
  /**
   * Delay before animation starts in seconds
   * @default 0
   */
  delay?: number
  /**
   * Whether to animate by character or word
   * @default "word"
   */
  by?: "character" | "word"
  /**
   * Stagger delay between each unit in seconds
   * @default 0.04
   */
  staggerDelay?: number
}

/**
 * A text component that blurs in character by character or word by word.
 * 
 * @example
 * ```tsx
 * <TextBlurIn>Hello World</TextBlurIn>
 * ```
 * 
 * @example
 * ```tsx
 * <TextBlurIn by="character" duration={1}>
 *   Blur Effect
 * </TextBlurIn>
 * ```
 */
export function TextBlurIn({
  children,
  className,
  duration = 0.8,
  delay = 0,
  by = "word",
  staggerDelay = 0.04,
  ...props
}: TextBlurInProps) {
  const units = by === "word" ? children.split(" ") : children.split("")

  return (
    <motion.p className={cn(className)} {...props}>
      {units.map((unit, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration,
            delay: delay + index * staggerDelay,
          }}
          style={{ display: "inline-block" }}
        >
          {unit}
          {by === "word" && index < units.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.p>
  )
}