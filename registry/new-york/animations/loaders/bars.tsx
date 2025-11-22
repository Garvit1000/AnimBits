"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
export interface LoaderBarsProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  barWidth?: number;
  barHeight?: number;
  color?: string;
  count?: number;
  gap?: number;
  duration?: number;
}
export function LoaderBars({
  className,
  barWidth = 4,
  barHeight = 30,
  color = "currentColor",
  count = 5,
  gap = 4,
  duration = 1,
  ...props
}: LoaderBarsProps) {
  return (
    <div className={cn("flex items-end", className)} style={{ gap }}>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          style={{
            width: barWidth,
            backgroundColor: color,
          }}
          animate={{
            height: [barHeight * 0.3, barHeight, barHeight * 0.3],
          }}
          transition={{
            duration,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index * (duration / count),
          }}
        />
      ))}
    </div>
  );
}
