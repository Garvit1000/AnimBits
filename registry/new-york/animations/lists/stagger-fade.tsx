"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface StaggerFadeListProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /**
   * Array of items to render
   */
  children: React.ReactNode[]
  /**
   * Delay between each item in seconds
   * @default 0.1
   */
  staggerDelay?: number
  /**
   * Animation duration in seconds
   * @default 0.4
   */
  duration?: number
  /**
   * Initial opacity
   * @default 0
   */
  from?: number
  /**
   * Container element type
   * @default "div"
   */
  as?: "div" | "ul" | "ol" | "section" | "article"
}

/**
 * List component with staggered fade-in animation
 * 
 * @example
 * ```tsx
 * <StaggerFadeList staggerDelay={0.1} duration={0.4}>
 *   {items.map((item) => (
 *     <div key={item.id}>{item.name}</div>
 *   ))}
 * </StaggerFadeList>
 * ```
 */
export function StaggerFadeList({
  children,
  staggerDelay = 0.1,
  duration = 0.4,
  from = 0,
  as: Component = "div",
  className,
  ...props
}: StaggerFadeListProps) {
  const childrenArray = React.Children.toArray(children)

  const MotionComponent = motion[Component as keyof typeof motion] as any

  return (
    <MotionComponent className={cn(className)} {...props}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: from }}
          animate={{ opacity: 1 }}
          transition={{
            duration,
            delay: index * staggerDelay,
            ease: "easeOut",
          }}
        >
          {child}
        </motion.div>
      ))}
    </MotionComponent>
  )
}
