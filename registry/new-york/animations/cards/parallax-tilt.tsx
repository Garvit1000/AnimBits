"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import {
  useParallaxTilt,
  type UseParallaxTiltOptions,
} from "@/lib/use-parallax-tilt";
export interface CardParallaxTiltProps
  extends Omit<HTMLMotionProps<"div">, "ref">,
    UseParallaxTiltOptions {}
export function CardParallaxTilt({
  children,
  className,
  maxTilt,
  duration,
  shadowIntensity,
  stiffness,
  damping,
  ...props
}: CardParallaxTiltProps) {
  const { tiltProps, ref } = useParallaxTilt({
    maxTilt,
    duration,
    shadowIntensity,
    stiffness,
    damping,
  });
  return (
    <motion.div
      ref={ref as any}
      {...tiltProps}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
