"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
export interface LoaderSkeletonProps extends HTMLMotionProps<"div"> {
  width?: string | number;
  height?: number;
  borderRadius?: number;
  baseColor?: string;
  highlightColor?: string;
  duration?: number;
}
export function LoaderSkeleton({
  className,
  width = "100%",
  height = 20,
  borderRadius = 4,
  baseColor,
  highlightColor,
  duration = 1.5,
  ...props
}: LoaderSkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-zinc-200 dark:bg-zinc-800",
        className
      )}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        ...(baseColor && { backgroundColor: baseColor }),
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent, ${highlightColor || "rgba(255, 255, 255, 0.3)"
            }, transparent)`,
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
