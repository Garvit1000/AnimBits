"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
export interface StaggerFadeListProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode[];
  staggerDelay?: number;
  duration?: number;
  from?: number;
  as?: "div" | "ul" | "ol" | "section" | "article";
}
export function StaggerFadeList({
  children,
  staggerDelay = 0.1,
  duration = 0.4,
  from = 0,
  as: Component = "div",
  className,
  ...props
}: StaggerFadeListProps) {
  const childrenArray = React.Children.toArray(children);
  const MotionComponent = motion[Component as keyof typeof motion] as any;
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
  );
}
