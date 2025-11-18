"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export interface SlideInListProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /**
   * Array of items to render
   */
  children: React.ReactNode[]
  /**
   * Direction to slide from
   * @default "left"
   */
  direction?: "left" | "right" | "top" | "bottom"
  /**
   * Delay between each item in seconds
   * @default 0.1
   */
  staggerDelay?: number
  /**
   * Animation duration in seconds
   * @default 0.3
   */
  duration?: number
  /**
   * Distance to slide in pixels
   * @default 20
   */
  distance?: number
  /**
   * Container element type
   * @default "div"
   */
  as?: "div" | "ul" | "ol" | "section" | "article"
}

/**
 * List component with staggered slide-in animation
 * 
 * @example
 * ```tsx
 * <SlideInList direction="left" staggerDelay={0.1}>
 *   {items.map((item) => (
 *     <div key={item.id}>{item.name}</div>
 *   ))}
 * </SlideInList>
 * ```
 */
export function SlideInList({
  children,
  direction = "left",
  staggerDelay = 0.1,
  duration = 0.3,
  distance = 20,
  as: Component = "div",
  className,
  ...props
}: SlideInListProps) {
  const childrenArray = React.Children.toArray(children)

  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -distance, y: 0 }
      case "right":
        return { x: distance, y: 0 }
      case "top":
        return { x: 0, y: -distance }
      case "bottom":
        return { x: 0, y: distance }
    }
  }

  const MotionComponent = motion[Component as keyof typeof motion] as any

  return (
    <MotionComponent className={cn(className)} {...props}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ ...getInitialPosition(), opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
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
