"use client";
import * as React from "react";
import * as motion from "framer-motion/client";
import type { SVGMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
export interface MorphIconProps
  extends Omit<SVGMotionProps<SVGSVGElement>, "children"> {
  paths: string[];
  duration?: number;
  interval?: number;
  strokeColor?: string;
  strokeWidth?: number;
}
export function MorphIcon({
  paths,
  className,
  duration = 0.3,
  interval = 2,
  strokeColor = "currentColor",
  strokeWidth = 2,
  ...props
}: MorphIconProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % paths.length);
    }, interval * 1000);
    return () => clearInterval(timer);
  }, [paths.length, interval]);
  return (
    <motion.svg
      className={cn(className)}
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path
        d={paths[currentIndex]}
        animate={{ d: paths[currentIndex] }}
        transition={{ duration, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
