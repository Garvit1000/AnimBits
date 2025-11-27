"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { useHoverGlow } from "@/lib/use-hover-glow";
export interface CardHoverGlowProps extends HTMLMotionProps<"div"> {
  glowColor?: string;
  glowSpread?: number;
  duration?: number;
}
export function CardHoverGlow({
  children,
  className,
  glowColor = "rgba(59, 130, 246, 0.5)",
  glowSpread = 20,
  duration = 0.3,
  ...props
}: CardHoverGlowProps) {
  const glowProps = useHoverGlow({
    glowColor,
    glowBlur: glowSpread,
    duration,
  });
  return (
    <motion.div
      {...glowProps}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
