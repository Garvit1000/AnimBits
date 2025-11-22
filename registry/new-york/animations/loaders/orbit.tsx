"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
export interface LoaderOrbitProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  size?: number;
  particleSize?: number;
  particleCount?: number;
  color?: string;
  duration?: number;
}
export function LoaderOrbit({
  className,
  size = 40,
  particleSize = 8,
  particleCount = 3,
  color = "currentColor",
  duration = 1.5,
  ...props
}: LoaderOrbitProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      style={{ width: size, height: size } as React.CSSProperties}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {Array.from({ length: particleCount }).map((_, index) => {
        const angle = (360 / particleCount) * index;
        const radius = size / 2 - particleSize;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        return (
          <div
            key={index}
            className="absolute rounded-full"
            style={
              {
                width: particleSize,
                height: particleSize,
                backgroundColor: color,
                left: "50%",
                top: "50%",
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              } as React.CSSProperties
            }
          />
        );
      })}
    </motion.div>
  );
}
