"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
export interface SlideInListProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode[];
  direction?: "left" | "right" | "top" | "bottom";
  staggerDelay?: number;
  duration?: number;
  distance?: number;
  as?: "div" | "ul" | "ol" | "section" | "article";
}
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
  const childrenArray = React.Children.toArray(children);
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -distance, y: 0 };
      case "right":
        return { x: distance, y: 0 };
      case "top":
        return { x: 0, y: -distance };
      case "bottom":
        return { x: 0, y: distance };
    }
  };
  const MotionComponent = motion[Component as keyof typeof motion] as any;
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
  );
}
