"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
export interface LoaderSpinnerProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  size?: number;
  color?: string;
  borderWidth?: number;
  duration?: number;
}
export function LoaderSpinner({
  className,
  size = 40,
  color = "currentColor",
  borderWidth = 4,
  duration = 1,
  ...props
}: LoaderSpinnerProps) {
  return (
    <motion.div
      className={cn("rounded-full", className)}
      style={{
        width: size,
        height: size,
        border: `${borderWidth}px solid transparent`,
        borderTopColor: color,
        borderRightColor: color,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
      }}
      {...props}
    />
  );
}
