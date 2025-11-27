"use client";
import * as React from "react";
import * as motion from "framer-motion/client";
import type { HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
export interface CardGrayscaleProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  duration?: number;
}
export function CardGrayscale({
  children,
  className,
  duration = 0.5,
  ...props
}: CardGrayscaleProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
      }}
      transition={{ duration }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
