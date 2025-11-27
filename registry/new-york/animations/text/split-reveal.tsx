"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
export interface TextSplitRevealProps
  extends Omit<HTMLMotionProps<"p">, "children"> {
  children: string;
  duration?: number;
  delay?: number;
  staggerDelay?: number;
}
export function TextSplitReveal({
  children,
  className,
  duration = 0.6,
  delay = 0,
  staggerDelay = 0.1,
  ...props
}: TextSplitRevealProps) {
  const midpoint = Math.ceil(children.length / 2);
  const leftHalf = children.slice(0, midpoint);
  const rightHalf = children.slice(midpoint);
  return (
    <motion.p className={cn("overflow-hidden", className)} {...props}>
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 20, clipPath: "inset(0 100% 0 0)" }}
        animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
        transition={{
          duration,
          delay,
          ease: "easeOut",
        }}
      >
        {leftHalf}
      </motion.span>
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 20, clipPath: "inset(0 0 0 100%)" }}
        animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0%)" }}
        transition={{
          duration,
          delay: delay + staggerDelay,
          ease: "easeOut",
        }}
      >
        {rightHalf}
      </motion.span>
    </motion.p>
  );
}
