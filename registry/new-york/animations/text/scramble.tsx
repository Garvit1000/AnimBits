"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScramble, type UseScrambleOptions } from "@/lib/hooks/use-scramble";
export interface TextScrambleProps
  extends Omit<HTMLMotionProps<"p">, "children">,
    UseScrambleOptions {
  children: string;
}
export function TextScramble({
  children,
  className,
  duration,
  delay,
  scrambleChars,
  ...props
}: TextScrambleProps) {
  const displayText = useScramble({
    text: children,
    duration,
    delay,
    scrambleChars,
  });
  return (
    <motion.p
      className={cn("font-mono", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: delay || 0 }}
      {...props}
    >
      {displayText}
    </motion.p>
  );
}
