"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface TextFadeInProps extends Omit<HTMLMotionProps<"p">, "children"> {
  /**
   * The text content to animate
   */
  children: string
  /**
   * Animation duration in seconds
   * @default 0.5
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
   * @default 0.03
   */
  staggerDelay?: number
}

/**
 * A text component that fades in character by character or word by word.
 * 
 * @example
 * ```tsx
 * <TextFadeIn>Hello World</TextFadeIn>
 * ```
 * 
 * @example
 * ```tsx
 * <TextFadeIn by="character" staggerDelay={0.05}>
 *   Animated Text
 * </TextFadeIn>
 * ```
 */
export function TextFadeIn({
  children,
  className,
  duration = 0.5,
  delay = 0,
  by = "word",
  staggerDelay = 0.03,
  ...props
}: TextFadeInProps) {
  const units = by === "word" ? children.split(" ") : children.split("")

  return (
    <motion.p className={cn(className)} {...props}>
      {units.map((unit, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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