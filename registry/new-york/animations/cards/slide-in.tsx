"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { useSlideIn, type SlideDirection } from "@/lib/use-slide-in";
export interface CardSlideInProps extends HTMLMotionProps<"div"> {
  duration?: number;
  delay?: number;
  direction?: SlideDirection;
  distance?: number;
}
export function CardSlideIn({
  children,
  className,
  duration = 0.5,
  delay = 0,
  direction = "left",
  distance = 50,
  ...props
}: CardSlideInProps) {
  const slideProps = useSlideIn({
    direction,
    distance,
    duration,
    delay,
  });
  return (
    <motion.div {...slideProps} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
}
