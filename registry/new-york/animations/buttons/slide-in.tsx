"use client";
import { motion, type HTMLMotionProps } from "motion/react";
import {
  slideInVariants,
  createDelayedTransition,
} from "@/lib/animation-presets";
interface SlideInButtonProps
  extends Omit<HTMLMotionProps<"button">, "animate"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "left" | "right" | "up" | "down";
}
export function SlideInButton({
  children,
  delay = 0,
  duration = 0.3,
  direction = "left",
  ...props
}: SlideInButtonProps) {
  const customVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
      y: direction === "up" ? -20 : direction === "down" ? 20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
  return (
    <motion.button
      variants={customVariants}
      initial="hidden"
      animate="visible"
      transition={createDelayedTransition(delay, duration)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
