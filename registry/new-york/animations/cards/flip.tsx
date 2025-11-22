"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
export interface CardFlipProps extends HTMLMotionProps<"div"> {
  duration?: number;
  axis?: "x" | "y";
}
export function CardFlip({
  children,
  className,
  duration = 0.6,
  axis = "y",
  ...props
}: CardFlipProps) {
  return (
    <motion.div
      whileHover={{
        rotateY: axis === "y" ? 180 : 0,
        rotateX: axis === "x" ? 180 : 0,
      }}
      transition={{ duration }}
      style={{ transformStyle: "preserve-3d" }}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
