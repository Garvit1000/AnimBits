"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { useScaleIn } from "@/lib/use-scale-in";
export interface CardScaleInProps extends HTMLMotionProps<"div"> {
  duration?: number;
  delay?: number;
  initialScale?: number;
}
export function CardScaleIn({
  children,
  className,
  duration = 0.5,
  delay = 0,
  initialScale = 0.8,
  ...props
}: CardScaleInProps) {
  const scaleProps = useScaleIn({
    duration,
    delay,
    from: initialScale,
  });
  return (
    <motion.div {...scaleProps} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
}
