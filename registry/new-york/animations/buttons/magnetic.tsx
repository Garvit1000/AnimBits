"use client";
import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { useMagnetic, type UseMagneticOptions } from "@/lib/use-magnetic";
interface MagneticButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref">,
    UseMagneticOptions {
  children: React.ReactNode;
}
export function MagneticButton({
  children,
  className,
  strength,
  stiffness,
  damping,
  ...props
}: MagneticButtonProps) {
  const { magneticProps, ref } = useMagnetic({ strength, stiffness, damping });
  return (
    <motion.button
      ref={ref as any}
      {...magneticProps}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
