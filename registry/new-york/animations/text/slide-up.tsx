"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface TextSlideUpProps extends Omit<HTMLMotionProps<"p">, "children"> {
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
  /**
   * Distance to slide from in pixels
   * @default 20
   */
  distance?: number
}

/**
 * A text component that slides up character by character or word by word.
 * 
 * @example
 * ```tsx
 * <TextSlideUp>Hello World</TextSlideUp>
 * ```
 * 
 * @example
 * ```tsx
 * <TextSlideUp by="character" distance={30}>
 *   Animated Text
 * </TextSlideUp>
 * ```
 */
export function TextSlideUp({
  children,
  className,
  duration = 0.5,
  delay = 0,
  by = "word",
  staggerDelay = 0.03,
  distance = 20,
  ...props
}: TextSlideUpProps) {
  const units = by === "word" ? children.split(" ") : children.split("")

  return (
    <motion.p className={cn(className)} {...props}>
      {units.map((unit, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: distance }}
          animate={{ opacity: 1, y: 0 }}
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