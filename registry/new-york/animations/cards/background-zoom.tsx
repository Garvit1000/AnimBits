"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
export interface CardBackgroundZoomProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  backgroundImage: string;
  children: React.ReactNode;
  scale?: number;
  duration?: number;
}
export function CardBackgroundZoom({
  backgroundImage,
  children,
  className,
  scale = 1.1,
  duration = 0.6,
  ...props
}: CardBackgroundZoomProps) {
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      whileHover="hover"
      initial="initial"
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        variants={{
          initial: { scale: 1 },
          hover: { scale },
        }}
        transition={{ duration, ease: "easeOut" }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
